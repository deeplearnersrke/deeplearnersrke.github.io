import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2, Send, Clock, DollarSign, ShieldCheck } from 'lucide-react';
import { QuoteFormData } from '../../types';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectType?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProjectType = 'SaaS Platform'
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: initialProjectType,
    budget: '₹10,000 - ₹25,000',
    servicesNeeded: ['Custom Web Development', 'UI/UX Design'],
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    'Business Website',
    'SaaS Application',
    'Admin Dashboard',
    'E-commerce Store',
    'Ready Project Customization',
    'API & Backend Integration',
    'Website Redesign'
  ];

  const availableServices = [
    'Custom Web Development',
    'UI/UX Figma Design',
    'SEO & Core Web Vitals',
    'Stripe Payment Gateway',
    'Database & Cloud Infrastructure',
    'Maintenance SLA Plan'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.servicesNeeded.includes(service);
      if (exists) {
        return { ...prev, servicesNeeded: prev.servicesNeeded.filter((s) => s !== service) };
      } else {
        return { ...prev, servicesNeeded: [...prev.servicesNeeded, service] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto">
      <div className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-zinc-800 p-6 sm:p-8 text-zinc-100 shadow-2xl my-8 light:bg-white light:border-zinc-300 light:text-slate-900">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all light:bg-slate-100 light:border-zinc-300 light:text-slate-600"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-blue-400 uppercase tracking-widest mb-2">
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span>Free Quote & Scope Proposal</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white light:text-slate-900">
              Start Your Digital Project
            </h2>
            <p className="text-sm text-zinc-400 mt-1 mb-6 light:text-slate-600">
              Fill out your project details below and receive a tailored scope & estimate within 4 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Marcus Vance"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">
                    Project Type
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-zinc-900 text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">
                    Target Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                  >
                    <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Starter Package)</option>
                    <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Business Pro)</option>
                    <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 (Enterprise Custom)</option>
                    <option value="₹1,00,000+">₹1,00,000+ (Full Custom Suite)</option>
                  </select>
                </div>
              </div>

              {/* Services needed checkboxes */}
              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-2 light:text-slate-700">
                  Services Needed
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {availableServices.map((service) => {
                    const isSelected = formData.servicesNeeded.includes(service);
                    return (
                      <button
                        key={service}
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`p-2 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-blue-600/20 text-blue-400 border-blue-500/40'
                            : 'bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-zinc-200 light:bg-slate-100 light:border-zinc-300 light:text-slate-700'
                        }`}
                      >
                        {service}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">
                  Project Details / Goals
                </label>
                <textarea
                  rows={3}
                  value={formData.details}
                  onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                  placeholder="Describe your vision, key features required, or target launch date..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <div className="flex items-center gap-4 text-xs text-zinc-400">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-400" /> 4h Response</span>
                  <span className="flex items-center gap-1"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> NDA Included</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-lg shadow-blue-500/25 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Processing...</span>
                  ) : (
                    <>
                      <span>Submit Request</span>
                      <Send className="w-4 h-4" />
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
              Quote Request Received!
            </h3>
            <p className="text-sm text-zinc-400 max-w-md mx-auto light:text-slate-600">
              Thank you, <strong className="text-zinc-200 light:text-slate-800">{formData.name}</strong>. Our senior lead architect is reviewing your details and will send a detailed scope proposal to <strong className="text-zinc-200 light:text-slate-800">{formData.email}</strong> within 4 hours.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-xl bg-zinc-800 text-white hover:bg-zinc-700 text-sm font-semibold cursor-pointer"
              >
                Return to Site
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
