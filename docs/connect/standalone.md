<script setup>
import SampleRequest from '../components/SampleRequest.vue';
</script>

# Standalones Integration Guide

::: warning
This content is subject to change, pending [this PR in RAWeb](https://github.com/RetroAchievements/RAWeb/pull/2129).
:::

[[toc]]

## Getting Started

To complete your integration, you'll need a few things:

- A dedicated user account on the site to manage your integration, for example, an account named OldSchoolRunescape. Simply create a new RA account named after your integration.
- One or more game pages associated with the "Standalones" console.
- Some achievements to unlock for users on that game page(s).
- Your Web API key.
- Your Connect API token.

The admin team sets up game pages for standalones. If you need a game page, please send a DM to the "RAdmin" user on the RetroAchievements website.

RetroAchievements has two APIs: the Web API (what most of this documentation site covers) and the Connect API (private and locked down, used by emulators).

The Web API is driven by numerous different PHP files that return data from the RetroAchievements database. This documentation website is the documentation for the Web API.

The Connect API is a single non-RESTful PHP file: _dorequest.php_, which takes a query parameter `r` to designate what function it should perform.

You will need to use both APIs for your integration. The Web API and Connect API both require different auth tokens. Let's go ahead and retrieve them.

:::danger
Treat both your Web API key and Connect API token as secrets akin to your password. If your Connect API token leaks, it can result in disastrous consequences.
:::

### Get your Web API key

This is very straightforward. It's on your integration account's user control panel. See [here](/getting-started.html#get-your-web-api-key).

### Get your Connect API token

This can be retrieved by making an HTTP call to the Connect API using your integration account's username and password.

::: warning
**ALWAYS send a user agent header on Connect API requests. Never make a HTTP call to dorequest.php without a user agent header.** Your user agent string should be in this format:

`{Frontend/Standalone name}/{x.y.z Version} ({platform}) {Integration/x.y.z} {core information}`

An example of a valid user agent is:

`HorizonXI/1.0.0 (Server)`
:::

<SampleRequest httpVerb="GET">https://retroachievements.org/dorequest.php?u=YourUsername&p=YourPassword&r=login2</SampleRequest>

**Query Parameters**

| Name | Required? | Description                          |
| :--- | :-------- | :----------------------------------- |
| `u`  | Yes       | Your integration account's username. |
| `p`  | Yes       | Your integration account's password. |
| `r`  | Yes       | Must be `login2`.                    |

::: code-group

```json [HTTP Response]
{
  "Success": true,
  "User": "OldSchoolRunescape",
  "Token": "4AotgGxjIH5iT1gz", // <--------- !! Store this secret somewhere safe.
  "Score": 1,
  "SoftcoreScore": 0,
  "Messages": 0,
  "Permissions": 1,
  "AccountType": "Registered"
}
```

:::

## Linking a Player's Account

We will support OAuth2 in the future, but it's not production-ready yet.

For now, you can follow this process:

1. Ask the user what their RA username is.
2. Once they provide their username, ask them to insert some GUID/key that you generate into their account motto [on this page](https://retroachievements.org/controlpanel.php). If the user is logged in, this URL will always link to the place they can update their motto.
3. Ask the user to confirm that the key is inserted into their motto.
4. Once the user gives confirmation, verify that the motto has been updated with the Web API's [user profile endpoint](/v1/users/profile).

Mottos have a maximum length of 50 characters. Once you've confirmed the user motto, it's probably worth reminding the user to reset the motto.

## Starting a player session

When a player begins playing your game (or logs in to your server), you must send a ping to RetroAchievements.

<SampleRequest httpVerb="POST">https://retroachievements.org/dorequest.php?u=YourUsername&t=YourConnectToken&r=startsession&g=YourCoreGameId&k=TheirUsername</SampleRequest>

### Query Parameters

| Name | Required? | Description                                                                                    |
| :--- | :-------- | :--------------------------------------------------------------------------------------------- |
| `u`  | Yes       | Your integration account's username.                                                           |
| `t`  | Yes       | Your Connect API token.                                                                        |
| `r`  | Yes       | Must be `startsession`.                                                                        |
| `g`  | Yes       | Your game's primary game ID. Don't send the game ID of a bonus set.                            |
| `k`  | Yes       | The RA username you're starting a session for (they should've already linked via their motto). |

### HTTP Response

```json [HTTP Response]
{
  "Success": true,
  "HardcoreUnlocks": [
    {
      "ID": 141,
      "When": 1591132445
    }
  ],
  "ServerNow": 1704076711
}
```

## Heartbeat Pings

Emulators generally send a ping to RetroAchievements every 5 minutes. This has multiple benefits:

- It keeps the game page's player list active.
- It keeps the game on the user's on-site profile.
- It keeps the game on the home page in the form of active players and trending games.
- It allows you as a developer to add a Rich Presence string to the user's activity.

You are strongly encouraged, but not required, to send pings for active players.

<SampleRequest httpVerb="POST">https://retroachievements.org/dorequest.php?u=YourUsername&t=YourConnectToken&r=ping&g=YourCoreGameId&k=TheirUsername</SampleRequest>

Rich Presence strings must be sent in the request payload as multipart form data. The string is associated with the `m` key:

```
m=This is a new rich presence
```

![Activity Ping](/activity-ping.png)

### Query Parameters

| Name | Required? | Description                                                                                    |
| :--- | :-------- | :--------------------------------------------------------------------------------------------- |
| `u`  | Yes       | Your integration account's username.                                                           |
| `t`  | Yes       | Your Connect API token.                                                                        |
| `r`  | Yes       | Must be `ping`.                                                                                |
| `g`  | Yes       | Your game's primary game ID. Don't send the game ID of a bonus set.                            |
| `k`  | Yes       | The RA username you're starting a session for (they should've already linked via their motto). |

### Multipart Formdata Payload

| Name | Required? | Description                              | Example                                 |
| :--- | :-------- | :--------------------------------------- | :-------------------------------------- |
| `m`  | No        | The user's current rich presence string. | Level 30 • Running around in San d'Oria |

### HTTP Response

```json
{
  "Success": true
}
```

## Unlock a single achievement for the player

When a player unlocks a single achievement, you can trigger an unlock on RetroAchievements for them, based on the achievement's ID in our system. To find the achievement ID, the achievement itself must first be created on RetroAchievements. An admin can help with this. Once it's there, you'll see the achievement's ID in the URL bar for that achievement's page (eg: https://retroachievements.org/achievement/9).

These requests also require a valid verification hash in the `v` query parameter. This is an MD5 hash.

```
md5(achievementId + theirUsername + hardcore + achievementId)
```

<SampleRequest httpVerb="POST">https://retroachievements.org/dorequest.php?u=YourUsername&t=YourConnectToken&r=awardachievement&k=TheirUsername&a=9&v=8f48cd6a05f875bf4c2818aec03523c1&h=1</SampleRequest>

Here's how the `v` hash was generated:

```
md5("9TheirUsername19") // "8f48cd6a05f875bf4c2818aec03523c1"
```

### Query Parameters

| Name | Required? | Description                                                                                      |
| :--- | :-------- | :----------------------------------------------------------------------------------------------- |
| `u`  | Yes       | Your integration account's username.                                                             |
| `t`  | Yes       | Your Connect API token.                                                                          |
| `r`  | Yes       | Must be `awardachievement`.                                                                      |
| `k`  | Yes       | The RA username you're triggering an unlock for (they should've already linked via their motto). |
| `a`  | Yes       | The achievement ID you want to trigger an unlock for                                             |
| `v`  | Yes       | The MD5 verification hash. `a` + `k` + `h` + `a`                                                 |
| `h`  | Yes       | 1 for hardcore ("no cheats") mode. 0 for softcore ("cheats enabled") mode.                       |

