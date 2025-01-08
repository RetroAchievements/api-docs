<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Supported Game Files

A call to this endpoint will retrieve the hashes linked to a game, targeted via its unique ID.

[[toc]]

## On-site Representation

This data can be found on the Supported Game Files page, for example, [Sonic the Hedgehog](https://retroachievements.org/game/1/hashes):

![Game Hashes](/game-hashes.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameHashes.php?i=1</SampleRequest>

### Query Parameters

| Name | Required? | Description         |
| :--- | :-------- | :------------------ |
| `y`  | Yes       | Your web API key.   |
| `i`  | Yes       | The target game ID. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getGameHashes } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const game = await getGameHashes(authorization, {
  gameId: 14402,
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameHashes.Response, ErrorResponse> = api.getGameHashes(
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val gameHashes: GetGameHashes.Response = response.body

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
  "Results": [
    {
      "MD5": "1b1d9ac862c387367e904036114c4825",
      "Name": "Sonic The Hedgehog (USA, Europe) (Ru) (NewGame).md",
      "Labels": ["nointro", "rapatches"],
      "PatchUrl": "https://github.com/RetroAchievements/RAPatches/raw/main/MD/Translation/Russian/1-Sonic1-Russian.zip"
    },
    {
      "MD5": "1bc674be034e43c96b86487ac69d9293",
      "Name": "Sonic The Hedgehog (USA, Europe).md",
      "Labels": ["nointro"],
      "PatchUrl": null
    }
  ]
}
```

```json [NodeJS]
{
  "results": [
    {
      "md5": "1b1d9ac862c387367e904036114c4825",
      "name": "Sonic The Hedgehog (USA, Europe) (Ru) (NewGame).md",
      "labels": ["nointro", "rapatches"],
      "patchUrl": "https://github.com/RetroAchievements/RAPatches/raw/main/MD/Translation/Russian/1-Sonic1-Russian.zip"
    },
    {
      "md5": "1bc674be034e43c96b86487ac69d9293",
      "name": "Sonic The Hedgehog (USA, Europe).md",
      "labels": ["nointro"],
      "patchUrl": null
    }
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameHashes.php                              |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/game/getGameHashes.ts                                      |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
