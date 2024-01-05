import TsconfigPathsPlugin from "tsconfig-paths-webpack-plugin";
import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: [
    "../stories/Introduction.stories.mdx",
    // "../stories/guide/*.stories.@(mdx)",
    // "../stories/components/**/*.stories.@(mdx)",
    // "../stories/components/*.stories.@(mdx)",
    // "../stories/customHook/**/*.stories.@(mdx)",
    // "../stories/utils/**/*.stories.@(mdx)",
    "../stories/design/*.stories.@(mdx)",
    "../stories/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-mdx-gfm",
  ],
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        baseUrl: "../src",
        locale: "ko",
        lib: ["dom", "dom.iterable", "esnext"],
        allowJs: true,
        checkJs: true,
        skipLibCheck: true,
        strict: true,
        forceConsistentCasingInFileNames: true,
        noEmit: true,
        esModuleInterop: true,
        module: 99,
        moduleResolution: 3,
        resolveJsonModule: true,
        noImplicitAny: true,
        strictNullChecks: true,
        strictBindCallApply: true,
        alwaysStrict: true,
        allowUnusedLabels: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        verbatimModuleSyntax: true,
        assumeChangesOnlyAffectDirectDependencies: true,
        jsx: 2,
        target: 1,
        allowSyntheticDefaultImports: true,
        noFallthroughCasesInSwitch: true,
        removeComments: true,
        outDir: "dist",
        paths: {
          crypto: ["node_modules/crypto-js"],
        },
      },
      propFilter: prop =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  framework: "@storybook/react-webpack5",
  async webpackFinal(config, _) {
    if (config?.resolve) {
      config.resolve.plugins = config.resolve.plugins || [];
      config.resolve.plugins.push(
        new TsconfigPathsPlugin({
          extensions: config.resolve.extensions,
        })
      );
    }
    return config;
  },
  async babel(config, { configType }) {
    if (configType === "DEVELOPMENT") {
      // Your development configuration goes here
    }
    if (configType === "PRODUCTION") {
      // Your production configuration goes here.
    }
    return config;
  },
};

export default config;
