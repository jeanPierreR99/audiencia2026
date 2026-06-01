import { motion } from "framer-motion";
import {
    Users,
    Landmark,
    ShieldCheck,
    CheckCircle2,
    Megaphone,
} from "lucide-react";

export default function AboutAudience() {
    return (
        <section
            id="audiencia"
            className="relative py-32 overflow-hidden"
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-green-100 blur-[150px]" />

            </div>

            <div className="relative z-10 max-w-[1725px] mx-auto px-6">
                {/* HEADER */}
                <div className="max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full font-bold text-sm"
                    >
                        <Megaphone className="w-4 h-4" />
                        Participación Ciudadana
                    </motion.span>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-slate-900"
                    >
                        ¿Qué es la
                        <span className="text-green-600">
                            {" "}
                            Audiencia Pública?
                        </span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mt-8 text-xl leading-relaxed text-slate-600"
                    >
                        La Audiencia Pública es un espacio oficial donde la
                        Municipalidad Provincial de Tambopata presenta a la
                        ciudadanía los avances de gestión, proyectos ejecutados,
                        inversiones, resultados y acciones desarrolladas durante el
                        periodo municipal.
                    </motion.p>
                </div>

                {/* CARDS */}
                <div className="mt-20 grid lg:grid-cols-3 gap-8">
                    {[
                        {
                            icon: <Landmark className="w-8 h-8" />,
                            title: "¿Cuál es su finalidad?",
                            description:
                                "Fortalecer la transparencia, la rendición de cuentas y la participación ciudadana mediante la exposición pública de las acciones ejecutadas por la gestión municipal.",
                        },
                        {
                            icon: <Users className="w-8 h-8" />,
                            title: "¿Quiénes participan?",
                            description:
                                "Autoridades municipales, dirigentes vecinales, organizaciones sociales, instituciones públicas y privadas, jóvenes, estudiantes y ciudadanía en general.",
                        },
                        {
                            icon: <ShieldCheck className="w-8 h-8" />,
                            title: "Transparencia y participación",
                            description:
                                "La audiencia permite a los ciudadanos conocer cómo se utilizan los recursos públicos y participar activamente mediante consultas y opiniones.",
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative bg-white/70 backdrop-blur-xl border border-white/60 rounded-[32px] p-10 shadow-xl hover:-translate-y-2 transition-all duration-500"
                        >
                            <div className="w-20 h-20 rounded-3xl bg-green-600 text-white flex items-center justify-center shadow-2xl">
                                {item.icon}
                            </div>

                            <h3 className="mt-8 text-2xl font-black text-slate-900">
                                {item.title}
                            </h3>

                            <p className="mt-5 text-slate-600 leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* LAST AUDIENCE */}
                <div className="mt-24 grid lg:grid-cols-2 gap-10 items-center">
                    {/* LEFT */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <h3 className="mt-6 text-4xl font-black leading-tight text-slate-900">
                            Principales resultados de la audiencia pública 2025
                        </h3>

                        <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                            Durante la última audiencia pública se presentaron avances
                            importantes relacionados con infraestructura, limpieza
                            pública, seguridad ciudadana, programas sociales y
                            proyectos orientados al desarrollo urbano y sostenible de
                            Tambopata.
                        </p>

                        <div className="mt-10 space-y-5">
                            {[
                                "Presentación de proyectos ejecutados y en ejecución.",
                                "Mejoramiento de vías y espacios públicos.",
                                "Fortalecimiento de programas sociales y ambientales.",
                                "Participación activa de organizaciones y ciudadanos.",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-start gap-4"
                                >
                                    <div className="w-8 h-8 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0">
                                        <CheckCircle2 className="w-5 h-5" />
                                    </div>

                                    <p className="text-slate-700 font-medium">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-[40px] shadow-2xl border border-white/40">
                            <img
                                src="/audiencia1.jpg"
                                className="w-full h-[600px] object-cover"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-10">
                                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6">
                                    <h4 className="text-white text-2xl font-black">
                                        Audiencia Pública 2025
                                    </h4>

                                    <p className="mt-3 text-slate-200 leading-relaxed">
                                        Espacio de diálogo y transparencia para fortalecer
                                        la participación ciudadana y el desarrollo de
                                        Tambopata.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}