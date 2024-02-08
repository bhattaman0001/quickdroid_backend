const express = require("express");

const {
  handleGetAllFilesByName,
  handleAddNewFile,
} = require("../controllers/controllerJS");

const router = express.Router();

router.get("/:fileName", handleGetAllFilesByName);
router.post("/addFile", handleAddNewFile);
// we have first registered the routes in the router and then exported it.
module.exports = router;
