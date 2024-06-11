import axiosInstance from "./axios.config";

const ApiService = {
  get: async (path: string, params?: string) => {
    const { data } = await axiosInstance.get(path, { params });

    return data;
  },
  post: async (path: string, params?: string) => {
    const { data } = await axiosInstance.post<ResponseType>(path, params);

    return data;
  },
  patch: async (path: string, params?: string) => {
    const { data } = await axiosInstance.patch<ResponseType>(path, params);

    return data;
  },
  put: async (path: string, params?: string) => {
    const { data } = await axiosInstance.put<ResponseType>(path, params);

    return data;
  },
  delete: async (path: string, params?: string) => {
    const { data } = await axiosInstance.delete<ResponseType>(path, { params });

    return data;
  },
};

export default ApiService;