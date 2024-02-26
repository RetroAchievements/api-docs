<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Unlocks Distribution

A call to this endpoint will retrieve a dictionary of the number of players who have earned a specific number of achievements for a given game ID. This endpoint can be used to determine the total mastery count for a game, as well as how rare that overall mastery is.

[[toc]]

## On-site Representation

When browsing a game page, for example, [Sonic the Hedgehog](https://retroachievements.org/game/1), a chart representing the achievement distribution can be seen on the page:

![Achievement Distribution](/achievement-distribution.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetAchievementDistribution.php?i=14402&h=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                                |
| :--- | :-------- | :------------------------------------------------------------------------- |
| `z`  | Yes       | Your username.                                                             |
| `y`  | Yes       | Your web API key.                                                          |
| `i`  | Yes       | The target game ID.                                                        |
| `h`  |           | 1 to only query hardcore unlocks. 0 to query all unlocks. Defaults to 0.   |
| `f`  |           | 3 for official achievements. 5 for unofficial achievements. Defaults to 3. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementDistribution,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const achievementDistribution = await getAchievementDistribution(
  authorization,
  {
    gameId: 14402,
    hardcore: true,
  },
);
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetAchievementDistribution.Response, ErrorResponse> = api.getAchievementDistribution(
    gameId = 14402,
    hardcore = 1
)

if (response is NetworkResponse.Success) {
    // handle the data
    val distribution: GetAchievementDistribution.Response = response.body

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
  "1": 141,
  "2": 51,
  "3": 41,
  "4": 49,
  "5": 57,
  "6": 41,
  "7": 36,
  "8": 67,
  "9": 75,
  "10": 28,
  "11": 26,
  "12": 3,
  "13": 6,
  "14": 3,
  "15": 8
}
```

```json [NodeJS]
{
  "1": 141,
  "2": 51,
  "3": 41,
  "4": 49,
  "5": 57,
  "6": 41,
  "7": 36,
  "8": 67,
  "9": 75,
  "10": 28,
  "11": 26,
  "12": 3,
  "13": 6,
  "14": 3,
  "15": 8
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementDistribution.php                 |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/game/getAchievementDistribution.ts                         |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
