import { useEffect, useState } from 'react';

import { apiController } from '../controllers';
import type { ApiControllerI } from '../lib/interface/api';

const useAxios = <T,>(apiData: ApiControllerI) => {
  const [data, setData] = useState<T>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();

    (async (): Promise<void> => {
      setIsLoading(true);

      try {
        const res: T = await apiController({
          endpoint: apiData.endpoint,
          params: apiData.params,
          data: apiData.data,
          signal: controller.signal,
        });

        setData(res);
        setError('');
        //
      } catch (error: any) {
        if (error.name === 'CanceledError' || error.name === 'AbortError') {
          // canceled API
          //
        } else {
          setError(error.message);
        }
        //
      } finally {
        setIsLoading(false);
      }
    })();

    return () => {
      controller.abort();
    };
  }, []);

  return { data, isLoading, error };
};

export default useAxios;
