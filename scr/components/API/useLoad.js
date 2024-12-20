import { useState, useEffect } from "react";
import API from "./API";

const useLoad = (loadEndpoint) => {
  // State ----------------------------------
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Loader ---------------------------------
  const loadRecords = async (endpoint) => {
    setIsLoading(true);
    const response = await API.get(endpoint);
    setIsLoading(false);
    if (response.isSuccess) setRecords(response.result);
  };

  useEffect(() => {
    loadRecords(loadEndpoint);
  }, []);

  // Return ---------------------------------
  return [records, setRecords, isLoading, loadRecords];
};

export default useLoad;
