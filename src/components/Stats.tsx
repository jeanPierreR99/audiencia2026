import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Landmark,
  MapPinned,
  Sparkles,
} from "lucide-react";

const stats = [
  {
    number: "+120",
    label: "Obras Ejecutadas",
    description:
      "Proyectos desarrollados para fortalecer la infraestructura y el desarrollo urbano.",
    icon: Building2,
  },
  {
    number: "+35K",
    label: "Ciudadanos Beneficiados",
    description:
      "Vecinos y familias alcanzadas mediante programas y servicios municipales.",
    icon: Users,
  },
  {
    number: "S/. 25M",
    label: "Inversión Pública",
    description:
      "Recursos destinados a obras, programas sociales y desarrollo sostenible.",
    icon: Landmark,
  },
  {
    number: "+80",
    label: "Organizaciones Participantes",
    description:
      "Instituciones y organizaciones que forman parte de la participación ciudadana.",
    icon: MapPinned,
  },
];

const Stats = () => {
  return (
    <section className="relative py-32 overflow-hiddsen">
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-100 blur-[160px]" />

       </div>

      <div className="relative z-10 max-w-[1725px] mx-auto px-6">
        {/* HEADER */}
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-bold text-sm"
          >
            <Sparkles className="w-4 h-4" />
            Resultados de Gestión
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-slate-900"
          >
            Avances que impulsan el
            <span className="text-yellow-500">
              {" "}
              desarrollo de Tambopata
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-8 text-xl leading-relaxed text-slate-600"
          >
            La gestión municipal viene ejecutando proyectos,
            inversiones y programas orientados a mejorar la calidad
            de vida de la población y fortalecer el desarrollo
            sostenible de la provincia.
          </motion.p>
        </div>

        {/* STATS */}
        <div className="mt-20 grid md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -10,
                }}
                className="group relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/60 rounded-[32px] p-10 shadow-xl transition-all duration-500"
              >
                {/* Glow */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                {/* ICON */}
                <div className="relative w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-500 to-yellow-300 text-white flex items-center justify-center shadow-2xl">
                  <Icon className="w-9 h-9" />
                </div>

                {/* NUMBER */}
                <h3 className="relative mt-10 text-5xl font-black tracking-tight text-slate-900">
                  {item.number}
                </h3>

                {/* LABEL */}
                <p className="relative mt-4 text-2xl font-bold text-slate-800 leading-snug">
                  {item.label}
                </p>

                {/* DESCRIPTION */}
                <p className="relative mt-5 text-slate-600 leading-relaxed">
                  {item.description}
                </p>

                {/* LINE */}
                <div className="relative mt-8 w-16 h-1 rounded-full bg-gradient-to-r from-green-600 to-yellow-400" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;