<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
</script>

# Get All Systems

A call to this endpoint will retrieve the complete list of all system ID and name pairs on the site.

[[toc]]

## On-site Representation

The systems list can be found by selecting the "Games" menu from the site navbar:

![All Systems](/all-systems.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetConsoleIDs.php</SampleRequest>

### Query Parameters

| Name | Required? | Description       |
| :--- | :-------- | :---------------- |
| `z`  | Yes       | Your username.    |
| `y`  | Yes       | Your web API key. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getConsoleIds } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const consoleIds = await getConsoleIds(authorization);
```

:::

## Response

::: code-group

```json [HTTP Response]
[
  { "ID": 1, "Name": "Mega Drive" }
  // ...
]
```

```json [NodeJS]
[
  { "id": 1, "name": "Mega Drive" }
  // ...
]
```

:::

## Source

| Repo                     | URL                                                                                     |
| :----------------------- | :-------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetConsoleIDs.php |
| RetroAchievements/api-js | https://github.com/RetroAchievements/api-js/blob/main/src/console/getConsoleIds.ts      |
