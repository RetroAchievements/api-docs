<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Completion Progress

A call to this endpoint will retrieve a given user's completion progress, targeted by their username.

[[toc]]

## On-site Representation

A user's completion progress can be found in several places, most prolifically on their Completion Progress page:

![Completion Progress](/completion-progress.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserCompletionProgress.php?u=MaxMilyin</SampleRequest>

### Query Parameters

You must query the user by either their username or their ULID. Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                            |
| `u`  |           | The target username or ULID.                                 |
| `c`  |           | Count, number of records to return (default: 100, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getUserCompletionProgress,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const userCompletionProgress = await getUserCompletionProgress(authorization, {
  username: "MaxMilyin",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserCompletionProgress.Response, ErrorResponse> = api.getUserCompletionProgress(
    username = "MaxMilyin",
)

if (response is NetworkResponse.Success) {
    // handle the data
    val completionProgress: GetUserCompletionProgress.Response = response.body

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
  "Count": 100,
  "Total": 1287,
  "Results": [
    {
      "GameID": 20246,
      "Title": "~Hack~ Knuckles the Echidna in Sonic the Hedgehog",
      "ImageIcon": "/Images/074560.png",
      "ConsoleID": 1,
      "ConsoleName": "Mega Drive / Genesis",
      "MaxPossible": 0,
      "NumAwarded": 0,
      "NumAwardedHardcore": 0,
      "MostRecentAwardedDate": "2023-10-27T02:52:34+00:00",
      "HighestAwardKind": "beaten-hardcore",
      "HighestAwardDate": "2023-10-27T02:52:34+00:00"
    }
    // ...
  ]
}
```

```json [NodeJS]
{
  "count": 100,
  "total": 1287,
  "results": [
    {
      "gameId": 20246,
      "title": "~Hack~ Knuckles the Echidna in Sonic the Hedgehog",
      "imageIcon": "/Images/074560.png",
      "consoleId": 1,
      "consoleName": "Mega Drive / Genesis",
      "maxPossible": 0,
      "numAwarded": 0,
      "numAwardedHardcore": 0,
      "mostRecentAwardedDate": "2023-10-27T02:52:34+00:00",
      "highestAwardKind": "beaten-hardcore",
      "highestAwardDate": "2023-10-27T02:52:34+00:00"
    }
    // ...
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserCompletionProgress.php                  |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserCompletionProgress.ts                          |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
