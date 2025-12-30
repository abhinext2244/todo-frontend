import axios from "axios";

export const axiosInstance = axios.create({
  withCredentials: true,
});

export const apiConnector = (
  method,
  url,
  bodydata = null,
  headers = {},
  params = {}
) => {
  return axiosInstance({
    method,
    url,
    data: bodydata,
    headers,
    params,  
  });
};
