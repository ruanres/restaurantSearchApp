import { useState, useEffect } from 'react';
import yelp from '../api/yelp';

export default (id) => {
  const [result, setResult] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      setResult(response.data);
      setErrorMessage('');
    } catch (error) {
      setErrorMessage('Something went wrong!');
    }
  };

  useEffect(() => {
    if (id) searchApi();
  }, []);

  return [result, errorMessage];
};
