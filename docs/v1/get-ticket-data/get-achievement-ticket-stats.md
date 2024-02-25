<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Achievement Ticket Stats

A call to `API_GetTicketData` in this manner will retrieve ticket stats for an achievement, targeted by that achievement's unique ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData?a=9</SampleRequest>

### Query Parameters

| Name | Required? | Description                                          |
| :--- | :-------- | :--------------------------------------------------- |
| `z`  | Yes       | Your username.                                       |
| `y`  | Yes       | Your web API key.                                    |
| `a`  | Yes       | The target achievement ID to fetch ticket stats for. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const achievementTicketStats = await getTicketData(authorization, {
  achievementId: 12345,
});
```

:::

## Response

::: code-group

```json [HTTP Response]
{
  "AchievementID": 284759,
  "AchievementTitle": "The End of The Beginning",
  "AchievementDescription": "Receive the Package from the King of Baron and begin your quest to the Mist Cavern",
  "URL": "https://retroachievements.org/ticketmanager.php?a=284759",
  "OpenTickets": 1
}
```

```json [NodeJS]
{
  "achievementId": 284759,
  "achievementTitle": "The End of The Beginning",
  "achievementDescription": "Receive the Package from the King of Baron and begin your quest to the Mist Cavern",
  "url": "https://retroachievements.org/ticketmanager.php?a=284759",
  "openTickets": 1
}
```

:::

## Source

| Repo                     | URL                                                                                     |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts       |
