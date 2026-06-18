import React, { useState ,  } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const URL_FRONT = import.meta.env.VITE_URL_FRONT;
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";



const Inscription = () => {

  
  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');
  const [ prenom , setPrenom ] = useState('');
  const [ nom , setNom ] = useState('');
  const navigate = useNavigate();

  
  // la logique

  const Register = async (e) => {
      e.preventDefault();

        if (!prenom || !nom || !email || !password ) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        const data = {
            prenom: prenom,
            nom: nom,
            email: email,
            password: password
        };

        try {
            const response = await fetch(`${URL_FRONT}/api/auth/inscription`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);

            if (response.ok) {
                alert("Inscription réussie ✔️ Vous pouvez maintenant vous connecter.");
                  navigate('/');
                
            } else {
                alert(result.message || "Erreur lors de l'inscription");
            }

        } catch (error) {
            console.error(error);
            alert("Erreur serveur. Veuillez réessayer.");
        }

  }


  return (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-pink-50 to-white p-4">
    
    <div className="w-full max-w-lg bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8">

      <div className="flex justify-center mb-4">
        <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center text-4xl">
          👤
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
        Inscription
      </h1>

      <form onSubmit={Register} className="space-y-5">

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Prénom
          </label>
          <input
            type="text"
            placeholder="Prénom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Nom
          </label>
          <input
            type="text"
            placeholder="Nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Email
          </label>
          <input
            type="email"
            placeholder="exemple@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2 font-medium">
            Mot de passe
          </label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg hover:scale-105 transition duration-300"
        >
          S'inscrire →
        </button>

        <p className="text-center text-gray-600">
          Déjà un compte ?
          <Link
            to="/"
            className="ml-2 text-red-600 font-semibold hover:underline"
          >
            Se connecter
          </Link>
        </p>

      </form>

    </div>

  </div>
    );
}

export default Inscription
