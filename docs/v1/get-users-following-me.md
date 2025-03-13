<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Users Following Me

A call to this endpoint will retrieve the caller's "Followers" users list.

[[toc]]

## On-site Representation

The user's Followers Users List page looks like:

![Users Following Me](/user-friends.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUsersFollowingMe.php</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                            |
| `c`  |           | Count, number of records to return (default: 100, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

::: code-group

```Kotlin
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUsersFollowingMe.Response, ErrorResponse> = api.getUsersFollowingMe()

if (response is NetworkResponse.Success) {
    // handle the data
    val users: GetUsersFollowingMe.Response = response.body

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
  "Count": 20,
  "Total": 120,
  "Results": [
    {
      "User": "zuliman92",
      "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
      "Points": 1882,
      "PointsSoftcore": 258,
      "AmIFollowing": true
    }
    // ...
  ]
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUsersFollowingMe.php                        |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
