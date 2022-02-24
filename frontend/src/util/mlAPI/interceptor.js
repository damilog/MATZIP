const interceptor = (instance, withAuth) => {
  instance.interceptors.request.use(
    (config) => {
      if (!withAuth) return config;
      const authToken = JSON.parse(localStorage.getItem('token'));

      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    (response) => {
      return response.data;
    },
    (error) => {
      console.error(error.message);
      return Promise.reject(error);
    },
  );
  return instance;
};

export default interceptor;
