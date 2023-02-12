import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url, accessToken) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    message: "",
  });

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const response = await axios.get(url, {
        headers: {
           Authorization: accessToken,
           }
          }
        )
        setData(response.data.todaySchedule.kolegiji);
      } catch (error) {
        setError({
          isError: true,
          message: error.message,
        });
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [accessToken, url]);

  const reFetch = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url, {
        headers: {
           Authorization: accessToken,
           }
          });
      setData(response.data.todaySchedule.kolegiji);
      console.log("data");
    } catch (error) {
      console.log(error)
      setError({
        isError: true,
        message: error.message,
      });
    } finally {
      setLoading(false);
    }
  };
  return { data, loading, error, reFetch };
};
export default useFetch;