export default () => ({
  jwt: {
    refresh_secret: process.env.JWT_REFRESH_SECRET,
    access_secret: process.env.JWT_ACCESS_SECRET,
  },
});
