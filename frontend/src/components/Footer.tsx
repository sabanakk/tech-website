import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="glass-card mt-32 border-t-0 pt-20 pb-16"
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    {/* Company */}
                    <div>
                        <Link to="/" className="text-3xl gradient-text font-black mb-6 block">
                            TechNova
                        </Link>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed max-w-sm">
                            Enterprise software solutions engineered for scale. Trusted by 50+ global companies.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-all group">
                                <Github size={20} className="group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-all group">
                                <Linkedin size={20} className="group-hover:-translate-y-1 transition-transform" />
                            </a>
                            <a href="#" className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center hover:bg-primary/20 transition-all group">
                                <Twitter size={20} className="group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Quick Links</h4>
                        <div className="space-y-4">
                            <Link to="/" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary group transition-all">
                                Home <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform opacity-60" />
                            </Link>
                            <Link to="/about" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary group transition-all">
                                About <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform opacity-60" />
                            </Link>
                            <Link to="/services" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary group transition-all">
                                Services <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform opacity-60" />
                            </Link>
                            <Link to="/careers" className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary group transition-all">
                                Careers <ChevronRight size={16} className="group-hover:translate-x-2 transition-transform opacity-60" />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Services</h4>
                        <div className="space-y-3">
                            <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary transition-all">Web Development</a>
                            <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary transition-all">Mobile Apps</a>
                            <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary transition-all">Backend Systems</a>
                            <a href="#" className="block text-gray-600 dark:text-gray-400 hover:text-primary transition-all">DevOps</a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-8">Contact</h4>
                        <div className="space-y-4 text-gray-600 dark:text-gray-400">
                            <a href="mailto:info@technova.com" className="flex items-center gap-3 hover:text-primary transition-all">
                                <Mail size={18} /> info@technova.com
                            </a>
                            <a href="tel:+919207431259" className="flex items-center gap-3 hover:text-primary transition-all">
                                <Phone size={18} /> +91 9207431259
                            </a>
                            <div className="flex items-start gap-3">
                                <MapPin size={18} />
                                <span>Kozhikode, Kerala, India</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-200/30 dark:border-gray-700/50 pt-12 text-center text-sm text-gray-500 dark:text-gray-400">
                    © 2026 Sabana K K. All rights reserved. Crafted with ❤️ in Kerala.
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
