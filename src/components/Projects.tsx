import { motion } from "framer-motion";
import {
  ArrowRight,
  MapPinned,
  CalendarDays,
  Building2,
} from "lucide-react";

const projects = [
  {
    title: "Infraestructura Vial",
    description:
      "Mejoramiento de la infraestructura vehÍcular y peatonal de la Av. Universitaria de la ciudad de Puerto Maldonado del distrito de Tambopata - provincia de Tambopata - departamento de Madre de Dios.",
    image:
      "https://portal.munitambopata.gob.pe/storage/2025/noticias/1779799436642-931498863.jpg",
    year: "2026",
    category: "Obra Pública",
  },
  {
    title: "Espacios Públicos",
    description:
      "Recuperación y modernización de parques y espacios recreativos para promover integración social.",
    image:
      "https://portal.munitambopata.gob.pe/storage/2025/noticias/1778701065036-249201262.jpg",
    year: "2026",
    category: "Desarrollo Urbano",
  },
  {
    title: "Desarrollo Social",
    description:
      "Programas orientados al bienestar social, salud comunitaria y fortalecimiento educativo.",
    image:
      "https://portal.munitambopata.gob.pe/storage/2025/noticias/1778249040244-920040152.jpeg",
    year: "2026",
    category: "Inclusión Social",
  },
];

const Projects = () => {
  return (
    <section
      id="obras"
      className="relative py-36 "
    >
      <div className="relative z-10 max-w-[1725px] mx-auto px-6">
        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
          <div className="max-w-4xl">
            <motion.span
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full font-bold text-sm"
            >
              <Building2 className="w-4 h-4" />
              Obras y Proyectos
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mt-6 text-5xl lg:text-6xl font-black leading-tight text-slate-900"
            >
              Proyectos que impulsan el
              <span className="text-yellow-500">
                {" "}
                desarrollo provincial
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl text-xl leading-relaxed text-slate-600"
          >
            Obras orientadas al fortalecimiento urbano,
            inclusión social y mejora de la calidad de vida de
            los ciudadanos de Tambopata.
          </motion.p>
        </div>

        {/* PROJECTS */}
        <div className="mt-24 space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              className="group relative overflow-hidden rounded-[40px] bg-white/70 backdrop-blur-2xl border border-white/60 shadow-2xl"
            >
              <div
                className={`grid lg:grid-cols-2 ${index % 2 !== 0
                    ? "lg:[&>*:first-child]:order-2"
                    : ""
                  }`}
              >
                {/* IMAGE */}
                <div className="relative h-[430px] md:h-auto overflow-hidden">
                  <img
                    src={project.image}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                  {/* FLOAT TAG */}
                  <div className="absolute top-8 left-8 flex items-center gap-3">
                    <div className="bg-white/10 backdrop-blur-xl border border-white/20 text-white px-5 py-2 rounded-full text-sm font-bold">
                      {project.category}
                    </div>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="relative p-10 flex flex-col justify-center">
                  {/* NUMBER */}
                  <div className="absolute top-8 right-8 text-[90px] font-black text-slate-100 leading-none">
                    0{index + 1}
                  </div>

                  {/* META */}
                  <div className="flex flex-wrap items-center gap-5 text-sm font-semibold text-slate-500">
                    <div className="flex items-center gap-2">
                      <CalendarDays className="w-4 h-4" />
                      {project.year}
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPinned className="w-4 h-4" />
                      Tambopata
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3 className="mt-8 text-4xl relative lg:text-5xl font-black leading-tight text-slate-900">
                    {project.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-8 text-lg leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  {/* BUTTON */}
                  <a href="https://portal.munitambopata.gob.pe/comunicacion/noticias" target="_blank" className="group/btn cursor-pointer mt-10 w-fit flex items-center gap-3 bg-yellow-500 hover:bg-yellow-600 text-white px-8 py-4 rounded-2xl font-bold transition-all duration-300">
                    Ver Proyecto

                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-all" />
                  </a>

                  {/* LINE */}
                  <div className="mt-10 w-24 h-1 rounded-full bg-gradient-to-r from-green-600 to-yellow-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;