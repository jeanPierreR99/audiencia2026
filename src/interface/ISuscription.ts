// types/registration.types.ts

export type ZoneType = "CERCADO" | "KM" | "OTROS";
export type Gender = "M" | "F";

export interface ISuscription {
    // =========================
    // ORGANIZATION DATA
    // =========================
    organizationName?: string;
    foundationYears?: number | null;
    registrationNumber?: string;
    locationName?: string;
    zone?: ZoneType;

    // =========================
    // TITULAR PARTICIPANT
    // =========================
    titularFullName: string;
    titularPosition: string;
    titularGender: Gender;
    titularBirthDate: string;
    titularDni: string;
    titularEmail?: string;
    titularEducationLevel: string;
    titularParticipatedBefore: boolean;
    titularParticipationYear?: number | null;

    // =========================
    // SUPLENTE PARTICIPANT
    // =========================
    suplenteFullName?: string;
    suplentePosition?: string;
    suplenteGender?: Gender;
    suplenteBirthDate?: string;
    suplenteDni?: string;
    suplenteEmail?: string;
    suplenteEducationLevel?: string;
    suplenteParticipatedBefore?: boolean;
    suplenteParticipationYear?: number | null;
}