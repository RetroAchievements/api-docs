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

You must query the user by either their username or their ULID. Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                            |
| `i`  | Yes       | The target game ID.                                          |
| `u`  | Yes       | The target username or ULID.                                 |
| `c`  |           | Count, number of records to return (default: 200, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getUserGameLeaderboards,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const gameLeaderboards = await getUserGameLeaderboards(authorization, {
  gameId: 14402,
  username: "zuliman92",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserGameLeaderboard.Response, ErrorResponse> = api.getUserGameLeaderboards(
    gameId = 14402,
)

if (response is NetworkResponse.Success) {
    // handle the data
    val leaderboard: GetUserGameLeaderboard.Response = response.body

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
  "Count": 10,
  "Total": 64,
  "Results": [
    {
      "ID": 19062,
      "RankAsc": true,
      "Title": "New Zealand One",
      "Description": "Complete New Zealand S1 in least time",
      "Format": "MILLISECS",
      "UserEntry": {
        "User": "zuliman92",
        "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
        "Score": 12620,
        "FormattedScore": "2:06.20",
        "Rank": 2,
        "DateUpdated": "2024-12-12T16:40:59+00:00"
      }
    }
    // ...
  ]
}
```

```json [NodeJS]
{
  "count": 10,
  "total": 64,
  "results": [
    {
      "id": 19062,
      "rankAsc": true,
      "title": "New Zealand One",
      "description": "Complete New Zealand S1 in least time",
      "format": "MILLISECS",
      "userEntry": {
        "user": "zuliman92",
        "ulid": "00003EMFWR7XB8SDPEHB3K56ZQ",
        "score": 12620,
        "formattedScore": "2:06.20",
        "rank": 2,
        "dateUpdated": "2024-12-12T16:40:59+00:00"
      }
    }
    // ...
  ]
}
```

:::

## Source

| Repo   | URL                                                                                               |
| :----- | :------------------------------------------------------------------------------------------------ |
| RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserGameLeaderboards.php |
| api-js | https://github.com/RetroAchievements/api-js/blob/main/src/leaderboard/getUserGameLeaderboards.ts  |
