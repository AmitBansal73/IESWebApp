import { environment } from "src/environments/environment";

export class CONSTANTS {
    //public static API_URL: string = 'http://localhost:61536/';
  public static API_URL: string = environment.apiUrl;
   
    collegeName: string;
    StreamCount:number;
    //UnivID:number;
    }