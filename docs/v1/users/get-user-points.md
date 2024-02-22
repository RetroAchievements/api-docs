# getUserPoints

A call to this function will retrieve a given user's hardcore and softcore points.

## Examples

::: code-group

```ts [NodeJS]
import { getUserPoints } from "@retroachievements/api";

const userPoints = await getUserPoints(authorization, {
  userName: "xelnia",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserPoints.Response, ErrorResponse> = api.getUserPoints(
    username = "xelnia"
)

if (response is NetworkResponse.Success) {
    // handle the data
    val userPoints: GetUserPoints.Response = response.body

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
  "points": 7640,
  "softcorePoints": 25
}
```

## Parameters

| Name            | Type                                        | Description                                                                                                                  |
|:----------------|:--------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object. |
| `userName`      | `string`                                    | The user for which to retrieve the point totals for.                                                                         |

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserPoints.php                                  |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserPoints.ts                                          |

