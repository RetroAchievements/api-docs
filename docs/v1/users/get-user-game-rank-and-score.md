# getUserGameRankAndScore

A call to this function will retrieve metadata about how a given user has performed/ranked on a given game, targeted by game ID.

## Examples

::: code-group

```ts [NodeJS]
import { getUserGameRankAndScore } from "@retroachievements/api";

const userGameRankAndScore = await getUserGameRankAndScore(authorization, {
  userName: "xelnia",
  gameId: 14402,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserGameRankAndScore.Response, ErrorResponse> = api.getUserGameRankAndScore(
    username = "xelnia",
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

## Returns

```json
// If there is no user progress for the game, this array will be empty.
[
  {
    "user": "xelnia",
    "totalScore": 378,
    "lastAward": "2022-09-01 21:51:23",
    "userRank": 3
  }
]
```

## Parameters

| Name            | Type                                        | Description                                                                                                                                 |
|:----------------|:--------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object.                |
| `userName`      | `string`                                    | The user for which to retrieve the game rank and score for.                                                                                 |
| `gameId`        | `string` or `number`                        | The unique game ID. If you are unsure, open the game's page on the RetroAchievements.org website and copy the number at the end of the URL. |

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserGameRankAndScore.php                        |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserGameRankAndScore.ts                                |
