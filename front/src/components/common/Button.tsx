interface ButtonProps {
  text: string;
  type: string;
  onClick: () => void;
}

const MyButton = ({ text, type, onClick }: ButtonProps) => {
  return (
    <button className="{'MyButton}" onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
