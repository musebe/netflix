import { postVideos } from '../../utils/cloudinary';

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const video = await postVideos(req.body);
      res.status(200).json(video);
      //console.log(video);
    } catch (error) {
      res.status(500).json({ message: 'Posting video failed.' });
    }
  }
}

export default handler;
