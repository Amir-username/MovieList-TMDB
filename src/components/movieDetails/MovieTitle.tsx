type MovieTitleProps = {
  title: string;
};

function MovieTitle({ title }: MovieTitleProps) {
  return (
    <div>
      <div className="text-4xl font-semibold text-gray-800 mb-6">{title}</div>
    </div>
  );
}

export default MovieTitle;
