import { useState, useEffect } from 'react';
import axios from 'axios';

export const STATES = {
  INIT: 'INIT',
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
};

export function useApi(url) {
  const [state, setState] = useState({ status: STATES.INIT });

  useEffect(() => {
    if (!url) return;

    const cancelToken = axios.CancelToken;
    const source = cancelToken.source();

    setState({ status: STATES.LOADING });

    axios
      .get(url, { cancelToken: source.token })
      .then((response) => {
        setState({ status: STATES.SUCCESS, data: response.data.data });
      })
      .catch((error) => {
        if (axios.isCancel(error)) return 'request canceled';
        setState({ status: STATES.ERROR, error: error.message });
      });

    return () => source.cancel('request canceled');
  }, [url]);

  return state;
}
