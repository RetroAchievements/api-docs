<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Achievement Ticket Stats

A call to `API_GetTicketData` in this manner will retrieve ticket stats for an achievement, targeted by that achievement's unique ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData.php?a=9</SampleRequest>

### Query Parameters

| Name | Required? | Description                                          |
| :--- | :-------- | :--------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                    |
| `a`  | Yes       | The target achievement ID to fetch ticket stats for. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const achievementTicketStats = await getTicketData(authorization, {
  achievementId: 12345,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetAchievementTicketStats.Response, ErrorResponse> = api.getAchievementTicketStats(
    achievementId = 12345
)

if (response is NetworkResponse.Success) {
    // handle the data
    val achievementTicketStats: GetAchievementTicketStats.Response = response.body

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
  "AchievementID": 284759,
  "AchievementTitle": "The End of The Beginning",
  "AchievementDescription": "Receive the Package from the King of Baron and begin your quest to the Mist Cavern",
  "AchievementType": "progression",
  "URL": "https://retroachievements.org/achievement/284759/tickets",
  "OpenTickets": 1
}
```

```json [NodeJS]
{
  "achievementId": 284759,
  "achievementTitle": "The End of The Beginning",
  "achievementDescription": "Receive the Package from the King of Baron and begin your quest to the Mist Cavern",
  "url": "https://retroachievements.org/achievement/284759/tickets",
  "openTickets": 1
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                    |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
