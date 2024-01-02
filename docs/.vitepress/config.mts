import { defineConfig } from "vitepress";

/**
 * Try your best not to have any sidebar page titles wrap to a 2nd line.
 */

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RetroAchievements API",
  description:
    "The official documentation for how to get achievement, user, and game data from RetroAchievements.",

  themeConfig: {
    siteTitle: "API",
    logo: "/logo.webp",
    aside: false,

    algolia: {
      appId: "3QMK5TQHQC",
      apiKey: "a5d33ec313db5c671171ca35d3de3cea",
      indexName: "retroachievements-api-js",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RetroAchievements/api-docs",
      },
      {
        icon: "discord",
        link: "https://discord.gg/dq2E4hE",
      },
    ],

    nav: [{ text: "Quick Start", link: "/getting-started" }],

    sidebar: [
      {
        text: "About",
        link: "/",
      },
      {
        text: "Getting Started",
        link: "/getting-started",
      },
      {
        text: "User",
        collapsible: true,
        items: [
          {
            text: "Profile",
            link: "/v1/users/profile",
          },
          {
            text: "Unlocks (most recent)",
            link: "/v1/users/recent-achievements",
          },
          {
            text: "Unlocks (by date range)",
            link: "/v1/users/achievements-earned-between",
          },
          {
            text: "Unlocks (on date)",
            link: "/v1/users/achievements-earned-on-day",
          },
          {
            text: "Game Progress",
            link: "/v1/users/game-progress",
          },
          {
            text: "Awards / Badges",
            link: "/v1/users/user-awards",
          },
          {
            text: "Set Claims",
            link: "/v1/users/get-user-claims",
          },
          {
            text: "Completed Games",
            link: "/v1/users/get-user-completed-games",
          },
          {
            text: "Rank and Score for Game",
            link: "/v1/users/get-user-game-rank-and-score",
          },
          {
            text: "Point Totals",
            link: "/v1/users/get-user-points",
          },
          {
            text: "Progress for Multiple Games",
            link: "/v1/users/get-user-progress",
          },
          {
            text: "Recently Played Games",
            link: "/v1/users/get-user-recently-played-games",
          },
          {
            text: "User Summary",
            link: "/v1/users/get-user-summary",
          },
        ],
      },
      {
        text: "Game",
        collapsible: true,
        items: [
          {
            text: "Summary",
            link: "/v1/games/summary",
          },
          {
            text: "Extended Details",
            link: "/v1/games/detailed-info",
          },
          {
            text: "Achievement IDs",
            link: "/v1/games/achievement-ids",
          },
          {
            text: "Unlocks Distribution",
            link: "/v1/games/achievement-distribution",
          },
          {
            text: "High Scores",
            link: "/v1/games/high-scores",
          },
        ],
      },
      {
        text: "System",
        collapsible: true,
        items: [
          {
            text: "All Systems",
            link: "/v1/consoles/all-systems",
          },
          {
            text: "All Games and Hashes",
            link: "/v1/consoles/all-games",
          },
        ],
      },
      {
        text: "Achievement",
        collapsible: true,
        items: [
          {
            text: "Unlocks List",
            link: "/v1/achievements/get-achievement-unlocks",
          },
        ],
      },
      {
        text: "Feed",
        collapsible: true,
        items: [
          {
            text: "Claims",
            link: "/v1/feed/get-claims",
          },
          {
            text: "Active Claims",
            link: "/v1/feed/get-active-claims",
          },
          {
            text: "Top Ten Users",
            link: "/v1/feed/get-top-ten-users",
          },
        ],
      },
      {
        text: "Event",
        items: [
          {
            text: "Achievement of the Week",
            link: "/v1/events/achievement-of-the-week",
          },
        ],
      },
      {
        text: "Ticket",
        collapsible: true,
        items: [
          {
            text: "Get Ticket by ID",
            link: "/v1/tickets/get-ticket-by-id",
          },
          {
            text: "Get Most Ticketed Games",
            link: "/v1/tickets/get-most-ticketed-games",
          },
          {
            text: "Get Most Recent Tickets",
            link: "/v1/tickets/get-most-recent-tickets",
          },
          {
            text: "Get Game Ticket Stats",
            link: "/v1/tickets/get-game-ticket-stats",
          },
          {
            text: "Get Developer Ticket Stats",
            link: "/v1/tickets/get-developer-ticket-stats",
          },
          {
            text: "Get Achievement Ticket Stats",
            link: "/v1/tickets/get-achievement-ticket-stats",
          },
        ],
      },
    ],

    editLink: {
      pattern:
        "https://github.com/RetroAchievements/api-docs/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT license.",
      copyright: "Copyright © 2023–Present RetroAchievements.",
    },
  },
});
