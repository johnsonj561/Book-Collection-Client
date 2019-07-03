const getEnv = key => process.env[`REACT_APP_${key}`];

export default {
  getEnv,
};
