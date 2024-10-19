import express from 'express';
import bodyParser from 'body-parser';
import { filterImageFromURL, deleteLocalFiles } from './util/util.js';

// Initialize the Express application
const app = express();

// Set the network port
const port = process.env.PORT || 8082;

// Use the bodyParser middleware for parsing JSON in post requests
app.use(bodyParser.json());

/**
 * Filters an image from a public URL and returns the processed image file
 * @query {string} image_url - URL of a publicly accessible image
 * @returns {File} - Processed image file
 */
app.get("/filteredimage", async (req, res) => {
  const { image_url } = req.query;

  // Check if image_url is provided
  if (!image_url) {
    return res.status(400).send('Missing required query parameter "image_url".');
  }

  try {
    // Apply the filter to the image
    const filteredImagePath = await filterImageFromURL(image_url);

    // Send the filtered image file
    res.sendFile(filteredImagePath, (err) => {
      if (err) {
        return res.status(500).send(`Error sending file: ${err.message}`);
      }

      // Delete local file after response is finished
      deleteLocalFiles([filteredImagePath]);
    });
  } catch (err) {
    return res.status(422).send(`Unable to process image from the provided URL. Error: ${err.message}`);
  }
});

// Root endpoint
// Displays a simple message to the user
app.get("/", async (req, res) => {
  res.send("Try GET /filteredimage?image_url={{URL}}");
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
  console.log('Press CTRL+C to stop the server');
});
