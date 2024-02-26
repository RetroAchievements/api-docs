<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Most Ticketed Games

A call to `API_GetTicketData` in this manner will retrieve the games on the site with the highest count of opened achievement tickets.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData?f=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                 |
| :--- | :-------- | :---------------------------------------------------------- |
| `z`  | Yes       | Your username.                                              |
| `y`  | Yes       | Your web API key.                                           |
| `f`  | Yes       | Must be set to 1.                                           |
| `c`  |           | Count, number of records to return (default: 10, max: 100). |
| `o`  |           | Offset, number of entries to skip (default: 0).             |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const ticket = await getTicketData(authorization, {
  isGettingMostTicketedGames: true,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetMostTicketedGames.Response, ErrorResponse> = api.getMostTicketedGames()

if (response is NetworkResponse.Success) {
    // handle the data
    val mostTicketedGames: GetMostTicketedGames.Response = response.body

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
	"MostReportedGames": [
		{
			"GameID": 9701,
			"GameTitle": "Dead 'n' Furious | Touch the Dead",
			"GameIcon": "\/Images\/070109.png",
			"Console": "Nintendo DS",
			"OpenTickets": 12
		},
		{
			"GameID": 10438,
			"GameTitle": "Crash Team Racing",
			"GameIcon": "\/Images\/081550.png",
			"Console": "PlayStation",
			"OpenTickets": 11
		},]
    "URL": "https://retroachievements.org/ticketmanager.php?f=1"
}
```

```json [NodeJS]
{
  "mostReportedGames": [
    {
      "gameId": 2642,
      "gameTitle": "Kingdom Hearts: 358/2 Days",
      "gameIcon": "/Images/056478.png",
      "console": "Nintendo DS",
      "openTickets": 6
    },
    {
      "gameId": 13964,
      "gameTitle": "Grinch, The",
      "gameIcon": "/Images/065586.png",
      "console": "PlayStation",
      "openTickets": 6
    }
    // ...
  ],
  "url": "https://retroachievements.org/ticketmanager.php?f=1"
}
```

:::

## Source

| Repo                         | URL                                                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                              |
| RetroAchievements/api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                    |
| RetroAchievements/api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
