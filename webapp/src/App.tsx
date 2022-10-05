import React, { Suspense } from 'react';
import { Text } from '@mantine/core';
import { Routes, Route } from 'react-router-dom';
const LoginPage = React.lazy(() => import('./pages/Login').then( ({LoginPage}) => ({default: LoginPage}) ));
const DashboardPage = React.lazy(() => import('./pages/Dashboard').then( ({DashboardPage}) => ({default: DashboardPage}) ));
function App() {
  return (
    <Suspense fallback={<p>Loading Please wait...</p>}>
       <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/dashboard" element={<DashboardPage />}></Route>
       </Routes>
    </Suspense>
  );
}

export default App;
