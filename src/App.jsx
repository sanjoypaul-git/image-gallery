import GalleryHeader from "@components/GalleryHeader";
import GalleryImage from "@components/GalleryImage";
import PhotoUpload from "@components/PhotoUpload";
import { data } from "@utils/data";
import { useState } from "react";

function App() {
  const [images, setImages] = useState(data);
  const [selectedImages, setSelectedImages] = useState([]);

  // when start dragging
  const handleDragStart = (e, id) => {
    e.dataTransfer.setData('index', id);
  };

  // when dragging over
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  // when drop
  const handleDrop = (e, newIndex) => {
    const draggedIndex = parseInt(e.dataTransfer.getData('index'), 10);
    const updatedItems = [...images];
    const [draggedItem] = updatedItems.splice(draggedIndex, 1);
    updatedItems.splice(newIndex, 0, draggedItem);
    setImages(updatedItems);
  };

  // select images and store ids
  const handleSelectedImages = (id) => {
    if (selectedImages.includes(id)) {
      setSelectedImages((prev) => {
        const updatedImages = prev?.filter((img) => img !== id);
        return updatedImages;
      });
    } else {
      setSelectedImages((prev) => [...prev, id]);
    }
  };

  // check id is already selected
  const checkSelected = (id) => {
    return selectedImages?.includes(id);
  };

  // handle deleted selected images
  const handleDelete = () => {
    const updatedImages = images?.filter(
      (img) => !selectedImages?.includes(img?.id)
    );
    setImages(updatedImages);
    setSelectedImages([]);
  };

  return (
    <section className="container py-10">
      <div className="max-w-[860px] mx-auto shadow-lg rounded-xl border">
        <GalleryHeader
          selectedImages={selectedImages}
          checked={selectedImages?.length}
          handleDelete={handleDelete}
        />
        {/* image gallery */}
        <div className="grid gap-2.5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5">
          {images?.map((img, index) => (
            <GalleryImage
              key={img?.id}
              index={index}
              {...img}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, index)}
              handleSelectedImages={handleSelectedImages}
              checked={checkSelected(img?.id)}
            />
          ))}
          {/* image upload */}
          <PhotoUpload />
        </div>
      </div>
    </section>
  );
}

export default App;
