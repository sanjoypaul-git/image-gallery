import { convertImage } from '@libs/convertImage';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { ImImage } from 'react-icons/im';

const imageMimeType = /image\/(png|jpg|jpeg)/i;

export default function PhotoUpload() {
  const [images, setImages] = useState(null);

  const handleFileUpload = (e) => {
    const files = e.target.files;

    if (!files) return;
    // checking for image size or mimeType
    if (files?.length) {
      for (let i = 0; i < files?.length; i++) {
        const fileSize = files[i].size / 1024 / 1024;
        if (fileSize > 20.0) {
          toast.error('Images larger than 20 MB are not allowed!');
          return;
        }
        if (!files[i]?.type?.match(imageMimeType)) {
          toast.error('Only JPG, PNG & JPEG files are allowed.');
          return;
        }
      }
    }

    // convert base64 image
    convertImage(e).then((res) => {
      setImages(res?.base64s);
      console.log({ res });
    });
  };

  return (
    <div className="block w-full text-center text-sm h-full">
      <label htmlFor="upload" className="cursor-pointer">
        <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-gray-400 text-gray-500">
          <ImImage className="text-4xl text-gray-400 " />
          <p className="px-4 text-sm">Add Images</p>
        </div>
        <input
          className="hidden"
          id="upload"
          type="file"
          name="upload"
          accept="image/png, image/jpeg, image/jpg"
          multiple
          onChange={handleFileUpload}
          placeholder="Please enter your upload here..."
        />
      </label>
    </div>
  );
}
