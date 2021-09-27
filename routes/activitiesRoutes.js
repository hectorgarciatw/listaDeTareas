const activitiesController = require("./../controllers/activitiesController");
const express = require("express");
const router = express.Router();

router.route("/").get(activitiesController.getActivities).post(activitiesController.addActivitie);
router.route("/:id").delete(activitiesController.deleteActivitie);

module.exports = router;
