'use client';

import { useState } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin } from 'lucide-react';
import Reveal from './Reveal';

const productOptions = [
  'PDLC Smart Film',
  'Self Adhesive Smart Film',
  'Laminated Smart Glass',
  'Control Systems',
  'Custom Solution',
];

export default function QuoteForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    country: '',
    whatsapp: '',
    product: productOptions[0],
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Submission failed. Please try again or email us directly.');
      }
    } catch {
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-semibold text-sm uppercase tracking-[0.2em]">
              Get In Touch
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mt-4 mb-6 leading-tight">
              Request A Free Quote
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your project. Our team will respond within 24 hours with
              technical specifications and competitive pricing.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <Reveal direction="left" className="lg:col-span-2">
            <div className="bg-primary rounded-2xl p-8 lg:p-10 text-white h-full relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl" />
              <div className="relative">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-white/70 mb-10">
                  Reach out through any of the following channels. We are here to help
                  with your smart film project.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="w-5 h-5 text-accent-light" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Email</div>
                      <div className="font-medium">aaronliu@aysentglass.com</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="w-5 h-5 text-accent-light" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Phone / WhatsApp</div>
                      <div className="font-medium">+86-15163206207</div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent-light" />
                    </div>
                    <div>
                      <div className="text-sm text-white/50 mb-1">Factory Location</div>
                      <div className="font-medium">Tengzhou, Shandong, China</div>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-sm text-white/70">Response Time</span>
                  </div>
                  <div className="text-3xl font-bold">Within 24 Hours</div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal direction="right" className="lg:col-span-3">
            {submitted ? (
              <div className="bg-white rounded-2xl p-10 lg:p-12 text-center h-full flex flex-col items-center justify-center border border-gray-100 shadow-xl">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-3">Thank You!</h3>
                <p className="text-gray-600 mb-8 max-w-md">
                  Your inquiry has been received successfully. Our sales team will review
                  your requirements and contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-accent text-white font-semibold rounded-full hover:bg-accent-light transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100 shadow-xl"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country / Region
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="United States"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      WhatsApp / Phone
                    </label>
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white"
                      placeholder="+86 138 0000 0000"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Product Interest
                  </label>
                  <select
                    name="product"
                    value={formData.product}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white"
                  >
                    {productOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Project Requirements
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                    placeholder="Please describe your project: size, quantity, application, timeline..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center px-8 py-4 bg-accent text-white font-semibold rounded-xl hover:bg-accent-light transition-all duration-300 hover:shadow-lg hover:shadow-accent/25 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {loading ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
