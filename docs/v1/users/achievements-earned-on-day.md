<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# User Unlocks (On Date)

A call to this endpoint will retrieve a list of achievements unlocked by a given user on a specified date.

[[toc]]

## On-site Representation

A user's unlocks by date can be found via the user history:

![Unlock History](/unlock-history.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetAchievementsEarnedOnDay.php?u=MaxMilyin&d=2022-10-14</SampleRequest>

### Query Parameters

| Name | Required? | Description                |
| :--- | :-------- | :------------------------- |
| `z`  | Yes       | Your username.             |
| `y`  | Yes       | Your web API key.          |
| `u`  | Yes       | The target username.       |
| `d`  | Yes       | Date in YYYY-MM-DD format. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementsEarnedOnDay,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const achievements = await getAchievementsEarnedOnDay(authorization, {
  userName: "MaxMilyin",
  onDate: new Date("2022-10-14"),
});
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

| Repo                     | URL                                                                                                  |
| :----------------------- | :--------------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementsEarnedOnDay.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/user/getAchievementsEarnedOnDay.ts         |
