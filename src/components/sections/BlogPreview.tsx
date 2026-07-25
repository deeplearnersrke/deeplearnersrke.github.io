import React from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPostsData } from '../../data/agencyData';
import { BlogPost } from '../../types';

interface BlogPreviewProps {
  onOpenArticle: (post: BlogPost) => void;
}

export const BlogPreview: React.FC<BlogPreviewProps> = ({ onOpenArticle }) => {
  return (
    <section id="blog" className="py-24 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
            Engineering Insights
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Latest Articles & Tech Guides
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            Deep dives into web performance, modern React patterns, design systems, and software scalability.
          </p>
        </div>

        {/* Blog Cards Grid (3 items) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPostsData.map((post) => (
            <div
              key={post.id}
              className="group rounded-2xl bg-zinc-900/80 border border-zinc-800 overflow-hidden flex flex-col justify-between hover:border-zinc-700 transition-all duration-300 shadow-xl light:bg-white light:border-zinc-200"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-zinc-950">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/70 backdrop-blur-md text-violet-400 border border-white/10">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-xs text-zinc-400 light:text-slate-500">
                    <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2 light:text-slate-900">
                    {post.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-400 line-clamp-2 leading-relaxed light:text-slate-600">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex items-center gap-2.5 pt-3 border-t border-zinc-800/80 light:border-zinc-200">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-7 h-7 rounded-full object-cover border border-zinc-800"
                  />
                  <span className="text-xs font-semibold text-zinc-300 light:text-slate-800">{post.author.name}</span>
                </div>

                <button
                  onClick={() => onOpenArticle(post)}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-zinc-300 bg-zinc-950 border border-zinc-800 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all flex items-center justify-center gap-1.5 cursor-pointer light:bg-slate-100 light:border-zinc-300 light:text-slate-800"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