### HTTP Response

```json
{
  "Success": true,
  "AchievementsRemaining": 5, // how many achievements remain for the user on the achievement's associated game id
  "Score": 22866, // the user's new total of hardcore points on RA
  "SoftcoreScore": 5, // the user's new total of softcore points on RA
  "AchievementID": 9
}
```

## Unlock multiple achievements for the player

If you would like to unlock multiple achievements at once or resync all the user's unlocks in your system to RetroAchievements, you'll want to use this Connect API function instead of `awardachievement`.

Rather than `a` using a single achievement ID, it accepts a comma-separated list in the POST payload of achievement IDs you'd like to trigger unlocks for. This is in the payload (multi-part form data), not as a query parameter.

A verification hash sent by the `v` key in the request payload is also required. This is an MD5 hash generated using the following pattern:

### Endpoint and Request Method

- URL: `https://retroachievements.org/dorequest.php`
- HTTP Method: `POST`

### Required Query Parameters

| Name | Description                                                                                                            |
| :--- | :--------------------------------------------------------------------------------------------------------------------- |
| `u`  | Your integration account's username.                                                                                   |
| `t`  | Your Connect API token.                                                                                                |
| `r`  | Must be set to `awardachievements`.                                                                                    |
| `k`  | The RetroAchievements username for whom you're unlocking achievements (they should've already linked via their motto). |

### Required Multipart Formdata Payload

| Name | Description                                                                                                                                                                                                                          | Example                          |
| :--- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------- |
| `a`  | The concatenated list of achievement IDs to unlock. This is a CSV string with no whitespace.                                                                                                                                         | 147,141,145,142,146              |
| `h`  | Whether the unlocks should be in hardcore ("no cheats") mode.                                                                                                                                                                        | 1                                |
| `v`  | A verification MD5 hash. It's formed by concatenating the achievement IDs (as a CSV string), the user's RA username, and the `h` value, then applying the MD5 hash function. For example: `md5("147,141,145,142,146TheirUsername1")` | de4b6275cc8722872aa0fef6d4b30570 |

<SampleRequest httpVerb="POST">https://retroachievements.org/dorequest.php?u=YourUsername&t=YourConnectToken&r=awardachievements&k=TheirUsername</SampleRequest>

### HTTP Response

```json
{
  "Success": true,
  "Score": 22890, // the user's new total of hardcore points on RA
  "SoftcoreScore": 5, // the user's new total of softcore points on RA
  "ExistingIDs": [141, 147], // these IDs were already unlocked for the user
  "SuccessfulIDs": [142, 145, 146] // these IDs are new unlocks for the user
}
```
