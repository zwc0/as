import React from 'react';
import {HashRouter, Routes, Route, Link} from 'react-router-dom';
import {createRoot} from 'react-dom/client';
import Home from './pages/Home';
import Resources from './pages/Resources';

if('serviceWorker' in navigator){
    navigator.serviceWorker.register('sw.js');
};

const App = () => {
    return (
        <HashRouter>
            <nav className="grid grid-cols-2 text-center">
                <Link className="bg-blue-400" to='/'>Home</Link>
                <Link className="bg-blue-200" to='/resources'>Resources</Link>
            </nav>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/resources' element={<Resources />} />
            </Routes>
        </HashRouter>
    );
}

const root = createRoot(document.getElementById('app') as HTMLElement);
root.render(<App />);