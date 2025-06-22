type buttonProp = {
  text: string;
  onClick: (value: string) => void;
};

export default function Button({ text, onClick }: buttonProp) {
  return (
    <button
      onClick={() => {
        onClick(text);
      }}
    >
      {text}
    </button>
  );
}
