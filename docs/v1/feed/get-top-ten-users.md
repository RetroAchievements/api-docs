<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Top Ten Ranked Users

A call to this endpoint will retrieve the current top ten users, ranked by hardcore points, on the site.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetTopTenUsers.php</SampleRequest>

### Query Parameters

| Name | Required? | Description       |
| :--- | :-------- | :---------------- |
| `z`  | Yes       | Your username.    |
| `y`  | Yes       | Your web API key. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getTopTenUsers } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const topTenUsers = await getTopTenUsers(authorization);
```

:::

## Response

::: code-group

```json [HTTP Response]
[
  {
    "1": "MaxMilyin",
    "2": 399597, // the user's hardcore points
    "3": 1599212 // the user's RetroPoints (white points)
  }
  // ...
]
```

```json [NodeJS]
[
  {
    "userName": "MaxMilyin",
    "totalPoints": 399597,
    "totalRatioPoints": 1599212
  }
  // ...
]
```

:::

## Source

| Repo                     | URL                                                                                      |
| :----------------------- | :--------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetTopTenUsers.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/feed/getTopTenUsers.ts         |
