export default function GalleryImage({
  url,
  title,
  checked,
  index,
  handleSelectedImages,
  ...props
}) {
  return (
    <div
      className={`border-[1.8px] border-gray-300 rounded-lg overflow-hidden relative group ${
        index === 0 ? 'row-span-2 col-span-2' : ''
      } flex box-border origin-center touch-manipulation cursor-grab`}
      draggable
      {...props}
    >
      <img
        src={url}
        alt={title}
        className="w-full object-cover aspect-square"
      />

      {/* image overlay */}
      <div
        className={`absolute h-full w-full bg-black/30 ${
          checked
            ? 'opacity-100'
            : 'opacity-0 group-hover:opacity-100 -bottom-10 group-hover:bottom-0'
        } transition-all duration-300`}
      />
      <div
        className={`absolute top-4 left-4 ${
          checked ? 'opacity-100' : 'opacity-0'
        } group-hover:opacity-100`}
      >
        <input
          type="checkbox"
          name=""
          id=""
          checked={checked}
          onChange={() => handleSelectedImages(props?.id)}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:outline-none cursor-pointer"
        />
      </div>
    </div>
  );
}
