<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Login

If you are building some kind of front-end which is going to retrieve data on behalf of a user, you can exchange login credentials for their web API key.

[[toc]]

## HTTP Request

<SampleRequest httpVerb="POST">https://retroachievements.org/api/v2/login</SampleRequest>

Request payload:

```json
{
  "username": "Username",
  "password": "Password"
}
```

## Client Library

Not yet supported.

## Response

::: code-group

```json [HTTP Response]
{
  "webApiKey": "1bLav6wevbNw7nCJzXgHTx7i6Htvpceb"
}
```

:::

## Source

TODO
