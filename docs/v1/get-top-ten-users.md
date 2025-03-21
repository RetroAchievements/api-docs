<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Top Ten Ranked Users

A call to this endpoint will retrieve the current top ten users, ranked by hardcore points, on the site.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTopTenUsers.php</SampleRequest>

### Query Parameters

| Name | Required? | Description       |
| :--- | :-------- | :---------------- |
| `y`  | Yes       | Your web API key. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTopTenUsers } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const topTenUsers = await getTopTenUsers(authorization);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetTopTenUsers.Response, ErrorResponse> = api.getTopTenUsers()

if (response is NetworkResponse.Success) {
    // handle the data
    val topUsers: GetTopTenUsers.Response = response.body

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
[
  {
    "1": "MaxMilyin",
    "2": 399597, // the user's hardcore points
    "3": 1599212, // the user's RetroPoints (white points)
    "4": "00003EMFWR7XB8SDPEHB3K56ZQ" // the user's unique queryable ULID
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "username": "MaxMilyin",
    "totalPoints": 399597,
    "totalRatioPoints": 1599212
  }
  // ...
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTopTenUsers.php                             |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/feed/getTopTenUsers.ts                                     |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
