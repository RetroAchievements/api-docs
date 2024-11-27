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

    search: {
      provider: "algolia",
      options: {
        appId: "3QMK5TQHQC",
        apiKey: "a5d33ec313db5c671171ca35d3de3cea",
        indexName: "retroachievements-api-js",
      },
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
            link: "/v1/get-user-profile",
          },
          {
            text: "Unlocks (most recent)",
            link: "/v1/get-user-recent-achievements",
          },
          {
            text: "Unlocks (by date range)",
            link: "/v1/get-achievements-earned-between",
          },
          {
            text: "Unlocks (on date)",
            link: "/v1/get-achievements-earned-on-day",
          },
          {
            text: "Game Progress",
            link: "/v1/get-game-info-and-user-progress",
          },
          {
            text: "All Completion Progress",
            link: "/v1/get-user-completion-progress",
          },
          {
            text: "Awards / Badges",
            link: "/v1/get-user-awards",
          },
          {
            text: "Set Development Claims",
            link: "/v1/get-user-claims",
          },
          {
            text: "Game Rank and Score",
            link: "/v1/get-user-game-rank-and-score",
          },
          {
            text: "Point Totals",
            link: "/v1/get-user-points",
          },
          {
            text: "Specific Games Progress",
            link: "/v1/get-user-progress",
          },
          {
            text: "Recently Played Games",
            link: "/v1/get-user-recently-played-games",
          },
          {
            text: "Summary",
            link: "/v1/get-user-summary",
          },
          {
            text: "Completed Games",
            link: "/v1/get-user-completed-games",
          },
          {
            text: "Want to Play Games List",
            link: "/v1/get-user-want-to-play-list",
          },
          {
            text: "Followed Users List",
            link: "/v1/get-followed-users-list",
          },
          {
            text: "Follower Users List",
            link: "/v1/get-follower-users-list",
          },
        ],
      },
      {
        text: "Game",
        collapsible: true,
        items: [
          {
            text: "Summary",
            link: "/v1/get-game",
          },
          {
            text: "Extended Details",
            link: "/v1/get-game-extended",
          },
          {
            text: "Hashes",
            link: "/v1/get-game-hashes",
          },
          {
            text: "Achievement IDs",
            link: "/v1/get-achievement-count",
          },
          {
            text: "Unlocks Distribution",
            link: "/v1/get-achievement-distribution",
          },
          {
            text: "High Scores",
            link: "/v1/get-game-rank-and-score",
          },
        ],
      },
      {
        text: "Leaderboards",
        collapsible: true,
        items: [
          {
            text: "Leaderboards (by gameID)",
            link: "/v1/get-game-leaderboards",
          },
          {
            text: "Entries",
            link: "/v1/get-leaderboard-entries",
          },
        ],
      },
      {
        text: "System",
        collapsible: true,
        items: [
          {
            text: "All Systems",
            link: "/v1/get-console-ids",
          },
          {
            text: "All Games and Hashes",
            link: "/v1/get-game-list",
          },
        ],
      },
      {
        text: "Achievement",
        collapsible: true,
        items: [
          {
            text: "All Unlocks",
            link: "/v1/get-achievement-unlocks",
          },
        ],
      },
      {
        text: "Comment",
        collapsible: true,
        items: [
          {
            text: "Comments",
            link: "/v1/get-comments",
          },
        ],
      },
      {
        text: "Feed",
        collapsible: true,
        items: [
          {
            text: "All Recent Game Awards",
            link: "/v1/get-recent-game-awards",
          },
          {
            text: "Active Claims",
            link: "/v1/get-active-claims",
          },
          {
            text: "Inactive Claims",
            link: "/v1/get-claims",
          },
          {
            text: "Top Ten Ranked Users",
            link: "/v1/get-top-ten-users",
          },
        ],
      },
      {
        text: "Event",
        items: [
          {
            text: "Achievement of the Week",
            link: "/v1/get-achievement-of-the-week",
          },
        ],
      },
      {
        text: "Ticket",
        collapsible: true,
        items: [
          {
            text: "Get Ticket by ID",
            link: "/v1/get-ticket-data/get-ticket-by-id",
          },
          {
            text: "Get Most Ticketed Games",
            link: "/v1/get-ticket-data/get-most-ticketed-games",
          },
          {
            text: "Get Most Recent Tickets",
            link: "/v1/get-ticket-data/get-most-recent-tickets",
          },
          {
            text: "Get Game Ticket Stats",
            link: "/v1/get-ticket-data/get-game-ticket-stats",
          },
          {
            text: "Get Developer Ticket Stats",
            link: "/v1/get-ticket-data/get-developer-ticket-stats",
          },
          {
            text: "Get Achievement Ticket Stats",
            link: "/v1/get-ticket-data/get-achievement-ticket-stats",
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
