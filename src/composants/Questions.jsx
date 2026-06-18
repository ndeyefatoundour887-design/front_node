import React from "react";
import QuestionCard from "./QuestionCard";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/questions")
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <div className="space-y-4">
      {questions.map((question) => (
        <div
          key={question._id}
          className="bg-white p-6 rounded-xl shadow"
        >
          <h2 className="font-bold text-xl">
            {question.titre}
          </h2>

          <p className="mt-2 text-gray-600">
            {question.description}
          </p>

          <p className="mt-3 text-blue-500">
            {question.auteur}
          </p>
        </div>
      ))}
    </div>
  );
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition duration-300">
      <h1 className="text-2xl font-bold text-gray-800">Les questions</h1>

      <div className="space-y-4">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
          />
        ))}
      </div>
    </div>
  );
};

export default Questions;