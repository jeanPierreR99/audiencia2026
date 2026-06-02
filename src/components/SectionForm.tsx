import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Loader,
} from "lucide-react";
import { useState } from "react";
import Swal from "sweetalert2";

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbw9Nz0owfxejZH94Rt2-4WbzkS6wcfxuXpxgnZwFxRbQNOaYdhx25Ayv2_jhy4zJG27sg/exec';

const Section = ({ title, children }: any) => (
    <div>
        <h4 className="text-sm font-black uppercase tracking-[0.2em] text-yellow-300 mb-5">
            {title}
        </h4>
        <div className="space-y-4">{children}</div>
    </div>
);

const InputField = ({ label, value, onChange }: any) => (
    <input
        placeholder={label}
        value={value}
        onChange={onChange}
        className="h-14 w-full rounded-2xl border border-white/10 bg-white/10 px-5 text-white placeholder:text-slate-400 outline-none focus:border-yellow-400 focus:ring-4 focus:ring-yellow-400/20 transition-all"
    />
);

const RadioGroup = ({ label, options, value, onChange }: any) => (
    <div>
        <p className="text-sm mb-2 text-slate-300">{label}</p>
        <div className="flex flex-wrap gap-3">
            {options.map((opt: any, i: number) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                    <input
                        type="radio"
                        name={label}
                        value={opt}
                        checked={value === opt}
                        onChange={(e) => onChange(e.target.value)}
                    />
                    {opt}
                </label>
            ))}
        </div>
    </div>
);

const CheckboxGroup = ({ label, options, value, onChange }: any) => (
    <div>
        <p className="text-sm mb-2 text-slate-300">{label}</p>
        <div className="grid md:grid-cols-2 gap-2">
            {options.map((opt: any, i: number) => (
                <label key={i} className="flex items-center gap-2 text-sm">
                    <input
                        type="checkbox"
                        checked={value.includes(opt)}
                        onChange={() => {
                            if (value.includes(opt)) {
                                onChange(value.filter((v: string) => v !== opt));
                            } else {
                                onChange([...value, opt]);
                            }
                        }}
                    />
                    {opt}
                </label>
            ))}
        </div>
    </div>
);

