<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Want to Play Lost

A call to this endpoint will retrieve a giver user's want to play list, targeted by their username.

[[toc]]

## On-site Representation

A user's want to play list can be found on on the user's Want to Play Games page:

![Want to Play](/want-to-play-list.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserWantToPlayList.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `z`  | Yes       | Your username.                                               |
| `y`  | Yes       | Your web API key.                                            |
| `u`  | Yes       | The target username.                                         |
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
const userWantToPlayList = await getUserWantToPlayList(authorization, {
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
    val completionProgress: GetUserWantToPlayList.Response = response.body

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
      "TotalPoints": 1500,
      "NumPossibleAchievements": 50
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
      "totalPoints": 1500,
      "numPossibleAchievements": 50
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
