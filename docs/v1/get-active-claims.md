<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Active Claims

A call to this endpoint returns information about all (1000 max) active set claims.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetActiveClaims.php</SampleRequest>

### Query Parameters

| Name | Required? | Description       |
| :--- | :-------- | :---------------- |
| `z`  | Yes       | Your username.    |
| `y`  | Yes       | Your web API key. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getActiveClaims } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const activeClaims = await getActiveClaims(authorization);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetClaims.Response, ErrorResponse> = api.getActiveClaims()

if (response is NetworkResponse.Success) {
    // handle the data
    val claims: GetClaims.Response = response.body

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
    "ID": 11246,
    "User": "WanderingHeiho",
    "GameID": 26971,
    "GameTitle": "~Homebrew~ No Place To Hide",
    "GameIcon": "/Images/084916.png",
    "ConsoleID": 18,
    "ConsoleName": "Nintendo DS",
    "ClaimType": 0,
    "SetType": 0,
    "Status": 0,
    "Extension": 0,
    "Special": 0,
    "Created": "2023-10-27 23:27:16",
    "DoneTime": "2024-01-27 23:27:16",
    "Updated": "2023-10-27 23:27:16",
    "UserIsJrDev": 0,
    "MinutesLeft": -41266 // Negative minutes left means the claim is expired.
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "id": 11246,
    "user": "WanderingHeiho",
    "gameId": 26971,
    "gameTitle": "~Homebrew~ No Place To Hide",
    "gameIcon": "/Images/084916.png",
    "consoleId": 18,
    "consoleName": "Nintendo DS",
    "claimType": 0,
    "setType": 0,
    "status": 0,
    "extension": 0,
    "special": 0,
    "created": "2023-10-27 23:27:16",
    "doneTime": "2024-01-27 23:27:16",
    "updated": "2023-10-27 23:27:16",
    "userIsJrDev": false,
    "minutesLeft": -41268 // Negative minutes left means the claim is expired.
  }
  // ...
]
```

:::

## Source

| Repo                         | URL                                                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetActiveClaims.php                            |
| RetroAchievements/api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/feed/getActiveClaims.ts                                    |
| RetroAchievements/api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
