<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Rank and Score

A call to this endpoint will retrieve metadata about how a given user has performed/ranked on a given game, targeted by game ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserGameRankAndScore.php?g=14402&u=WCopeland</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
| :--- | :-------- | :------------------- |
| `z`  | Yes       | Your username.       |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |
| `g`  | Yes       | The target game ID.  |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getUserGameRankAndScore,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userGameRankAndScore = await getUserGameRankAndScore(authorization, {
  userName: "WCopeland",
  gameId: 14402,
});
```

:::

## Response

::: code-group

```json [HTTP Response]
// If there is no user progress for the game, this array will be empty.
[
  {
    "User": "WCopeland",
    "UserRank": 9,
    "TotalScore": 199,
    "LastAward": "2023-06-07 14:44:00"
  }
]
```

```json [NodeJS]
// If there is no user progress for the game, this array will be empty.
[
  {
    "user": "WCopeland",
    "totalScore": 199,
    "lastAward": "2023-06-07 14:44:00",
    "userRank": 9
  }
]
```

:::

## Source

| Repo                     | URL                                                                                               |
| :----------------------- | :------------------------------------------------------------------------------------------------ |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserGameRankAndScore.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserGameRankAndScore.ts         |
