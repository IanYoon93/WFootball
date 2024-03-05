interface ButtonFilterProps {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  value: string;
  title: string;
}

function ButtonFilter({ onClickHandler, value, title }: ButtonFilterProps) {
  return (
    <button onClick={onClickHandler} value={value} className="btn">
      {title}
    </button>
  );
}

export default ButtonFilter;
