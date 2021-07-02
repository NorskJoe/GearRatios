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
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: rgb(11, 12, 16),
      },
      {
        name: 'light',
        value: rgb(197, 198, 199),
      }
    ]
  }
}