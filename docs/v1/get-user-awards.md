<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Awards / Badges

A call to this endpoint will retrieve metadata about the target user's site awards, via their username.

[[toc]]

## On-site Representation

The easiest place to see a summary of user awards in the Progression Status component on the user profile:

![User Awards](/user-awards.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserAwards.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
| :--- | :-------- | :------------------- |
| `z`  | Yes       | Your username.       |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getUserAwards } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userAwards = await getUserAwards(authorization, { userName: "xelnia" });
```

:::

## Response

Possible `AwardType` values are "Mastery/Completion", "Achievement Unlocks Yield", "Achievement Points Yield", "Patreon Supporter", "Certified Legend", and "Game Beaten".

::: code-group

```json [HTTP Response]
{
  "TotalAwardsCount": 1613,
  "HiddenAwardsCount": 0,
  "MasteryAwardsCount": 805,
  "CompletionAwardsCount": 0,
  "BeatenHardcoreAwardsCount": 807,
  "BeatenSoftcoreAwardsCount": 0,
  "EventAwardsCount": 2,
  "SiteAwardsCount": 0,
  "VisibleUserAwards": [
    {
      "AwardedAt": "2016-01-02T05:53:52+00:00",
      "AwardType": "Game Beaten",
      "AwardData": 1448,
      "AwardDataExtra": 1, // 1 for hardcore mode, 0 for softcore mode
      "DisplayOrder": 0,
      "Title": "Mega Man",
      "ConsoleID": 7,
      "ConsoleName": "NES",
      "Flags": 0,
      "ImageIcon": "/Images/024519.png"
    }
  ]
}
```

```json [NodeJS]
{
  "totalAwardsCount": 10,
  "hiddenAwardsCount": 2,
  "masteryAwardsCount": 6,
  "completionAwardsCount": 0,
  "beatenHardcoreAwardsCount": 24,
  "beatenSoftcoreAwardsCount": 7,
  "eventAwardsCount": 0,
  "siteAwardsCount": 2,
  "visibleUserAwards": [
    {
      "awardedAt": "2022-08-26T19:34:43+00:00",
      "awardType": "Mastery/Completion",
      "awardData": 802,
      "awardDataExtra": 1,
      "displayOrder": 114,
      "title": "WarioWare, Inc.: Mega Microgames!",
      "consoleName": "Game Boy Advance",
      "flags": null,
      "imageIcon": "/Images/034678.png"
    }
    // ...
  ]
}
```

:::

## Source

| Repo                     | URL                                                                                     |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserAwards.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserAwards.ts         |
