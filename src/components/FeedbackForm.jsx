import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

function FeedbackForm() {
  const [feedback, setFeedback] = useState('');
  const [source, setSource] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ feedback, source }),
      });
      const data = await response.json();
      console.log('Success:', data);
      setFeedback('');
      setSource('');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Card className="w-full max-w-lg mt-8">
      <CardHeader>
        <CardTitle>Submit Feedback</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            placeholder="Enter customer feedback here..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            className="mb-4"
          />
          <Select onValueChange={setSource} value={source}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select feedback source" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="email">Email</SelectItem>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="phone">Phone</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit">Analyze Feedback</Button>
        </form>
      </CardContent>
    </Card>
  );
}

export default FeedbackForm;