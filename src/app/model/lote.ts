import { Especies } from "./especies";
import { Proveedor } from "./proveedor";
import { UnidadProductiva } from "./unidad-productiva";

export class Lote {
    id: number;
    nombreLote: string;
    fechaSiembra : Date;
    diasDeSiembra: number;
    animalesInicial: string;
    numeroAnimales: string;
    proveedor: Proveedor;
    unidadProductiva: UnidadProductiva;
    especies: Especies;

    }
    