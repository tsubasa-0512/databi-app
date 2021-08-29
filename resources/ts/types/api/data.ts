export type Data = {
  id: number;
  title: string;
  departure: string;
  arrival: string;
  purpose: {id: number, purpose: string}
  ;
  companions: string;
  api_token:string;
};