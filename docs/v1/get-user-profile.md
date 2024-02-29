<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Profile

A call to this endpoint will retrieve minimal user profile information, such as their ID, motto, most recent game ID, avatar, and points.

[[toc]]

## On-site Representation

This information can be found near the top of [any user page](https://retroachievements.org/user/MaxMilyin):

![User Profile](/user-profile.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserProfile.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
| :--- | :-------- | :------------------- |
| `z`  | Yes       | Your username.       |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |

## Client Library

::: code-group

```ts [NodeJS]
import { buildAuthorization, getUserProfile } from "@retroachievements/api";

// First, build your authorization object.
const userName = "<your username on RA>";
const webApiKey = "<your web API key>";

const authorization = buildAuthorization({ userName, webApiKey });

// Then, make the API call.
const userProfile = await getUserProfile(authorization, {
  userName: "xelnia",
});
```

```kotlin [Kotlin]
val credentials = RetroCredentials("<username>", "<web api key>")
val api: RetroInterface = RetroClient(credentials).api

val response: NetworkResponse<GetUserProfile.Response, ErrorResponse> = api.getUserProfile(
    username = "xelnia",
)

if (response is NetworkResponse.Success) {
    // handle the data
    val userProfile: GetUserProfile.Response = response.body

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
  "User": "MaxMilyin",
  "UserPic": "/UserPic/MaxMilyin.png",
  "MemberSince": "2016-01-02 00:43:04",
  "RichPresenceMsg": "Playing ~Hack~ 11th Annual Vanilla Level Design Contest, The",
  "LastGameID": 19504,
  "ContribCount": 0,
  "ContribYield": 0,
  "TotalPoints": 399597,
  "TotalSoftcorePoints": 0,
  "TotalTruePoints": 1599212,
  "Permissions": 1,
  "Untracked": 0,
  "ID": 16446,
  "UserWallActive": 1,
  "Motto": "Join me on Twitch! GameSquadSquad for live RA"
}
```

```json [NodeJS]
{
  "user": "MaxMilyin",
  "userPic": "/UserPic/MaxMilyin.png",
  "memberSince": "2016-01-02 00:43:04",
  "richPresenceMsg": "Playing ~Hack~ 11th Annual Vanilla Level Design Contest, The",
  "lastGameId": 19504,
  "contribCount": 0,
  "contribYield": 0,
  "totalPoints": 399597,
  "totalSoftcorePoints": 0,
  "totalTruePoints": 1599212,
  "permissions": 1,
  "untracked": false,
  "id": 16446,
  "userWallActive": true,
  "motto": "Join me on Twitch! GameSquadSquad for live RA"
}
```

:::

## Source

| Repo       | URL                                                                                                                  |
| :--------- | :------------------------------------------------------------------------------------------------------------------- |
| RAWeb      | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserProfile.php                             |
| api-js     | https://github.com/RetroAchievements/api-js/blob/main/src/user/getUserProfile.ts                                     |
| api-kotlin | https://github.com/RetroAchievements/api-kotlin/blob/main/src/main/kotlin/org/retroachivements/api/RetroInterface.kt |
