import request from '@/core/request';

const venueApi = {
  getTicketByDate: () =>
    request.get(
      '/api/v1/tickets?venue_id=1154&from_day=18-02-2023&to_day=18-02-2023&status[0]=pending&status[1]=new&status[2]=done',
    ),

  getCategory: (venue_id: number) =>
    request.get(`/api/v1/venues/${venue_id}/asset_categories`),
};
export default venueApi;
