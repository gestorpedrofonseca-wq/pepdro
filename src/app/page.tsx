'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import ScrollExpandMedia from '@/components/ui/scroll-expansion-hero';
import { motion } from 'framer-motion';
import { GalleryVerticalEnd, MessageCircle, ShoppingCart, FileText, Instagram } from 'lucide-react';

export default function Home() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <main className="min-h-screen bg-[#050505] text-white font-sans selection:bg-green-500/30">
            <ScrollExpandMedia
                mediaType="image"
                // Using a high-quality abstract tech background
                mediaSrc="https://plus.unsplash.com/premium_photo-1681487766536-e05e595b1ba9?q=80&w=1920&auto=format&fit=crop"
                bgImageSrc="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1920&auto=format&fit=crop"
                title=""
                scrollToExpand="Role para explorar"
                textBlend={true}
            >
                <div className="max-w-md mx-auto w-full space-y-8 pb-20">
                    {/* Authority Block - Enhanced with tech effects */}
                    <div className="relative text-center space-y-4 p-8 rounded-2xl overflow-hidden group">
                        {/* Animated grid background */}
                        <div className="absolute inset-0 opacity-20">
                            <div className="absolute inset-0" style={{
                                backgroundImage: `
                                    linear-gradient(to right, rgba(34, 197, 94, 0.1) 1px, transparent 1px),
                                    linear-gradient(to bottom, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
                                `,
                                backgroundSize: '20px 20px'
                            }}></div>
                        </div>

                        {/* Glowing border effect */}
                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-500/20 via-transparent to-green-500/20 opacity-50"></div>
                        <div className="absolute inset-0 rounded-2xl border border-green-500/30 shadow-[0_0_30px_rgba(34,197,94,0.2)]"></div>

                        {/* Animated corner accents */}
                        <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-green-400/60 rounded-tl-2xl"></div>
                        <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-green-400/60 rounded-br-2xl"></div>

                        {/* Main background */}
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-md"></div>

                        {/* Content */}
                        <div className="relative z-10">
                            <p className="text-base md:text-lg leading-relaxed">
                                A <strong className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 font-bold">Next Systems</strong> é especializada no desenvolvimento de soluções em{' '}
                                <span className="text-green-400 font-semibold">3D</span> e{' '}
                                <span className="text-green-400 font-semibold">Realidade Aumentada</span>{' '}
                                aplicadas ao e-commerce, com foco em{' '}
                                <span className="text-white font-medium">experiência do usuário</span>,{' '}
                                <span className="text-white font-medium">performance</span> e{' '}
                                <span className="text-white font-medium">conversão</span>.
                            </p>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="flex flex-col gap-4">
                        <LinkCard
                            href="https://wa.me/5531971989116"
                            icon={<MessageCircle className="w-5 h-5" />}
                            label="Falar com um especialista"
                        />
                        <LinkCard
                            href="https://wa.me/5531971989116"
                            icon={<GalleryVerticalEnd className="w-5 h-5" />}
                            label="Ver portfólio / projetos"
                        />
                        <LinkCard
                            href="https://wa.me/5531971989116"
                            icon={<ShoppingCart className="w-5 h-5" />}
                            label="Conhecer soluções 3D e RA"
                        />
                        <LinkCard
                            href="https://wa.me/5531971989116"
                            icon={<FileText className="w-5 h-5" />}
                            label="Solicitar orçamento"
                        />
                        <LinkCard
                            href="https://www.instagram.com/nextsystems.br/"
                            icon={<Instagram className="w-5 h-5" />}
                            label="Instagram da Next Systems"
                        />
                    </div>

                    <footer className="text-center text-white/30 text-xs pt-8">
                        &copy; 2026 Next Systems. Todos os direitos reservados.
                    </footer>
                </div>
            </ScrollExpandMedia>
        </main>
    );
}

function LinkCard({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            className="group relative flex items-center justify-between p-5 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
        >
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 transition-opacity duration-300"></div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300" style={{
                backgroundImage: `
                    linear-gradient(to right, rgba(34, 197, 94, 0.2) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
                `,
                backgroundSize: '15px 15px'
            }}></div>

            {/* Base border */}
            <div className="absolute inset-0 rounded-xl border border-white/10"></div>

            {/* Animated traveling border effect */}
            <motion.div
                className="absolute inset-0 rounded-xl"
                style={{
                    background: `conic-gradient(
                        from 0deg,
                        transparent 0%,
                        transparent 70%,
                        rgba(34, 197, 94, 0.8) 85%,
                        rgba(34, 197, 94, 0) 100%
                    )`,
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px',
                }}
                animate={{
                    rotate: [0, 360],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            />

            {/* Glow effect that follows */}
            <motion.div
                className="absolute inset-0 rounded-xl"
                animate={{
                    boxShadow: [
                        '0 0 0px rgba(34, 197, 94, 0)',
                        '0 0 15px rgba(34, 197, 94, 0.3)',
                        '0 0 0px rgba(34, 197, 94, 0)',
                    ],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                }}
            />

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-green-500/0 group-hover:bg-green-500/5 transition-all duration-300 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-slate-400 group-hover:text-green-400 transition-colors duration-300">
                {icon}
            </div>
            <span className="relative z-10 flex-grow text-center font-medium text-white group-hover:text-green-400 transition-colors duration-300">
                {label}
            </span>
            <div className="relative z-10 text-slate-400 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-400">
                →
            </div>
        </a>
    );
}
