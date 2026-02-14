import { motion } from 'framer-motion';
import { Code, Smartphone, Database, Shield, Zap, Settings, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
    const services = [
        {
            icon: Code,
            title: 'Full Stack Development',
            description: 'React, Next.js, Django, Node.js. Enterprise-grade web applications.',
            stats: '25+ Projects',
            color: 'from-primary to-yankees-600'
        },
        {
            icon: Smartphone,
            title: 'Mobile Applications',
            description: 'React Native, Flutter, Swift. Native iOS & Android apps.',
            stats: '10+ Apps Live',
            color: 'from-emerald-500 to-teal-600'
        },
        {
            icon: Database,
            title: 'Backend Systems',
            description: 'Microservices, APIs, PostgreSQL, Redis. Scalable architecture.',
            stats: '15+ Systems',
            color: 'from-purple-500 to-violet-600'
        },
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Penetration testing, compliance, secure architecture.',
            stats: '100% Secure',
            color: 'from-orange-500 to-red-600'
        },
        {
            icon: Zap,
            title: 'Performance Engineering',
            description: '99.9% uptime, 200ms response times, AWS optimization.',
            stats: '500ms Avg',
            color: 'from-yellow-500 to-amber-600'
        },
        {
            icon: Settings,
            title: 'DevOps & Cloud',
            description: 'CI/CD, Kubernetes, Docker, Terraform, multi-cloud.',
            stats: '24/7 Uptime',
            color: 'from-pink-500 to-rose-600'
        }
    ];

    const pricing = [
        { name: 'Starter', price: '$499', features: ['1 Landing Page', 'Responsive Design', '1 Month Support'], popular: false },
        { name: 'Business', price: '$999', features: ['5+ Pages', 'CMS Admin', 'API Integration', '6 Months Support'], popular: true },
        { name: 'Enterprise', price: 'Custom', features: ['Full Platform', 'Mobile App', '24/7 Support', 'SLA Guaranteed'], popular: false }
    ];

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
                        Services
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed px-4"
                    >
                        End-to-end software solutions engineered for enterprise scale
                    </motion.p>
                </div>
            </section>

            {/* Services Grid - 2-3 Layout */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 lg:mb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 xl:gap-12 h-fit">
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="glass-card p-8 lg:p-10 xl:p-12 group hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-3 transition-all duration-700 cursor-pointer border-0 flex flex-col justify-between h-full min-h-[20rem]"
                            >
                                <div className="flex flex-col flex-1">
                                    <div className={`w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 ${service.color} text-white rounded-2xl lg:rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 xl:mb-10 group-hover:scale-110 transition-all duration-500`}>
                                        <Icon size={24} className="lg:size-28 xl:size-32" />
                                    </div>
                                    <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6 xl:mb-8 text-center group-hover:gradient-text transition-all duration-500 leading-tight">
                                        {service.title}
                                    </h3>
                                    <p className="text-base lg:text-lg xl:text-xl text-gray-600 dark:text-gray-400 leading-relaxed flex-1 text-center px-2">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="text-lg lg:text-xl xl:text-2xl font-black gradient-text text-center mt-4">
                                    {service.stats}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* Pricing - Perfect 3-col Layout */}
            {/* Pricing - REDUCED FONT SIZES */}
            <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-b from-slate-50/50 to-blue-50/50 dark:from-gray-900/50 dark:to-gray-800/50">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-black gradient-text mb-6 sm:mb-8"
                    >
                        Simple Pricing
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mb-12 sm:mb-16 lg:mb-20 max-w-2xl mx-auto px-4"
                    >
                        Choose the perfect plan for your business transformation
                    </motion.p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 items-stretch">
                        {pricing.map((plan, idx) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`glass-card p-8 lg:p-10 xl:p-12 rounded-3xl group hover:shadow-2xl hover:shadow-primary/25 hover:-translate-y-3 transition-all duration-500 flex flex-col justify-between h-full min-h-[26rem] relative ${plan.popular
                                        ? 'scale-105 shadow-2xl shadow-primary/30 border-2 border-primary/20 ring-4 ring-primary/10'
                                        : ''
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-yankees-600 text-white px-6 py-2 rounded-2xl font-bold text-sm lg:text-base shadow-xl">
                                        Most Popular
                                    </div>
                                )}
                                <div className="flex flex-col flex-1 justify-between">
                                    <div>
                                        <h3 className="text-lg lg:text-xl xl:text-2xl font-black text-gray-900 dark:text-white mb-4 lg:mb-6 text-center">
                                            {plan.name}
                                        </h3>
                                        <div className="text-3xl lg:text-4xl xl:text-5xl font-black gradient-text mb-6 lg:mb-8 xl:mb-10 text-center leading-none">
                                            {plan.price}
                                        </div>
                                    </div>
                                    <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8 xl:mb-10 text-left flex-1">
                                        {plan.features.map((feature) => (
                                            <li key={feature} className="flex items-start text-sm lg:text-base xl:text-lg text-gray-700 dark:text-gray-300 gap-3">
                                                <div className="w-2 h-2 lg:w-3 lg:h-3 bg-primary rounded-full mt-2 lg:mt-2.5 flex-shrink-0" />
                                                <span className="flex-1">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <Link
                                    to="/contact"
                                    className={`w-full py-3 lg:py-4 xl:py-5 rounded-xl font-semibold text-sm lg:text-base xl:text-lg flex items-center justify-center gap-2 transition-all duration-300 h-12 lg:h-14 ${plan.popular
                                            ? 'btn-primary shadow-xl hover:shadow-primary/40'
                                            : 'btn-secondary hover:bg-primary/20 border-primary/40 hover:border-primary'
                                        }`}
                                >
                                    Get Started <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Services;
