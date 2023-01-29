import { GenericAbortSignal } from 'axios';

export interface ApiControllerI {
  endpoint: string;
  params?: any;
  data?: any;
  dep?: string[];
}

export interface SignalApiControllerI extends ApiControllerI {
  signal?: GenericAbortSignal | undefined;
}
