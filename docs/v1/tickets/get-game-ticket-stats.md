# Get Game Ticket Stats

A call to `getTicketData()` in this manner will retrieve ticket stats for a game, targeted by that game's unique ID.

## Examples

::: code-group

```ts [NodeJS]
import { getTicketData } from "@retroachievements/api";

const ticketStats = await getTicketData(authorization, { gameId: 14402 });
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameTicketStats.Response, ErrorResponse> = api.getGameTicketStats(
    gameId = 14402L
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

## Returns

```json
{
  "gameId": 14402,
  "gameTitle": "Dragster",
  "consoleName": "Atari 2600",
  "openTickets": 0,
  "url": "https://retroachievements.org/ticketmanager.php?g=14402"
}
```

## Parameters

| Name            | Type                                        | Description                                                                                                                                 |
|:----------------|:--------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object.                |
| `gameId`        | `string` or `number`                        | The unique game ID. If you are unsure, open the game's page on the RetroAchievements.org website and copy the number at the end of the URL. |

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                                  |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                        |
