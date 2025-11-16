// Import de React et du hook useState pour gérer l'état
import React, { useState } from 'react';

// Import des composants typés
import Greeting from './components/Greeting';
import Counter from './components/Counter';

// Import du CSS
import './App.css';

/**
 * Composant principal de l'application
 * @returns {JSX.Element} L'application complète
 */
const App: React.FC = () => {
  // State pour gérer le nom avec TypeScript (string)
  const [name, setName] = useState<string>('TypeScript Learner');
  
  // State pour gérer l'âge avec TypeScript (number)
  const [age, setAge] = useState<number>(25);
  
  // State pour suivre le dernier compteur modifié
  const [lastCount, setLastCount] = useState<number>(0);

  /**
   * Gestionnaire pour les changements de compteur
   * @param count - La nouvelle valeur du compteur
   */
  const handleCountChange = (count: number): void => {
    setLastCount(count);
    console.log(`Counter changed to: ${count}`);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🚀 TypeScript React Project</h1>
        <p>Démonstration de composants React avec TypeScript</p>
      </header>

      <main className="app-main">
        {/* Section de démonstration du composant Greeting */}
        <section className="section">
          <h2>👋 Composant Greeting</h2>
          <div className="controls">
            <label>
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </label>
            <label>
              Age:
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                placeholder="Enter your age"
              />
            </label>
          </div>
          
          {/* Utilisation du composant Greeting avec différentes props */}
          <div className="greeting-examples">
            <Greeting name={name} age={age} />
            <Greeting name="Developer" isActive={true} />
            <Greeting name="Visitor" age={30} isActive={false} />
          </div>
        </section>

        {/* Section de démonstration du composant Counter */}
        <section className="section">
          <h2>🔢 Composant Counter</h2>
          <p className="last-count">Dernière valeur: {lastCount}</p>
          
          {/* CORRECTION : Utilisation correcte des composants Counter */}
          <div className="counter-examples">
            <Counter 
              initialValue={0}
              step={1}
              onCountChange={handleCountChange}
            />
            
            <Counter 
              initialValue={10}
              step={2}
              onCountChange={handleCountChange}
            />
            
            <Counter 
              initialValue={-5}
              step={3}
              onCountChange={handleCountChange}
            />
          </div>
        </section>

        {/* Section d'information TypeScript */}
        <section className="section info-section">
          <h2>ℹ️ À propos de TypeScript</h2>
          <div className="typescript-info">
            <div className="info-card">
              <h3>🎯 Avantages</h3>
              <ul>
                <li>Détection d'erreurs à la compilation</li>
                <li>Auto-complétion intelligente</li>
                <li>Meilleure documentation du code</li>
                <li>Refactoring plus sûr</li>
              </ul>
            </div>
            
            <div className="info-card">
              <h3>🔧 Fonctionnalités utilisées</h3>
              <ul>
                <li>Interfaces pour les props et state</li>
                <li>Types génériques React (React.FC)</li>
                <li>Props optionnelles avec ?</li>
                <li>Typage des fonctions et méthodes</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>
          Projet créé avec ❤️ utilisant React + TypeScript + Vite
        </p>
      </footer>
    </div>
  );
};

export default App;