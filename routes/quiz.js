const express = require("express");
const Quiz = require("../database/models/Quiz");
const router = express.Router();
const Response = require("../lib/response");
const _enum = require("../config/enum");
const logger = require("../lib/logger/logger");
const auditLogs = require("../lib/auditLogs");
const questions = require("../config/data.json");

router.get("/get-all-list", async (req, res) => {
  try {
    const result = await Quiz.find({}).select("title imageUrl description");

    return res
      .status(_enum.HTTP_CODES.CREATED)
      .json(Response.successResponse({ success: true, list: result }));
  } catch (error) {
    auditLogs.error(req.user?.id || "User", "Quiz", "GET /get-all-list", error);
    logger.error(req.user?.id || "User", "Quiz", "GET /get-all-list", error);
    res
      .status(_enum.HTTP_CODES.INT_SERVER_ERROR)
      .json(Response.errorResponse(error));
  }
});

router.get("/get-quiz/:id", async (req, res) => {
  try {
    const { id } = req.params
    const result = await Quiz.findById(id)

    return res
      .status(_enum.HTTP_CODES.CREATED)
      .json(Response.successResponse({ success: true, list: result }));
  } catch (error) {
    auditLogs.error(req.user?.id || "User", "Quiz", "GET /get-all-list", error);
    logger.error(req.user?.id || "User", "Quiz", "GET /get-all-list", error);
    res
      .status(_enum.HTTP_CODES.INT_SERVER_ERROR)
      .json(Response.errorResponse(error));
  }
});

module.exports = router;
