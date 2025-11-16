// Import de React pour le support JSX et des fonctionnalités React
import React from 'react';

// Définition de l'interface pour les props du composant
// Cela permet de typer les propriétés que le composant peut recevoir
interface GreetingProps {
  name: string; // La prop 'name' doit être de type string et est obligatoire
  age?: number; // La prop 'age' est optionnelle (notez le ?)
  isActive?: boolean; // Autre prop optionnelle pour démontrer
}

/**
 * Composant fonctionnel Greeting qui affiche un message de salutation
 * @param {GreetingProps} props - Les propriétés du composant
 * @returns {JSX.Element} Un élément JSX affichant le message de salutation
 */
const Greeting: React.FC<GreetingProps> = ({ name, age, isActive = true }) => {
  return (
    <div className="greeting-card">
      <h2>Hello, {name}!</h2>
      {age && <p>Age: {age} years old</p>}
      <p>Status: {isActive ? '🟢 Active' : '🔴 Inactive'}</p>
    </div>
  );
};

// Export du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Greeting;