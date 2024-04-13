type GenreItemProps = {
  name: string;
  color: string;
};

function GenreItem({ name, color }: GenreItemProps) {
  return (
    <div className={`flex w-48 h-48 rounded-lg p-5 ${color} items-center justify-center`}>
      <span className="text-xl font-semibold text-white">{name}</span>
    </div>
  );
}

export default GenreItem;
