import React from 'react';
import { createRoot } from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom";

//zerar css
import './index.css';

//utils
import ScrollToTop from './utils/ScrollToTop';

//pages
import Home from './view/pages/Home';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<h1>404: NOT FOUND</h1>} />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);