import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie } from 'lucide-react';
import { Link } from 'react-router-dom';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
    };

    const handleReject = () => {
        localStorage.setItem('cookieConsent', 'rejected');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.95 }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-[100] w-auto sm:w-full max-w-sm mx-auto sm:mx-0 p-8 rounded-2xl shadow-2xl backdrop-blur-md border border-[#88929b]/30 bg-[#fefefe]/95"
                >
                    <div className="flex flex-col gap-6 text-left">
                        <div className="flex items-center gap-3">
                            <Cookie className="w-6 h-6 text-[#1777bd]" />
                            <h4 className="text-xl font-bold font-display tracking-tight text-[#0e0e0e]">
                                Protocolo de Cookies
                            </h4>
                        </div>

                        <p className="text-[15px] leading-relaxed text-[#88929b] font-body">
                            Utilizamos cookies estrictamente técnicas para el correcto funcionamiento de la plataforma y recordar tus preferencias. No usamos rastreadores publicitarios.{' '}
                            <Link
                                to="/politica-de-cookies"
                                onClick={() => window.scrollTo(0, 0)}
                                className="underline decoration-1 underline-offset-4 transition-colors font-medium text-[#1777bd] hover:text-[#084882]"
                            >
                                Política de Cookies
                            </Link>
                        </p>

                        <div className="flex flex-row gap-3">
                            <button
                                onClick={handleAccept}
                                className="flex-1 px-2 py-3 rounded-full text-sm font-medium tracking-wide transition-all hover:scale-[1.02] bg-[#1777bd] text-[#fefefe] shadow-sm hover:bg-[#084882]"
                            >
                                ACEPTAR
                            </button>
                            <button
                                onClick={handleReject}
                                className="flex-1 px-2 py-3 rounded-full text-sm font-medium tracking-wide border transition-all hover:scale-[1.02] border-[#88929b]/30 text-[#0e0e0e] hover:bg-[#88929b]/10 hover:text-[#0e0e0e]"
                            >
                                RECHAZAR
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
