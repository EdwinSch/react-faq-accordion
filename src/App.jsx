import Header from "./components/Header";
import Question from "./components/Question";
import faq from "../data";

function App() {
  return (
    <>
      <div className="decorative"></div>
      <main>
        <Header />
        <section className="questions-container">
          {faq.map((item) => {
            return <Question key={item.id} {...item} />;
          })}
        </section>
      </main>
    </>
  );
}

export default App;
