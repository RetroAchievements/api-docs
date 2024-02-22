# getUserProgress

A call to this function will retrieve a given user's progress on a given list of games, targeted by game ID.

## Examples

::: code-group

```ts [NodeJS]
import { getUserProgress } from "@retroachievements/api";

const userProgress = await getUserProgress(authorization, {
  userName: "xelnia",
  gameIds: [1, 14402],
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserProgress.Response, ErrorResponse> = api.getUserProgress(
    username = "xelnia",
    gameId = "1,14402"
)

if (response is NetworkResponse.Success) {
    // handle the data
    val userProgress: GetUserProgress.Response = response.body

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
{
  "1": {
    "numPossibleAchievements": 24,
    "possibleScore": 255,
    "numAchieved": 0,
    "scoreAchieved": 0,
    "numAchievedHardcore": 0,
    "scoreAchievedHardcore": 0
  },
  "14402": {
    "numPossibleAchievements": 24,
    "possibleScore": 255,
    "numAchieved": 0,
    "scoreAchieved": 0,
    "numAchievedHardcore": 0,
    "scoreAchievedHardcore": 0
  }
}
```

## Parameters

| Name            | Type                                        | Description                                                                                                                                                                        |
|:----------------|:--------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object.                                                       |
| `userName`      | `string`                                    | The user for which to retrieve the point totals for.                                                                                                                               |
| `gameIds`       | `string[]` or `number[]`                    | An array of RetroAchievements game IDs. If you aren't sure of the game IDs, visit the game's page on the RetroAchievements.org website and copy the numbers at the end of the URL. |

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserProgress.php                                |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserProgress.ts                                        |
