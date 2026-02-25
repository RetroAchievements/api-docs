import "./styles.css";

import DefaultTheme from "vitepress/theme";
import type { Theme } from "vitepress";
import ConditionalCopyButtons from "./ConditionalCopyButtons.vue";
import { theme, useOpenapi } from "vitepress-openapi/client";
import "vitepress-openapi/dist/style.css";

import spec from "../../v2/retroachievements.json" with { type: "json" };

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    useOpenapi({
      spec,
    });

    theme.enhanceApp({ app });

    app.component("CopyOrDownloadAsMarkdownButtons", ConditionalCopyButtons);
  },
} satisfies Theme;
