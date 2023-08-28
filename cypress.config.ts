import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents() {
      // implement node event listeners here
    },
  },
  video: false,
  env: {
    API_HOST: process.env.NEXT_PUBLIC_API_URL,
  },
});
