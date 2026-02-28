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
                    className="fixed bottom-6 right-6 z-[100] w-full max-w-sm sm:max-w-md p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-[#88929b]/30 bg-[#fefefe]/95"
                >
                    <div className="flex items-start gap-4">
                        <div className="mt-1 flex-shrink-0">
                            <Cookie className="w-6 h-6 text-[#1777bd]" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-lg font-bold font-display tracking-tight mb-2 text-[#0e0e0e]">
                                Protocolo de Cookies
                            </h4>
                            <p className="text-sm font-body leading-relaxed mb-4 text-[#88929b]">
                                Utilizamos cookies estrictamente técnicas para el correcto funcionamiento de la plataforma y recordar tus preferencias. No usamos rastreadores publicitarios.{' '}
                                <Link
                                    to="/politica-de-cookies"
                                    onClick={() => window.scrollTo(0, 0)}
                                    className="underline decoration-1 underline-offset-2 text-[#1777bd] hover:text-[#084882] transition-colors font-medium"
                                >
                                    Política de Cookies
                                </Link>
                            </p>

                            <div className="flex flex-col sm:flex-row gap-3">
                                <button
                                    onClick={handleAccept}
                                    className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide transition-all hover:scale-[1.02] bg-[#1777bd] text-[#fefefe] shadow-lg shadow-[#1777bd]/20 hover:bg-[#084882]"
                                >
                                    Aceptar
                                </button>
                                <button
                                    onClick={handleReject}
                                    className="flex-1 px-4 py-2.5 rounded-lg text-sm font-medium tracking-wide border transition-all border-[#88929b]/30 text-[#88929b] hover:bg-[#88929b]/10 hover:text-[#0e0e0e]"
                                >
                                    Rechazar
                                </button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
