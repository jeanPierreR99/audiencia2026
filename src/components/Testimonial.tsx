import { motion } from "framer-motion";
import {
    Quote,
    Users,
    ShieldCheck,
    Landmark,
} from "lucide-react";

const Testimonial = () => {
    return (
        <section className="relative pt-10 pb-30">
            {/* BACKGROUND */}
            <div className="absolute inset-0">

                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-yellow-100 blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-[1725px] mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="relative overflow-hidden rounded-[50px] bg-green-900 text-white shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
                >
                    {/* EFFECTS */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-500/20 blur-[140px]" />

                        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-400/10 blur-[140px]" />
                    </div>

                    {/* BIG QUOTE */}
                    <Quote className="absolute top-10 right-10 w-40 h-40 text-white/5" />

                    <div className="relative z-10 grid lg:grid-cols-[1.4fr_0.8fr] gap-16 p-10 lg:p-20">
                        {/* LEFT */}
                        <div>
                            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 backdrop-blur-xl px-5 py-2 rounded-full text-sm font-bold text-yellow-300">
                                <Users className="w-4 h-4" />
                                Participación Ciudadana
                            </div>

                            <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">
                                “La transparencia fortalece la confianza y el desarrollo de nuestra provincia.”
                            </h2>

                            <p className="mt-10 text-xl text-slate-300 leading-relaxed max-w-4xl">
                                La Audiencia Pública representa un espacio donde la
                                ciudadanía puede conocer los avances de gestión,
                                participar activamente y fortalecer una administración
                                abierta, moderna y orientada a resultados.
                            </p>

                            {/* INFO */}
                            <div className="mt-12 flex flex-wrap gap-5">
                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                                    <ShieldCheck className="w-5 h-5 text-green-300" />

                                    <span className="font-semibold text-slate-200">
                                        Transparencia Institucional
                                    </span>
                                </div>

                                <div className="flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-4 rounded-2xl backdrop-blur-xl">
                                    <Landmark className="w-5 h-5 text-yellow-300" />

                                    <span className="font-semibold text-slate-200">
                                        Gestión Municipal Moderna
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT */}
                        <div className="relative flex items-center">
                            <div className="w-full rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl p-4 md:p-10">
                                <div className="md:flex text-center md:text-start items-center gap-5">
                                    <div className="w-24 md:w-30 mx-auto">
                                        <img
                                            src="/logo-solo.png"
                                            className="w-full h-full"
                                        />
                                    </div>

                                    <div>
                                        <h3 className="text-lg md:text-2xl font-black">
                                            Municipalidad Provincial de Tambopata
                                        </h3>

                                        <p className="mt-2 text-slate-300">
                                            Gestión Municipal 2026
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-10 border-t border-white/10 pt-8">
                                    <p className="text-slate-300 leading-relaxed">
                                        “Seguimos trabajando con compromiso y transparencia
                                        para impulsar proyectos que mejoren la calidad de
                                        vida de toda la población de Tambopata.”
                                    </p>
                                </div>

                                {/* STATS */}
                                <div className="mt-10 grid grid-cols-2 gap-5">
                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-3xl font-black text-yellow-300">
                                            +120
                                        </h4>

                                        <p className="mt-2 text-sm text-slate-300">
                                            Obras Ejecutadas
                                        </p>
                                    </div>

                                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                                        <h4 className="text-3xl font-black text-green-300">
                                            +35K
                                        </h4>

                                        <p className="mt-2 text-sm text-slate-300">
                                            Ciudadanos Beneficiados
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;