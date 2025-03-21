<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Unlocks (on date)

A call to this endpoint will retrieve a list of achievements unlocked by a given user on a specified date.

[[toc]]

## On-site Representation

A user's unlocks by date can be found via the user history:

![Unlock History](/unlock-history.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetAchievementsEarnedOnDay.php?u=MaxMilyin&d=2022-10-14</SampleRequest>

### Query Parameters

You must query the user by either their username or their ULID. Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                  |
| :--- | :-------- | :--------------------------- |
| `y`  | Yes       | Your web API key.            |
| `u`  |           | The target username or ULID. |
| `d`  | Yes       | Date in YYYY-MM-DD format.   |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementsEarnedOnDay,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const achievements = await getAchievementsEarnedOnDay(authorization, {
  username: "MaxMilyin",
  onDate: new Date("2022-10-14"),
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

// create dates
val dateFormat = SimpleDateFormat("yyyy-MM-dd")
val date: Date = dateFormat.parse("2022-10-14")

val response: NetworkResponse<GetUserRecentAchievements.Response, ErrorResponse> = api.getAchievementsEarnedOnDay(
    username = "Jamiras",
    date = date
)

if (response is NetworkResponse.Success) {
    // handle the data
    val achievements: GetUserRecentAchievements.Response = response.body

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
    "Date": "2022-10-14 00:43:58",
    "HardcoreMode": 1,
    "AchievementID": 250780,
    "Title": "Play With Yourself",
    "Description": "Completed Rank F in the Monster Arena",
    "BadgeName": "277506",
    "Points": 5,
    "Type": null,
    "Author": "TheMysticalOne",
    "AuthorULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
    "GameTitle": "Dragon Quest VIII: Journey of the Cursed King",
    "GameIcon": "/Images/038649.png",
    "GameID": 2721,
    "ConsoleName": "PlayStation 2",
    "CumulScore": 5,
    "BadgeURL": "/Badge/277506.png",
    "GameURL": "/game/2721"
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "date": "2022-10-12 18:12:26",
    "hardcoreMode": false,
    "achievementId": 225335,
    "title": "You Got a Family, Phil?",
    "description": "Earn the No Cheese! Goofy Goober token",
    "badgeName": "250698",
    "points": 5,
    "type": null,
    "author": "pinguupinguu",
    "authorUlid": "00003EMFWR7XB8SDPEHB3K56ZQ",
    "gameTitle": "SpongeBob SquarePants: The Movie",
    "gameIcon": "/Images/059007.png",
    "gameId": 19018,
    "consoleName": "PlayStation 2",
    "cumulScore": 5,
    "badgeUrl": "/Badge/250698.png",
    "gameUrl": "/game/19018"
  }
  // ...
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementsEarnedOnDay.php                 |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getAchievementsEarnedOnDay.ts                         |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
