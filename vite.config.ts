import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';


export default defineConfig({
  plugins: [
  tailwindcss(),
  react()],
  resolve: {
    alias: {
      src: path.resolve(__dirname, 'src'), // This line is key
    },
  },
});