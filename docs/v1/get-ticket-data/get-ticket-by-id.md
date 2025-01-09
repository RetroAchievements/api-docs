<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Ticket by ID

A call to `API_GetTicketData` in this manner will retrieve ticket metadata information about a single achievement ticket, targeted by its ticket ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData.php?i=12345</SampleRequest>

### Query Parameters

| Name | Required? | Description           |
| :--- | :-------- | :-------------------- |
| `y`  | Yes       | Your web API key.     |
| `i`  | Yes       | The target ticket ID. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const ticket = await getTicketData(authorization, { ticketId: 12345 });
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetTicketData.Response, ErrorResponse> = api.getTicket(
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

## Response

::: code-group

```json [HTTP Response]
{
  "ID": 12345,
  "AchievementID": 11843,
  "AchievementTitle": "A good Beginning 2",
  "AchievementDesc": "Your Partner Pokemon reaches Level 10.",
  "AchievementType": null,
  "Points": 3,
  "BadgeName": "309094",
  "AchievementAuthor": "tuteur51",
  "GameID": 2816,
  "ConsoleName": "Game Boy Advance",
  "GameTitle": "Pokémon Mystery Dungeon: Red Rescue Team",
  "GameIcon": "/Images/050264.png",
  "ReportedAt": "2018-04-11 08:15:55",
  "ReportType": 1,
  "ReportState": 2,
  "Hardcore": null,
  "ReportNotes": "Right before going to Thunderwave Cave, all three of these triggered at the same time.<br/>MD5: 9837da1fdfe900c52f2109d9718d4e85",
  "ReportedBy": "ThatOneEnderMan",
  "ResolvedAt": "2018-04-16 08:03:31",
  "ResolvedBy": "tuteur51",
  "ReportStateDescription": "Resolved",
  "ReportTypeDescription": "Triggered at the wrong time",
  "URL": "https://retroachievements.org/ticket/12345"
}
```

```json [NodeJS]
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

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                    |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
