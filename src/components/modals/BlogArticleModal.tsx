import React from 'react';
import { X, Calendar, Clock, ArrowLeft, Bookmark, Share2 } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogArticleModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

export const BlogArticleModal: React.FC<BlogArticleModalProps> = ({ post, onClose }) => {
  if (!post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-3xl rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-10 text-zinc-100 shadow-2xl my-8 max-h-[90vh] overflow-y-auto light:bg-white light:border-zinc-300 light:text-slate-900">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all light:bg-slate-100 light:border-zinc-300 light:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3 text-xs">
            <span className="px-3 py-1 rounded-full font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20">
              {post.category}
            </span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> {post.date}
            </span>
            <span className="text-zinc-400 flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> {post.readTime}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight light:text-slate-900">
            {post.title}
          </h1>

          <div className="flex items-center gap-3 pt-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-10 h-10 rounded-full object-cover border border-zinc-800"
            />
            <div>
              <div className="text-sm font-semibold text-white light:text-slate-900">{post.author.name}</div>
              <div className="text-xs text-zinc-400 light:text-slate-500">{post.author.role}</div>
            </div>
          </div>
        </div>

        <div className="relative rounded-xl overflow-hidden border border-zinc-800 mb-8 aspect-video light:border-zinc-300">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-invert max-w-none text-zinc-300 space-y-4 text-sm sm:text-base leading-relaxed light:text-slate-700">
          <p className="font-medium text-lg text-zinc-200 light:text-slate-800 leading-normal">
            {post.excerpt}
          </p>
          <p>{post.content}</p>
          <p>
            At Deep Learners , we enforce sub-second time-to-first-byte (TTFB) and zero layout shifts (CLS) across every web application we build. Leveraging modular component architectures, React 19 server transitions, and edge CDN deployments ensures your users experience zero lag regardless of global geographic location.
          </p>
          <p>
            Ready to elevate your engineering standards? Schedule a free consultation with our architecture team today.
          </p>
        </div>

        <div className="pt-6 mt-8 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-400 light:border-zinc-200">
          <span>Published by Deep Learners Web Studio Engineering Insights</span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white hover:bg-zinc-800 flex items-center gap-1.5 cursor-pointer light:bg-slate-100 light:border-zinc-300 light:text-slate-800"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Articles
          </button>
        </div>
      </div>
    </div>
  );
};
