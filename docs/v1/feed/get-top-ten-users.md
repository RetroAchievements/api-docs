# getTopTenUsers

A call to this function will retrieve the current top ten users on the site.

## Examples

::: code-group

```ts [NodeJS]
import { getTopTenUsers } from "@retroachievements/api";

const topTenUsers = await getTopTenUsers(authorization);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetTopTenUsers.Response, ErrorResponse> = api.getTopTenUsers()

if (response is NetworkResponse.Success) {
    // handle the data
    val topUsers: GetTopTenUsers.Response = response.body

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
[
  { "userName": "MockUser", "totalPoints": 350000, "totalRatioPoints": 995000 },
  { "userName": "MockUser2", "totalPoints": 345000, "totalRatioPoints": 994000 }
  // ...
]
```

## Parameters

| Name            | Type                                        | Description                                                                                                                  |
|:----------------|:--------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object. |

## Source


| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.dev/RetroAchievements/RAWeb/blob/master/public/API/API_GetTopTenUsers.php                                 |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.dev/RetroAchievements/api-js/blob/main/src/feed/getTopTenUsers.ts                                         |