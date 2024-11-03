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

Not yet supported.

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

:::

## Source

| Repo  | URL                                                                                     |
| :---- | :-------------------------------------------------------------------------------------- |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameHashes.php |