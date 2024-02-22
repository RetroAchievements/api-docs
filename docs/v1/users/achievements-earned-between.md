<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# User Unlocks (by date range)

A call to this endpoint will retrieve a list of achievements unlocked by a given user between two given dates.

[[toc]]

## On-site Representation

A user's unlocks by a date range can be found manually via the user history:

![Unlock History](/unlock-history.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetAchievementsEarnedBetween.php?u=Jamiras&f=1641054603&t=1641659403</SampleRequest>

### Query Parameters

| Name | Required? | Description                        |
|:-----|:----------|:-----------------------------------|
| `z`  | Yes       | Your username.                     |
| `y`  | Yes       | Your web API key.                  |
| `u`  | Yes       | The target username.               |
| `f`  | Yes       | Epoch timestamp. Time range start. |
| `t`  | Yes       | Epoch timestamp. Time range end.   |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementsEarnedBetween,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const achievements = await getAchievementsEarnedBetween(authorization, {
  userName: "Jamiras",
  fromDate: new Date("2022-01-01"),
  toDate: new Date("2022-01-08"),
});
```

```kotlin [Kotlin]
// create dates
val dateFormat = SimpleDateFormat("yyyy-MM-dd")
val fromDate: Date = dateFormat.parse("2022-01-01")
val toDate: Date = dateFormat.parse("2022-01-08")

val response: NetworkResponse<GetUserRecentAchievements.Response, ErrorResponse> = api.getAchievementsEarnedBetween(
    username = "Jamiras",
    fromDate = fromDate,
    toDate = toDate
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
    "Date": "2022-01-01 22:41:48",
    "HardcoreMode": 1,
    "AchievementID": 175333,
    "Title": "Solo Adventurer - Golden Bettles",
    "Description": "Solo defeat Golden Beetles at 2nd block (normal or above)",
    "BadgeName": "228985",
    "Points": 10,
    "Type": "missable",
    "Author": "Altomar",
    "GameTitle": "Persona 3 Portable",
    "GameIcon": "/Images/065205.png",
    "GameID": 3164,
    "ConsoleName": "PlayStation Portable",
    "CumulScore": 10,
    "BadgeURL": "/Badge/228985.png",
    "GameURL": "/game/3164"
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

| Repo                               | URL                                                                                                                      |
|:-----------------------------------|:-------------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb            | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementsEarnedBetween.php                   |
| Daijishou/RetroAchievements-Kotlin | https://github.com/Daijishou/RetroAchievements-Kotlin/blob/master/src/main/kotlin/retroachivements/api/RetroInterface.kt |
| RetroAchievements/api-js           | https://github.com/RetroAchievements/api-js/blob/main/src/user/getAchievementsEarnedBetween.ts                           |
