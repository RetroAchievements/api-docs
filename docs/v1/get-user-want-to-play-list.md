<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Want to Play Games List

A call to this endpoint will retrieve a given user's "Want to Play Games" list, targeted by their username. Results will only be returned if the target user is yourself, or if both you and the target user follow each other.

[[toc]]

## On-site Representation

The user's Want to Play Games list page looks like:

![Want to Play Games List](/want-to-play-list.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserWantToPlayList.php?u=MaxMilyin</SampleRequest>

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
  getUserWantToPlayList,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const game = await getUserWantToPlayList(authorization, {
  username: "MaxMilyin",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserWantToPlayList.Response, ErrorResponse> = api.getUserWantToPlayList(
    username = "MaxMilyin",
)

if (response is NetworkResponse.Success) {
    // handle the data
    val wantToPlayList: GetUserWantToPlayList.Response = response.body

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
      "ID": 20246,
      "Title": "~Hack~ Knuckles the Echidna in Sonic the Hedgehog",
      "ImageIcon": "/Images/074560.png",
      "ConsoleID": 1,
      "ConsoleName": "Genesis/Mega Drive",
      "PointsTotal": 1500,
      "AchievementsPublished": 50
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
      "id": 20246,
      "title": "~Hack~ Knuckles the Echidna in Sonic the Hedgehog",
      "imageIcon": "/Images/074560.png",
      "consoleID": 1,
      "consoleName": "Genesis/Mega Drive",
      "pointsTotal": 1500,
      "achievementsPublished": 50
    }
    // ...
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserWantToPlayList.php                      |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserWantToPlayList.ts                              |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
