<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Achievement Unlocks

A call to this endpoint will retrieve a list of users who have earned an achievement, targeted by the achievement's ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetAchievementUnlocks.php?a=9</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                 |
| :--- | :-------- | :---------------------------------------------------------- |
| `z`  | Yes       | Your username.                                              |
| `y`  | Yes       | Your web API key.                                           |
| `a`  | Yes       | The target achievement ID.                                  |
| `c`  |           | Count, number of records to return (default: 50, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).             |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementUnlocks,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const achievementUnlocks = await getAchievementUnlocks(authorization, {
  achievementId: 9,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetAchievementUnlocks.Response, ErrorResponse> = api.getAchievementUnlocks(
    achievementId = 13876
)

if (response is NetworkResponse.Success) {
    // handle the data
    val achievements: GetAchievementUnlocks.Response = response.body

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
    "ID": 9,
    "Title": "That Was Easy",
    "Description": "Complete the first act in Green Hill Zone",
    "Points": 4,
    "TrueRatio": 4,
    "Author": "Scott",
    "DateCreated": "2012-11-02 00:03:12",
    "DateModified": "2023-08-08 00:36:59",
    "Type": "progression"
  },
  "Console": {
    "ID": 1,
    "Title": "Mega Drive"
  },
  "Game": {
    "ID": 1,
    "Title": "Sonic the Hedgehog"
  },
  "UnlocksCount": 24272,
  "UnlocksHardcoreCount": 10830,
  "TotalPlayers": 27079,
  "Unlocks": [
    {
      "User": "vipotaenko02",
      "RAPoints": 0,
      "DateAwarded": "2023-10-27T00:19:05.000000Z",
      "HardcoreMode": 0
    }
    // ...
  ]
}
```

```json [NodeJS]
{
  "achievement": {
    "id": 9,
    "title": "That Was Easy",
    "description": "Complete the first act in Green Hill Zone",
    "points": 4,
    "trueRatio": 4,
    "author": "Scott",
    "dateCreated": "2012-11-02 00:03:12",
    "dateModified": "2023-08-08 00:36:59",
    "type": "progression"
  },
  "console": { "id": 1, "title": "Mega Drive" },
  "game": { "id": 1, "title": "Sonic the Hedgehog" },
  "unlocksCount": 24272,
  "unlocksHardcoreCount": 10830,
  "totalPlayers": 27079,
  "unlocks": [
    {
      "user": "vipotaenko02",
      "raPoints": 0,
      "dateAwarded": "2023-10-27T00:19:05.000000Z",
      "hardcoreMode": false
    }
    // ...
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementUnlocks.php                      |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/achievement/getAchievementUnlocks.ts                       |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
