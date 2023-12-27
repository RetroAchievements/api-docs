<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# User Recent Unlocks

A call to this endpoint will retrieve a list of a target user's recently unlocked achievements, via their username. By default, it fetches achievements unlocked in the last hour.

[[toc]]

## On-site Representation

A user's recent unlocks can be found in a few places. It is most often seen on the user profile in the most recently played games:

![Last Games Played](/last-games-played.png)

The recent unlocks can also be found on the "Unlocked Achievements" page:

![Unlocked Achievements](/unlocked-achievements.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserRecentAchievements.php?u=Scott</SampleRequest>

### Query Parameters

| Name | Required? | Description                           |
| :--- | :-------- | :------------------------------------ |
| `z`  | Yes       | Your username.                        |
| `y`  | Yes       | Your web API key.                     |
| `u`  | Yes       | The target username.                  |
| `m`  |           | Minutes to look back. Defaults to 60. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementOfTheWeek,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userRecentAchievements = await getUserRecentAchievements(authorization, {
  userName: "xelnia",
});
```

:::

## Response

::: code-group

```json [HTTP Response]
[
  {
    "Date": "2023-12-27 16:04:50",
    "HardcoreMode": 1,
    "AchievementID": 98012,
    "Title": "Beginner I",
    "Description": "Clear stages 01 - 05 in Quest.",
    "BadgeName": "108302",
    "Points": 5,
    "Type": null,
    "Author": "jos",
    "GameTitle": "Pokemon Pinball mini",
    "GameIcon": "/Images/028399.png",
    "GameID": 14715,
    "ConsoleName": "Pokemon Mini",
    "BadgeURL": "/Badge/108302.png",
    "GameURL": "/game/14715"
  }
]
```

```json [NodeJS]
[
  {
    "date": "2023-05-23 22:32:24",
    "hardcoreMode": true,
    "achievementId": 51214,
    "title": "You're a special Champ!",
    "description": "Win the Tournament as [You] on Hard with 1 attribute on max. and 1 attribute on min.",
    "badgeName": "121991",
    "points": 25,
    "type": null,
    "author": "Som1",
    "gameTitle": "WWF King of the Ring",
    "gameIcon": "/Images/062599.png",
    "gameId": 6316,
    "consoleName": "Game Boy",
    "badgeUrl": "/Badge/121991.png",
    "gameUrl": "/game/6316"
  }
]
```

:::

## Source

| Repo                     | URL                                                                                                 |
| :----------------------- | :-------------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserRecentAchievements.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserRecentAchievements.ts         |
