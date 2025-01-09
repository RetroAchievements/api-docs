<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get Developer Ticket Stats

A call to `API_GetTicketData` in this manner will retrieve ticket stats for a developer, targeted by that developer's site username.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTicketData.php?u=Hexadigital</SampleRequest>

### Query Parameters

| Name | Required? | Description                      |
| :--- | :-------- | :------------------------------- |
| `y`  | Yes       | Your web API key.                |
| `u`  | Yes       | The target developer's username. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTicketData } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const developerTicketStats = await getTicketData(authorization, {
  username: "Hexadigital",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetDeveloperTicketStats.Response, ErrorResponse> = api.getDeveloperTicketStats(
    username = "xelnia"
)

if (response is NetworkResponse.Success) {
    // handle the data
    val developerTicketStats: GetDeveloperTicketStats.Response = response.body

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
  "User": "MockUser",
  "Open": 0,
  "Closed": 17,
  "Resolved": 27,
  "Total": 44,
  "URL": "https://retroachievements.org/user/MockUser/tickets"
}
```

```json [NodeJS]
{
  "user": "MockUser",
  "open": 0,
  "closed": 17,
  "resolved": 27,
  "total": 44,
  "url": "https://retroachievements.org/user/MockUser/tickets"
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTicketData.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/ticket/getTicketData.ts                                    |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
