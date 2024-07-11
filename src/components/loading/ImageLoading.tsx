type ImageLoadingProps = {
    type: string
}

function ImageLoading({type}: ImageLoadingProps) {
  return (
    <div className="flex items-center justify-center w-28 h-[10.5rem] rounded-lg bg-gray-300 dark:bg-gray-700">
      <span className="material-symbols-outlined text-6xl text-gray-400 dark:text-gray-500">
        {type}
      </span>
    </div>
  );
}

export default ImageLoading;
