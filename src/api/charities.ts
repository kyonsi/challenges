import { useRequest } from '.';

export type Currency = 'THB';
export type CharitiesItem = {
  id: number;
  name: string;
  image: string;
  currency: Currency;
};

export type CharitiesResponse = CharitiesItem[];

export const useCharitiesGetRequest = () =>
  useRequest<CharitiesResponse, Error>({
    url: 'http://localhost:3001/charities'
  });
