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
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userGameRankAndScore = await getUserGameRankAndScore(authorization, {
  username: "WCopeland",
  gameId: 14402,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserGameRankAndScore.Response, ErrorResponse> = api.getUserGameRankAndScore(
    username = "WCopeland",
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val userGameRankAndScore: GetUserGameRankAndScore.Response = response.body

} else if (response is NetworkResponse.Error) {
    // if the server returns an error it be found here
    val errorResponse: ErrorResponse? = response.body

    // if the api (locally) had an internal error, it'll be found here
    val internalError: Throwable? = response.error
}
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

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserGameRankAndScore.php                    |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserGameRankAndScore.ts                            |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
