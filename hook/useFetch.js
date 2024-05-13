import React, { useState, useEffect } from "react";
import axios from "axios";
import { RAPID_API_KEY } from "@env";

// rapid api key
const rapidApiKey = RAPID_API_KEY;

// fetch data from api
const useFetch = (endpoint, query) => {
  
  // keep track of data, loading and error
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // api options
  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": rapidApiKey,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: { ...query },
  };

  // fetch data
  const fetchData = async () => {
    
    // set loading to true
    setIsLoading(true);

    try {
      // request data
      const response = await axios.request(options);

      // set data
      setData(response.data.data);
    } catch (error) {
      // handle api fetch errors
      setError(error);
      console.log(error);
    } finally {
      // set loading to false
      setIsLoading(false);
    }
  };

  // fetch data on load
  useEffect(() => {
    fetchData();
  }, []);

  // refetch data if needed
  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
  
};

export default useFetch;
