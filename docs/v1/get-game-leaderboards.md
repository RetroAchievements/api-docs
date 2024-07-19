<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Leaderboards

A call to this endpoint will retrieve a given games's list of leaderboards, targeted by the game's ID.

[[toc]]

## On-site Representation

A games's list of leaderboards can be found on on the game's page:

![Game Leaderboards](/game-leaderboards.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameLeaderboards.php?i=9190</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `z`  | Yes       | Your username.                                               |
| `y`  | Yes       | Your web API key.                                            |
| `i`  | Yes       | The target game ID.                                          |
| `c`  |           | Count, number of records to return (default: 100, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

Not yet supported.

:::

## Response

::: code-group

```json [HTTP Response]
{
  "Count": 10,
  "Total": 10,
  "Results": [
    {
      "ID": 90099,
      "Title": "Ninja Warrior I",
      "Description": "Reach the end of Niko's first obstacle course as quickly as you can."
    }
    // ...
  ]
}
```

:::

## Source

| Repo  | URL                                                                                           |
| :---- | :-------------------------------------------------------------------------------------------- |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameLeaderboards.php |
