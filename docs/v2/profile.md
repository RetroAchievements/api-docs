<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Profile

A call to this endpoint will retrieve user profile information, such as their ID, motto, most recent game ID, avatar, and points.

[[toc]]

## On-site Representation

This information can be found near the top of [any user page](https://retroachievements.org/user/MaxMilyin):

![User Profile](/user-profile.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/api/v2/profile/MaxMilyin</SampleRequest>

### Parameters

You must query the user by either their username or their ULID.
Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                  |
| :--- | :-------- | :--------------------------- |
| `u`  | Yes       | The target username or ULID. |

## Response

::: code-group

```json [HTTP Response]
{
  "User": "MaxMilyin",
  "ULID": "00003EMFWR7XB8SDPEHB3K56ZQ",
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
  "UserWallActive": true,
  "Motto": "Join me on Twitch! GameSquadSquad for live RA"
}
```

```json [NodeJS]
{
  "user": "MaxMilyin",
  "ulid": "00003EMFWR7XB8SDPEHB3K56ZQ",
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
