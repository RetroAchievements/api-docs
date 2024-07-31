<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Want to Play List

A call to this endpoint will retrieve a giver user's want to play list, targeted by their username. Results will only show if the user calling matches the username provided or both users follow each other on the website.

[[toc]]

## On-site Representation

The user's Want to Play Games list page looks like:

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
      "ConsoleName": "Genesis/Mega Drive",
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
