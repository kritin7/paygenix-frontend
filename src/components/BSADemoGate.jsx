import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardHeader, CardTitle, CardContent } from './ui/card';

const BSADemoGate = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const targetUrl = "https://bsa-frontend.bravesand-f10320eb.eastus.azurecontainerapps.io/";
  const correctPassword = "paygenix-demo"; // Change this to your desired password

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === correctPassword) {
      window.location.href = targetUrl;
    } else {
      setError(true);
      setPassword('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-center">BSA Demo Access</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className={error ? "border-red-500" : ""}
              />
              {error && (
                <p className="text-red-500 text-sm">Incorrect password. Please try again.</p>
              )}
            </div>
            <Button type="submit" className="w-full bg-[#0052FF] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Access Demo
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default BSADemoGate;
