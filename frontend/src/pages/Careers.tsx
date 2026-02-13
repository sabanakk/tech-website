import { motion } from 'framer-motion';
import { Briefcase, MapPin, DollarSign, Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
    const jobs = [
        {
            title: 'Senior React Developer',
            type: 'Full-time • Remote OK',
            salary: '$5k - $10k',
            location: 'Kozhikode, Kerala / Remote',
            skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS'],
            description: 'Build scalable enterprise web applications with React ecosystem.'
        },
        {
            title: 'Django Backend Engineer',
            type: 'Full-time • Hybrid',
            salary: '$4k - $9k',
            location: 'Kozhikode, Kerala',
            skills: ['Django', 'DRF', 'PostgreSQL', 'Docker'],
            description: 'Design robust APIs and scalable backend systems for enterprise clients.'
        },
        {
            title: 'Senior DevOps Engineer',
            type: 'Full-time • Remote',
            salary: '$7k - $12k',
            location: 'Remote (India)',
            skills: ['AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
            description: 'Architect cloud infrastructure and DevOps pipelines for global scale.'
        }
    ];

    // Smooth scroll to contact section
    const scrollToContact = () => {
        document.getElementById('contact-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="min-h-screen py-8 sm:py-12 lg:py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero - Compact */}
            <section className="text-center mb-8 sm:mb-12 lg:mb-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-4 sm:mb-6"
                    >
                        Join Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed px-2"
                    >
                        Build the future of software with the brightest minds in Kerala
                    </motion.p>
                </div>
            </section>

            {/* Job Listings - COMPACT GRID */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 lg:mb-24">
                <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                    {jobs.map((job, idx) => (
                        <motion.div
                            key={job.title}
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-4 sm:p-6 lg:p-8 rounded-2xl group hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500 w-full border-0"
                        >
                            <div className="lg:grid lg:grid-cols-4 lg:gap-6 lg:items-start">
                                {/* Job Content */}
                                <div className="lg:col-span-3">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
                                        <div className="p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-primary to-yankees-600 rounded-xl sm:rounded-2xl flex-shrink-0 group-hover:scale-105 transition-transform">
                                            <Briefcase size={18} className="sm:size-20 lg:size-24 text-white" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:gradient-text transition-all line-clamp-2">
                                                {job.title}
                                            </h3>

                                            {/* Job Meta Tags - Compact */}
                                            <div className="flex flex-col sm:flex-row flex-wrap gap-2 mb-4 lg:mb-6">
                                                <span className="bg-primary/10 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl font-semibold text-xs sm:text-sm lg:text-base">
                                                    {job.type}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm lg:text-base">
                                                    <DollarSign size={14} className="sm:size-16 lg:size-18" /> {job.salary}
                                                </span>
                                                <span className="flex items-center gap-1.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm lg:text-base">
                                                    <MapPin size={14} className="sm:size-16 lg:size-18" /> {job.location}
                                                </span>
                                            </div>

                                            <p className="text-sm sm:text-base lg:text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-4 lg:mb-6 line-clamp-2 px-1">
                                                {job.description}
                                            </p>

                                            {/* Skills - Compact */}
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2">
                                                {job.skills.map((skill) => (
                                                    <span
                                                        key={skill}
                                                        className="bg-gray-100 dark:bg-gray-800 px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold text-gray-700 dark:text-gray-300"
                                                    >
                                                        {skill}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Action Buttons - Compact */}
                                <div className="pt-4 lg:pt-0 lg:border-t-0 border-t border-gray-200/50 lg:border-t lg:border-gray-200/30">
                                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                        <Link
                                            to="/contact"
                                            className="flex-1 btn-primary text-xs sm:text-sm lg:text-base py-2.5 sm:py-3 lg:py-4 px-4 shadow-lg flex items-center justify-center gap-1.5 font-semibold h-10 lg:h-12 rounded-xl"
                                        >
                                            Apply <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* CTA Section - FULLY CENTERED + SCROLL TO CONTACT */}
            <section className="py-12 sm:py-16 lg:py-24 flex items-center justify-center min-h-[400px]">
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="glass-card max-w-md sm:max-w-lg lg:max-w-2xl xl:max-w-3xl w-full mx-4 sm:mx-6 lg:mx-8 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-xl border-primary/20 text-center"
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 sm:mb-6 gradient-text"
                    >
                        No Perfect Match?
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mb-8 sm:mb-12 max-w-xl mx-auto leading-relaxed px-2"
                    >
                        We're always looking for exceptional talent. Send us your resume.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
                        {/* EMAIL RESUME - SCROLLS TO CONTACT */}
                        <a
                            href="#contact-section"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToContact();
                            }}
                            className="btn-primary text-sm sm:text-base lg:text-lg px-8 py-3 shadow-lg flex items-center gap-2 h-12 w-full sm:w-auto font-semibold rounded-xl hover:shadow-xl transition-all"
                        >
                            <Mail className="w-5 h-5 flex-shrink-0" /> Email Resume
                        </a>

                        <div className="flex gap-3 pt-2 sm:pt-0">
                            <a href="#" className="w-11 h-11 glass-card rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all group p-2">
                                <Github size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                            <a href="#" className="w-11 h-11 glass-card rounded-xl flex items-center justify-center hover:bg-primary/20 transition-all group p-2">
                                <Linkedin size={20} className="group-hover:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </section>
        </div>
    );
};

export default Careers;
