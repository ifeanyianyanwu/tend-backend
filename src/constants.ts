export default () => ({
  jwt: {
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    access_secret: process.env.JWT_ACCESS_SECRET,
    access_secret_expires_in: process.env.JWT_ACCESS_SECRET_EXPIRES_IN,
    refresh_secret_expires_in: process.env.JWT_REFRESH_SECRET_EXPIRES_IN,
  },
});
