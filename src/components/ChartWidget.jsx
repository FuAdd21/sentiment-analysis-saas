import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

function ChartWidget() {
  return (
    <Card className="w-full max-w-lg mt-4">
      <CardHeader>
        <CardTitle>Sentiment Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Pie chart placeholder (to be implemented on Day 4).</p>
      </CardContent>
    </Card>
  );
}

export default ChartWidget;