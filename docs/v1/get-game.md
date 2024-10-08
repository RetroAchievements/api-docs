<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Summary

A call to this endpoint will retrieve basic metadata about a game, targeted via its unique ID.

[[toc]]

## On-site Representation

Most of this data can be found on the game page, for example, [Sonic the Hedgehog](https://retroachievements.org/game/1):

![Game Summary](/game-summary.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGame.php?i=1</SampleRequest>

### Query Parameters

| Name | Required? | Description         |
| :--- | :-------- | :------------------ |
| `y`  | Yes       | Your web API key.   |
| `i`  | Yes       | The target game ID. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getGame } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const game = await getGame(authorization, {
  gameId: 14402,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGame.Response, ErrorResponse> = api.getGame(
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val game: GetGame.Response = response.body

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
  "Title": "Sonic the Hedgehog",
  "GameTitle": "Sonic the Hedgehog",
  "ConsoleID": 1,
  "ConsoleName": "Mega Drive",
  "Console": "Mega Drive",
  "ForumTopicID": 112,
  "Flags": 0,
  "GameIcon": "/Images/067895.png",
  "ImageIcon": "/Images/067895.png",
  "ImageTitle": "/Images/054993.png",
  "ImageIngame": "/Images/000010.png",
  "ImageBoxArt": "/Images/051872.png",
  "Publisher": "",
  "Developer": "",
  "Genre": "",
  "Released": "1992-06-02 00:00:00",
  "ReleasedAtGranularity": "day"
}
```

```json [NodeJS]
{
  "title": "Dragster",
  "gameTitle": "Dragster",
  "consoleId": 25,
  "consoleName": "Atari 2600",
  "console": "Atari 2600",
  "forumTopicId": 9145,
  "flags": 0,
  "gameIcon": "/Images/026368.png",
  "imageIcon": "/Images/026368.png",
  "imageTitle": "/Images/026366.png",
  "imageIngame": "/Images/026367.png",
  "imageBoxArt": "/Images/026365.png",
  "publisher": "Activision",
  "developer": "David Crane",
  "genre": "Racing",
  "released": "1992-06-02 00:00:00",
  "releasedAtGranularity": "day"
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGame.php                                    |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/game/getGame.ts                                            |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
