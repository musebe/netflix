import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getAllThumbnails() {
  // Get Images from Cloudinary inserted into the Personal Folder
  const response = await cloudinary.v2.api.resources({
    type: 'upload',
    prefix: 'Netflix',
  });

  const thumbnailData = response.resources.map((image, key) => ({
    id: key,
    ...image,
  }));

  return thumbnailData;
}

export async function postVideos(obj) {
  // Post Videos to Cloudinary
  const { file } = obj;
  const video = await cloudinary.v2.uploader.upload(
    'https://res.cloudinary.com/hackit-africa/video/upload/v1616975886/sample.mp4',
    {
      resource_type: 'video',
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    }
  );
  return video;
}

export async function postThumbnail() {
  const thumbnail = await cloudinary.v2.uploader.upload(
    'https://res.cloudinary.com/hackit-africa/image/upload/v1617011402/dcybhwfvjoblrx3v1krq.jpg',
    {
      upload_preset: process.env.CLOUDINARY_UPLOAD_PRESET,
    }
  );
  return thumbnail;
}
