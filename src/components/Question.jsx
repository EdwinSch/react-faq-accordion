import { AiFillPlusCircle } from "react-icons/ai";

const Question = ({ question, answer }) => {
  return (
    <article className="single-question">
      <div className="question-header">
        <h2>{question}</h2>
        <AiFillPlusCircle style={{ color: "#ad28eb", fontSize: 26 }} />
      </div>
      <p>{answer}</p>
    </article>
  );
};

export default Question;
