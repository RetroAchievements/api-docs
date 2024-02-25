<h1 align="center">RetroAchievements API</h1>

<p align="center">
  <i>Easily retrieve achievement, user, and game data from RetroAchievements.</i>
  <br /><br />
</p>

<p align="center">
  <a href="https://api-docs.retroachievements.org/getting-started.html"><strong>Documentation: Get Started</strong></a>
  <br />
</p>

<hr />

## Documentation

Learn how to authenticate and start pulling data from RetroAchievements on our documentation website.

- [Get started](https://api-docs.retroachievements.org/getting-started.html)
- [Get a user's profile information](https://api-docs.retroachievements.org/v1/users/get-user-summary.html)
- [Look up games a user has completed](https://api-docs.retroachievements.org/v1/users/completion-progress.html)
- [Get a game's metadata](https://api-docs.retroachievements.org/v1/games/detailed-info.html)

## API

Click the function names to open their complete docs on the docs site.

### User

- [Profile](https://api-docs.retroachievements.org/v1/users/profile.html) - Get a user's basic profile information.
- [Unlocks (most recent)](https://api-docs.retroachievements.org/v1/users/recent-achievements.html) - Get a list of achievements recently earned by the user.
- [Unlocks (by date range)](https://api-docs.retroachievements.org/v1/users/achievements-earned-between.html) - Get a list of achievements earned by a user between two dates.
- [Unlocks (on date)](https://api-docs.retroachievements.org/v1/users/achievements-earned-on-day.html) - Get a list of achievements earned by a user on a given date.
- [Game Progress](https://api-docs.retroachievements.org/v1/users/game-progress.html) - Get metadata about a game as well as a user's progress on that game.
- [All Completion Progress](https://api-docs.retroachievements.org/v1/users/completion-progress.html) - Get metadata about all the user's played games and any awards associated with them.
- [Awards / Badges](https://api-docs.retroachievements.org/v1/users/user-awards.html) - Get a list of a user's site awards/badges.
- [Set Development Claims](https://api-docs.retroachievements.org/v1/users/claims.html) - Get a list of set development claims made over the lifetime of a user.
- [Game Rank and Score](https://api-docs.retroachievements.org/v1/users/game-rank-and-score.html) - Get metadata about how a user has performed on a given game.
- [`GetUserPoints`](https://api-docs.retroachievements.org/v1/users/get-user-points.html) - Get a user's total hardcore and softcore points.
- [`GetUserProgress`](https://api-docs.retroachievements.org/v1/users/get-user-progress.html) - Get a user's progress on a list of specified games.
- [`GetUserRecentlyPlayedGames`](https://api-docs.retroachievements.org/v1/users/get-user-recently-played-games.html) - Get a list of games a user has recently played.
- [`GetUserSummary`](https://api-docs.retroachievements.org/v1/users/get-user-summary.html) - Get a user's profile metadata.
- [Completed Games](https://api-docs.retroachievements.org/v1/users/completed-games.html) - Legacy endpoint. Get hardcore and softcore completion metadata about games a user has played.

### Game

- [Summary](https://api-docs.retroachievements.org/v1/games/summary.html) - Get basic metadata about a game.
- [Extended Details](https://api-docs.retroachievements.org/v1/games/detailed-info.html) - Get extended metadata about a game.
- [Achievement IDs](https://api-docs.retroachievements.org/v1/games/achievement-ids.html) - Get the list of achievement IDs for a game.
- [Unlocks Distribution](https://api-docs.retroachievements.org/v1/games/achievement-distribution.html) - Get how many players have unlocked how many achievements for a game.
- [High Scores](https://api-docs.retroachievements.org/v1/games/high-scores.html) - Get a list of either the latest masters or highest hardcore points earners for a game.

### Achievement

- [`GetAchievementUnlocks`](https://api-docs.retroachievements.org/v1/achievements/get-achievement-unlocks.html) - Get a list of users who have earned an achievement.

### System

- [Get All Systems](https://api-docs.retroachievements.org/v1/consoles/all-systems.html) - Get the complete list of system ID and name pairs on the site.
- [Get All Games and Hashes](https://api-docs.retroachievements.org/v1/consoles/all-games.html) - Get the complete list of games for a console, including their hashes.

### Feed

- [`GetActiveClaims`](https://api-docs.retroachievements.org/v1/feed/get-active-claims.html) - Get all active set claims on the site.
- [`GetClaims`](https://api-docs.retroachievements.org/v1/feed/get-claims.html) - Get all claims of other kinds on the site.
- [`GetTopTenUsers`](https://api-docs.retroachievements.org/v1/feed/get-top-ten-users.html) - Get the list of top ten points earners.

### Event

- [Achievement of the Week](https://api-docs.retroachievements.org/v1/events/achievement-of-the-week.html) - Get comprehensive metadata about the current Achievement of the Week.

### Ticket

- [Get Ticket by ID](https://api-docs.retroachievements.org/v1/tickets/get-ticket-by-id.html)
- [Get Most Ticketed Games](https://api-docs.retroachievements.org/v1/tickets/get-most-ticketed-games.html)
- [Get Most Recent Tickets](https://api-docs.retroachievements.org/v1/tickets/get-most-recent-tickets.html)
- [Get Game Ticket Stats](https://api-docs.retroachievements.org/v1/tickets/get-game-ticket-stats.html)
- [Get Developer Ticket Stats](https://api-docs.retroachievements.org/v1/tickets/get-developer-ticket-stats.html)

## How to Contribute

TODO

## Projects Using the RetroAchievements API

Let us know about yours by [opening an issue](https://github.com/RetroAchievements/api-docs/issues/new)!
