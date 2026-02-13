import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send } from 'lucide-react';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            await axios.post('/api/contact/', formData, {
                headers: { 'Content-Type': 'application/json' }
            });
            toast.success('Message sent successfully! We\'ll respond within 24 hours.');
            setFormData({ name: '', email: '', message: '' });
        } catch (error: any) {
            toast.error(error.response?.data?.error || 'Failed to send message.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero - BALANCED SIZES */}
            <section className="text-center mb-12 sm:mb-16 lg:mb-24 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black gradient-text mb-4 sm:mb-6"
                    >
                        Get In Touch
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-2"
                    >
                        Ready to discuss your project? Send us a message and let's build something amazing.
                    </motion.p>
                </div>
            </section>

            {/* Contact Info + Form */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">

                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="space-y-6 sm:space-y-8 lg:space-y-10 order-2 lg:order-1"
                    >
                        {/* Email */}
                        <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl group hover:shadow-xl hover:shadow-primary/20 transition-all">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-yankees-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Mail size={20} className="sm:size-22 lg:size-24 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Email Us
                                    </h3>
                                    <a href="mailto:hello@technova.com" className="text-base sm:text-lg lg:text-xl text-primary hover:text-secondary font-semibold transition-colors break-all">
                                        hello@technova.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl group hover:shadow-xl hover:shadow-primary/20 transition-all">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <Phone size={20} className="sm:size-22 lg:size-24 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Call Us
                                    </h3>
                                    <a href="tel:+919876543210" className="text-base sm:text-lg lg:text-xl text-emerald-600 hover:text-emerald-700 font-semibold transition-colors">
                                        +91 9207431259
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="glass-card p-6 sm:p-8 lg:p-10 rounded-3xl group hover:shadow-xl hover:shadow-primary/20 transition-all">
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-purple-500 to-violet-600 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <MapPin size={20} className="sm:size-22 lg:size-24 text-white" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                        Visit Us
                                    </h3>
                                    <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-semibold">
                                        Kozhikode, Kerala, India
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="glass-card p-6 sm:p-8 lg:p-12 rounded-3xl space-y-6 sm:space-y-8 order-1 lg:order-2"
                    >
                        <div className="text-center lg:text-left mb-6 sm:mb-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 dark:text-white mb-3 sm:mb-4">
                                Send Message
                            </h2>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400">
                                Fill out the form and we'll respond within 24 hours
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 lg:space-y-8">
                            {/* Name */}
                            <div>
                                <label className="block text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full p-4 sm:p-5 lg:p-6 text-base sm:text-lg border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-gray-500"
                                    placeholder="Your full name"
                                    required
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full p-4 sm:p-5 lg:p-6 text-base sm:text-lg border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm focus:ring-4 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-gray-500"
                                    placeholder="your@email.com"
                                    required
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-base sm:text-lg lg:text-xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
                                    Project Details
                                </label>
                                <textarea
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full p-4 sm:p-5 lg:p-6 text-base sm:text-lg border-2 border-gray-200/50 dark:border-gray-700/50 rounded-2xl bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm focus:ring-4 focus:ring-primary/20 focus:border-primary resize-vertical transition-all duration-300 placeholder-gray-500 min-h-[120px]"
                                    placeholder="Tell us about your project requirements..."
                                    required
                                />
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary text-lg sm:text-xl py-6 sm:py-7 shadow-2xl font-bold flex items-center justify-center gap-3 hover:shadow-primary/40 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-5 h-5 sm:w-6 sm:h-6" />
                                    </>
                                )}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
