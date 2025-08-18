<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Progression

A call to this endpoint will retrieve information about the average time to unlock achievements in a game, targeted via its unique ID.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameProgression.php?i=228</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                               |
| :--- | :-------- | :------------------------------------------------------------------------ |
| `y`  | Yes       | Your web API key.                                                         |
| `i`  | Yes       | The target game ID.                                                       |
| `h`  |           | 1 to prefer players with more hardcore unlocks than non-hardcore unlocks. |

## Response

::: code-group

```json [HTTP Response]
{
  "ID": 228,
  "Title": "Super Mario World",
  "ConsoleID": 3,
  "ConsoleName": "SNES/Super Famicom",
  "ImageIcon": "/Images/112443.png",
  "NumDistinctPlayers": 79281,
  "TimesUsedInBeatMedian": 4493,
  "TimesUsedInHardcoreBeatMedian": 8249,
  "MedianTimeToBeat": 17878,
  "MedianTimeToBeatHardcore": 19224,
  "TimesUsedInCompletionMedian": 155,
  "TimesUsedInMasteryMedian": 1091,
  "MedianTimeToComplete": 67017,
  "MedianTimeToMaster": 79744,
  "NumAchievements": 89,
  "Achievements": [
    {
      "ID": 342,
      "Title": "Giddy Up!",
      "Description": "Catch a ride with a friend",
      "Points": 1,
      "TrueRatio": 1,
      "Type": null,
      "BadgeName": "46580",
      "NumAwarded": 75168,
      "NumAwardedHardcore": 37024,
      "TimesUsedInUnlockMedian": 63,
      "TimesUsedInHardcoreUnlockMedian": 69,
      "MedianTimeToUnlock": 274,
      "MedianTimeToUnlockHardcore": 323
    },
    {
      "ID": 341,
      "Title": "Unleash The Dragon",
      "Description": "Collect 5 Dragon Coins in a level",
      "Points": 2,
      "TrueRatio": 2,
      "Type": null,
      "BadgeName": "46591",
      "NumAwarded": 66647,
      "NumAwardedHardcore": 34051,
      "TimesUsedInUnlockMedian": 66,
      "TimesUsedInHardcoreUnlockMedian": 70,
      "MedianTimeToUnlock": 290,
      "MedianTimeToUnlockHardcore": 333
    }
    // ... additional achievements
  ]
}
```

:::

## Source

| Repo  | URL                                                                                          |
| :---- | :------------------------------------------------------------------------------------------- |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameProgression.php |
