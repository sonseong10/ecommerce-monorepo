import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: [
    '../src/**/IntroDocs.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-themes',
    '@storybook/theming',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
  staticDirs: ['../public'],
  core: {
    builder: '@storybook/builder-vite',
  },

  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: ['styled-components'],
      },
    });
  },
};

export default config;
