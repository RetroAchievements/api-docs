<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# User Completed Games

::: warning

This endpoint is considered "legacy". The [Completion Progress](/v1/users/completion-progress) endpoint will almost always be a better fit for your use case.

:::

A call to this endpoint will retrieve completion metadata about the games a given user has played. It returns two entries per each game: one for the softcore completion and one for the hardcore completion. These are designated by the `hardcoreMode` property on each completion object.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserCompletedGames.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
| :--- | :-------- | :------------------- |
| `z`  | Yes       | Your username.       |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getUserCompletedGames,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userCompletedGames = await getUserCompletedGames(authorization, {
  userName: "MaxMilyin",
});
```

:::

## Response

::: code-group

```json [HTTP Response]
[
  {
    "GameID": 19921,
    "Title": "Mega Man: Powered Up [Subset - 468 Stages]",
    "ImageIcon": "/Images/073205.png",
    "ConsoleID": 41,
    "ConsoleName": "PlayStation Portable",
    "MaxPossible": 481,
    "NumAwarded": 481,
    "PctWon": "1.0000",
    "HardcoreMode": "0"
  },
  {
    "GameID": 19921,
    "Title": "Mega Man: Powered Up [Subset - 468 Stages]",
    "ImageIcon": "/Images/073205.png",
    "ConsoleID": 41,
    "ConsoleName": "PlayStation Portable",
    "MaxPossible": 481,
    "NumAwarded": 481,
    "PctWon": "1.0000",
    "HardcoreMode": "1"
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "gameId": 14976,
    "title": "Mortal Kombat",
    "imageIcon": "/Images/036812.png",
    "consoleId": 27,
    "consoleName": "Arcade",
    "maxPossible": 35,
    "numAwarded": 13,
    "pctWon": 0.3714,
    "hardcoreMode": false
  },
  {
    "gameId": 14976,
    "title": "Mortal Kombat",
    "imageIcon": "/Images/036812.png",
    "consoleId": 27,
    "consoleName": "Arcade",
    "maxPossible": 35,
    "numAwarded": 13,
    "pctWon": 0.3714,
    "hardcoreMode": true
  }
  // ...
]
```

:::

## Source

| Repo                     | URL                                                                                             |
| :----------------------- | :---------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserCompletedGames.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserCompletedGames.ts         |
