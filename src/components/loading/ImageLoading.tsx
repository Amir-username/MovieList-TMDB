type ImageLoadingProps = {
    type: string
}

function ImageLoading({type}: ImageLoadingProps) {
  return (
    <div className="flex items-center justify-center bg-gray-300 rounded-lg w-44 h-72 dark:bg-gray-700">
      <span className="text-6xl text-gray-400 material-symbols-outlined dark:text-gray-500">
        {type}
      </span>
    </div>
  );
}

export default ImageLoading;
