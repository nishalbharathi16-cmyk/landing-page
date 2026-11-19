import React, { useState } from 'react';

export function AcademyImage({
  src,
  alt,
  slotTitle,
  aspectClassName = 'aspect-[4/3]',
  objectPositionClassName = 'object-[center_25%]',
  className = '',
  priority = false,
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-[#EEF4F1] border border-[#D6E2DC] ${aspectClassName} ${className}`}
    >
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="eager"
          fetchPriority={priority ? 'high' : 'low'}
          decoding="async"
          onError={() => setHasError(true)}
          className={`h-full w-full object-cover ${objectPositionClassName} transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className="relative flex h-full w-full items-center justify-center bg-[#EDE6D6] p-6 text-center text-[#20201E]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-4 border border-[#78806D]/25"
          />
          <p className="relative z-10 font-serif text-lg font-medium text-[#3D3D39]">
            {slotTitle}
          </p>
        </div>
      )}
    </div>
  );
}
