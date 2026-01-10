<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Progression

A call to this endpoint will retrieve information about the average time to unlock achievements in a game, targeted via its unique ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameProgression.php?i=228</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                               |
| :--- | :-------- | :------------------------------------------------------------------------ |
| `y`  | Yes       | Your web API key.                                                         |
| `i`  | Yes       | The target game ID.                                                       |
| `h`  |           | 1 to prefer players with more hardcore unlocks than non-hardcore unlocks. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getGameProgression } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const gameProgression = await getGameProgression(authorization, {
  gameId: 14402,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameProgression.Response, ErrorResponse> = api.getGameProgression(
    gameId = 228,
)

if (response is NetworkResponse.Success) {
    // handle the data
    val gameProgression: GetGameProgression.Response = response.body

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
  "ID": 228,
  "Title": "Super Mario World",
  "ConsoleID": 3,
  "ConsoleName": "SNES/Super Famicom",
  "ImageIcon": "/Images/112443.png",
  "NumDistinctPlayers": 79281,
  "TimesUsedInBeatMedian": 4493,
  "TimesUsedInHardcoreBeatMedian": 8249,
  "MedianTimeToBeat": 17878,
  "MedianTimeToBeatHardcore": 19224,
  "TimesUsedInCompletionMedian": 155,
  "TimesUsedInMasteryMedian": 1091,
  "MedianTimeToComplete": 67017,
  "MedianTimeToMaster": 79744,
  "NumAchievements": 89,
  "Achievements": [
    {
      "ID": 342,
      "Title": "Giddy Up!",
      "Description": "Catch a ride with a friend",
      "Points": 1,
      "TrueRatio": 1,
      "Type": null,
      "BadgeName": "46580",
      "NumAwarded": 75168,
      "NumAwardedHardcore": 37024,
      "TimesUsedInUnlockMedian": 63,
      "TimesUsedInHardcoreUnlockMedian": 69,
      "MedianTimeToUnlock": 274,
      "MedianTimeToUnlockHardcore": 323
    },
    {
      "ID": 341,
      "Title": "Unleash The Dragon",
      "Description": "Collect 5 Dragon Coins in a level",
      "Points": 2,
      "TrueRatio": 2,
      "Type": null,
      "BadgeName": "46591",
      "NumAwarded": 66647,
      "NumAwardedHardcore": 34051,
      "TimesUsedInUnlockMedian": 66,
      "TimesUsedInHardcoreUnlockMedian": 70,
      "MedianTimeToUnlock": 290,
      "MedianTimeToUnlockHardcore": 333
    }
    // ... additional achievements
  ]
}
```

```json [NodeJS]
{
  "id": 228,
  "title": "Super Mario World",
  "consoleId": 3,
  "consoleName": "SNES/Super Famicom",
  "imageIcon": "/Images/112443.png",
  "numDistinctPlayers": 79281,
  "timesUsedInBeatMedian": 4493,
  "timesUsedInHardcoreBeatMedian": 8249,
  "medianTimeToBeat": 17878,
  "medianTimeToBeatHardcore": 19224,
  "timesUsedInCompletionMedian": 155,
  "timesUsedInMasteryMedian": 1091,
  "medianTimeToComplete": 67017,
  "medianTimeToMaster": 79744,
  "numAchievements": 89,
  "achievements": [
    {
      "id": 342,
      "title": "Giddy Up!",
      "description": "Catch a ride with a friend",
      "points": 1,
      "trueRatio": 1,
      "type": null,
      "badgeName": "46580",
      "numAwarded": 75168,
      "numAwardedHardcore": 37024,
      "timesUsedInUnlockMedian": 63,
      "timesUsedInHardcoreUnlockMedian": 69,
      "medianTimeToUnlock": 274,
      "medianTimeToUnlockHardcore": 323
    },
    {
      "id": 341,
      "title": "Unleash The Dragon",
      "description": "Collect 5 Dragon Coins in a level",
      "points": 2,
      "trueRatio": 2,
      "type": null,
      "badgeName": "46591",
      "numAwarded": 66647,
      "numAwardedHardcore": 34051,
      "timesUsedInUnlockMedian": 66,
      "timesUsedInHardcoreUnlockMedian": 70,
      "medianTimeToUnlock": 290,
      "medianTimeToUnlockHardcore": 333
    }
    // ... additional achievements
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameProgression.php                         |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/game/getGameProgression.ts                                 |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
