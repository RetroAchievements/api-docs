<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Achievement IDs

A call to this endpoint will retrieve the list of achievement IDs for a game, targeted by game ID. This can be useful if you'd like to quickly check how many achievements a particular game has. Using this, you can also detect if a game has received a revision. For example, if a game had 100 achievements last month and has 102 today, you know the game's achievement set has been revised.

[[toc]]

## On-site Representation

When browsing a game page, for example, [Sonic the Hedgehog](https://retroachievements.org/game/1), each achievement on the list has a unique ID.

![Achievement IDs](/achievement-ids.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetAchievementCount.php?i=14402</SampleRequest>

### Query Parameters

| Name | Required? | Description         |
| :--- | :-------- | :------------------ |
| `z`  | Yes       | Your username.      |
| `y`  | Yes       | Your web API key.   |
| `i`  | Yes       | The target game ID. |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getAchievementCount,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const achievementCount = await getAchievementCount(authorization, {
  gameId: 14402,
});
```

:::

## Response

::: code-group

```json [HTTP Response]
{
  "GameID": 14402,
  "AchievementIDs": [
    79434, 79435, 79436, 79437, 79438, 79439, 79440, 79441, 79442, 79443, 79444,
    79445, 325413, 325414, 325415
  ]
}
```

```json [NodeJS]
{
  "gameId": 14402,
  "achievementIds": [
    79434, 79435, 79436, 79437, 79438, 79439, 79440, 79441, 79442, 79443, 79444,
    79445, 325413, 325414, 325415
  ]
}
```

:::

## Source

| Repo                     | URL                                                                                           |
| :----------------------- | :-------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetAchievementCount.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/game/getAchievementCount.ts         |
