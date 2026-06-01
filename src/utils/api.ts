import axios from "axios";
import type { ISuscription } from "../interface/ISuscription";

export const API_BASE = "https://presupuestoparticipativo.munitambopata.gob.pe/api/suscripciones"
// export const API_BASE = "http://192.168.0.218:3000/api"

const api = axios.create({
    baseURL: API_BASE,
    headers: {
        "Content-Type": "application/json",
    },
});

export const API = {
    //SIGA
    saveSuscription: async (data: ISuscription) => {
        const response: any = await api.post(`/presupuesto`, data);
        return response.data.data
    },
}
