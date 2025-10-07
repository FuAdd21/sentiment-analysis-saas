import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SentimentScore from './SentimentScore';
import ChartWidget from './ChartWidget';

function ResultDisplay() {
  return (
    <div className="w-full max-w-4xl mt-8 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Analysis Results</CardTitle>
        </CardHeader>
        <CardContent>
          <SentimentScore />
          <ChartWidget />
        </CardContent>
      </Card>
    </div>
  );
}

export default ResultDisplay;