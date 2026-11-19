import React, { useState } from 'react';
import { MENTOR_SLOTS, GALLERY_SLOTS } from '../data/academyData';

export default function MentorsAndGallery() {
  const [activeTab, setActiveTab] = useState('gallery');

  return (
    <section id="mentors" className="py-20 bg-white border-b border-[#E8E2D8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-2">
              <span className="w-6 h-px bg-[#B85D36]" />
              <span className="text-xs font-mono font-semibold uppercase tracking-[0.16em] text-[#6E685F]">
                Faculty &amp; Cohort Experience
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1A18]">
              Executive Mentors &amp; Workshops
            </h2>
            <p className="mt-3 text-base text-[#4A453D]">
              Engage directly with industry practice leaders and view cohort sessions, breakout exercises, and executive debriefs.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex items-center bg-[#FAF8F5] p-1 border border-[#D8D2C6] rounded self-start md:self-auto text-xs">
            <button
              onClick={() => setActiveTab('gallery')}
              className={`px-5 py-2 font-semibold transition-all uppercase tracking-wider rounded ${
                activeTab === 'gallery'
                  ? 'bg-[#1C1A18] text-white'
                  : 'text-[#6E685F] hover:text-[#1C1A18]'
              }`}
            >
              Workshop Gallery
            </button>
            <button
              onClick={() => setActiveTab('mentors')}
              className={`px-5 py-2 font-semibold transition-all uppercase tracking-wider rounded ${
                activeTab === 'mentors'
                  ? 'bg-[#1C1A18] text-white'
                  : 'text-[#6E685F] hover:text-[#1C1A18]'
              }`}
            >
              Mentoring Focus Areas
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === 'gallery' ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {GALLERY_SLOTS.map((item) => (
              <div
                key={item.id}
                className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg overflow-hidden flex flex-col group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/student-workshop.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1A18] text-white text-[10px] font-mono px-2.5 py-1 rounded">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-base text-[#1C1A18] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#4A453D] leading-relaxed">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MENTOR_SLOTS.map((mentor) => (
              <div
                key={mentor.id}
                className="bg-[#FAF8F5] border border-[#E8E2D8] rounded-lg overflow-hidden flex flex-col justify-between group"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-black/10">
                  <img
                    src={mentor.imageSrc}
                    alt={mentor.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = '/images/classroom-learning.jpg';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-[#1C1A18] text-white text-[10px] font-mono px-2.5 py-1 rounded">
                    {mentor.slotLabel}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-lg text-[#1C1A18] mb-1 group-hover:text-[#B85D36] transition-colors">
                      {mentor.roleTitle}
                    </h3>
                    <p className="text-xs font-semibold text-[#B85D36] mb-3">
                      Focus: {mentor.focusArea}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#E8E2D8] flex items-center justify-between text-xs text-[#6E685F]">
                    <span>Practitioner Mentorship</span>
                    <span>{mentor.statusNote}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
