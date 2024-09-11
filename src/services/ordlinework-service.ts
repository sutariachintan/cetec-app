import create from "./http-service";

export interface ordlinework {
  id: string;
  badge: string;
  order:string;
  prcpart: string;
  workCenter: string;
}

export default create('/api/ordlinework/?user_id=2&preshared_token=ncp4ZMB%21azx5fmc%2Afuj');