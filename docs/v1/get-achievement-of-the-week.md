<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Achievement of the Week

A call to this endpoint will retrieve comprehensive metadata about the current Achievement of the Week.

[[toc]]

## On-site Representation

The current Achievement of the Week can be found on the site's home page:

![AOTW](/aotw.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetAchievementOfTheWeek.php</SampleRequest>

### Query Parameters

| Name | Required? | Description       |
| :--- | :-------- | :---------------- |
| `z`  | Yes       | Your username.    |
| `y`  | Yes       | Your web API key. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementOfTheWeek,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const achievementOfTheWeek = await getAchievementOfTheWeek(authorization);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetAchievementOfTheWeek.Response, ErrorResponse> = api.getAchievementOfTheWeek()

if (response is NetworkResponse.Success) {
    // handle the data
    val achievementOfTheWeek: GetAchievementOfTheWeek.Response = response.body

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
  "Achievement": {
    "ID": 178634,
    "Title": "Saved Summer",
    "Description": "Defeat the Flower and let Summer Get Busy",
    "Points": 10,
    "TrueRatio": 11,
    "Type": null,
    "Author": "StingX2",
    "DateCreated": "2021-10-16 23:53:32",
    "DateModified": "2021-10-17 19:26:09"
  },
  "Console": {
    "ID": 3,
    "Title": "SNES"
  },
  "ForumTopic": {
    "ID": 19685
  },
  "Game": {
    "ID": 2865,
    "Title": "~Hack~ Plumber For All Seasons, A"
  },
  "StartAt": "2023-10-23T00:00:00.000000Z",
  "TotalPlayers": 427,
  "Unlocks": [
    {
      "User": "Agnam",
      "RAPoints": 56120,
      "DateAwarded": "2023-10-26T22:13:34.000000Z",
      "HardcoreMode": 1
    }
    // ...
  ],
  "UnlocksCount": 280,
  "UnlocksHardcoreCount": 268
}
```

```json [NodeJS]
{
  "achievement": {
    "id": "165062",
    "title": "The True Hero",
    "description": "Receive any Ending as Han [Normal or Hard]",
    "points": "10",
    "trueRatio": "22",
    "author": "BigWeedSmokerMan",
    "dateCreated": "2021-08-08 17:47:46",
    "dateModified": "2021-08-09 12:20:05"
  },
  "console": { "id": "39", "title": "Saturn" },
  "forumTopic": { "id": "14767" },
  "game": { "id": "14513", "title": "Guardian Heroes" },
  "startAt": "2022-10-10 00:00:00",
  "totalPlayers": "219",
  "unlocks": [
    {
      "user": "Tirbaba2",
      "rAPoints": "72",
      "dateAwarded": "2022-10-10 01:42:19",
      "hardcoreMode": "1"
    }
    // ...
  ],
  "unlocksCount": "40"
}
```

:::

## Source

| Repo                         | URL                                                                                                                  |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementOfTheWeek.php                    |
| RetroAchievements/api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/feed/getAchievementOfTheWeek.ts                            |
| RetroAchievements/api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
