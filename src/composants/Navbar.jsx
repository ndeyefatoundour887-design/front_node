import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png';

const Navbar = () => {

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const Deconnexion = () => {
    localStorage.removeItem("token");
    alert('Déconnexion réussie');
    navigate('/');
  }

  return (
    <nav className="w-full h-[70px] bg-[#e9e9e9] border border-gray-300 flex items-center justify-between px-6 shadow-sm">

      {/* Logo */}
      <NavLink to="/">
        <div className="bg-white px-4 py-2 border-r border-gray-300">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>
      </NavLink>

      {/* Menu */}
      <div className="flex items-center gap-4">

        <NavLink
          to="/profil"
          className="text-gray-600 font-medium hover:text-black"
        >
          Profil
        </NavLink>

        {token ? (
          <button
            onClick={Deconnexion}
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-6 py-3 rounded-md"
          >
            Déconnexion
          </button>
        ) : (
          <>
            <NavLink
              to="/connexion"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-md shadow"
            >
              Connexion
            </NavLink>

            <NavLink
              to="/inscription"
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-md shadow"
            >
              Inscription
            </NavLink>
          </>
        )}

      </div>
    </nav>
  )
}

export default Navbar;