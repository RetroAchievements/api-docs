<h1 align="center">RetroAchievements API</h1>

<p align="center">
  <i>The official method to retrieve achievement, user, and game data from RetroAchievements.</i>
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
- [Look up games a user has completed](https://api-docs.retroachievements.org/v1/users/get-user-completed-games.html)
- [Get a game's metadata](https://api-docs.retroachievements.org/v1/games/get-game-extended.html)

## API

Click the function names to open their complete docs on the docs site.

### Users

- [`GetAchievementsEarnedBetween`](https://api-docs.retroachievements.org/v1/users/get-achievements-earned-between.html) - Get a list of achievements earned by a user between two dates.
- [`GetAchievementsEarnedOnDay`](https://api-docs.retroachievements.org/v1/users/get-achievements-earned-on-day.html) - Get a list of achievements earned by a user on a given date.
- [`GetGameInfoAndUserProgress`](https://api-docs.retroachievements.org/v1/users/get-game-info-and-user-progress.html) - Get metadata about a game as well as a user's progress on that game.
- [`GetUserAwards`](https://api-docs.retroachievements.org/v1/users/get-user-awards.html) - Get a list of a user's site awards/badges.
- [`GetUserClaims`](https://api-docs.retroachievements.org/v1/users/get-user-claims.html) - Get a list of set claims made over the lifetime of a user.
- [`GetUserCompletedGames`](https://api-docs.retroachievements.org/v1/users/get-user-completed-games.html) - Get hardcore and softcore completion metadata about games a user has played.
- [`GetUserGameRankAndScore`](https://api-docs.retroachievements.org/v1/users/get-user-game-rank-and-score.html) - Get metadata about how a user has performed on a given game.
- [`GetUserPoints`](https://api-docs.retroachievements.org/v1/users/get-user-points.html) - Get a user's total hardcore and softcore points.
- [`GetUserProgress`](https://api-docs.retroachievements.org/v1/users/get-user-progress.html) - Get a user's progress on a list of specified games.
- [`GetUserRecentAchievements`](https://api-docs.retroachievements.org/v1/users/get-user-recent-achievements.html) - Get a list of achievements recently earned by the user.
- [`GetUserRecentlyPlayedGames`](https://api-docs.retroachievements.org/v1/users/get-user-recently-played-games.html) - Get a list of games a user has recently played.
- [`GetUserSummary`](https://api-docs.retroachievements.org/v1/users/get-user-summary.html) - Get a user's profile metadata.

### Games

- [`GetAchievementCount`](https://api-docs.retroachievements.org/v1/games/get-achievement-count.html) - Get the list of achievement IDs for a game.
- [`GetAchievementDistribution`](https://api-docs.retroachievements.org/v1/games/get-achievement-distribution.html) - Get how many players have unlocked how many achievements for a game.
- [`GetGame`](https://api-docs.retroachievements.org/v1/games/get-game.html) - Get basic metadata about a game.
- [`GetGameExtended`](https://api-docs.retroachievements.org/v1/games/get-game-extended.html) - Get extended metadata about a game.
- [`GetGameRankAndScore`](https://api-docs.retroachievements.org/v1/games/get-game-rank-and-score.html) - Get a list of either the latest masters or highest points earners for a game.
- [`GetGameRating`](https://api-docs.retroachievements.org/v1/games/get-game-rating.html) - Get how users have rated a game.

### Achievements

- [`GetAchievementUnlocks`](https://api-docs.retroachievements.org/v1/achievements/get-achievement-unlocks.html) - Get a list of users who have earned an achievement.

### Consoles

- [`GetConsoleIds`](https://api-docs.retroachievements.org/v1/consoles/get-console-ids.html) - Get the complete list of console ID and name pairs on the site.
- [`GetGameList`](https://api-docs.retroachievements.org/v1/consoles/get-game-list.html) - Get the complete list of games for a console.

### Feed

- [`GetAchievementOfTheWeek`](https://api-docs.retroachievements.org/v1/feed/get-achievement-of-the-week.html) - Get comprehensive metadata about the current Achievement of the Week.
- [`GetActiveClaims`](https://api-docs.retroachievements.org/v1/feed/get-active-claims.html) - Get all active set claims on the site.
- [`GetClaims`](https://api-docs.retroachievements.org/v1/feed/get-claims.html) - Get all claims of other kinds on the site.
- [`GetTopTenUsers`](https://api-docs.retroachievements.org/v1/feed/get-top-ten-users.html) - Get the list of top ten points earners.

### Tickets

- [Get Ticket by ID](https://api-docs.retroachievements.org/v1/tickets/get-ticket-by-id.html)
- [Get Most Ticketed Games](https://api-docs.retroachievements.org/v1/tickets/get-most-ticketed-games.html)
- [Get Most Recent Tickets](https://api-docs.retroachievements.org/v1/tickets/get-most-recent-tickets.html)
- [Get Game Ticket Stats](https://api-docs.retroachievements.org/v1/tickets/get-game-ticket-stats.html)
- [Get Developer Ticket Stats](https://api-docs.retroachievements.org/v1/tickets/get-developer-ticket-stats.html)

## How to Contribute

TODO

## Examples

TODO

## Projects Using the RetroAchievements API

Let us know about yours by [opening an issue](https://github.com/RetroAchievements/api-docs/issues/new)!
