import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
        react(),
        copy({
          targets: [
            // Copiar la carpeta './assets/icons' y su contenido a './dist/assets/icons'
            { src: './src/assets/icons/**/*', dest: './dist/assets/icons', flatten: false },
            // Copiar la carpeta './assets/images' y su contenido a './dist/assets/images'
            { src: './src/assets/images/**/*', dest: './dist/assets/images', flatten: false },
            // Puedes agregar más targets si necesitas copiar más carpetas
          ],
          verbose: true, // Mostrar mensajes de copia en la consola
          hook: 'writeBundle'
        }),
  ],
})
