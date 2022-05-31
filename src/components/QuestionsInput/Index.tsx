import { useState } from "react";
import { BsArrowDownCircleFill } from "react-icons/all";

import "./styles.css";

interface QuestionsInputProps {
  title: string;
  //@ts-ignore
  items: any[];
}

export function QuestionsInput({ title, items }: QuestionsInputProps) {
  const [selected, setSelected] = useState(false);
  return (
    <div className="container">
      <div className="title-container">
        <h4>{title}</h4>
        <BsArrowDownCircleFill
          className="icon"
          onClick={() => setSelected(!selected)}
        />
      </div>

      <div className="question">
        {selected ? (
          //@ts-ignore
          items.map((item) => (
            <div key={item.id} className="question-container">
              <input type="checkbox" />
              <p key={item.id}>{item.question}</p>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
