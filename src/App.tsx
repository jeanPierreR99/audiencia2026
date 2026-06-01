import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Pillars from "./components/Pillars";
import Projects from "./components/Projects";
import Testimonial from "./components/Testimonial";
import SectionForm from "./components/SectionForm";
import AboutAudience from "./components/AboutAudience";

export default function App() {

  return (
    <div className="bg-[#f7fafc] text-slate-900 overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-green-100 blur-[180px]" />

        <div className="absolute top-[30%] right-0 w-[600px] h-[600px] bg-yellow-100 blur-[180px]" />

        <div className="absolute bottom-0 left-[30%] w-[600px] h-[600px] bg-green-100 blur-[180px]" />
      </div>

      <header className="fixed shadow bg-white! top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/40">
        <div className="max-w-[1725px] mx-auto px-6 h-24 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="/logo-solo.png"
              className="w-16"
            />

            <div>
              <h2 className="font-black text-lg leading-tight">
                Municipalidad Provincial de Tambopata
              </h2>

              <p className="text-sm text-slate-500">
                Audiencia Pública 2026
              </p>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-sm font-bold text-slate-700">
            <a href="#inicio" className="hover:text-green-600 transition">
              Inicio
            </a>

            <a href="#audiencia" className="hover:text-green-600 transition">
              Qué es la audiencia
            </a>

            <a href="#gestion" className="hover:text-green-600 transition">
              Gestión
            </a>

            <a href="#obras" className="hover:text-green-600 transition">
              Obras
            </a>

            <a href="#participacion" className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition-all">
              Registrarse
            </a>
          </div>
        </div>
      </header>

      <Hero />
      <AboutAudience />
      <Stats />
      <Pillars />
      <Projects />
      <Testimonial />
      <SectionForm />

      {/* FOOTER */}
      <footer className="relative overflow-hidden bg-[#141a16] text-white">
        {/* Background Effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-green-600/10 blur-[120px]" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-green-700/10 blur-[120px]" />
        </div>

        <div className="relative z-10 border-t border-white/10">
          <div className="max-w-[1725px] mx-auto px-6 py-16">
            <div className="grid lg:grid-cols-3 gap-14">
              {/* BRAND */}
              <div>
                <div className="flex items-center gap-5">
                  <img
                    src="/logo-solo.png"
                    className="w-24 drop-shadow-2xl"
                  />

                  <div>
                    <h2 className="text-2xl font-black leading-tight font-[Poppins]">
                      Municipalidad Provincial de Tambopata
                    </h2>

                    <p className="text-slate-400 mt-2">
                      Audiencia Pública 2026
                    </p>
                  </div>
                </div>

                <p className="mt-8 text-slate-400 leading-relaxed">
                  Espacio oficial de participación ciudadana donde se presentan
                  los avances, proyectos y resultados de gestión orientados al
                  desarrollo sostenible de la provincia de Tambopata.
                </p>
              </div>

              {/* CONTACT */}
              <div>
                <h3 className="text-lg font-black uppercase tracking-[0.2em] text-yellow-400">
                  Contacto
                </h3>

                <div className="mt-8 space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      📍
                    </div>

                    <div>
                      <p className="font-bold">Dirección</p>

                      <p className="text-slate-400">
                        Av. León Velarde N° 123 - Puerto Maldonado
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      ☎️
                    </div>

                    <div>
                      <p className="font-bold">Teléfono</p>

                      <p className="text-slate-400">
                        (082) 000000
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                      ✉️
                    </div>

                    <div>
                      <p className="font-bold">Correo Electrónico</p>

                      <p className="text-slate-400">
                        informes@munitambopata.gob.pe
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* LINKS */}
              <div>
                <h3 className="text-lg font-black uppercase tracking-[0.2em] text-yellow-400">
                  Enlaces
                </h3>

                <div className="mt-8 flex flex-col gap-4">
                  {[
                    "Portal Institucional",
                    "Transparencia",
                    "Participación Ciudadana",
                    "Mesa de Partes",
                    "Audiencia Pública",
                  ].map((item, index) => (
                    <a
                      key={index}
                      href="https:portal.munitambopata.gob.pe"
                      target="_blank"
                      className="text-slate-400 hover:text-white transition-all hover:translate-x-2 duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* BOTTOM */}
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col lg:flex-row gap-6 items-center justify-between">
              <p className="text-sm text-slate-500 text-center lg:text-left">
                © 2026 Municipalidad Provincial de Tambopata. Todos los
                derechos reservados.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-slate-500 text-center">
                <span>Oficina de Tecnologías de la Información</span>

                <span className="hidden lg:block">•</span>

                <span>Gobierno Local Transparente y Moderno</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}