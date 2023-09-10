const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.status(200).json({
    slack_name: "Mrima",
    current_day: "Monday",
    utc_time: "2023-08-21T15:04:05Z",
    track: "backend",
    github_file_ur: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200
})
});

module.exports = router;