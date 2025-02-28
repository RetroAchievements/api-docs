<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Game Progress

A call to this endpoint will retrieve extended metadata about a game, in addition to a user's progress about that game. This is targeted via a game's unique ID and a given username.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameInfoAndUserProgress.php?g=14402&u=MaxMilyin</SampleRequest>

### Query Parameters

You must query the user by either their username or their ULID. Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                                                        |
| :--- | :-------- | :----------------------------------------------------------------- |
| `z`  | Yes       | Your username.                                                     |
| `y`  | Yes       | Your web API key.                                                  |
| `u`  |           | The target username or ULID.                                       |
| `g`  | Yes       | The target game ID.                                                |
| `a`  |           | Set to "1" if user award metadata should be included (default: 0). |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getGameInfoAndUserProgress,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const gameInfoAndUserProgress = await getGameInfoAndUserProgress(
  authorization,
  {
    username: "MaxMilyin",
    gameId: 14402,
  },
);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameInfoAndUserProgress.Response, ErrorResponse> = api.getGameInfoAndUserProgress(
    username = "MaxMilyin",
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val gameInfoAndUserProgress: GetGameInfoAndUserProgress.Response = response.body

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
  "ID": 1,
  "Title": "Sonic the Hedgehog",
  "ConsoleID": 1,
  "ForumTopicID": 112,
  "Flags": null,
  "ImageIcon": "/Images/067895.png",
  "ImageTitle": "/Images/054993.png",
  "ImageIngame": "/Images/000010.png",
  "ImageBoxArt": "/Images/051872.png",
  "Publisher": "",
  "Developer": "",
  "Genre": "",
  "Released": "1992-06-02 00:00:00",
  "ReleasedAtGranularity": "day",
  "IsFinal": 0,
  "RichPresencePatch": "cce60593880d25c97797446ed33eaffb",
  "GuideURL": null,
  "ConsoleName": "Mega Drive",
  "ParentGameID": null,
  "NumDistinctPlayers": 27080,
  "NumAchievements": 23,
  "Achievements": {
    "9": {
      "ID": 9,
      "NumAwarded": 24273,
      "NumAwardedHardcore": 10831,
      "Title": "That Was Easy",
      "Description": "Complete the first act in Green Hill Zone",
      "Points": 3,
      "TrueRatio": 3,
      "Author": "Scott",
      "AuthorULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
      "DateModified": "2023-08-08 00:36:59",
      "DateCreated": "2012-11-02 00:03:12",
      "BadgeName": "250336",
      "DisplayOrder": 1,
      "MemAddr": "22c9d5e2cd7571df18a1a1b43dfe1fea",
      "type": "progression",
      "DateEarnedHardcore": "2016-03-12 17:47:29",
      "DateEarned": "2016-03-12 17:47:29"
    }
    // ...
  },
  "NumAwardedToUser": 23,
  "NumAwardedToUserHardcore": 23,
  "NumDistinctPlayersCasual": 27080,
  "NumDistinctPlayersHardcore": 27080,
  "UserCompletion": "100.00%",
  "UserCompletionHardcore": "100.00%",
  "HighestAwardKind": "mastered",
  "HighestAwardDate": "2024-04-23T21:28:49+00:00"
}
```

```json [NodeJS]
{
  "id": 14402,
  "title": "Dragster",
  "consoleId": 25,
  "forumTopicId": 9145,
  "flags": 0,
  "imageIcon": "/Images/026368.png",
  "imageTitle": "/Images/026366.png",
  "imageIngame": "/Images/026367.png",
  "imageBoxArt": "/Images/066952.png",
  "publisher": "Activision ",
  "developer": "David Crane",
  "genre": "Racing",
  "released": "1992-06-02 00:00:00",
  "releasedAtGranularity": "day",
  "isFinal": false,
  "consoleName": "Atari 2600",
  "richPresencePatch": "2b92fa1bf9635c303b3b7f8feea3ed3c",
  "numAchievements": 12,
  "numDistinctPlayersCasual": 496,
  "numDistinctPlayersHardcore": 350,
  "achievements": {
    "79434": {
      "id": 79434,
      "numAwarded": 366,
      "numAwardedHardcore": 274,
      "title": "Novice Dragster Driver 1",
      "description": "Complete your very first race in game 1.",
      "points": 1,
      "trueRatio": 1,
      "author": "Boldewin",
      "authorUlid": "00003EMFWR7XB8SDPEHB3K56ZQ",
      "dateModified": "2019-08-01 19:03:46",
      "dateCreated": "2019-07-31 18:49:57",
      "badgeName": "85541",
      "displayOrder": 0,
      "memAddr": "f5c41fa0b5fa0d5fbb8a74c598f18582",
      "type": "progression",

      /**
       * These two fields are added if the achievement
       * has been earned by the user.
       */
      "dateEarned": "2022-08-23 22:56:38",
      "dateEarnedHardcore": "2022-08-23 22:56:38"
    }
    // ...
  },
  "numAwardedToUser": 4,
  "numAwardedToUserHardcore": 4,
  "userCompletion": "12.00%",
  "userCompletionHardcore": "12.00%",
  "highestAwardKind": "mastered",
  "highestAwardDate": "2024-04-23T21:28:49+00:00"
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameInfoAndUserProgress.php                 |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getGameInfoAndUserProgress.ts                         |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
