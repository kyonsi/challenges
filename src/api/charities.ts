import {useRequest} from './useRequest';
export type CharitiesItem = {
  "id": number;
  "name": string;
  "image": string;
  'currency': "THB";
};

export type CharitiesResponse = Array<CharitiesItem>

export const useCharitiesGetRequest = ()=>useRequest<
  CharitiesResponse, unknown
>(null)