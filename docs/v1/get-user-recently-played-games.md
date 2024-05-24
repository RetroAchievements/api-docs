<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Recently Played Games

A call to this endpoint will retrieve a list of a target user's recently played games, via their username.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserRecentlyPlayedGames.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                |
| :--- | :-------- | :--------------------------------------------------------- |
| `z`  | Yes       | Your username.                                             |
| `y`  | Yes       | Your web API key.                                          |
| `u`  | Yes       | The target username.                                       |
| `c`  |           | Count, number of records to return (default: 10, max: 50). |
| `o`  |           | Offset, number of entries to skip (default: 0).            |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getUserRecentlyPlayedGames,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userRecentlyPlayedGames = await getUserRecentlyPlayedGames(
  authorization,
  {
    username: "xelnia",
  },
);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserRecentlyPlayedGames.Response, ErrorResponse> = api.getUserRecentlyPlayedGames(
    username = "xelnia",
)

if (response is NetworkResponse.Success) {
    // handle the data
    val recentlyPlayedGames: GetUserRecentlyPlayedGames.Response = response.body

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
    "GameID": 11332,
    "ConsoleID": 12,
    "ConsoleName": "PlayStation",
    "Title": "Final Fantasy Origins",
    "ImageIcon": "/Images/060249.png",
    "ImageTitle": "/Images/026707.png",
    "ImageIngame": "/Images/026708.png",
    "ImageBoxArt": "/Images/046257.png",
    "LastPlayed": "2023-10-27 00:30:04",
    "AchievementsTotal": 119,
    "NumPossibleAchievements": 119,
    "PossibleScore": 945,
    "NumAchieved": 38,
    "ScoreAchieved": 382,
    "NumAchievedHardcore": 38,
    "ScoreAchievedHardcore": 382
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "gameId": 19010,
    "consoleId": 21,
    "consoleName": "PlayStation 2",
    "title": "Simpsons, The: Hit & Run",
    "imageIcon": "/Images/066024.png",
    "lastPlayed": "2022-10-24 22:05:12",
    "numPossibleAchievements": 131,
    "possibleScore": 865,
    "numAchieved": 23,
    "scoreAchieved": 84,
    "numAchievedHardcore": 23,
    "scoreAchievedHardcore": 84
  }
  // ...
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserRecentlyPlayedGames.php                 |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserRecentlyPlayedGames.ts                         |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
