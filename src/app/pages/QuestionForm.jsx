import React from "react";

const QuestionForm = () => {

  const ajouterQuestion = (e) => {
    e.preventDefault();

    console.log("Question ajoutée");
  };

  return (
    <form onSubmit={ajouterQuestion}>
      <input type="text" placeholder="Titre" />

      <button type="submit">
        Ajouter
      </button>
    </form>
  );
};

export default QuestionForm;