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

With web API key, you now have all you need to call any endpoint in the API.

```bash
curl https://retroachievements.org/API/API_GetTopTenUsers.php?&y=[your_key]
```

## Quick Start (Client Library)

| Platform / Language | Repo                                                                              |
| :------------------ | :-------------------------------------------------------------------------------- |
| NodeJS (JavaScript) | [`RetroAchievements/api-js`](https://github.com/RetroAchievements/api-js)         |
| JVM (Kotlin)        | [`RetroAchievements/api-kotlin`](https://github.com/RetroAchievements/api-kotlin) |

Currently, our official client libraries are for JavaScript/TypeScript/NodeJS and Kotlin.
Additional client libraries will be added in the future for other tech stacks and platforms.

To use one of our client libraries, you'll need to first install the package corresponding to your tech stack.
Then, you'll create an authentication object.
After these steps are completed, you are able to use any function provided by the library.

::: code-group

```bash [NodeJS]
npm install --save @retroachievements/api
```

```xml [Kotlin + Maven]
<!-- add the jitpack.io repository to your `pom.xml` </repositories> -->
<repository>
    <id>jitpack.io</id>
    <url>https://www.jitpack.io</url>
</repository>

<!-- Then you'll be able to import the kotlin library by adding the following dependency to your `pom.xml` </dependencies> -->
<dependency>
    <groupId>com.github.RetroAchievements</groupId>
    <artifactId>api-kotlin</artifactId>
    <version>1.0.1</version>
</dependency>
```

```groovy [Kotlin + Gradle]
// Add it in your root build.gradle at the end of repositories:
dependencyResolutionManagement {
    repositoriesMode.set(RepositoriesMode.FAIL_ON_PROJECT_REPOS)
    repositories {
        mavenCentral()
        maven { url 'https://jitpack.io' }
    }
}

// Add the dependency
dependencies {
    implementation 'com.github.RetroAchievements:api-kotlin:1.0.1'
}
```

<!-- EXAMPLE OF HOW TO ADD OTHER PLATFORMS
```bash [PHP]
composer setup @retroachievements/api
```
-->

:::

<br />

You can now create your authorization object using your RA username & web API key.

::: code-group

```ts [NodeJS]
import { buildAuthorization } from "@retroachievements/api";

const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

// access the api interface in `api`
```

:::

<br />

You now have all you need to use any function in the API.
Here's a basic example of how to access the API:

::: code-group

```ts [NodeJS]
import { getGame } from "@retroachievements/api";

// Each function takes this authorization object as its first argument. Here's an example:
// This returns basic metadata about the game on this page:
// https://retroachievements.org/game/14402
const game = await getGame(authorization, { gameId: 14402 });
```

```kotlin [Kotlin]
// This returns basic metadata about the game on this page:
// https://retroachievements.org/game/14402
val response: NetworkResponse<GetGame.Response, ErrorResponse> = api.getGame(
    gameId = 14402
)
```

:::
