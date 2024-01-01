<script setup>
import SampleRequest from '../../components/SampleRequest.vue';
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

Not yet supported.

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

:::

## Source

| Repo                     | URL                                                                                      |
| :----------------------- | :--------------------------------------------------------------------------------------- |
| RetroAchievements/RAWeb  | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserProfile.php |
| RetroAchievements/api-js | not yet supported                                                                        |
