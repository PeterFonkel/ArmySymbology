import { Rol } from "./Rol";

export interface Usuario {
    nombre: string;
    id: string;
    email: string;
    roles: Rol[];
}
