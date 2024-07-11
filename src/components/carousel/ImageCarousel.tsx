import { Image } from "../../models/Image";
import { ImageUrl } from "../../requestConfig";

type ImageCarouselProps = {
  images: Image[];
};

function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="flex flex-col gap-8 p-2">
      <div className="text-3xl text-gray-600 dark:text-gray-400 font-title-font">Images</div>
      <div id="no-scrollbar" className="flex md:flex-wrap md:gap-8 overflow-scroll gap-2">
        {images.map((image) => {
          return (
            <img
              src={ImageUrl + image.file_path}
              alt="movie shot"
              className="w-96 md:w-80 h-48 md:h-44 rounded-lg drop-shadow-xl"
              key={image.file_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageCarousel;
