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
    prefix: 'Thumbnails',
  });

  const thumbnailData = response.resources.map((image, key) => ({
    id: key,
    ...image,
  }));

  return thumbnailData;
}


export async function postVideos() {
  // Post Videos to Cloudinary 

  const response = await cloudinary.v2.api.resources


}