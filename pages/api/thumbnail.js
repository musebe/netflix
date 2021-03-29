import { getAllThumbnails, postThumbnail } from '../../utils/cloudinary';

async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const thumbnailData = await getAllThumbnails();

      res.status(200).json(thumbnailData);
      //console.log(thumbnailData);
    } catch (error) {
      res.status(500).json({ message: 'Getting images failed.' });
    }
  } else if (req.method === 'POST') {
    try {
      const thumbnail = await postThumbnail(req.body);
      res.status(200).json(thumbnail);
      console.log(thumbnail);
    } catch (error) {
      res.status(500).json({ message: 'Posting video failed.' });
    }
  }
}

export default handler;
