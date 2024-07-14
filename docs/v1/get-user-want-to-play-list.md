<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Want to Play Lost

A call to this endpoint will retrieve a giver user's want to play list, targeted by their username.

[[toc]]

## On-site Representation

A user's want to play list can be found on on the user's Want to Play Games page:

![Want to Play](/want-to-play-list.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserWantToPlayList.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `z`  | Yes       | Your username.                                               |
| `y`  | Yes       | Your web API key.                                            |
| `u`  | Yes       | The target username.                                         |
| `c`  |           | Count, number of records to return (default: 100, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

Not yet supported.

:::

## Response

::: code-group

```json [HTTP Response]
{
  "Count": 100,
  "Total": 1287,
  "Results": [
    {
      "GameID": 20246,
      "Title": "~Hack~ Knuckles the Echidna in Sonic the Hedgehog",
      "ImageIcon": "/Images/074560.png",
      "ConsoleID": 1,
      "ConsoleID": "Genesis/Mega Drive",
      "PointsTotal": 1500,
      "AchievementsPublished": 50
    }
    // ...
  ]
}
```

:::

## Source

| Repo  | URL                                                                                             |
| :---- | :---------------------------------------------------------------------------------------------- |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserWantToPlayList.php |
