const express = require('express');
const router = express.Router();

router.get('/api', function(req, res, next) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDate = new Date();
  const year = currentDate.getUTCFullYear();
  const month = String(currentDate.getUTCMonth() + 1).padStart(2, '0'); // Months are 0-based
  const day = String(currentDate.getUTCDate()).padStart(2, '0');
  const hours = String(currentDate.getUTCHours()).padStart(2, '0');
  const minutes = String(currentDate.getUTCMinutes()).padStart(2, '0');
  const seconds = String(Math.floor(currentDate.getUTCSeconds())).padStart(2, '0');
  res.status(200).json({
    slack_name: req.query.slack_name,
    current_day: daysOfWeek[currentDate.getDay()],
    utc_time: `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`,
    track: req.query.track,
    github_file_url: "https://github.com/mosesmrima/HNGx/blob/master/routes/index.js",
    github_repo_url: "https://github.com/mosesmrima/HNGx",
    status_code: 200
})
});

module.exports = router;