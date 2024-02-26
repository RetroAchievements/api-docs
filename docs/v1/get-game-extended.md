<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Extended Details

A call to this endpoint will retrieve extended metadata about a game, targeted via its unique ID.

[[toc]]

## On-site Representation

Most of this data can be found on the game page, for example, [Sonic the Hedgehog](https://retroachievements.org/game/1):

![Game Summary](/game-summary.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameExtended.php?i=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                       |
|:-----|:----------|:------------------------------------------------------------------|
| `z`  | Yes       | Your username.                                                    |
| `y`  | Yes       | Your web API key.                                                 |
| `i`  | Yes       | The target game ID.                                               |
| `f`  |           | Defaults to 3. Set to 5 to see Unofficial / demoted achievements. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getGameExtended } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const gameExtended = await getGameExtended(authorization, {
  gameId: 14402,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameExtended.Response, ErrorResponse> = api.getGameExtended(
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val gameExtended: GetGameExtended.Response = response.body

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
  "Released": "June 23, 1991",
  "IsFinal": 0,
  "RichPresencePatch": "cce60593880d25c97797446ed33eaffb",
  "players_total": 27080,
  "achievement_set_version_hash": "14ce9b51a2e1cf63d55b7ebf389de3c9f27c564b33f5b9a8e17836af2a61bfcd",
  "achievements_published": 23,
  "points_total": 250,
  "GuideURL": null,
  "Updated": "2023-12-27T13:51:14.000000Z",
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
      "DateModified": "2023-08-08 00:36:59",
      "DateCreated": "2012-11-02 00:03:12",
      "BadgeName": "250336",
      "DisplayOrder": 1,
      "MemAddr": "22c9d5e2cd7571df18a1a1b43dfe1fea",
      "type": "progression"
    }
    // ...
  },
  "Claims": [],
  "NumDistinctPlayersCasual": 27080,
  "NumDistinctPlayersHardcore": 27080
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
  "imageBoxArt": "/Images/026365.png",
  "publisher": "Activision",
  "developer": "David Crane",
  "genre": "Racing",
  "released": 1980,
  "isFinal": false,
  "consoleName": "Atari 2600",
  "richPresencePatch": "2b92fa1bf9635c303b3b7f8feea3ed3c",
  "numAchievements": 12,
  "numDistinctPlayersCasual": 454,
  "numDistinctPlayersHardcore": 323,
  "claims": [],
  "achievements": {
    "79434": {
      "id": 79434,
      "numAwarded": 338,
      "numAwardedHardcore": 253,
      "title": "Novice Dragster Driver 1",
      "description": "Complete your very first race in game 1.",
      "points": 1,
      "trueRatio": 1,
      "author": "Boldewin",
      "dateModified": "2019-08-01 19:03:46",
      "dateCreated": "2019-07-31 18:49:57",
      "badgeName": "85541",
      "displayOrder": 0,
      "memAddr": "f5c41fa0b5fa0d5fbb8a74c598f18582"
    }
  }
  // ...
}
```

:::

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameExtended.php                                |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/game/getGameExtended.ts                                        |
