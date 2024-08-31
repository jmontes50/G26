import { useState } from 'react';
import axios from 'axios';

const useAxios = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const executeRequest = async (url, method, data, config) => {
    setLoading(true);
    try {
      const response = await axios[method](url, data, config);
      setData(response.data);
      setError(null);
      setLoading(false);
    } catch (err) {
      setError(err);
      setData(null);
      setLoading(false);
    }
  };

  return { data, error, loading, executeRequest };
};

export default useAxios;
