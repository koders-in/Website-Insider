import { JobClient } from "./api";

export const useFetchDataFromServer = () => {
  const fetchData = async (endpoint: any, setJobs) => {
    try {
      const res = await JobClient.get(endpoint);
      console.log(res);
      setJobs(res?.data);
      return res?.data;
    } catch (error) {
      setJobs(null);
    }
  };
  return fetchData;
};

export const useSetDataOnServer = () => {
  const setData = async (endpoint: string, payload: Object) => {
    try {
      return await JobClient.post(endpoint, { ...payload });
    } catch (error) {
      return null;
    }
  };
  return setData;
};
