import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'dark',
        value: '#0B0C10',
      },
      {
        name: 'light',
        value: '#c5c6c7',
      }
    ]
  }
}