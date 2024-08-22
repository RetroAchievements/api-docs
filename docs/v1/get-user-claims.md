<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Claims

A call to this endpoint will retrieve a list of achievement set claims made over the lifetime of a given user, targeted by their username.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserClaims.php?u=Jamiras</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
| :--- | :-------- | :------------------- |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getUserClaims } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userClaims = await getUserClaims(authorization, {
  username: "Jamiras",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserClaims.Response, ErrorResponse> = api.getUserClaims(
    username = "Jamiras"
)

if (response is NetworkResponse.Success) {
    // handle the data
    val claims: GetUserClaims.Response = response.body

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
    "ID": 11161,
    "User": "Jamiras",
    "GameID": 18644,
    "GameTitle": "~Unlicensed~ Hi-Leg Fantasy",
    "GameIcon": "/Images/083201.png",
    "ConsoleID": 76,
    "ConsoleName": "PC Engine CD",
    "ClaimType": 0,
    "SetType": 0,
    "Status": 0,
    "Extension": 0,
    "Special": 0,
    "Created": "2023-10-16 02:25:34",
    "DoneTime": "2024-01-16 02:25:34",
    "Updated": "2023-10-16 02:25:34",
    "UserIsJrDev": 0,
    "MinutesLeft": -58300
  }
]
```

```json [NodeJS]
[
  {
    "id": 7779,
    "user": "Jamiras",
    "gameId": 11592,
    "gameTitle": "Mary-Kate & Ashley: Get a Clue!",
    "gameIcon": "/Images/065909.png",
    "consoleName": "Game Boy Color",
    "claimType": 0,
    "setType": 0,
    "status": 1,
    "extension": 0,
    "special": 0,
    "created": "2022-12-24 18:11:37",
    "doneTime": "2022-12-27 15:21:16",
    "updated": "2022-12-27 15:21:16",
    "minutesLeft": -48000 // A negative number means the claim has expired.
  }
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserClaims.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserClaims.ts                                      |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
