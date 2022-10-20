/** Import des modules nécessaires */
import ListeLogements from "@/Assets/Api/logements.json";

// fonction récuperation de tous les logements.
let GetAllLogement = () => {
    return ListeLogements;
}

// fonction recupération d'un logement.
let GetOneLogement = async (id) => {
    const OneLogement = await ListeLogements.find(logement => logement.id === id);
    return OneLogement;
}

// export des fonction pour les reutiliser dans les pages
export const LogementService = {
    GetAllLogement,
    GetOneLogement
}


export default LogementService