// App.js

import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#FBFCF8]">
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        <Footer />
      </AuthProvider>
    </div>
  );
};

export default App;
