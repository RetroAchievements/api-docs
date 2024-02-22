# Get Ticket by ID

A call to `getTicketData()` in this manner will retrieve ticket metadata information about a single achievement ticket, targeted by its ticket ID.

## Examples

::: code-group

```ts [NodeJS]
import { getTicketData } from "@retroachievements/api";

const ticketData = await getTicketData(authorization, { ticketId: 12345 });
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetTicketData.Response, ErrorResponse> = api.getTicketDataByTicketId(
    ticketId = 12345
)

if (response is NetworkResponse.Success) {
    // handle the data
    val ticket: GetTicketData.Response = response.body

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
  "id": 12345,
  "achievementId": 11843,
  "achievementTitle": "A good Beginning 2",
  "achievementDesc": "Your Partner Pokemon reaches Level 10.",
  "points": 3,
  "badgeName": "309094",
  "achievementAuthor": "tuteur51",
  "gameId": 2816,
  "consoleName": "Game Boy Advance",
  "gameTitle": "Pokemon Mystery Dungeon: Red Rescue Team",
  "gameIcon": "/Images/050264.png",
  "reportedAt": "2018-04-11 08:15:55",
  "reportType": 1,
  "reportState": 2,
  "hardcore": null,
  "reportNotes": "Right before going to Thunderwave Cave, all three of these triggered at the same time.<br/>MD5: 9837da1fdfe900c52f2109d9718d4e85",
  "reportedBy": "ThatOneEnderMan",
  "resolvedAt": "2018-04-16 08:03:31",
  "resolvedBy": "tuteur51",
  "reportStateDescription": "Resolved",
  "reportTypeDescription": "Triggered at the wrong time",
  "url": "https://retroachievements.org/ticketmanager.php?i=12345"
}
```

## Parameters

| Name            | Type                                        | Description                                                                                                                                     |
|:----------------|:--------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object.                    |
| `ticketId`      | `string` or `number`                        | The unique ticket ID. If you are unsure, open the ticket's page on the RetroAchievements.org website and copy the number at the end of the URL. |

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                                  |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                        |
