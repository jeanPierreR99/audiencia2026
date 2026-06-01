import { motion } from "framer-motion";
import {
    ShieldCheck,
    Users,
    BadgeCheck,
    ArrowRight,
} from "lucide-react";

const pillars = [
    {
        title: "Transparencia",
        description:
            "Información clara, pública y accesible sobre proyectos, inversiones y resultados de gestión municipal.",
        icon: ShieldCheck,
    },
    {
        title: "Participación Ciudadana",
        description:
            "La población participa activamente mediante propuestas, consultas y espacios de diálogo institucional.",
        icon: Users,
    },
    {
        title: "Modernización Institucional",
        description:
            "Impulso de procesos digitales, innovación pública y servicios eficientes orientados al ciudadano.",
        icon: BadgeCheck,
    },
];

const Pillars = () => {
    return (
        <section
            id="gestion"
            className="relative py-36"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 w-[600px] h-[600px] bg-green-100 blur-[180px]" />
            </div>

            <div className="relative z-10 max-w-[1725px] mx-auto px-6">
                {/* TOP */}
                <div className="grid lg:grid-cols-2 gap-16 items-end">
                    {/* LEFT */}
                    <div>
                        <motion.span
                            initial={{ opacity: 0, y: 25 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm"
                        >
                            Gestión Municipal
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7 }}
                            className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-slate-900"
                        >
                            Principios que fortalecen una
                            <span className="text-green-600">
                                {" "}
                                gestión moderna
                            </span>
                        </motion.h2>
                    </div>

                    {/* RIGHT */}
                    <motion.p
                        initial={{ opacity: 0, y: 35 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-xl leading-relaxed text-slate-600"
                    >
                        La Municipalidad Provincial de Tambopata promueve
                        una administración transparente, participativa e
                        innovadora, orientada al desarrollo sostenible y al
                        bienestar de toda la ciudadanía.
                    </motion.p>
                </div>

                {/* CONTENT */}
                <div className="mt-24 space-y-8">
                    {pillars.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                }}
                                whileHover={{
                                    scale: 1.01,
                                }}
                                className="group relative overflow-hidden bg-white/70 backdrop-blur-2xl border border-white/60 rounded-[40px] shadow-2xl"
                            >
                                {/* HOVER EFFECT */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-r from-green-50 via-transparent to-yellow-50" />

                                <div className="relative grid lg:grid-cols-[220px_1fr_120px] items-center">
                                    {/* LEFT NUMBER */}
                                    <div className="relative h-full flex items-center justify-center p-10 border-b lg:border-b-0 lg:border-r border-slate-100">
                                        <div className="text-[90px] font-black text-slate-100 leading-none">
                                            0{index + 1}
                                        </div>
                                    </div>

                                    {/* CENTER */}
                                    <div className="p-10 lg:p-14">
                                        <div className="md:flex items-center gap-6">
                                            <div className="w-24 h-24 mb-5 md:mb-0 rounded-[32px] bg-gradient-to-br from-green-600 to-green-500 text-white flex items-center justify-center shadow-2xl">
                                                <Icon className="w-12 h-12" />
                                            </div>

                                            <div>
                                                <h3 className="text-3xl lg:text-4xl font-black text-slate-900">
                                                    {item.title}
                                                </h3>

                                                <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-3xl">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* RIGHT */}
                                    <div className="hidden lg:flex items-center justify-center h-full border-l border-slate-100">
                                        <div className="w-20 h-20 rounded-full bg-slate-100 group-hover:bg-green-600 transition-all duration-500 flex items-center justify-center">
                                            <ArrowRight className="w-8 h-8 text-slate-500 group-hover:text-white transition-all duration-500" />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Pillars;