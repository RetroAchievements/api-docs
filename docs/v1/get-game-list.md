<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# All System Games and Hashes

A call to this endpoint will retrieve the complete list of games for a specified console on the site, targeted by the console ID. If you do not know the console ID you're looking for, try using the [all systems](/v1/get-console-ids) endpoint.

::: danger
**Consider aggressively caching this endpoint's response.** The response size for some system IDs can be huge. The data doesn't change very often. Frequent calls to this endpoint may prompt us to look into your bandwidth usage. [Refer to our usage guidelines](/#api-access) for more details.
:::

[[toc]]

## On-site Representation

The system games list can be found by selecting any system in the "Games" menu from the site navbar. You will then be presented with the games list:

![Console Games List](/console-games-list.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameList.php?i=1&h=1&f=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                    |
| :--- | :-------- | :------------------------------------------------------------- |
| `z`  | Yes       | Your username.                                                 |
| `y`  | Yes       | Your web API key.                                              |
| `i`  | Yes       | The target system ID.                                          |
| `f`  |           | If 1, only return games that have achievements. Defaults to 0. |
| `h`  |           | If 1, also return supported hashes for games. Defaults to 0.   |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getGameList } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const gameList = await getGameList(authorization, {
  consoleId: 1,
  shouldOnlyRetrieveGamesWithAchievements: true,
  shouldRetrieveGameHashes: true,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameList.Response, ErrorResponse> = api.getGameList(
    consoleId = 1
)

if (response is NetworkResponse.Success) {
    // handle the data
    val gameList: GetGameList.Response = response.body

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
    "Title": "Advanced Busterhawk: Gley Lancer",
    "ID": 3684,
    "ConsoleID": 1,
    "ConsoleName": "Mega Drive",
    "ImageIcon": "/Images/020895.png",
    "NumAchievements": 44,
    "NumLeaderboards": 33,
    "Points": 595,
    "DateModified": "2022-11-20 03:44:12",
    "ForumTopicID": 1936,
    "Hashes": [
      "8bd4a97783cda077c342173df0a9b51e",
      "a13ab653a20fb383337fab1e52ddb0df"
    ]
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "title": "Elemental Master",
    "id": 4247,
    "consoleId": 1,
    "consoleName": "Mega Drive",
    "imageIcon": "/Images/048245.png",
    "numAchievements": 44,
    "numLeaderboards": 0,
    "points": 500,
    "dateModified": "2021-12-09 17:05:39",
    "forumTopicId": 1972,
    "hashes": ["32e1a15161ef1f070b023738353bde51"]
  }
  // ...
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameList.php                                |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/console/getGameList.ts                                     |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
