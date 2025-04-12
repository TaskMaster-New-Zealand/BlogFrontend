import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load environment variables from .env file based on the mode
  // This allows you to use different .env files for different environments
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
        '@components': resolve(__dirname, 'src/components'),
        '@pages': resolve(__dirname, 'src/pages'),
        '@services': resolve(__dirname, 'src/services'),
        '@hooks': resolve(__dirname, 'src/hooks'),
        '@utils': resolve(__dirname, 'src/utils'),
        '@assets': resolve(__dirname, 'src/assets'),
        '@styles': resolve(__dirname, 'src/styles'),
        '@types': resolve(__dirname, 'src/types'),
        '@contexts': resolve(__dirname, 'src/contexts'),
        '@api': resolve(__dirname, 'src/api')
      },
    },
    server: {
      /*proxy: {
         '/api': {
            target: 'https://blog-backend-wheat-one.vercel.app',
            changeOrigin: true,
            rewrite: (path) => path.replace(/^\/api/, ''),
          },
      },*/

    },
    build: {
      outDir: 'dist',
      sourcemap: true,
      // Configuración para reducir el tamaño del bundle
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['react', 'react-dom', 'react-router-dom'],
          },
        },
      },
      // Opciones para optimizar la construcción
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
    },
  };
});