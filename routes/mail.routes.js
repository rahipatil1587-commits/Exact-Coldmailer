import express from "express"
import { generateColdEmails } from "../Services/Mail.service.js";
import { authMiddleware } from "../Middleware/auth.middleware.js";
import { getEmailById,deleteEmail,sendMail,updateEmail } from "../controller/mail.controller.js";
const router = express.Router();
router.post("/generate", authMiddleware, generateColdEmails);
router.get('/', authMiddleware, getEmailById);
router.get('/id', authMiddleware, updateEmail);
router.get('/id', authMiddleware, deleteEmail);
router.post('/send', authMiddleware, sendMail);
export default router;