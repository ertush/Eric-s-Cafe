import 'dotenv/config';

export default {
  name: 'Eric Cafe',
  version: '1.0.0',
  extra: {
    apiKey: process.env.GOOGLE_MAPS_API_KEY,
  },
};