const SectionForm = () => {
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        // 1. Datos personales
        name: "",
        docType: "DNI",
        docNumber: "",
        age: "",
        address: "",
        email: "",
        phone: "",
        cellPhone: "",
        language: "",
        disability: "No",
        disabilityTypes: [] as string[],

        // 2. Organización
        orgName: "",
        ruc: "",
        orgAddress: "",
        orgType: "",

        // 3. Intervención
        participationType: "Asistente",
        topic: "",

        // 4. Normas
        acceptRules: "No",
    });


    const handleSubmit = async () => {

        if (!form.name || !form.docType || !form.docNumber || (!form.acceptRules || form.acceptRules == "No")) {
            Swal.fire({
                icon: "warning",
                title: "Campos obligatorios",
                text: "Completa nombre, tipo de documento, número y acepta las normas.",
            });
            return;
        }

        setLoading(true);

        const payload = {
            ...form,

            disabilityTypes:
                form.disabilityTypes.join(", "),

            createdAt:
                new Date().toISOString(),
        };


        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                Swal.fire({
                    icon: "success",
                    title: "Registro exitoso",
                    text: "Se registro correctamente sus datos",
                }).then((result) => {
                    if (result.isConfirmed) {
                        window.location.reload()
                    }
                });
                setForm(
                    {
                        // 1. Datos personales
                        name: "",
                        docType: "DNI",
                        docNumber: "",
                        age: "",
                        address: "",
                        email: "",
                        phone: "",
                        cellPhone: "",
                        language: "",
                        disability: "No",
                        disabilityTypes: [] as string[],

                        // 2. Organización
                        orgName: "",
                        ruc: "",
                        orgAddress: "",
                        orgType: "",

                        // 3. Intervención
                        participationType: "Asistente",
                        topic: "",

                        // 4. Normas
                        acceptRules: "No",
                    }
                );
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error al enviar",
                text: "Hubo un error al enviar el formulario. Por favor, inténtalo de nuevo.",
            }); console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative overflow-hidden py-40" id="participacion">
            {/* VIDEO BACKGROUND */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
            >
                <source
                    src="https://portal.munitambopata.gob.pe/storage/2025/noticias/1777381049881-850472320.mp4"
                    type="video/mp4"
                />
            </video>

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-[#02150d]/85" />

            {/* LIGHTS */}
            <div className="absolute top-0 left-0 w-[40rem] h-[40rem] bg-green-500/10 blur-[180px]" />

            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] bg-yellow-400/10 blur-[180px]" />

            {/* GRID */}
            <div className="relative z-10 max-w-[1725px] mx-auto px-6">
                <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-12 items-start">
                    {/* LEFT SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                    >

                        {/* TITLE */}
                        <h2 className="text-5xl lg:text-7xl font-black leading-[0.95] text-white">
                            Participa en la
                            <span className="block mt-3 text-yellow-300">
                                construcción de una Tambopata moderna
                            </span>
                        </h2>

                        {/* DESCRIPTION */}
                        <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-2xl">
                            Forma parte de este importante espacio de diálogo,
                            transparencia y participación ciudadana impulsado por
                            la Municipalidad Provincial de Tambopata.
                        </p>

                        {/* EVENT CARD */}
                        <div className="mt-14 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-2xl overflow-hidden">
                            {/* IMAGE */}
                            <div className="relative h-[420px] overflow-hidden">
                                <img
                                    src="/fondo.png"
                                    className="w-full h-full"
                                />
                            </div>

                            {/* INFO */}
                            <div className="p-8">
                                <div className="grid md:grid-cols-3 gap-5">
                                    {[
                                        {
                                            icon: Phone,
                                            title: "Teléfono",
                                            text: "(082) 000000",
                                        },
                                        {
                                            icon: Mail,
                                            title: "Correo",
                                            text: "mesadepartes@munitambopata.gob.pe",
                                        },
                                        {
                                            icon: MapPin,
                                            title: "Ubicación",
                                            text: "Puerto Maldonado",
                                        },
                                    ].map((item, index) => {
                                        const Icon = item.icon;

                                        return (
                                            <div
                                                key={index}
                                                className="rounded-3xl border border-white/10 bg-black/20 p-6 backdrop-blur-xl"
                                            >
                                                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl">
                                                    <Icon className="w-6 h-6 text-white" />
                                                </div>

                                                <h4 className="mt-5 text-lg font-black text-white">
                                                    {item.title}
                                                </h4>

                                                <p className="mt-2 text-sm text-slate-300 leading-relaxed truncate">
                                                    {item.text}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* FORM SIDE */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="relative"
                    >
                        <div className="overflow-hidden rounded-[40px] border border-white/10 bg-white/10 backdrop-blur-2xl shadow-[0_20px_100px_rgba(0,0,0,0.45)]">
                            {/* HEADER */}
                            <div className="relative border-b border-white/10 p-10 overflow-hidden">
                                <div className="absolute top-0 right-0 w-52 h-52 bg-yellow-400/10 rounded-full blur-3xl" />

                                <span className="uppercase tracking-[0.2em] text-xs font-bold text-yellow-300">
                                    Registro Oficial
                                </span>

                                <h3 className="mt-5 text-4xl font-black text-white leading-tight">
                                    Formulario de Participación
                                </h3>

                                <p className="mt-4 text-slate-300 leading-relaxed max-w-xl">
                                    Completa la información solicitada para registrar
                                    oficialmente tu participación en la Audiencia Pública.
                                </p>
                            </div>

                            {/* FORM */}
                            <div className="p-10 space-y-10 md:max-h-[850px] overflow-y-auto text-white">

                                {/* 1. DATOS PERSONALES */}
                                <Section title="Datos personales">

                                    <InputField
                                        label="Apellidos y Nombres"
                                        value={form.name}
                                        onChange={(e: any) =>
                                            setForm({ ...form, name: e.target.value })
                                        }
                                    />

                                    <div className="grid md:grid-cols-3 gap-4">
                                        <RadioGroup
                                            label="Tipo de documento"
                                            options={["DNI", "Carné de extranjería", "Otro"]}
                                            value={form.docType}
                                            onChange={(val: string) =>
                                                setForm({ ...form, docType: val })
                                            }
                                        />

                                        <InputField
                                            label="Número de documento"
                                            value={form.docNumber}
                                            onChange={(e: any) =>
                                                setForm({ ...form, docNumber: e.target.value })
                                            }
                                        />

                                        <InputField
                                            label="Edad"
                                            value={form.age}
                                            onChange={(e: any) =>
                                                setForm({ ...form, age: e.target.value })
                                            }
                                        />                                    </div>

                                    <InputField
                                        label="Dirección domiciliaria"
                                        value={form.address}
                                        onChange={(e: any) =>
                                            setForm({ ...form, address: e.target.value })
                                        }
                                    />

                                    <InputField
                                        label="Correo electrónico"
                                        value={form.email}
                                        onChange={(e: any) =>
                                            setForm({ ...form, email: e.target.value })
                                        }
                                    />
                                    <InputField
                                        label="Teléfono"
                                        value={form.phone}
                                        onChange={(e: any) =>
                                            setForm({ ...form, phone: e.target.value })
                                        }
                                    />
                                    <InputField
                                        label="Número de celular"
                                        value={form.cellPhone}
                                        onChange={(e: any) =>
                                            setForm({ ...form, cellPhone: e.target.value })
                                        }
                                    />
                                    <InputField
                                        label="Lengua materna Ejemplo. Español"
                                        value={form.language}
                                        onChange={(e: any) =>
                                            setForm({ ...form, language: e.target.value })
                                        }
                                    />

                                    <RadioGroup
                                        label="¿Requiere ajustes razonables para poder participar?"
                                        options={["Sí", "No"]}
                                        value={form.disability}
                                        onChange={(val: string) =>
                                            setForm({ ...form, disability: val })
                                        }
                                    />

                                    <CheckboxGroup
                                        label="Si requiere, indique el tipo"
                                        options={[
                                            "Movilidad reducida",
                                            "Visión reducida",
                                            "Audición reducida",
                                            "Otros"
                                        ]}
                                        value={form.disabilityTypes}
                                        onChange={(val: any) =>
                                            setForm({ ...form, disabilityTypes: val })
                                        }
                                    />
                                </Section>

                                {/* 2. ORGANIZACIÓN */}
                                <Section title="Organización / Institución (si aplica)">

                                    <InputField
                                        label="Nombre de la organización"
                                        value={form.orgName}
                                        onChange={(e: any) =>
                                            setForm({ ...form, orgName: e.target.value })
                                        }
                                    />
                                    <InputField
                                        label="R.U.C"
                                        value={form.ruc}
                                        onChange={(e: any) =>
                                            setForm({ ...form, ruc: e.target.value })
                                        }
                                    />
                                    <InputField
                                        label="Dirección"
                                        value={form.orgAddress}
                                        onChange={(e: any) =>
                                            setForm({ ...form, orgAddress: e.target.value })
                                        }
                                    />

                                    <RadioGroup
                                        label="Tipo de organización"
                                        options={[
                                            "Pública",
                                            "Privada",
                                            "Social / ONG",
                                            "Asociación / Comité / Fundación",
                                            "Empresa"
                                        ]}
                                        value={form.orgType}
                                        onChange={(val: string) =>
                                            setForm({ ...form, orgType: val })
                                        }
                                    />
                                </Section>

                                {/* 3. INTERVENCIÓN */}
                                <Section title="Intervención en la audiencia">

                                    <RadioGroup
                                        label="Modalidad de participación"
                                        options={[
                                            "Asistente",
                                            "Formulará propuestas u observaciones",
                                            "Preguntas escritas",
                                            "Pregunta verbal"
                                        ]}
                                        value={form.participationType}
                                        onChange={(val: string) =>
                                            setForm({ ...form, participationType: val })
                                        }
                                    />

                                    <textarea
                                        onChange={(e: any) =>
                                            setForm({ ...form, topic: e.target.value })
                                        }
                                        placeholder="Tema o pregunta de interés (solo uno)"
                                        className="w-full h-28 rounded-2xl border border-white/10 bg-white/10 p-4 text-white placeholder:text-slate-400"
                                    />
                                </Section>

                                {/* 4. DERECHOS Y OBLIGACIONES */}
                                <Section title="Aceptación de normas, derechos y obligaciones">
                                    <p className="text-sm">De acuerdo a la Ordenanza Municipal N° 009-2023-CMPT-SE, que aprueba el “Reglamento que regula la realización de las audiencias públicas de rendición de cuentas de la Municipalidad Provincial de Tambopata, los participantes de la audiencia pública de rendición de cuentas
                                        tienen los siguientes derechos:
                                    </p>
                                    <div className="text-sm text-slate-200 space-y-2 leading-relaxed">
                                        <p>• Participar en la audiencia pública de rendición de cuentas sin barreras que generen limitaciones por razones de discapacidad, vulnerabilidad o filiación política.
                                        </p>
                                        <p>• Hacer uso de la palabra para realizar preguntas o comentarios referentes a los temas                detallados en la agenda de rendición de cuentas.</p>
                                        <p>• Recibir información referente a los temas objeto de rendición de cuentas previo al desarrollo de la audiencia pública.</p>
                                        <p>• Respetar a los participantes</p>
                                    </div>

                                    <RadioGroup
                                        label="¿Acepta las normas de conducta?"
                                        options={["Sí", "No"]}
                                        value={form.acceptRules}
                                        onChange={(val: string) => {
                                            console.log(val)
                                            setForm({ ...form, acceptRules: val })
                                        }}
                                    />
                                </Section>

                                {/* BUTTON */}
                                <button onClick={handleSubmit} disabled={loading} className="group mt-6 relative overflow-hidden w-full h-16 rounded-2xl bg-gradient-to-r from-green-500 via-green-600 to-green-700 text-white font-black text-lg shadow-2xl transition-all duration-500 hover:scale-[1.02]">

                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                        {loading && <Loader className="animate-spin" />}
                                        Registrar Participación
                                    </span>
                                    <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-all duration-500 bg-gradient-to-r from-yellow-400 to-yellow-500" />
                                </button>

                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SectionForm;