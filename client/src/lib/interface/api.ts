export interface ApiControllerI {
  endpoint: string;
  params?: any;
  data?: any;
  dep?: string[];
}

export interface SignalApiControllerI extends ApiControllerI {
  signal?: any;
}
