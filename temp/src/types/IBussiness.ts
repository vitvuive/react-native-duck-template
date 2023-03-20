interface IVenues {
  id: number;
  name: string;
}

export interface IBusiness {
  id: number;
  name: string;
  venues: IVenues[];
}
