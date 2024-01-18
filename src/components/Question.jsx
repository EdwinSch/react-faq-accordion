import { useState } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const Question = ({ question, answer }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <article className="single-question">
      <div onClick={() => setToggle(!toggle)} className="question-header">
        <h2>{question}</h2>
        {/* Set toggle icon on click */}
        {toggle ? (
          <AiFillMinusCircle
            className="toggle-icon"
            style={{ color: "#301534" }}
          />
        ) : (
          <AiFillPlusCircle
            className="toggle-icon"
            style={{ color: "#ad28eb" }}
          />
        )}
      </div>
      {/* Show/hide answer on toggle state */}
      {toggle && <p>{answer}</p>}
    </article>
  );
};

export default Question;
