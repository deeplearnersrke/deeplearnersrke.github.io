import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles, Github, Twitter, Linkedin, Dribbble, Disc as Discord } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    budget: '₹10,000 - ₹25,000',
    services: ['Custom Web App', 'UI/UX Design'],
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const availableServices = [
    'Custom Web App',
    'SaaS Platform',
    'Ready Project Customization',
    'UI/UX Design',
    'SEO & Speed Boost',
    'E-commerce Store'
  ];

  const handleServiceToggle = (service: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(service);
      return {
        ...prev,
        services: exists
          ? prev.services.filter((s) => s !== service)
          : [...prev.services, service]
      };
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
    <section id="contact" className="py-24 relative bg-zinc-950/80 border-t border-zinc-900 light:bg-slate-50 light:border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-semibold uppercase tracking-wider">
            Contact Us
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight light:text-slate-900">
            Let's Build Something Exceptional
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 light:text-slate-600">
            Have a project in mind, need a custom quote, or want to purchase a ready project? Drop us a line below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 space-y-6 shadow-xl light:bg-white light:border-zinc-200">
              
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Accepting New Projects for Q3</span>
              </div>

              <h3 className="text-2xl font-bold text-white light:text-slate-900">
                Direct Communication
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed light:text-slate-600">
                Our engineering team responds within 4 business hours. You will speak directly with senior full-stack architects.
              </p>

              {/* Info Items */}
              <div className="space-y-4 pt-2">
                <a
                  href="mailto:hello@nexusweb.agency"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-blue-500/40 text-zinc-300 hover:text-white transition-all light:bg-slate-100 light:border-zinc-200 light:text-slate-800"
                >
                  <div className="w-10 h-10 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Email Us</div>
                    <div className="text-sm font-bold">hello@nexusweb.agency</div>
                  </div>
                </a>

                <a
                  href="tel:+15552348900"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-blue-500/40 text-zinc-300 hover:text-white transition-all light:bg-slate-100 light:border-zinc-200 light:text-slate-800"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Call Direct</div>
                    <div className="text-sm font-bold">+1 (555) 234-8900</div>
                  </div>
                </a>

                <a
                  href="https://wa.me/15552348900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 hover:border-emerald-500/40 text-zinc-300 hover:text-white transition-all light:bg-slate-100 light:border-zinc-200 light:text-slate-800"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">WhatsApp Business</div>
                    <div className="text-sm font-bold">+1 (555) 234-8900</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-xl bg-zinc-950/80 border border-zinc-800/80 text-zinc-300 light:bg-slate-100 light:border-zinc-200 light:text-slate-800">
                  <div className="w-10 h-10 rounded-lg bg-violet-500/10 text-violet-400 flex items-center justify-center">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-zinc-500 uppercase font-semibold">Global Studios</div>
                    <div className="text-sm font-bold">San Francisco, CA & London, UK</div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-zinc-800/80 light:border-zinc-200">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-3 light:text-slate-500">
                  Follow Our Engineering
                </div>
                <div className="flex items-center gap-2">
                  {[
                    { icon: Github, label: 'GitHub', href: 'https://github.com' },
                    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
                    { icon: Dribbble, label: 'Dribbble', href: 'https://dribbble.com' },
                    { icon: Discord, label: 'Discord', href: 'https://discord.com' }
                  ].map((soc, idx) => {
                    const Icon = soc.icon;
                    return (
                      <a
                        key={idx}
                        href={soc.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-all light:bg-slate-100 light:border-zinc-300 light:text-slate-700"
                        title={soc.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column Contact & Estimation Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-2xl bg-zinc-900/80 border border-zinc-800 shadow-xl light:bg-white light:border-zinc-200">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1 light:text-slate-900">Project Estimation Form</h3>
                    <p className="text-xs text-zinc-400 light:text-slate-600">Tell us about your objectives and technical requirements.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Marcus Vance"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">Work Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="marcus@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">Phone Number (Optional)</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">Estimated Budget</label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                      >
                        <option value="₹10,000 - ₹25,000">₹10,000 - ₹25,000 (Starter Package)</option>
                        <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000 (Business Pro)</option>
                        <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000 (Enterprise Custom)</option>
                        <option value="₹1,00,000+">₹1,00,000+ (Full Custom Suite)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-2 light:text-slate-700">Services Required</label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {availableServices.map((service) => {
                        const isSelected = formData.services.includes(service);
                        return (
                          <button
                            key={service}
                            type="button"
                            onClick={() => handleServiceToggle(service)}
                            className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-blue-600/20 text-blue-400 border-blue-500/40'
                                : 'bg-zinc-950 border-zinc-800 text-zinc-400 hover:text-zinc-200 light:bg-slate-100 light:border-zinc-300 light:text-slate-700'
                            }`}
                          >
                            {service}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-zinc-300 mb-1.5 light:text-slate-700">Project Details / Message *</label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your current product, target features, or project timeline..."
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-blue-500 light:bg-slate-50 light:border-zinc-300 light:text-slate-900"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <span className="text-xs text-zinc-400 flex items-center gap-1">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      100% Confidential & Secure
                    </span>

                    <button
                      type="submit"
                      disabled={loading}
                      className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-xl shadow-blue-500/25 flex items-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span>Sending...</span>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="text-center py-12 space-y-4 animate-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white light:text-slate-900">Message Received!</h3>
                  <p className="text-sm text-zinc-400 max-w-md mx-auto light:text-slate-600">
                    Thank you <strong className="text-zinc-200 light:text-slate-800">{formData.name}</strong>. Our senior engineering lead will review your message and reach out to <strong className="text-zinc-200 light:text-slate-800">{formData.email}</strong> within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-zinc-800 text-white text-xs font-semibold hover:bg-zinc-700 cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
