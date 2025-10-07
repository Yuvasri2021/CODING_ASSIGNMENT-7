export default ({ env }) => ({
  upload: {
    config: {
      provider: 'local',
      providerOptions: {
        sizeLimit: 100 * 1024 * 1024, // 100MB
      },
      breakpoints: {
        large: 1000,
        medium: 750,
        small: 500,
        thumbnail: 64,
      },
    },
  },
});
