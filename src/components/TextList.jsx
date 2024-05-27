import { useTextContext } from "../context/TextContext";

function TextList() {
  const { texts } = useTextContext();

  return (
    <ul>
      {texts.map((text, index) => (
        <li key={index}>
          {text}  
        </li>
      ))}
    </ul>
  );
}

export default TextList;
