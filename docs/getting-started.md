# Getting Started

The RetroAchievements API allows developers to access a wealth of data from the RetroAchievements platform, including information about games, users, and achievements. This page covers the primary ways to interact with the API: making direct HTTP requests or using a client library.

[[toc]]

## Get Your Web API Key

You will need a web API key. To get one, follow these steps:

1. While authenticated, visit [your control panel](https://retroachievements.org/controlpanel.php) on the RetroAchievements website.
2. Find the "Keys" section on the page. Copy the web API key value.

![Your API Key](/controlpanelkey.png)

::: warning
Store your API key as though it is a secret, like a password. Avoid checking in your API key with your code.
:::

## Quick Start (HTTP Requests)

With your username and web API key, you now have all you need to call any endpoint in the API.

```bash
curl https://retroachievements.org/API/API_GetTopTenUsers.php?z=[your_username]&y=[your_key]
```

## Quick Start (Client Library)

| Platform / Language | Repo                                                                      |
| :------------------ | :------------------------------------------------------------------------ |
| NodeJS (JavaScript) | [`RetroAchievements/api-js`](https://github.com/RetroAchievements/api-js) |

Currently, our only official client library is for JavaScript/TypeScript/NodeJS. Additional client libraries will be added in the future for other tech stacks.

To use our client library, you'll need to first install the package. Then, you'll create an authentication object. After these steps are completed, you are able to use any function provided by the library.

::: code-group

```bash [NodeJS]
npm install --save @retroachievements/api
```

<!-- EXAMPLE OF HOW TO ADD OTHER PLATFORMS
```bash [PHP]
composer setup @retroachievements/api
```
-->

:::

<br />

You can now create your authorization object using your web API key.

::: code-group

```ts [NodeJS]
import { buildAuthorization } from "@retroachievements/api";

const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });
```

:::

<br />

You now have all you need to use any function in the API. Each function takes this authorization object as its first argument. Here's an example:

::: code-group

```ts [NodeJS]
import { getGame } from "@retroachievements/api";

// This returns basic metadata about the game on this page:
// https://retroachievements.org/game/14402
const game = await getGame(authorization, { gameId: 14402 });
```

:::
