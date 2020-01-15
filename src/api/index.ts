import useSWR, { ConfigInterface, responseInterface } from 'swr';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError, AxiosPromise } from 'axios';

export type RequestConfig = AxiosRequestConfig | null;

interface Return<Data, Error>
  extends Pick<
    responseInterface<AxiosResponse<Data>, AxiosError<Error>>,
    'isValidating' | 'revalidate' | 'error'
  > {
  data: Data | undefined;
  response: AxiosResponse<Data> | undefined;
}

export interface Config<Data = unknown, Error = unknown>
  extends Omit<ConfigInterface<AxiosResponse<Data>, AxiosError<Error>>, 'initialData'> {
  initialData?: Data;
}

export const client = <Data = unknown>(config: RequestConfig): AxiosPromise<AxiosResponse<Data>> =>
  axios(config || {});

export const useRequest = <Data = unknown, Error = unknown>(
  request: RequestConfig,
  { initialData, ...config }: Config<Data, Error> = {}
): Return<Data, Error> => {
  const { data: response, error, isValidating, revalidate } = useSWR<
    AxiosResponse<Data>,
    AxiosError<Error>
  >(request && request.url, () => axios(request || {}), {
    ...config,
    initialData: initialData && {
      status: 200,
      statusText: 'InitialData',
      config: request,
      headers: {},
      data: initialData
    }
  });

  return {
    data: response && response.data,
    response,
    error,
    isValidating,
    revalidate
  };
};
