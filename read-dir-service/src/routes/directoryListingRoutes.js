import express from 'express';
import getDirectoryListing from '../controllers/getDirectoryListingController.js';

const router = express.Router();

router.get('/', getDirectoryListing);

router.get("/test", (req, res) => {
  res.json({ message: "Test route works" });
});

export default router;