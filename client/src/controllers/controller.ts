import axios from 'axios';
import type { SignalApiControllerI } from '../lib/interface/api';

export const apiController = async (para: SignalApiControllerI) => {
  const api = para.endpoint.split(':');

  const client = axios.request({
    method: api[0],
    url: api[1],
    params: para.params,
    data: para.data,
    signal: para.signal,
  });

  return await client.then((res) => res?.data && res.data).catch((error) => error);

  // return client;
};
