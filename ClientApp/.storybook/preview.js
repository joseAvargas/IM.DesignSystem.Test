import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";

import '@angular/localize/init';

setCompodocJson(docJson);

export const parameters = {
  layout: 'centered',
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}