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
      className={`group relative overflow-hidden rounded-2xl border border-white/15 bg-[#161614] shadow-[0_20px_50px_rgba(0,0,0,0.65)] hover:border-white/25 transition-colors duration-300 ${className}`}
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
            className="absolute inset-0 flex cursor-pointer flex-col justify-between bg-gradient-to-t from-black/95 via-black/40 to-black/30 p-6 sm:p-8 transition-all hover:bg-black/30"
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
              <span className="inline-flex items-center gap-2 border border-white/20 bg-black/80 px-3 py-1.5 text-[11px] font-mono font-bold uppercase tracking-[0.16em] text-[#F6F2E9] rounded-full backdrop-blur-md shadow-md">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C87549]" />
                <span>{badge}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 bg-black/60 px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                <Volume2 className="h-3.5 w-3.5 text-[#D4AF37]" />
                <span>Audio Enabled</span>
              </span>
            </div>

            {/* Custom Dark-Gold Play Button */}
            <div className="flex items-center justify-center">
              <span className="relative flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] via-[#C87549] to-[#8C3A16] text-white shadow-[0_0_40px_rgba(212,175,55,0.45)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_55px_rgba(212,175,55,0.65)] active:scale-95 border-2 border-[#F6F2E9]/60">
                <Play className="ml-1 h-8 w-8 fill-current sm:h-9 sm:w-9" aria-hidden="true" />
              </span>
            </div>

            {/* Bottom Caption */}
            <div>
              <p className="font-serif text-xl font-bold text-white sm:text-2xl drop-shadow-md">
                {title}
              </p>
              {subtitle && (
                <p className="mt-1.5 text-xs sm:text-sm text-zinc-200 font-sans leading-relaxed">
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
