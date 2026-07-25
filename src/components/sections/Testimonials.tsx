import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { testimonialsData } from '../../data/agencyData';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 relative bg-zinc-950/80 border-t border-zinc-900 light:bg-slate-50 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold uppercase tracking-wider">
            Client Testimonials
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Trusted by Industry Innovators
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            See what founders, CTOs, and product directors say about working with Nexus Web Studio.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-6 hover:border-zinc-700 transition-all shadow-xl light:bg-white light:border-zinc-200"
            >
              {/* Rating stars & Quote Icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-zinc-700 light:text-slate-300" />
              </div>

              {/* Quote text */}
              <p className="text-base text-zinc-300 leading-relaxed italic light:text-slate-700">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 light:border-zinc-200">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border border-zinc-800"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-white light:text-slate-900">{testimonial.name}</h4>
                    <p className="text-xs text-zinc-400 light:text-slate-500">
                      {testimonial.role}, <strong className="text-zinc-200 light:text-slate-800">{testimonial.company}</strong>
                    </p>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full text-[10px] font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {testimonial.projectType}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
