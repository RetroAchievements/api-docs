<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Unlocks (most recent)

A call to this endpoint will retrieve a list of a target user's recently unlocked achievements, via their username. By default, it fetches achievements unlocked in the last hour.

[[toc]]

## On-site Representation

A user's recent unlocks can be found in a few places. It is most often seen on the user profile in the most recently played games:

![Last Games Played](/last-games-played.png)

The recent unlocks can also be found on the "Unlocked Achievements" page:

![Unlocked Achievements](/unlocked-achievements.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserRecentAchievements.php?u=Scott</SampleRequest>

### Query Parameters

You must query the user by either their username or their ULID. Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                           |
| :--- | :-------- | :------------------------------------ |
| `y`  | Yes       | Your web API key.                     |
| `u`  |           | The target username or ULID.          |
| `m`  |           | Minutes to look back. Defaults to 60. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getUserRecentAchievements,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userRecentAchievements = await getUserRecentAchievements(authorization, {
  username: "xelnia",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserRecentAchievements.Response, ErrorResponse> = api.getUserRecentAchievements(
    username = "xelnia",
)

if (response is NetworkResponse.Success) {
    // handle the data
    val recentAchievements: GetUserRecentAchievements.Response = response.body

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
    "Date": "2023-12-27 16:04:50",
    "HardcoreMode": 1,
    "AchievementID": 98012,
    "Title": "Beginner I",
    "Description": "Clear stages 01 - 05 in Quest.",
    "BadgeName": "108302",
    "Points": 5,
    "TrueRatio": 25,
    "Type": null,
    "Author": "jos",
    "AuthorULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
    "GameTitle": "Pokemon Pinball mini",
    "GameIcon": "/Images/028399.png",
    "GameID": 14715,
    "ConsoleName": "Pokemon Mini",
    "BadgeURL": "/Badge/108302.png",
    "GameURL": "/game/14715"
  }
]
```

```json [NodeJS]
[
  {
    "date": "2023-05-23 22:32:24",
    "hardcoreMode": true,
    "achievementId": 51214,
    "title": "You're a special Champ!",
    "description": "Win the Tournament as [You] on Hard with 1 attribute on max. and 1 attribute on min.",
    "badgeName": "121991",
    "points": 25,
    "trueRatio": 100,
    "type": null,
    "author": "Som1",
    "authorUlid": "00003EMFWR7XB8SDPEHB3K56ZQ",
    "gameTitle": "WWF King of the Ring",
    "gameIcon": "/Images/062599.png",
    "gameId": 6316,
    "consoleName": "Game Boy",
    "badgeUrl": "/Badge/121991.png",
    "gameUrl": "/game/6316"
  }
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserRecentAchievements.php                  |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserRecentAchievements.ts                          |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
