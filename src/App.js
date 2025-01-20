import './App.css';

import React from 'react';
import Skills from './components/Skills';
import Stats from './components/Stats';
import About from './components/About';
import Contact from './components/Contact';
// importing react-router-dom
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Resume from './components/Resume';
import Projects from './components/Projects';
import NotFound from './components/NotFound';
import View from './components/View';

function App() {

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<View />}>
                        <Route path="/" element={<About />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/skills" element={<Skills />} />
                        <Route path='/resume' element={<Resume />} />
                        <Route path="/stats" element={<Stats />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
