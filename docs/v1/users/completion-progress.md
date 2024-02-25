<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# User Completion Progress

A call to this endpoint will retrieve a giver user's completion progress, targeted by their username.

[[toc]]

## On-site Representation

A user's completion progress can be found in several places, most prolifically on their Completion Progress page:

![Completion Progress](/completion-progress.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserCompletionProgress.php?u=MaxMilyin</SampleRequest>

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
  getUserCompletionProgress,
} from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userCompletionProgress = await getUserCompletionProgress(authorization, {
  userName: "MaxMilyin",
});
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
      "ConsoleName": "Mega Drive / Genesis",
      "MaxPossible": 0,
      "NumAwarded": 0,
      "NumAwardedHardcore": 0,
      "MostRecentAwardedDate": "2023-10-27T02:52:34+00:00",
      "HighestAwardKind": "beaten-hardcore",
      "HighestAwardDate": "2023-10-27T02:52:34+00:00"
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
      "consoleName": "Mega Drive / Genesis",
      "maxPossible": 0,
      "numAwarded": 0,
      "numAwardedHardcore": 0,
      "mostRecentAwardedDate": "2023-10-27T02:52:34+00:00",
      "highestAwardKind": "beaten-hardcore",
      "highestAwardDate": "2023-10-27T02:52:34+00:00"
    }
    // ...
  ]
}
```

:::

## Source

| Repo                     | URL                                                                                                 |
| :----------------------- | :-------------------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserCompletionProgress.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserCompletionProgress.ts         |
