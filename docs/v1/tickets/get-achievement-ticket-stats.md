# Get Achievement Ticket Stats

A call to `getTicketData()` in this manner will retrieve ticket stats for an achievement, targeted by that achievement's unique ID.

## Examples

::: code-group

```ts [NodeJS]
import { getTicketData } from "@retroachievements/api";

const ticketStats = await getTicketData(authorization, {
  achievementId: 12345,
});
```

```kotlin  [Kotlin]
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

## Returns

```json
{
  "achievementId": 284759,
  "achievementTitle": "The End of The Beginning",
  "achievementDescription": "Receive the Package from the King of Baron and begin your quest to the Mist Cavern",
  "url": "https://retroachievements.org/ticketmanager.php?a=284759",
  "openTickets": 1
}
```

## Parameters

| Name            | Type                                        | Description                                                                                                                                               |
|:----------------|:--------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| `authorization` | [`AuthObject`](/v1/data-models/auth-object) | An object that must contain a `userName` and a `webApiKey`. See [this page](/getting-started) for how to create this object.                              |
| `achievementId` | `string` or `number`                        | The unique achievement ID. If you are unsure, open the achievement's page on the RetroAchievements.org website and copy the number at the end of the URL. |

## Source

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                                  |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                        |
