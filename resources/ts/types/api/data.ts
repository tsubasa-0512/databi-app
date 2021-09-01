export type Data = {
  id: number;
  title: string;
  departure: string;
  arrival: string;
  purpose: {id: number, purpose: string};
  purpose_id: number;
  companions: {id: number, companion: string};
  api_token:string;
};