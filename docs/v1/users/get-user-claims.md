# getUserClaims

A call to this function will retrieve a list of achievement set claims made over the lifetime of a given user, targeted by their username.

## Examples

::: code-group

```ts [NodeJS]
import { getUserClaims } from "@retroachievements/api";

const userClaims = await getUserClaims(authorization, {
  userName: "Jamiras",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserClaims.Response, ErrorResponse> = api.getUserClaims(
    username = "Jamiras"
)

if (response is NetworkResponse.Success) {
    // handle the data
    val claims: GetUserClaims.Response = response.body

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
    "id": 7779,
    "user": "Jamiras",
    "gameId": 11592,
    "gameTitle": "Mary-Kate & Ashley: Get a Clue!",
    "gameIcon": "/Images/065909.png",
    "consoleName": "Game Boy Color",
    "claimType": 0,
    "setType": 0,
    "status": 1,
    "extension": 0,
    "special": 0,
    "created": "2022-12-24 18:11:37",
    "doneTime": "2022-12-27 15:21:16",
    "updated": "2022-12-27 15:21:16",
    "minutesLeft": -48000 // A negative number means the claim has expired.
  },
  {
    "id": 7755,
    "user": "Jamiras",
    "gameId": 16655,
    "gameTitle": "Dragon Quest Monsters: Joker",
    "gameIcon": "/Images/063344.png",
    "consoleName": "Nintendo DS",
    "claimType": 0,
    "setType": 0,
    "status": 0,
    "extension": 0,
    "special": 0,
    "created": "2022-12-22 02:12:18",
    "doneTime": "2023-03-22 02:12:18",
    "updated": "2022-12-22 02:12:18",
    "minutesLeft": 73610
  }
  // ...
]
```

## Parameters

| Name            | Type                                        | Description                                                                                                                  |
|:----------------|:--------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object. |
| `userName`      | `string`                                    | The user for which to retrieve the claims list for.                                                                          |

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserClaims.php                                  |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserClaims.ts                                          |
