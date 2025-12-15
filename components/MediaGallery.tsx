"use client"

import { useState } from "react"
import Image from "next/image"
import { propertyMedia, propertyDetails } from "@/lib/propertyData"
import { ChevronLeft, ChevronRight, X, Play, Pause, Volume2, VolumeX } from "lucide-react"

export default function MediaGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [videoPlaying, setVideoPlaying] = useState(true)
  const [videoMuted, setVideoMuted] = useState(true)
  const images = propertyMedia.gallery
  const hasVideo = !!propertyMedia.videoUrl

  const handleVideoToggle = (video: HTMLVideoElement) => {
    if (videoPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setVideoPlaying(!videoPlaying)
  }

  return (
    <section id="photos" className="py-12 sm:py-20 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-800 mb-2">Take a Look Inside</h2>
          <p className="text-sm sm:text-base text-slate-500">Explore every corner of this beautiful property</p>
        </div>

        {hasVideo && (
          <div id="video" className="mb-6 sm:mb-8">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 group">
              <video
                id="property-video"
                src={propertyMedia.videoUrl}
                autoPlay
                loop
                muted={videoMuted}
                playsInline
                preload="metadata"
                className="w-full aspect-video object-cover"
              />

              {/* Video controls overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/50 to-transparent opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <button
                      onClick={() => {
                        const video = document.getElementById("property-video") as HTMLVideoElement
                        handleVideoToggle(video)
                      }}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={videoPlaying ? "Pause video" : "Play video"}
                    >
                      {videoPlaying ? (
                        <Pause className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      ) : (
                        <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white ml-0.5" />
                      )}
                    </button>
                    <button
                      onClick={() => setVideoMuted(!videoMuted)}
                      className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
                      aria-label={videoMuted ? "Unmute video" : "Mute video"}
                    >
                      {videoMuted ? (
                        <VolumeX className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      ) : (
                        <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                      )}
                    </button>
                  </div>
                  <span className="text-white/80 text-xs sm:text-sm font-medium">Aerial Tour</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Photo grid - mobile optimized */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3">
          {images.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                index === 0 && images.length > 1 ? "col-span-2 row-span-2 aspect-square" : "aspect-[4/3]"
              } ${images.length === 1 ? "col-span-2 lg:col-span-4 aspect-video" : ""}`}
              aria-label={`View photo ${index + 1} of ${images.length}`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${propertyDetails.address} - Photo ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                loading={index < 4 ? "eager" : "lazy"}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
          >
            <button
              className="absolute top-4 sm:top-6 right-4 sm:right-6 p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
              onClick={() => setSelectedImage(null)}
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5 text-slate-600" />
            </button>
            {images.length > 1 && (
              <button
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) => (prev! - 1 + images.length) % images.length)
                }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 text-slate-600" />
              </button>
            )}
            <div className="relative max-h-[80vh] max-w-[85vw] w-full h-full">
              <Image
                src={images[selectedImage] || "/placeholder.svg"}
                alt={`${propertyDetails.address} - Photo ${selectedImage + 1}`}
                fill
                className="object-contain rounded-xl sm:rounded-2xl"
                sizes="85vw"
                priority
              />
            </div>
            {images.length > 1 && (
              <button
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors"
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage((prev) => (prev! + 1) % images.length)
                }}
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 text-slate-600" />
              </button>
            )}
            {images.length > 1 && (
              <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => {
                      e.stopPropagation()
                      setSelectedImage(i)
                    }}
                    className={`w-2 h-2 rounded-full transition-colors ${i === selectedImage ? "bg-slate-800" : "bg-slate-300"}`}
                    aria-label={`View image ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
