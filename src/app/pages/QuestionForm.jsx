import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AjouterQuestion = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const t = localStorage.getItem("token");
    if (!t) navigate("/connexion");
    else setToken(t);
  }, [navigate]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState(""); // tags séparés par des virgules
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Token:", token);
    setError(null);

    // validation simple
    if (!title.trim() || !body.trim()) {
      setError("Le titre et la description sont requis.");
      return;
    }

    const payload = {
  titre: title.trim(),
  description: body.trim(),
  auteur: "Utilisateur",
};
    console.log("Payload envoyé :", payload);

    setLoading(true);
    try {
      const res = await fetch("/api/questions/ajouter",{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });
      console.log("Réponse du serveur :", res);

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Erreur lors de la création de la question.");
      }
      console.log("Question créée avec succès !");

      const data = await res.json();
      // rediriger vers la nouvelle question ou la liste
      navigate(`/questions/${data.id || ""}`, { replace: true });
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };
  console.log("Token actuel :", token);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-50 to-white p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Poser une question</h1>
        <p className="text-sm text-gray-500 mb-6">
          Donnez un titre clair, décrivez votre problème et ajoutez des tags pertinents.
        </p>

        {error && (
          <div className="mb-4 text-red-700 bg-red-100 p-3 rounded">{error}</div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Titre
            </label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Comment résoudre l'erreur X en React ?"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              placeholder="Expliquez le problème, ce que vous avez essayé, les messages d'erreur, etc."
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tags (séparés par des virgules)
            </label>
            <input
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              placeholder="react, javascript, api"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex items-center justify-between mt-6">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Envoi..." : "Publier la question"}
            </button>

            <button
              type="button"
              onClick={() => navigate(-1)}
              className="text-gray-600 px-4 py-2 rounded"
            >
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AjouterQuestion;
