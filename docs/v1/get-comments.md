<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Comments

A call to this endpoint returns comments of a specified kind: game, achievement, or user.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetComments.php?t=1&i=1</SampleRequest>

### Query Parameters

| Name   | Required? | Description                                                                                             |
| :----- | :-------- | :------------------------------------------------------------------------------------------------------ |
| `y`    | Yes       | Your web API key.                                                                                       |
| `i`    | Yes       | The target game or achievement ID (if type is 1 or 2). The target username or user ULID (if type is 3). |
| `t`    | Sometimes | The target comment kind: 1 (game), 2 (achievement), or 3 (user). Required if type is 1 or 2.            |
| `c`    |           | Count, number of records to return (default: 100, max: 500).                                            |
| `o`    |           | Offset, number of entries to skip (default: 0).                                                         |
| `sort` |           | Sort order, sort comments. 'submitted' = ascending, '-submitted' = descending (default: 'submitted')    |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getComments } from "@retroachievements/api";

// First, build your authorization object.
const username = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ username, webApiKey });

// Then, make the API call depending on what kind of comments you want.

// For comments on a user's wall, call the following:
const userWallComments = await getComments(authorization, {
  identifier: "MaxMilyin",
});

// For comments on a game's wall, call the following:
const gameWallComments = await getComments(authorization, {
  identifier: 14402,
  kind: "game",
});

// For comments on an achievement's wall, call the following:
const achievementWallComments = await getComments(authorization, {
  identifier: 14402,
  kind: "achievement",
});
```

```Kotlin
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

// get comments currently on user's wall
val response: NetworkResponse<GetComments.Response, ErrorResponse> = api.getCommentsOnUserWall(
    username = "MaxMilyin",
)

// to get comments from a game's wall, use the following:
//
// val response: NetworkResponse<GetComments.Response, ErrorResponse> = api.getCommentsOnGameWall(
//     gameId = 14402,
// )

// to get comments from an achievement's wall, use the following:
//
// val response: NetworkResponse<GetComments.Response, ErrorResponse> = api.getCommentsOnAchievementWall(
//     achievementId = 14402,
// )

if (response is NetworkResponse.Success) {
    // handle the data
    val comments: GetComments.Response = response.body

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
[
    "Count": 4,
    "Total": 4,
    "Results": [
        {
            "User": "PlayTester",
            "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
            "Submitted": "2024-07-31T11:22:23.000000Z",
            "CommentText": "Comment 1"
        },
        // ...
    ]
]
```

```json [NodeJS]
[
    "count": 4,
    "total": 4,
    "results": [
        {
            "user": "PlayTester",
            "ulid": "00003EMFWR7XB8SDPEHB3K56ZQ",
            "submitted": "2024-07-31T11:22:23.000000Z",
            "commentText": "Comment 1"
        },
        // ...
    ]
]
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetComments.php                                |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/comment/getComments.ts                                     |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
