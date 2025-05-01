import React from "react";
import { useState, useEffect } from "react";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    if (url) {
      fetchData();
    }
  }, [url]);

  return { data, error, loading };
};

export default useFetch;
