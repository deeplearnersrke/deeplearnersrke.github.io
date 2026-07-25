import React, { useState } from 'react';
import { X, ShoppingBag, CheckCircle2, ShieldCheck, Zap, ArrowRight, DollarSign } from 'lucide-react';
import { ReadyProject } from '../../types';

interface BuyProjectModalProps {
  project: ReadyProject | null;
  onClose: () => void;
}

export const BuyProjectModal: React.FC<BuyProjectModalProps> = ({ project, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [customizationNotes, setCustomizationNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!project) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 text-zinc-100 shadow-2xl my-8 light:bg-white light:border-zinc-300 light:text-slate-900">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all light:bg-slate-100 light:border-zinc-300 light:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-2">
              <ShoppingBag className="w-4 h-4 text-emerald-400" />
              <span>Instant Ownership Purchase</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-white light:text-slate-900">
              Acquire {project.name}
            </h2>

            <div className="flex items-center gap-3 my-4 p-4 rounded-xl bg-zinc-900/80 border border-zinc-800 light:bg-slate-100 light:border-zinc-200">
              <img
                src={project.image}
                alt={project.name}
                className="w-16 h-16 rounded-lg object-cover border border-zinc-800"
              />
              <div className="flex-1">
                <div className="text-xs text-zinc-400 light:text-slate-500">{project.type}</div>
                <div className="text-sm font-bold text-white light:text-slate-900">{project.name}</div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xl font-extrabold text-blue-400">₹{project.price.toLocaleString('en-IN')}</span>
                  <span className="text-xs text-zinc-500 line-through">₹{project.originalPrice.toLocaleString('en-IN')}</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-semibold">
                    Save ₹{(project.originalPrice - project.price).toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>

            {/* Customization Included List */}
            <div className="mb-6 space-y-2">
              <h4 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider light:text-slate-700">
                ⚡ Included Free Customization Before Delivery:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {project.customizationIncluded.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-zinc-900/60 border border-zinc-800/60 light:bg-slate-50 light:border-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1 light:text-slate-700">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. David Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1 light:text-slate-700">Your Email Address *</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="david@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1 light:text-slate-700">
                  Customization Requests / Brand Colors / Logo Notes
                </label>
                <textarea
                  rows={2}
                  value={customizationNotes}
                  onChange={(e) => setCustomizationNotes(e.target.value)}
                  placeholder="Mention your brand colors, primary logo link, or custom features required before handoff..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                />
              </div>

              <div className="pt-3 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-zinc-400">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Code Ownership • 48h Delivery</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/25 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing Order...</span>
                  ) : (
                    <>
                      <span>Proceed to Acquisition (₹{project.price.toLocaleString('en-IN')})</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4 animate-in zoom-in-95 duration-200">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold text-white light:text-slate-900">
              Project Reserved Successfully!
            </h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto light:text-slate-600">
              Congratulations <strong className="text-zinc-200 light:text-slate-800">{name}</strong>! We have reserved <strong className="text-zinc-200 light:text-slate-800">{project.name}</strong> for you. An invoice and onboarding questionnaire have been sent to <strong className="text-zinc-200 light:text-slate-800">{email}</strong>.
            </p>
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 max-w-md mx-auto light:bg-slate-100 light:border-zinc-200">
              ⚡ Our deployment team will contact you within 2 hours to begin logo and custom branding integration!
            </div>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 text-sm font-semibold cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
