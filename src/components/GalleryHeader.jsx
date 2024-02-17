export default function GalleryHeader({
  selectedImages,
  checked,
  handleDelete,
}) {
  return (
    <div className="border-b-[1.7px] border-b-gray-300">
      <div className="p-3">
        <div className="flex items-center justify-between">
          {!selectedImages?.length ? (
            <span className="font-bold text-lg text-gray-700">Gallery</span>
          ) : (
            <>
              {/* checkbox */}
              <div className="flex item-center gap-x-2">
                <input
                  type="checkbox"
                  name="selected"
                  id="selected"
                  checked={checked}
                  readOnly
                  className="w-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:outline-none"
                />
                {/* conditionally inserted text here */}
                <span className="font-semibold text-lg">
                  {selectedImages?.length === 1
                    ? '1 File'
                    : `${selectedImages?.length} Files`}{' '}
                  Selected
                </span>
              </div>

              {/* singular & plural s */}
              <button
                className="font-semibold text-red-500 text-sm"
                onClick={handleDelete}
              >
                Delete {selectedImages?.length === 1 ? 'file' : 'files'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
