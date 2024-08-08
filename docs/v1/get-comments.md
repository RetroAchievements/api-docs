<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Comments

A call to this endpoint returns comments of a specified kind: game, achievement, or user.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="GET">https://retroachievements.org/API/API_GetComments.php?t=1&i=1</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                      |
| :--- | :-------- | :--------------------------------------------------------------- |
| `y`  | Yes       | Your web API key.                                                |
| `t`  | Yes       | The target comment kind: 1 (game), 2 (achievement), or 3 (user). |
| `i`  |           | The target game or achievement ID (if type is 1 or 2).           |
| `u`  |           | The target username (if type is 3).                              |
| `c`  |           | Count, number of records to return (default: 100, max: 500).     |
| `o`  |           | Offset, number of entries to skip (default: 0).                  |

## Client Library

Not yet supported.

## Response

::: code-group

```json [HTTP Response]
[
    "Count": 4,
    "Total": 4,
    "Results": {
        "0": {
            "User": "PlayTester",
            "Submitted": "2024-07-31T11:22:23.000000Z",
            "CommentText": "Comment 1"
        },
        // ...
    }
]
```

:::

## Source

| Repo  | URL                                                                                   |
| :---- | :------------------------------------------------------------------------------------ |
| RAWeb | https://github.com/RetroAchievements/RAWeb/blob/master/public/API/API_GetComments.php |
