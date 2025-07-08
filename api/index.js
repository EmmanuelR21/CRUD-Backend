const express = require("express");
const router = express.Router();
const ducksRouter = require("./ducks");
const studentsRouter = require("./students");
const campusesRouter = require("./campuses");

router.use("/ducks", ducksRouter);
router.use("/students", studentsRouter);
router.use("/campuses", campusesRouter);


module.exports = router;
