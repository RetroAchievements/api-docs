<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# User Specific Games Progress

A call to this function will retrieve a given user's progress on a given list of games, targeted by a list of game IDs.

::: warning

Unless you are explicitly wanting summary progress details for specific game IDs, the [All Completion Progress](/v1/users/completion-progress.html) endpoint will almost certainly be better-suited for your use case.

:::

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserProgress.php?u=MaxMilyin&i=1,2,3</SampleRequest>

### Query Parameters

| Name | Required? | Description                                      |
| :--- | :-------- | :----------------------------------------------- |
| `z`  | Yes       | Your username.                                   |
| `y`  | Yes       | Your web API key.                                |
| `u`  | Yes       | The target username.                             |
| `i`  | Yes       | The target game IDs, as a comma-separated value. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getUserProgress } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userGamesProgress = await getUserProgress(authorization, {
  userName: "MaxMilyin",
  gameIds: [1, 2, 3],
});
```

:::

## Response

::: code-group

```json [HTTP Response]
{
  "1": {
    "NumPossibleAchievements": 23,
    "PossibleScore": 251,
    "NumAchieved": 23,
    "ScoreAchieved": 251,
    "NumAchievedHardcore": 23,
    "ScoreAchievedHardcore": 251
  },
  "2": {
    "NumPossibleAchievements": 22,
    "PossibleScore": 320,
    "NumAchieved": 22,
    "ScoreAchieved": 320,
    "NumAchievedHardcore": 22,
    "ScoreAchievedHardcore": 320
  },
  "3": {
    "NumPossibleAchievements": 23,
    "PossibleScore": 335,
    "NumAchieved": 23,
    "ScoreAchieved": 335,
    "NumAchievedHardcore": 23,
    "ScoreAchievedHardcore": 335
  }
}
```

```json [NodeJS]
{
  "1": {
    "numPossibleAchievements": 23,
    "possibleScore": 251,
    "numAchieved": 23,
    "scoreAchieved": 251,
    "numAchievedHardcore": 23,
    "scoreAchievedHardcore": 251
  },
  "2": {
    "numPossibleAchievements": 22,
    "possibleScore": 320,
    "numAchieved": 22,
    "scoreAchieved": 320,
    "numAchievedHardcore": 22,
    "scoreAchievedHardcore": 320
  },
  "3": {
    "numPossibleAchievements": 23,
    "possibleScore": 335,
    "numAchieved": 23,
    "scoreAchieved": 335,
    "numAchievedHardcore": 23,
    "scoreAchievedHardcore": 335
  }
}
```

:::

## Source

| Repo                     | URL                                                                                       |
| :----------------------- | :---------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserProgress.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserProgress.ts         |
