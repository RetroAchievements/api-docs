<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Inactive Claims

A call to this endpoint returns information about all (1000 max) achievement set development claims of a specified kind: completed, dropped, or expired.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetClaims.php?k=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                                        |
| :--- | :-------- | :--------------------------------------------------------------------------------- |
| `z`  | Yes       | Your username.                                                                     |
| `y`  | Yes       | Your web API key.                                                                  |
| `k`  |           | The desired claim kind: 1 (completed), 2 (dropped), or 3 (expired). Defaults to 1. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getClaims } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const claims = await getClaims(authorization, { claimKind: "completed" });
```

:::

## Response

::: code-group

```json [HTTP Response]
[
  {
    "ID": 11245,
    "User": "kmpers",
    "GameID": 24541,
    "GameTitle": "GP World",
    "GameIcon": "/Images/076324.png",
    "ConsoleID": 33,
    "ConsoleName": "SG-1000",
    "ClaimType": 0,
    "SetType": 1,
    "Status": 1,
    "Extension": 0,
    "Special": 1,
    "Created": "2023-10-27 22:30:49",
    "DoneTime": "2023-10-27 23:21:12",
    "Updated": "2023-10-27 23:21:12",
    "UserIsJrDev": 0,
    "MinutesLeft": -173762
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "id": 11245,
    "user": "kmpers",
    "gameId": 24541,
    "gameTitle": "GP World",
    "gameIcon": "/Images/076324.png",
    "consoleId": 33,
    "consoleName": "SG-1000",
    "claimType": 0,
    "setType": 1,
    "status": 1,
    "extension": 0,
    "special": 1,
    "created": "2023-10-27 22:30:49",
    "doneTime": "2023-10-27 23:21:12",
    "updated": "2023-10-27 23:21:12",
    "userIsJrDev": false,
    "minutesLeft": -173762
  }
  // ...
]
```

:::

## Source

| Repo                     | URL                                                                                 |
| :----------------------- | :---------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetClaims.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/feed/getClaims.ts         |
