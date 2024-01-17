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
          <AiFillMinusCircle style={{ color: "#301534", fontSize: 26 }} />
        ) : (
          <AiFillPlusCircle style={{ color: "#ad28eb", fontSize: 26 }} />
        )}
      </div>
      {/* Show/hide answer on toggle state */}
      {toggle && <p>{answer}</p>}
    </article>
  );
};

export default Question;
