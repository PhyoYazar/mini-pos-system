export interface ApiControllerI {
  endpoint: string;
  params?: any;
  data?: any;
}

export interface SignalApiControllerI extends ApiControllerI {
  signal?: any;
}
