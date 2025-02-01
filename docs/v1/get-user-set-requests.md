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

You must query the user by either their username or their ULID. Please note the username is not considered a stable value. As of 2025, users can change their usernames. Initially querying by username is a good way to fetch a ULID.

| Name | Required? | Description                                                                  |
| :--- | :-------- | :--------------------------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                                            |
| `u`  |           | The target username.                                                         |
| `i`  |           | The target user's ULID.                                                      |
| `t`  | No        | Request List Type: 0 for active requests, 1 for all requests. Defaults to 0. |

## Client Library

Not Yet Supported

## Response

::: code-group

```json [HTTP Response]
{
  "RequestedSets": [
    {
      "GameID": 8149,
      "Title": "Jurassic Park Institute Tour: Dinosaur Rescue",
      "ConsoleID": 5,
      "ConsoleName": "Game Boy Advance",
      "ImageIcon": "/Images/000001.png"
    },
    {
      "GameID": 600,
      "Title": "Psycho Pinball",
      "ConsoleID": 1,
      "ConsoleName": "Genesis/Mega Drive",
      "ImageIcon": "/Images/039797.png"
    },
    {
      "GameID": 1,
      "Title": "Sonic the Hedgehog",
      "ConsoleID": 1,
      "ConsoleName": "Genesis/Mega Drive",
      "ImageIcon": "/Images/085573.png"
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
