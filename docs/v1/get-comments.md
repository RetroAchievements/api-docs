<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Comments

A call to this endpoint returns comments of a specified kind: game, achievement, or user.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetComments.php?t=1&i=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                                                  |
| :--- | :-------- | :------------------------------------------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                                                            |
| `i`  | Yes       | The target game or achievement ID (if type is 1 or 2). The target username (if type is 3).   |
| `t`  | Sometimes | The target comment kind: 1 (game), 2 (achievement), or 3 (user). Required if type is 1 or 2. |
| `c`  |           | Count, number of records to return (default: 100, max: 500).                                 |
| `o`  |           | Offset, number of entries to skip (default: 0).                                              |

## Client Library

::: code-group

```Kotlin [User]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetComments.Response, ErrorResponse> = api.getCommentsOnUserWall(
    username = "MaxMilyin",
)

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

```Kotlin [Game]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetComments.Response, ErrorResponse> = api.getCommentsOnGameWall(
    gameId = 14402,
)

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

```Kotlin [Achievement]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetComments.Response, ErrorResponse> = api.getCommentsOnAchievementWall(
    achievementId = 14402,
)

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
            "Submitted": "2024-07-31T11:22:23.000000Z",
            "CommentText": "Comment 1"
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
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
