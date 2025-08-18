import "./styles.css";

import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import ConditionalCopyButtons from "./ConditionalCopyButtons.vue";

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component("CopyOrDownloadAsMarkdownButtons", ConditionalCopyButtons);
  },
} satisfies Theme;
