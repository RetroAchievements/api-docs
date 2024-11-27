<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Followers Users List

A call to this endpoint will retrieve the caller's "Followers" users list.

[[toc]]

## On-site Representation

The user's Followers Users List page looks like:

![Followers Users List](/user-following-followed.png)

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetFollowerUsersList.php</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                  |
| :--- | :-------- | :----------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                            |
| `c`  |           | Count, number of records to return (default: 100, max: 500). |
| `o`  |           | Offset, number of entries to skip (default: 0).              |

## Client Library

Not yet supported.

## Response

::: code-group

```json [HTTP Response]
{
  "Count": 20,
  "Total": 120,
  "Results": [
    {
      "User": "zuliman92",
      "Points": 1882,
      "PointsSoftcore": 258,
      "FollowingBack": true
    }
    // ...
  ]
}
```

:::

## Source

| Repo  | URL                                                                                            |
| :---- | :--------------------------------------------------------------------------------------------- |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetFollowerUsersList.php |
