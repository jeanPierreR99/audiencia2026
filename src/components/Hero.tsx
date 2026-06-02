import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Clock3, MapPin, CheckCircle2, ChevronDown, Music2 } from "lucide-react";
import { useState } from "react";

const Hero = () => {
    const [muted, setMuted] = useState(true);

    const handleVideoClick = () => {
        setMuted(!muted);
    }
    return (
        < section
            id="inicio"
            className="relative min-h-screen overflow-hidden"
        >
            <video
                autoPlay
                muted={muted}
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="/spot.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/20" />
            <div className="relative z-20 min-h-screen flex items-center">
                <div className="max-w-[1725px] mx-auto px-6 w-full">
                    <div className="grid lg:grid-cols-2 gap-20 items-center py-20 mt-20 md:py-0 md:mt-0">
                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, y: 60 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-50 border border-green-100 shadow-sm">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

                                <span className="uppercase tracking-[0.25em] text-xs md:text-sm font-black text-green-600">
                                    1ra Audiencia Pública 2026
                                </span>
                            </div>

                            <h1 className="mt-8 text-4xl md:text-8xl font-black">
                                Construyendo
                                <span className="block text-green-600">
                                    una gestión
                                </span>

                                <span className="block text-yellow-500">
                                    transparente
                                </span>
                            </h1>

                            <p className="mt-8 text-lg text-slate-700 leading-relaxed max-w-2xl">
                                Un espacio de diálogo ciudadano donde presentamos
                                avances, obras y resultados de gestión para fortalecer
                                el desarrollo de Tambopata con transparencia y
                                participación.
                            </p>

                            <div className="mt-12 flex flex-wrap gap-5">
                                <a href="#participacion" className="group bg-green-600 hover:bg-green-700 text-white px-10 py-5 rounded-2xl font-black transition-all duration-300 shadow-2xl hover:scale-105">
                                    <span className="flex items-center gap-3">
                                        Participar Ahora

                                        <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                                    </span>
                                </a>

                                <button onClick={() => { handleVideoClick() }} className="bg-white border border-slate-200 hover:bg-slate-50 px-10 py-5 rounded-2xl font-bold transition-all duration-300 shadow-lg">
                                    <span className="flex items-center gap-3">
                                        <Music2 className="w-5 h-5" />

                                        Reproducir Audio
                                    </span>
                                </button>
                            </div>

                            {/* INFO */}
                            <div className="mt-12 flex flex-wrap gap-8">
                                <div className="flex items-center gap-3">
                                    <CalendarDays className="text-green-600" />

                                    <span className="font-semibold">
                                        30 Junio 2026
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Clock3 className="text-green-600" />

                                    <span className="font-semibold">
                                        08:30 AM
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MapPin className="text-green-600" />

                                    <span className="font-semibold">
                                        Atrio del Palacio Municipal
                                    </span>
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT CARD */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="relative"
                        >
                            <div className="bg-white/80 backdrop-blur-2xl border border-white rounded-[40px] p-10 shadow-[0_30px_100px_rgba(0,0,0,.12)]">
                                <h3 className="text-4xl font-black">
                                    Una gestión
                                    <span className="block text-green-600">
                                        cercana al ciudadano
                                    </span>
                                </h3>

                                <p className="mt-6 text-slate-600 leading-relaxed">
                                    Conoce cómo las inversiones públicas vienen
                                    transformando la infraestructura, servicios y calidad
                                    de vida de miles de ciudadanos.
                                </p>

                                <div className="mt-10 space-y-5">
                                    {[
                                        "Obras ejecutadas con transparencia",
                                        "Participación ciudadana activa",
                                        "Rendición pública de cuentas",
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4"
                                        >
                                            <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center">
                                                <CheckCircle2 className="text-green-600" />
                                            </div>

                                            <span className="font-semibold text-slate-700">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <ChevronDown className="w-10 h-10 text-slate-600" />
            </motion.div>
        </section >
    )
}

export default Hero