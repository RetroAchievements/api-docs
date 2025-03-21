<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# High Scores

A call to this endpoint will retrieve metadata about either the latest masters for a game, or the highest points earners for a game. The game is targeted via its unique ID.

[[toc]]

## On-site Representation

When browsing a game page, for example, [Sonic the Hedgehog](https://retroachievements.org/game/1), a table representing the high scores can be seen on the page's sidebar:

![High Scores](/high-scores.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameRankAndScore.php?g=14402</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                        |
| :--- | :-------- | :----------------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                                  |
| `g`  | Yes       | The target game ID.                                                |
| `t`  |           | 1 for latest masters. 0 for non-master high scores. Defaults to 0. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getGameRankAndScore,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const gameRankAndScore = await getGameRankAndScore(authorization, {
  gameId: 14402,
  type: "latest-masters",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameRankAndScore.Response, ErrorResponse> = api.getGameRankAndScore(
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val rankAndScore: GetGameRankAndScore.Response = response.body

} else if (response is NetworkResponse.Error) {
    // if the server returns an error it be found here
    val errorResponse: ErrorResponse? = response.body

    // if the api (locally) had an internal error, it'll be found here
    val internalError: Throwable? = response.error
}
```

:::

## Response

How entities are ordered in this response should be noted. For `latest-masters`, the first entry will be the most recent mastery for the set. For `high-scores` it will be the first person to master the set.

::: code-group

```json [HTTP Response]
[
  {
    "User": "Arekdias",
    "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
    "NumAchievements": 15,
    "TotalScore": 219,
    "LastAward": "2023-06-07 14:43:18"
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "user": "BruceLee1255",
    "ulid": "00003EMFWR7XB8SDPEHB3K56ZQ",
    "totalScore": 0,
    "lastAward": "2019-07-30 23:19:43",
    "rank": 27
  }
  // ...
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameRankAndScore.php                        |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/game/getGameRankAndScore.ts                                |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
