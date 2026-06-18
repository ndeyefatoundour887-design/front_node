import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify';
const URL_FRONT = import.meta.env.VITE_URL_FRONT;



const Connexion = () => {

  const [ email , setEmail ] = useState('');
  const [ password , setPassword ] = useState('');
  const navigate = useNavigate();

  const Laconnexion = async (e)  => {
       e.preventDefault();


        if (!email || !password) {
            alert("Veuillez remplir tous les champs");
            return;
        }

        const data = {
            email: email,
            password: password
        };
       
        try {
            const response = await fetch(`${URL_FRONT}/api/auth/connexion`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            console.log(result);

            if (response.ok) {
                if (result.token) {
                    localStorage.setItem("token", result.token);
                }
                alert(`Connexion réussie ${result.user.prenom} ${result.user.nom}` );
                navigate('/');
                
            } else {
                alert(result.message || "Identifiants incorrects");
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
          🔐
        </div>
      </div>

      <h1 className="text-4xl font-bold text-center text-indigo-900 mb-8">
        Connexion
      </h1>

      <form onSubmit={Laconnexion} className="space-y-5">

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
          Se connecter →
        </button>

        <div className="text-center">
          <span className="text-gray-600">
            Pas encore de compte ?
          </span>

          <Link
            to="/inscription"
            className="ml-2 text-red-600 font-semibold hover:underline"
          >
            S'inscrire
          </Link>
        </div>

      </form>

    </div>

  </div>
);
  
}

export default Connexion
