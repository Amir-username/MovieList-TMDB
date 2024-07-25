type ModalHeaderProps = {
  title: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function ModalHeader({ title, setIsOpen }: ModalHeaderProps) {
  const onClose = () => setIsOpen(false);

  return (
    <div className="flex justify-between items-center">
      <span className="text-primary-light dark:text-primary-dark text-3xl font-title-font">
        {title}
      </span>
      <span
        onClick={onClose}
        className="material-symbols-outlined text-gray-400 cursor-pointer"
      >
        close
      </span>
    </div>
  );
}

export default ModalHeader;
