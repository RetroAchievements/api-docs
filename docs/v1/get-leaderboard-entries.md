<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Leaderboard Entries

A call to this endpoint will retrieve a given leadboard's entires, targeted by its ID.

[[toc]]

## On-site Representation

A leaderboards's entries can be found on the leaderboard info page:

![Leaderboard Entires](/leaderboard-entries.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetLeaderboardEntries.php?i=104370</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                            |
| `i`  | Yes       | The target leaderboard ID.                                   |
| `c`  |           | Count, number of records to return (default: 100, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

Not yet supported.

## Response

::: code-group

```json [HTTP Response]
{
  "Count": 100,
  "Total": 1287,
  "Results": [
    {
      "Rank": 1,
      "User": "vani11a",
      "Score": 390490,
      "FormattedScore": "390,490",
      "DateSubmitted": "2024-07-25T15:51:00+00:00"
    }
    // ...
  ]
}
```

:::

## Source

| Repo  | URL                                                                                             |
| :---- | :---------------------------------------------------------------------------------------------- |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetLeaderboardEntries.php |
