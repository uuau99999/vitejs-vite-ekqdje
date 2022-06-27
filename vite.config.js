import path from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import ssr from 'vite-plugin-ssr/plugin';
import svgLoader from 'vite-svg-loader';

console.log(path.join(__dirname, 'assets/'));

// https://vitejs.dev/config/
export default defineConfig({
  // base: '/vitejs-vite-ekqdje/',
  base: '/test/',
  resolve: {
    alias: [
      {
        find: /^assets\//,
        replacement: path.join(__dirname, 'assets/'),
      },
    ],
  },
  plugins: [
    vue(),
    ssr(),
    svgLoader({
      svgoConfig: {
        plugins: [
          {
            name: 'preset-default',
            params: {
              overrides: {
                removeViewBox: false,
                collapseGroups: false,
              },
            },
          },
          'removeXMLNS',
        ],
      },
    }),
  ],
});
