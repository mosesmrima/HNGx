const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDate = new Date();
  res.status(200).json({
    slack_name: "Mrima",
    current_day: daysOfWeek[currentDate.getDay()],
    utc_time: currentDate.toISOString(),
    track: "backend",
    github_file_ur: "https://github.com/mosesmrima/HNGx/blob/master/routes/index.js",
    github_repo_url: "https://github.com/mosesmrima/HNGx",
    status_code: 200
})
});

module.exports = router;