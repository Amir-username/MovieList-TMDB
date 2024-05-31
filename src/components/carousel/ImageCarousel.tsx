import { Image } from "../../models/Image";
import { ImageUrl } from "../../requestConfig";

type ImageCarouselProps = {
  images: Image[];
};

function ImageCarousel({ images }: ImageCarouselProps) {
  return (
    <div className="flex flex-col gap-8 p-2">
      <div className="text-2xl font-semibold text-gray-600">Images</div>
      <div id="no-scrollbar" className="flex overflow-scroll gap-2">
        {images.map((image) => {
          return (
            <img
              src={ImageUrl + image.file_path}
              alt="movie shot"
              className="w-96 h-48 rounded-lg drop-shadow-xl"
              key={image.file_path}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ImageCarousel;
