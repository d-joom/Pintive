import { useState } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/Layouts/MainLayout';
import UploadPage from './pages/Upload/UploadPage.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<UploadPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
