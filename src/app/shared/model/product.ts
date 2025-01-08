import { Observable } from "rxjs";

export interface Iproduct{
  id: string;
    name: string;
    brand: string;
    price: number;
    offerprice: number;
    image: string;
    isAvailable: boolean;
    rating: number;
    noofitem: number;
    pstatus: string;
    canreturn: number;
}

export interface IcanDeactivatecomp{
  canDeactivate:() => boolean | Promise<boolean> | Observable<boolean>
}
