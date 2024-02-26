<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Points

A call to this endpoint will retrieve a given user's hardcore and softcore points.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserPoints.php?u=Hexadigital</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
|:-----|:----------|:---------------------|
| `z`  | Yes       | Your username.       |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getUserPoints } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userPoints = await getUserPoints(authorization, {
  userName: "Hexadigital",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserPoints.Response, ErrorResponse> = api.getUserPoints(
    username = "Hexadigital"
)

if (response is NetworkResponse.Success) {
    // handle the data
    val userPoints: GetUserPoints.Response = response.body

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
  "Points": 31299,
  "SoftcorePoints": 24264
}
```

```json [NodeJS]
{
  "points": 31299,
  "softcorePoints": 24264
}
```

:::

## Source

| Repo                         | URL                                                                                                                  |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------|
| RetroAchievements/RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserPoints.php                              |
| RetroAchievements/api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserPoints.ts                                      |
| RetroAchievements/api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
