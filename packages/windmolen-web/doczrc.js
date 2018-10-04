import { babel } from 'docz-plugin-babel6';
import { css } from 'docz-plugin-css';

export default {
  src: './src',
  dest: '.docz/dist',
  base: '/',
  plugins: [
    babel(),
    css()
  ],

  themeConfig: {
    styles: {
      container: {
        width: '100%',
      },
    },
  },

  modifyBundlerConfig: (config) => {
    // add windmolen.css to `entry`
    const entry = ['./src/windmolen.css', ...config.entry.app.slice()];
    config.entry.app = entry;

    return config;
  }
};
