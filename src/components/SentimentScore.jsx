import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function SentimentScore() {
  const sentiment = { type: 'Positive', score: 0.85 };

  return (
    <Card className="w-full max-w-sm mt-4">
      <CardHeader>
        <CardTitle>Sentiment Score</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center">
          <span
            className={`text-lg font-semibold ${
              sentiment.type === 'Positive'
                ? 'text-green-600'
                : sentiment.type === 'Negative'
                ? 'text-red-600'
                : 'text-yellow-600'
            }`}
          >
            {sentiment.type}
          </span>
          <span className="ml-2 text-gray-600">
            (Confidence: {(sentiment.score * 100).toFixed(1)}%)
          </span>
        </div>
      </CardContent>
    </Card>
  );
}

export default SentimentScore;