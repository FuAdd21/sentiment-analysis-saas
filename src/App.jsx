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
    </div>
  );
}

export default App;