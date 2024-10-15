/*!
=========================================================
* Argon Design System React - v1.1.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import ProfilePage from "views/Index";// Import the ProfilePage component
import ContactForm from "components/ContactForm"; // Import the ContactForm component
import Projects from "components/Projects"; // Import the Projects component
import SkillsSection from "components/SkillsSection"; // Import the SkillsSection component
import WorkExperience from "components/WorkExperience"; // Import the WorkExperience component

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProfilePage />} /> {/* Main profile page */}
      <Route path="/contact" element={<ContactForm />} /> {/* Contact form page */}
      <Route path="/projects" element={<Projects />} /> {/* Projects page */}
      <Route path="/skills" element={<SkillsSection />} /> {/* Skills section page */}
      <Route path="/work-experience" element={<WorkExperience />} /> {/* Work experience page */}
      <Route path="*" element={<Navigate to="/" replace />} /> {/* Redirect any unknown paths to the main profile page */}
    </Routes>
  </BrowserRouter>
);
