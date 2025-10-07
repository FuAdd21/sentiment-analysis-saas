import React from 'react';
import { Button } from '@/components/ui/button';

function Header() {
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Sentiment Analysis SaaS</h1>
      <Button variant="outline" className="text-white border-white">
        Dashboard
      </Button>
    </header>
  );
}

export default Header;