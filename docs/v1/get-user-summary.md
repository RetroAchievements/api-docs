<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Summary

A call to this endpoint will retrieve summary information about a given user, targeted by username.

::: warning

This endpoint is known to be slow, and often results in over-fetching. For basic user profile information, try the [Profile](/v1/get-user-profile) endpoint. For user completion and game progress information, try the [Completion Progress](/v1/get-user-completion-progress) endpoint.

:::

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserSummary.php?u=xelnia&g=1&a=2</SampleRequest>

### Query Parameters

You must query the user by either their username or their ULID. Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                                               |
| :--- | :-------- | :-------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                         |
| `u`  |           | The target username or ULID.                              |
| `g`  |           | The number of recent games to return (default: 0).        |
| `a`  |           | The number of recent achievements to return (default: 10) |

::: warning

Recent achievements are pulled from recent games, so if you ask for 1 game and 10 achievements, and the user has only earned 8 achievements in the most recent game, you'll only get 8 recent achievements back. Similarly, with the default of 0 recent games, no recent achievements will be returned.

:::

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getUserSummary } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userSummary = await getUserSummary(authorization, {
  username: "xelnia",
  recentGamesCount: 1,
  recentAchievementsCount: 2,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserSummary.Response, ErrorResponse> = api.getUserSummary(
    username = "xelnia",
)

if (response is NetworkResponse.Success) {
    // handle the data
    val userProgress: GetUserSummary.Response = response.body

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
{
  "User": "xelnia",
  "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
  "MemberSince": "2021-12-20 03:13:20",
  "LastActivity": {
    "ID": 0,
    "timestamp": null,
    "lastupdate": null,
    "activitytype": null,
    "User": "xelnia",
    "data": null,
    "data2": null
  },
  "RichPresenceMsg": "L=08-1 | 1 lives | 189300 points",
  "RichPresenceMsgDate": "2025-11-19 12:05:04",
  "LastGameID": 15758,
  "ContribCount": 0,
  "ContribYield": 0,
  "TotalPoints": 8317,
  "TotalSoftcorePoints": 0,
  "TotalTruePoints": 26760,
  "Permissions": 1,
  "Untracked": 0,
  "ID": 224958,
  "UserWallActive": 1,
  "Motto": "",
  "Rank": 4616,
  "RecentlyPlayedCount": 1,
  "RecentlyPlayed": [
    {
      "GameID": 15758,
      "ConsoleID": 27,
      "ConsoleName": "Arcade",
      "Title": "Crazy Kong",
      "ImageIcon": "/Images/068578.png",
      "ImageTitle": "/Images/068579.png",
      "ImageIngame": "/Images/068580.png",
      "ImageBoxArt": "/Images/068205.png",
      "LastPlayed": "2023-03-09 08:20:34",
      "AchievementsTotal": 43
    }
  ],
  "Awarded": {
    "15758": {
      "NumPossibleAchievements": 43,
      "PossibleScore": 615,
      "NumAchieved": 41,
      "ScoreAchieved": 490,
      "NumAchievedHardcore": 41,
      "ScoreAchievedHardcore": 490
    }
  },
  "RecentAchievements": {
    "15758": {
      "293505": {
        "ID": 293505,
        "GameID": 15758,
        "GameTitle": "Crazy Kong",
        "Title": "Prodigy of the Arcade",
        "Description": "Score 200,000 points",
        "Points": 25,
        "Type": null,
        "BadgeName": "325551",
        "IsAwarded": "1",
        "DateAwarded": "2023-03-09 08:20:34",
        "HardcoreAchieved": 1
      },
      "293526": {
        "ID": 293526,
        "GameID": 15758,
        "GameTitle": "Crazy Kong",
        "Title": "Super Smasher III",
        "Description": "Get 6 smashes with a single bottom hammer on any barrel board",
        "Points": 10,
        "Type": null,
        "BadgeName": "325572",
        "IsAwarded": "1",
        "DateAwarded": "2023-03-09 08:19:37",
        "HardcoreAchieved": 1
      }
    }
  },
  "LastGame": {
    "ID": 15758,
    "Title": "Crazy Kong",
    "ConsoleID": 27,
    "ConsoleName": "Arcade",
    "ForumTopicID": 20415,
    "Flags": 0,
    "ImageIcon": "/Images/068578.png",
    "ImageTitle": "/Images/068579.png",
    "ImageIngame": "/Images/068580.png",
    "ImageBoxArt": "/Images/068205.png",
    "Publisher": "Falcon",
    "Developer": "Falcon",
    "Genre": "2D Platforming, Arcade",
    "Released": "1981-01-01",
    "ReleasedAtGranularity": "year",
    "IsFinal": 0
  },
  "UserPic": "/UserPic/xelnia.png",
  "TotalRanked": 45654,
  "Status": "Offline"
}
```

```json [NodeJS]
{
  "user": "xelnia",
  "ulid": "00003EMFWR7XB8SDPEHB3K56ZQ",
  "memberSince": "2021-12-20 03:13:20",
  "lastActivity": {
    "id": 0,
    "timestamp": null,
    "lastupdate": null,
    "activitytype": null,
    "user": "xelnia",
    "data": null,
    "data2": null
  },
  "richPresenceMsg": "L=08-1 | 1 lives | 189300 points",
  "richPresenceMsgDate": "2025-11-19 12:05:04",
  "lastGameId": 15758,
  "contribCount": 0,
  "contribYield": 0,
  "totalPoints": 8317,
  "totalSoftcorePoints": 0,
  "totalTruePoints": 26760,
  "permissions": 1,
  "untracked": false,
  "id": 224958,
  "userWallActive": true,
  "motto": "",
  "rank": 4616,
  "recentlyPlayedCount": 1,
  "recentlyPlayed": [
    {
      "gameId": 15758,
      "consoleId": 27,
      "consoleName": "Arcade",
      "title": "Crazy Kong",
      "imageIcon": "/Images/068578.png",
      "imageTitle": "/Images/068579.png",
      "imageIngame": "/Images/068580.png",
      "imageBoxArt": "/Images/068205.png",
      "lastPlayed": "2023-03-09 08:20:34",
      "achievementsTotal": 43
    }
  ],
  "awarded": {
    "15758": {
      "numPossibleAchievements": 43,
      "possibleScore": 615,
      "numAchieved": 41,
      "scoreAchieved": 490,
      "numAchievedHardcore": 41,
      "scoreAchievedHardcore": 490
    }
  },
  "recentAchievements": {
    "15758": {
      "293505": {
        "id": 293505,
        "gameId": 15758,
        "gameTitle": "Crazy Kong",
        "title": "Prodigy of the Arcade",
        "description": "Score 200,000 points",
        "points": 25,
        "type": null,
        "badgeName": "325551",
        "isAwarded": true,
        "dateAwarded": "2023-03-09 08:20:34",
        "hardcoreAchieved": true
      },
      "293526": {
        "id": 293526,
        "gameId": 15758,
        "gameTitle": "Crazy Kong",
        "title": "Super Smasher III",
        "description": "Get 6 smashes with a single bottom hammer on any barrel board",
        "points": 10,
        "type": null,
        "badgeName": "325572",
        "isAwarded": true,
        "dateAwarded": "2023-03-09 08:19:37",
        "hardcoreAchieved": true
      }
    }
  },
  "lastGame": {
    "id": 15758,
    "title": "Crazy Kong",
    "consoleId": 27,
    "consoleName": "Arcade",
    "forumTopicId": 20415,
    "flags": 0,
    "imageIcon": "/Images/068578.png",
    "imageTitle": "/Images/068579.png",
    "imageIngame": "/Images/068580.png",
    "imageBoxArt": "/Images/068205.png",
    "publisher": "Falcon",
    "developer": "Falcon",
    "genre": "2D Platforming, Arcade",
    "released": "1981",
    "isFinal": 0
  },
  "userPic": "/UserPic/xelnia.png",
  "totalRanked": 45654,
  "status": "Offline"
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserSummary.php                             |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserSummary.ts                                     |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
