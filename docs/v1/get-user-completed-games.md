<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Completed Games

::: warning

This endpoint is considered "legacy". The [Completion Progress](/v1/get-user-completion-progress) endpoint will almost always be a better fit for your use case.

:::

A call to this endpoint will retrieve completion metadata about the games a given user has played. It returns two entries per each game: one for the softcore completion and one for the hardcore completion. These are designated by the `hardcoreMode` property on each completion object.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserCompletedGames.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
| :--- | :-------- | :------------------- |
| `z`  | Yes       | Your username.       |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getUserCompletedGames,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userCompletedGames = await getUserCompletedGames(authorization, {
  username: "MaxMilyin",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserCompletedGames.Response, ErrorResponse> = api.getUserCompletedGames(
    username = "MaxMilyin",
)

if (response is NetworkResponse.Success) {
    // handle the data
    val completedGames: GetUserCompletedGames.Response = response.body

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
[
  {
    "GameID": 19921,
    "Title": "Mega Man: Powered Up [Subset - 468 Stages]",
    "ImageIcon": "/Images/073205.png",
    "ConsoleID": 41,
    "ConsoleName": "PlayStation Portable",
    "MaxPossible": 481,
    "NumAwarded": 481,
    "PctWon": "1.0000",
    "HardcoreMode": "0"
  },
  {
    "GameID": 19921,
    "Title": "Mega Man: Powered Up [Subset - 468 Stages]",
    "ImageIcon": "/Images/073205.png",
    "ConsoleID": 41,
    "ConsoleName": "PlayStation Portable",
    "MaxPossible": 481,
    "NumAwarded": 481,
    "PctWon": "1.0000",
    "HardcoreMode": "1"
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "gameId": 14976,
    "title": "Mortal Kombat",
    "imageIcon": "/Images/036812.png",
    "consoleId": 27,
    "consoleName": "Arcade",
    "maxPossible": 35,
    "numAwarded": 13,
    "pctWon": 0.3714,
    "hardcoreMode": false
  },
  {
    "gameId": 14976,
    "title": "Mortal Kombat",
    "imageIcon": "/Images/036812.png",
    "consoleId": 27,
    "consoleName": "Arcade",
    "maxPossible": 35,
    "numAwarded": 13,
    "pctWon": 0.3714,
    "hardcoreMode": true
  }
  // ...
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserCompletedGames.php                      |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserCompletedGames.ts                              |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
