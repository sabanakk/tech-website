import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Award, Clock, Target, ArrowRight } from 'lucide-react';

const About = () => {
    const [_, setShowTeam] = useState(false);

    const stats = [
        { icon: Users, number: '50+', label: 'Happy Clients', color: 'from-primary to-yankees-600' },
        { icon: Award, number: '25+', label: 'Projects Live', color: 'from-secondary to-yellow-500' },
        { icon: Clock, number: '8+', label: 'Years Experience', color: 'from-emerald-500 to-teal-600' },
        { icon: Target, number: '98%', label: 'Satisfaction', color: 'from-purple-500 to-violet-600' }
    ];

    const team = [
        { name: 'Jaffrik K', role: 'CEO & Founder', avatar: '👨‍💼', color: 'from-primary to-yankees-600' },
        { name: 'Layona M', role: 'CTO', avatar: '👩‍💻', color: 'from-emerald-500 to-teal-600' },
        { name: 'Zabik S', role: 'Lead Developer', avatar: '🧑‍💻', color: 'from-purple-500 to-violet-600' },
        { name: 'Zara R', role: 'UX Designer', avatar: '👩‍🎨', color: 'from-pink-500 to-rose-600' }
    ];

    const timeline = [
        { year: '2018', event: 'TechNova Founded in Kerala' },
        { year: '2020', event: 'First Enterprise Client' },
        { year: '2023', event: '50+ Projects Delivered' },
        { year: '2026', event: 'Global Team Expansion' }
    ];

    const scrollToTeam = () => {
        setShowTeam(true);
        document.getElementById('team-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    return (
        <div className="min-h-screen py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
            {/* Hero */}
            <section className="text-center mb-16 sm:mb-20 lg:mb-32 px-4 sm:px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-black gradient-text mb-6 sm:mb-8"
                    >
                        Our Story
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        From a small team in Kerala to powering enterprise solutions worldwide.
                    </motion.p>
                </div>
            </section>

            {/* Stats */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-32">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                    {stats.map((stat, idx) => {
                        const Icon = stat.icon;
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-6 sm:p-8 lg:p-10 text-center group hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 ${stat.color} text-white rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-4 sm:mb-6 lg:mb-8 group-hover:scale-110 transition-transform`}>
                                    <Icon size={20} className="sm:size-24 lg:size-32" />
                                </div>
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-3 sm:mb-4">
                                    {stat.number}
                                </div>
                                <div className="text-base sm:text-lg lg:text-xl font-semibold text-gray-700 dark:text-gray-300 leading-tight">
                                    {stat.label}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Story + Timeline */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="space-y-6 lg:space-y-8 order-2 lg:order-1"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 dark:text-white mb-6 sm:mb-8">
                            Built for the Future
                        </h2>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed mb-6 sm:mb-8">
                            Founded in 2018, TechNova has grown from a passionate team of developers
                            in Kozhikode to a global software powerhouse serving Fortune 500 companies.
                        </p>
                        <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
                            Our mission: Transform complex business challenges into elegant, scalable software solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <button className="btn-primary text-base sm:text-lg lg:text-xl py-3 sm:py-4 px-6 font-semibold">
                                Our Process
                            </button>
                            <button
                                onClick={scrollToTeam}
                                className="btn-secondary text-base sm:text-lg lg:text-xl py-3 sm:py-4 px-6 font-semibold flex items-center gap-2 group hover:translate-x-1 transition-all"
                            >
                                Meet Team <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 order-1 lg:order-2"
                    >
                        {timeline.map((item, idx) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-6 sm:p-8 lg:p-10 rounded-2xl border-0 group hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className="text-2xl sm:text-3xl lg:text-4xl font-black gradient-text mb-3 sm:mb-4">
                                    {item.year}
                                </div>
                                <div className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 font-semibold leading-relaxed">
                                    {item.event}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Team - WITH ID FOR SCROLL */}
            <section id="team-section" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 scroll-mt-20">
                <div className="text-center mb-12 sm:mb-16 lg:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-6 sm:mb-8"
                    >
                        Leadership Team
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                    >
                        Meet the minds powering TechNova's success
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
                    {team.map((member, idx) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-card p-6 sm:p-8 lg:p-10 text-center group hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-4 transition-all duration-700 cursor-pointer"
                            whileHover={{ scale: 1.05 }}
                        >
                            <div className={`w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 ${member.color} text-3xl sm:text-4xl rounded-2xl sm:rounded-3xl flex items-center justify-center mx-auto mb-6 sm:mb-8 lg:mb-10 group-hover:scale-110 transition-all duration-500`}>
                                {member.avatar}
                            </div>
                            <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 group-hover:gradient-text transition-all">
                                {member.name}
                            </h3>
                            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 font-semibold">
                                {member.role}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default About;
