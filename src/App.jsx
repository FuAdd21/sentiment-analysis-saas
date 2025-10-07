// Trigger redeployment
import React from 'react';
import Header from './components/Header';
import FeedbackForm from './components/FeedbackForm';
import ResultDisplay from './components/ResultDisplay';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow flex flex-col items-center p-4">
        <FeedbackForm />
        <ResultDisplay />
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center">
        <p>&copy; 2025 Sentiment Analysis SaaS - Built for Client</p>
      </footer>
    </div>
  );
}

export default App;