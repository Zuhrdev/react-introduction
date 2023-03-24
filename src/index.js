//importer les outils react
import ReactDOM  from 'react-dom/client';

//importer notre premier composant (qui sera le parent)
import { App } from "./App";
// Cibler la div dont l'id est root
const divRoot = document.getElementById("root");

// Créer un noeud racine react à partir de la div root
const reactRoot = ReactDOM.createRoot(divRoot);
// Injecter notre premier composant dans le noeud racine
reactRoot.render(<App />);