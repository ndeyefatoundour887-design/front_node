const AjouterQuestion = async (e) => {
  e.preventDefault();

  const data = {
    titre,
    description,
    auteur: "Ndeye Fatou",
  };

  const response = await fetch(
    `${URL_FRONT}/api/questions/ajouter`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  const result = await response.json();

  if (response.ok) {
    alert("Question ajoutée");
    navigate("/");
  }
};