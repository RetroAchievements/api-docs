<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# All Recent Game Awards

A call to this endpoint will retrieve all recently granted game awards across the site's userbase.

[[toc]]

## On-site Representation

This data can be found on the Recent Game Awards page, for example:

![Recent Game Awards](/recent-game-awards.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetRecentGameAwards.php</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                                                                                                                                |
| :--- | :-------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                                                                                                                                          |
| `d`  |           | Starting date (YYYY-MM-DD) (default: now).                                                                                                                                 |
| `o`  |           | Offset, number of entries to skip (default: 0).                                                                                                                            |
| `c`  |           | Count, number of entries to return (default: 25, maximum: 100).                                                                                                            |
| `k`  |           | A comma-separated list of desired game award kinds. Possible values are "beaten-softcore", "beaten-hardcore", "completed", and "mastered" (default: all game award kinds). |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getRecentGameAwards,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const game = await getRecentGameAwards(authorization);
```

```Kotlin
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetRecentGameAwards.Response, ErrorResponse> = api.getRecentGameAwards()

if (response is NetworkResponse.Success) {
    // handle the data
    val topUsers: GetRecentGameAwards.Response = response.body

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
  "Count": 25,
  "Total": 172318,
  "Results": [
    {
      "User": "renanbrj",
      "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
      "AwardKind": "mastered",
      "AwardDate": "2022-01-01T23:48:04+00:00",
      "GameID": 14284,
      "GameTitle": "Batman Returns",
      "ConsoleID": 15,
      "ConsoleName": "Game Gear"
    }
    // ...
  ]
}
```

```json [NodeJS]
{
  "count": 25,
  "total": 452857,
  "results": [
    {
      "user": "renanbrj",
      "ulid": "00003EMFWR7XB8SDPEHB3K56ZQ",
      "awardKind": "mastered",
      "awardDate": "2022-01-01T23:48:04+00:00",
      "gameId": 14_284,
      "gameTitle": "Batman Returns",
      "consoleId": 15,
      "consoleName": "Game Gear"
    }
    // ...
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetRecentGameAwards.php                        |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/feed/getRecentGameAwards.ts                                |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
