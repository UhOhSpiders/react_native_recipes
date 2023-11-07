import { useState, useEffect } from "react";
import axios from "axios";
// import { RAPID_API_KEY } from '@env';

const rapidApiKey = process.env.RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const options = {
    method: "GET",
    url: `https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.request(options);

      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};
export default useFetch;
