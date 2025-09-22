import fs from 'fs/promises';
import path from 'path';

export const loadDirectoryListingFromPath = async (dirPath, maxDepth = Infinity, currentDepth = 0) => {
  let entries = [];

  try {
    const dirEntries = await fs.readdir(dirPath, { withFileTypes: true });

    // Process all entries in parallel for better performance
    entries = await Promise.all(
      dirEntries.map(async (entry) => {
        const fullPath = path.join(dirPath, entry.name);

        const fileEntry = {
          name: entry.name,
          fullPath,
          type: entry.isDirectory() ? 'directory' : 'file',
          size: null,
          created: null,
          subFiles: undefined,
        };

        // Only get stats for files (skip directories if size not needed)
        if (!entry.isDirectory()) {
          try {
            const stats = await fs.stat(fullPath);
            fileEntry.size = stats.size;
            fileEntry.created = stats.birthtime.toISOString();
          } catch (err) {
            console.error(`Failed to stat file ${fullPath}: ${err.message}`);
          }
        }

        if (entry.isDirectory() && currentDepth < maxDepth) {
          fileEntry.subFiles = await loadDirectoryListingFromPath(fullPath, maxDepth, currentDepth + 1);
        }

        return fileEntry;
      })
    );
  } catch (err) {
    console.error(`Failed to read directory ${dirPath}: ${err.message}`);
  }

  return entries;
};

export default loadDirectoryListingFromPath;
