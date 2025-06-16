<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Leaderboard Entries

A call to this endpoint will retrieve a given leaderboard's entries, targeted by its ID.

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

::: code-group

```ts [NodeJS]
import {
  buildAuthorization,
  getLeaderboardEntries,
} from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call.
const entries = await getLeaderboardEntries(authorization, {
  leaderboardId: 14402,
});
```

```Kotlin
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetLeaderboardEntries.Response, ErrorResponse> = api.getLeaderboardEntries(
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val leaderboardEntries: GetLeaderboardEntries.Response = response.body

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
  "Count": 100,
  "Total": 1287,
  "Results": [
    {
      "Rank": 1,
      "User": "vani11a",
      "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
      "Score": 390490,
      "FormattedScore": "390,490",
      "DateSubmitted": "2024-07-25T15:51:00+00:00"
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
      "rank": 1,
      "user": "vani11a",
      "ulid": "00003EMFWR7XB8SDPEHB3K56ZQ",
      "score": 390490,
      "formattedScore": "390,490",
      "dateSubmitted": "2024-07-25T15:51:00+00:00"
    }
    // ...
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetLeaderboardEntries.php                      |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/leaderboard/getLeaderboardEntries.ts                       |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
