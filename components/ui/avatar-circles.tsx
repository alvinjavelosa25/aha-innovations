"use client"

import React from "react"

import { cn } from "@/lib/utils"

interface AvatarCirclesProps {
  className?: string
  numPeople?: number
  avatarUrls: string[]
}

const AvatarCircles = ({
  numPeople,
  className,
  avatarUrls,
}: AvatarCirclesProps) => {
  return (
    <div className={cn("relative z-10 flex flex-col items-center", className)}>
      {/* Avatars row with PNG laurel wreaths */}
      <div className="flex items-center">
        {/* Left laurel PNG */}
        <img 
          src="/left.png" 
          alt="Left laurel wreath" 
          className="h-12 w-auto mr-4 drop-shadow-[0_0_6px_rgba(255,200,64,0.25)]"
        />
        
        <div className="flex -space-x-3 rtl:space-x-reverse">
          {avatarUrls.map((url, index) => (
            <img
              key={index}
              className="h-10 w-10 rounded-full border border-white/60 grayscale contrast-125 brightness-95 shadow-[0_0_0_1px_rgba(0,0,0,0.35)]"
              src={url}
              width={40}
              height={40}
              alt={`Avatar ${index + 1}`}
            />
          ))}
        </div>
        
        {/* Right laurel PNG */}
        <img 
          src="/right.png" 
          alt="Right laurel wreath" 
          className="h-12 w-auto ml-4 drop-shadow-[0_0_6px_rgba(255,200,64,0.25)]"
        />
      </div>

      {/* Star ratings below */}
      <div className="mt-3 flex items-center gap-3">
        <div className="flex items-center gap-1 text-yellow-400">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0l-2.802 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-white/60 text-lg">|</span>
        <span className="text-white/70 text-base font-medium">Ratings</span>
      </div>
    </div>
  )
}

export { AvatarCircles }
