<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Get All Systems

A call to this endpoint will retrieve the complete list of all system ID and name pairs on the site.

[[toc]]

## On-site Representation

The systems list can be found by selecting the "Games" menu from the site navbar:

![All Systems](/all-systems.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetConsoleIDs.php</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                              |
| :--- | :-------- | :----------------------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                                        |
| `a`  |           | If 1, only return active systems. Defaults to 0.                         |
| `g`  |           | If 1, only return gaming systems (not Hubs, Events, etc). Defaults to 0. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getConsoleIds } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const consoleIds = await getConsoleIds(authorization);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val credentials = RetroCredentials("<username>", "<web api key>")
val response: NetworkResponse<GetConsoleID.Response, ErrorResponse> = api.getConsoleIds()

if (response is NetworkResponse.Success) {
    // handle the data
    val consoleIds: GetConsoleID.Response = response.body

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
    "ID": 1,
    "Name": "Mega Drive",
    "IconURL": "https://static.retroachievements.org/assets/images/system/md.png",
    "Active": true,
    "IsGameSystem": true
  }
  // ...
]
```

```json [NodeJS]
[
  { "id": 1, "name": "Mega Drive" }
  // ...
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetConsoleIDs.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/console/getConsoleIds.ts                                   |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
