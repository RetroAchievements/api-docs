<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Game Leaderboards

A call to this endpoint will retrieve a user's list of leaderboards for a given game, targeted by the game's ID.

[[toc]]

## On-site Representation

A games's list of leaderboards can be found on on the game's page:

![Game Leaderboards](/game-leaderboards.png)

This endpoint will only return the leaderboards for the user given in the request. If the user has not submitted a score for a leaderboard, it will not be included in the response.

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserGameLeaderboards.php?i=1&u=zuliman92</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                            |
| `i`  | Yes       | The target game ID.                                          |
| `u`  | Yes       | The username of the user to retrieve leaderboards for.       |
| `c`  |           | Count, number of records to return (default: 200, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

Not yet supported.

## Response

::: code-group

```json [HTTP Response]
{
  "Count": 10,
  "Total": 64,
  "Results": [
    {
      "ID": 19062,
      "RankAsc": "true",
      "Title": "New Zealand One",
      "Description": "Complete New Zealand S1 in least time",
      "Format": "MILLISECS",
      "UserEntry": {
        "User": "zuliman92",
        "Score": 12620,
        "FormattedScore": "2:06.20",
        "Rank": 2,
        "DateUpdated": "2024-12-12T16:40:59+00:00"
      }
    },
    ...
  ]
}
```

:::

## Source

| Repo  | URL                                                                                               |
| :---- | :------------------------------------------------------------------------------------------------ |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserGameLeaderboards.php |
