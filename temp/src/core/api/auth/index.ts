import request from '@/core/request';
import { IBusiness } from '@/types/IBussiness';

export interface IBodyLogin {
  auth: {
    email: string;
    password: string;
  };
}

export interface IResponseLogin {
  api_token: string;
  avatar_url: string;
  business: IBusiness;
  confirmed: boolean;
  email: string;
  id: number;
  is_confirmed: boolean;
  is_employee: boolean;
  is_manager: null;
  is_staff: boolean;
  name: string;
  phone_number: null | string;
  unconfirmed_email: string;
}

interface IBookingParam {
  venue_id: number;
  from_day: string;
  to_day: string;
}

const authApi = {
  login: (body: IBodyLogin) => {
    return request.post<IResponseLogin>('/api/v1/auth/login', body);
  },
  getTicketByDate: () =>
    request.get(
      '/api/v1/tickets?venue_id=1154&from_day=18-02-2023&to_day=18-02-2023&status[0]=pending&status[1]=new&status[2]=done',
    ),
  logout: () => {
    return request.post('path');
  },
};
export default authApi;
