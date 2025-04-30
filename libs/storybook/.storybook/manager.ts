import { addons } from '@storybook/manager-api';
import storybookTheme from "./storybookTheme.js";

addons.setConfig({
  theme: storybookTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", "./favicon.ico");
document.head.appendChild(link);
