import loadDirectoryListingFromPath from '../services/getDirectoryListingService.js';
import { Readable } from 'stream';

export const getDirectoryListing = async (req, res, next) => {
  try {
    const dir = req.query.path || '.';
    const depth = parseInt(req.query.depth) || 1;

    const listing = await loadDirectoryListingFromPath(dir, depth);

    res.json(listing); // fully nested JSON
  } catch (err) {
    next(err); // pass error to Express error handler
  }
};

export default getDirectoryListing;