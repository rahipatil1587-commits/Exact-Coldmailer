import express from "express";
import  upload  from "../Middleware/middleware.js";
import { uploadFile } from "../controller/file.controller.js";
import { extractContent } from "../controller/extraction.control.js";
import {authMiddleware} from "../Middleware/auth.middleware.js"
const router=express.Router()
router.post("/upload",authMiddleware,upload.single("file"),uploadFile)
router.post("/extract",authMiddleware,upload.single("file"),extractContent)
export default router
