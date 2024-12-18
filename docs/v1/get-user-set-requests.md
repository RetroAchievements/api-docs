<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# User Set Requests

A call to this endpoint will retrieve a given user's set requests, maximum total requests and points until next request.

[[toc]]

## On-Site Representation

![Set Requests](/set-requests.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetUserSetRequests.php?u=MaxMilyin</SampleRequest>

### Query Parameters

| Name | Required? | Description          |
| :--- | :-------- | :------------------- |
| `y`  | Yes       | Your web API key.    |
| `u`  | Yes       | The target username. |

## Client Library

Not Yet Supported

## Response

::: code-group

```json [HTTP Response]
{
  "RequestedSets": [
    {
      "GameID": 1,
      "Title": "Sonic the Hedgehog",
      "ConsoleID": 1,
      "ConsoleName": "Genesis/Mega Drive",
      "ImageIcon": "/Images/085573.png"
    },
    {
      "GameID": 600,
      "Title": "Psycho Pinball",
      "ConsoleID": 1,
      "ConsoleName": "Genesis/Mega Drive",
      "ImageIcon": "/Images/039797.png"
    },
    {
      "GameID": 8149,
      "Title": "Jurassic Park Institute Tour: Dinosaur Rescue",
      "ConsoleID": 5,
      "ConsoleName": "Game Boy Advance",
      "ImageIcon": "/Images/000001.png"
    }
  ],
  "TotalRequests": 5,
  "PointsForNext": 5000
}
```

:::

## Source

| Repo  | URL                                                                                          |
| :---- | :------------------------------------------------------------------------------------------- |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetUserSetRequests.php |
