import { getAllThumbnails } from '../../utils/cloudinary';

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const thumbnailData = await getAllThumbnails();

      res.status(200).json(thumbnailData);
      //console.log(thumbnailData);
    } catch (error) {
      res.status(500).json({ message: 'Getting images failed.' });
    }
  }
}

export default handler;
