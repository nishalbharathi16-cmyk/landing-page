import React, { useRef, useState } from 'react';
import { Play, Volume2 } from 'lucide-react';

export function AcademyVideoPlayer({
  src,
  posterSrc = '/images/classroom-learning.jpg',
  title,
  subtitle,
  badge = 'Live Academy Session',
  aspectClassName = 'aspect-video',
  className = '',
}) {
  const videoRef = useRef(null);
  const [hasStarted, setHasStarted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current
        .play()
        .then(() => {
          setHasStarted(true);
        })
        .catch(() => {
          if (videoRef.current) {
            videoRef.current.muted = true;
            videoRef.current.play();
            setHasStarted(true);
          }
        });
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-[#D6E2DC] bg-[#EEF4F1] shadow-md transition-colors duration-300 ${className}`}
    >
      <div className={`relative w-full ${aspectClassName}`}>
        <video
          ref={videoRef}
          src={src}
          poster={posterSrc}
          controls={hasStarted}
          playsInline
          preload="metadata"
          className="h-full w-full object-cover"
        />

        {/* Custom Executive Overlay before playback */}
        {!hasStarted && (
          <div
            onClick={togglePlay}
            className="absolute inset-0 flex cursor-pointer flex-col justify-between bg-gradient-to-t from-black/85 via-black/35 to-black/30 p-6 sm:p-8 transition-all hover:bg-black/25"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                togglePlay();
              }
            }}
            aria-label={`Play video: ${title}`}
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 border border-white/20 bg-black/75 px-3 py-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.14em] text-[#F5F1E8] rounded-full backdrop-blur-md shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C5A46D]" />
                <span>{badge}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-sans text-white/90 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                <Volume2 className="h-3.5 w-3.5 text-[#C5A46D]" />
                <span>Audio Enabled</span>
              </span>
            </div>

            {/* Custom Oxford Pine & Brass Play Button */}
            <div className="flex items-center justify-center">
              <span className="relative flex h-16 w-16 sm:h-18 sm:w-18 items-center justify-center rounded-full bg-[#0D281E] hover:bg-[#163E30] text-white shadow-[0_4px_25px_rgba(13,40,30,0.5)] transition-all duration-300 group-hover:scale-110 active:scale-95 border-2 border-[#C28E3A]">
                <Play className="ml-1 h-7 w-7 fill-current sm:h-8 sm:w-8 text-[#C28E3A]" aria-hidden="true" />
              </span>
            </div>

            {/* Bottom Caption */}
            <div>
              <p className="font-serif text-xl font-bold text-white sm:text-2xl drop-shadow-sm">
                {title}
              </p>
              {subtitle && (
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-100 font-sans leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
