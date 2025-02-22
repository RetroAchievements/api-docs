<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Game Ticket Stats

A call to `API_GetTicketData` in this manner will retrieve ticket stats for a game, targeted by that game's unique ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData.php?g=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                                  |
| :--- | :-------- | :--------------------------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                                            |
| `g`  | Yes       | The target game ID.                                                          |
| `f`  |           | Set to 5 if you want ticket data for unofficial achievements.                |
| `d`  |           | Set to 1 if you want deep ticket metadata in the response's `Tickets` array. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const gameTicketStats = await getTicketData(authorization, { gameId: 1 });
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameTicketStats.Response, ErrorResponse> = api.getGameTicketStats(
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val gameTicketStats: GetGameTicketStats.Response = response.body

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
  "GameID": 14402,
  "GameTitle": "Dragster",
  "ConsoleName": "Atari 2600",
  "OpenTickets": 0,
  "URL": "https://retroachievements.org/game/14402/tickets"
}
```

```json [NodeJS]
{
  "gameId": 14402,
  "gameTitle": "Dragster",
  "consoleName": "Atari 2600",
  "openTickets": 0,
  "url": "https://retroachievements.org/game/14402/tickets"
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                    |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
