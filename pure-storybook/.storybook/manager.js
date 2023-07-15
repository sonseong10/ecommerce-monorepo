import { addons } from "@storybook/addons";
import storybookTheme from "./storybookTheme";
import favicon from "./favicon-32x32.png";

addons.setConfig({
  theme: storybookTheme,
});

const link = document.createElement("link");
link.setAttribute("rel", "shortcut icon");
link.setAttribute("href", favicon);
document.head.appendChild(link);
