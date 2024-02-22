# getAchievementUnlocks

A call to this function will retrieve a list of users who have earned an achievement, targeted by the achievement's ID.

## Examples
::: code-group

```ts [NodeJS]
import { getAchievementUnlocks } from "@retroachievements/api";

const achievementUnlocks = await getAchievementUnlocks(authorization, {
  achievementId: 13876,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val response: NetworkResponse<GetAchievementUnlocks.Response, ErrorResponse> = api.getAchievementUnlocks(
    achievementId = 13876L
)

if (response is NetworkResponse.Success) {
    // handle the data
    val achievements: GetAchievementUnlocks.Response = response.body

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
  {
    "user": "Podgicus0305",
    "raPoints": 15544,
    "dateAwarded": "2022-07-12 19:06:34",
    "hardcoreMode": true
  }
  // ...
]
```

## Parameters

| Name            | Type                                        | Description                                                                                                                                                                                                                             |
|:----------------|:--------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object.                                                                                                            |
| `achievementId` | `string` or `number`                        | The target achievement we want to retrieve the unlocks list for. If you're not sure of this, it can be found by navigating to the achievement's page on the RetroAchievements.org website and copying the number at the end of the URL. |
| `count`         | `number?`                                   | Optional. How many unlock records to return. The default is 50. The max is 500.                                                                                                                                                         |
| `offset`        | `number?`                                   | Optional. How many unlock records to skip. Useful for pagination. Zero-indexed. The default is 0.                                                                                                                                       |

## Source


| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementUnlocks.php                          |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.dev/RetroAchievements/api-js/blob/main/src/achievement/getAchievementUnlocks.ts                           |
