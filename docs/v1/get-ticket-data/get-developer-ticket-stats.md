<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Developer Ticket Stats

A call to `API_GetTicketData` in this manner will retrieve ticket stats for a developer, targeted by that developer's site username.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData?u=Hexadigital</SampleRequest>

### Query Parameters

| Name | Required? | Description                      |
| :--- | :-------- | :------------------------------- |
| `z`  | Yes       | Your username.                   |
| `y`  | Yes       | Your web API key.                |
| `u`  | Yes       | The target developer's username. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const developerTicketStats = await getTicketData(authorization, {
  userName: "Hexadigital",
});
```

:::

## Response

::: code-group

```json [HTTP Response]
{
  "User": "MockUser",
  "Open": 0,
  "Closed": 17,
  "Resolved": 27,
  "Total": 44,
  "URL": "https://retroachievements.org/ticketmanager.php?u=MockUser"
}
```

```json [NodeJS]
{
  "user": "MockUser",
  "open": 0,
  "closed": 17,
  "resolved": 27,
  "total": 44,
  "url": "https://retroachievements.org/ticketmanager.php?u=MockUser"
}
```

:::

## Source

| Repo                     | URL                                                                                     |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts       |
