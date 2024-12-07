<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Game Leaderboards

A call to this endpoint will retrieve a given game's list of leaderboards, targeted by the game's ID.

[[toc]]

## On-site Representation

A games's list of leaderboards can be found on on the game's page:

![Game Leaderboards](/game-leaderboards.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetGameLeaderboards.php?i=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                            |
| `i`  | Yes       | The target game ID.                                          |
| `c`  |           | Count, number of records to return (default: 100, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

::: code-group

```Kotlin
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetGameLeaderboards.Response, ErrorResponse> = api.getGameLeaderboards(
    gameId = 14402
)

if (response is NetworkResponse.Success) {
    // handle the data
    val gameLeaderboards: GetGameLeaderboards.Response = response.body

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
  "Count": 29,
  "Total": 29,
  "Results": [
    {
      "ID": 104370,
      "RankAsc": false,
      "Title": " South Island Conqueror",
      "Description": "Complete the game with the highest score possible",
      "Format": "VALUE",
      "TopEntry": {
        "User": "vani11a",
        "Score": "390490",
        "FormattedScore": "390,490"
      }
    }
    // ...
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetGameLeaderboards.php                        |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
