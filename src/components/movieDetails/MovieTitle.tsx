type MovieTitleProps = {
  title: string;
};

function MovieTitle({ title }: MovieTitleProps) {
  return (
    <div>
      <div className="text-4xl font-title-font text-gray-800 dark:text-gray-300 mb-6">{title}</div>
    </div>
  );
}

export default MovieTitle;
