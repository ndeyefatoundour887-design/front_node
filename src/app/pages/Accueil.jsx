import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Questions from "../../composants/Questions";

const Accueil = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const VerificationToken = () => {
    if (token) {
      navigate("/ajouter_question");
    } else {
      navigate("/connexion");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-purple-50">

      {/* HERO SECTION */}
      <div className="max-w-7xl mx-auto px-8 py-12">

        <div className="bg-gradient-to-r from-blue-600 to-purple-700 text-white rounded-3xl p-10 shadow-xl">

          <h1 className="text-5xl font-bold mb-4">
            Bienvenue sur Mini Stack Overflow 🚀
          </h1>

          <p className="text-lg opacity-90 max-w-2xl">
            Posez vos questions, trouvez des réponses et partagez vos
            connaissances avec la communauté des développeurs.
          </p>

          <button
            onClick={VerificationToken}
            className="mt-8 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold shadow-lg hover:scale-105 transition"
          >
            ➕ Poser une question
          </button>
        </div>

        {/* STATISTIQUES */}

        <div className="grid md:grid-cols-3 gap-6 mt-10">

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-4xl font-bold text-blue-600">120+</h2>
            <p className="text-gray-600 mt-2">Questions</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-4xl font-bold text-green-600">85+</h2>
            <p className="text-gray-600 mt-2">Réponses</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h2 className="text-4xl font-bold text-purple-600">50+</h2>
            <p className="text-gray-600 mt-2">Utilisateurs</p>
          </div>

        </div>

        {/* TITRE QUESTIONS */}

        <div className="flex justify-between items-center mt-14 mb-6">

          <h2 className="text-3xl font-bold text-gray-800">
            Questions récentes
          </h2>

          <NavLink
            onClick={VerificationToken}
            className="bg-blue-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-blue-700 transition"
          >
            Ajouter une question
          </NavLink>

        </div>

        {/* LISTE DES QUESTIONS */}

        <Questions />

      </div>
    </div>
  );
};

export default Accueil;