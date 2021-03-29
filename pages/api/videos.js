import { postVideos } from '../../utils/cloudinary';
import formidable from 'formidable';

export const config = {
  api: {
    bodyParser: false,
  },
};

async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      // const video = await postVideos(req.body);
      // res.status(200).json(video);
      //console.log(video);
      const form = new formidable.IncomingForm();
      form.uploadDir = './uploads';
      form.keepExtensions = true;
      form.parse(req, async (err, fields, files) => {
        console.log(err, fields, files);
        const video = await postVideos('./' + files['video'].path);
        console.log(video);
        res.status(200).json(files);
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

export default handler;
