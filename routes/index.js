const express = require('express');
const router = express.Router();

router.get('/api', function(req, res, next) {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  const currentDate = new Date();
  res.status(200).json({
    slack_name: req.query.slack_name,
    current_day: daysOfWeek[currentDate.getDay()],
    utc_time: currentDate.toISOString(),
    track: req.query.track,
    github_file_url: "https://github.com/mosesmrima/HNGx/blob/master/routes/index.js",
    github_repo_url: "https://github.com/mosesmrima/HNGx",
    status_code: 200
})
});

module.exports = router;