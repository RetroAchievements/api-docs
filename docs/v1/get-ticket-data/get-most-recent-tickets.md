<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Most Recent Tickets

A call to `API_GetTicketData` in this manner will retrieve ticket metadata information about the latest opened achievement tickets on RetroAchievements.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData?o=0&c=10</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                 |
| :--- | :-------- | :---------------------------------------------------------- |
| `z`  | Yes       | Your username.                                              |
| `y`  | Yes       | Your web API key.                                           |
| `c`  |           | Count, number of records to return (default: 10, max: 100). |
| `o`  |           | Offset, number of entries to skip (default: 0).             |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const mostRecentTickets = await getTicketData(authorization, {
  count: 10,
  offset: 0,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

// you may pass an offset or count to its parameters
val response: NetworkResponse<GetMostRecentTickets.Response, ErrorResponse> = api.getMostRecentTickets()

if (response is NetworkResponse.Success) {
    // handle the data
    val tickets: GetMostRecentTickets.Response = response.body

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
  "RecentTickets": [
    {
      "ID": 64866,
      "AchievementID": 323665,
      "AchievementTitle": "DEFAULT SETTINGS CHECK",
      "AchievementDesc": "Normal or Hard difficulty, any character but \"Man\", any buster charge. All other settings OFF.",
      "AchievementType": null,
      "Points": 0,
      "BadgeName": "361407",
      "AchievementAuthor": "WCopeland",
      "GameID": 24453,
      "ConsoleName": "Mega Drive",
      "GameTitle": "~Homebrew~ Mega Man: The Sequel Wars - Episode Red",
      "GameIcon": "/Images/074329.png",
      "ReportedAt": "2024-01-10 22:31:54",
      "ReportType": 2,
      "Hardcore": 1,
      "ReportNotes": "asdfasdfasdfasdf\nRetroAchievements Hash: bff0eb90c2006edade14063d4a2d13cf\nEmulator: RALibRetro (123123)\nEmulator Version: 123",
      "ReportedBy": "WCopeland",
      "ResolvedAt": null,
      "ResolvedBy": null,
      "ReportState": 1,
      "ReportStateDescription": "Open",
      "ReportTypeDescription": "Did not trigger"
    }
  ],
  "OpenTickets": 1109,
  "URL": "https://retroachievements.org/ticketmanager.php"
}
```

```json [NodeJS]
{
  "recentTickets": [
    {
      "id": 56128,
      "achievementId": 285029,
      "achievementTitle": "Highly Unusual",
      "achievementDesc": "Complete the Astral Plane mission",
      "points": 5,
      "badgeName": "316108",
      "achievementAuthor": "TeddyWestside",
      "gameId": 19144,
      "consoleName": "PlayStation 2",
      "gameTitle": "X-Men Legends",
      "gameIcon": "/Images/067536.png",
      "reportedAt": "2023-02-03 20:39:42",
      "reportType": 2,
      "hardcore": true,
      "reportNotes": "mockReportNotes",
      "reportedBy": "ManyHours",
      "resolvedAt": null,
      "resolvedBy": null,
      "reportState": 1,
      "reportStateDescription": "Open",
      "reportTypeDescription": "Did not trigger"
    }
    // ...
  ],
  "openTickets": 732,
  "url": "https://retroachievements.org/ticketmanager.php"
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                    |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
