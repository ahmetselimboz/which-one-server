var express = require("express");
const Response = require("../lib/response");
const _enum = require("../config/enum");
const logger = require("../lib/logger/logger");
const auditLogs = require("../lib/auditLogs");


var router = express.Router();

router.get("/create-category", async (req,res)=>{
    try {
     
        return res
        .status(_enum.HTTP_CODES.CREATED)
        .json(Response.successResponse({ success: false }));
    } catch (error) {
        console.log(error);
        auditLogs.error(req.user?.id || "Group", "Groups", "GET /all-groups", error);
        logger.error(req.user?.id || "Group", "Groups", "GET /all-groups", error);
        res
          .status(_enum.HTTP_CODES.INT_SERVER_ERROR)
          .json(Response.errorResponse(error));
    }
})

router.get("/create-product", async (req,res)=>{
    try {



        return res
        .status(_enum.HTTP_CODES.CREATED)
        .json(Response.successResponse({ success: true }));
    } catch (error) {
        console.log(error);
        auditLogs.error(req.user?.id || "Group", "Groups", "GET /all-groups", error);
        logger.error(req.user?.id || "Group", "Groups", "GET /all-groups", error);
        res
          .status(_enum.HTTP_CODES.INT_SERVER_ERROR)
          .json(Response.errorResponse(error));
    }
})


module.exports= router