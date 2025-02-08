import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, X, Facebook, Instagram, Twitter, Mail, Phone } from 'lucide-react';
import { useState } from 'react';
import Home from './pages/Home';
import Locations from './pages/Locations';
import Login from './pages/Login';
import Register from './pages/Register';
import RegisterDelivery from './pages/RegisterDelivery';
import AvailableDeliveries from './pages/AvailableDeliveries';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <nav className="bg-orange-500 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              <Link to="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">Inbox Entregas</span>
              </Link>

              {/* Desktop Menu */}
              <div className="hidden md:flex items-center space-x-4">
                <Link to="/" className="hover:text-orange-200 px-3 py-2">Início</Link>
                <Link to="/locations" className="hover:text-orange-200 px-3 py-2">Locais</Link>
                <Link to="/register-delivery" className="hover:text-orange-200 px-3 py-2">Cadastrar Entrega</Link>
                <Link to="/available-deliveries" className="hover:text-orange-200 px-3 py-2">Entregas Disponíveis</Link>
                <Link to="/login" className="hover:text-orange-200 px-3 py-2">Entrar</Link>
                <Link to="/register" className="bg-white text-orange-500 px-4 py-2 rounded-md hover:bg-orange-50">
                  Cadastrar
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <Link to="/" className="block px-3 py-2 hover:bg-orange-600 rounded">Início</Link>
                <Link to="/locations" className="block px-3 py-2 hover:bg-orange-600 rounded">Locais</Link>
                <Link to="/register-delivery" className="block px-3 py-2 hover:bg-orange-600 rounded">Cadastrar Entrega</Link>
                <Link to="/available-deliveries" className="block px-3 py-2 hover:bg-orange-600 rounded">Entregas Disponíveis</Link>
                <Link to="/login" className="block px-3 py-2 hover:bg-orange-600 rounded">Entrar</Link>
                <Link to="/register" className="block px-3 py-2 hover:bg-orange-600 rounded">Cadastrar</Link>
              </div>
            </div>
          )}
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/register-delivery" element={<RegisterDelivery />} />
            <Route path="/available-deliveries" element={<AvailableDeliveries />} />
          </Routes>
        </main>

        <footer className="bg-gray-900 text-white">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Company Info */}
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-bold text-lg">Inbox Entregas</span>
                </div>
                <p className="text-gray-400 mb-4">
                  Soluções de entrega rápidas e seguras para você e sua empresa.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/" className="text-gray-400 hover:text-white">Início</Link>
                  </li>
                  <li>
                    <Link to="/locations" className="text-gray-400 hover:text-white">Locais</Link>
                  </li>
                  <li>
                    <Link to="/register-delivery" className="text-gray-400 hover:text-white">Cadastrar Entrega</Link>
                  </li>
                  <li>
                    <Link to="/available-deliveries" className="text-gray-400 hover:text-white">Entregas Disponíveis</Link>
                  </li>
                </ul>
              </div>

              {/* Support */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Suporte</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">FAQ</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Política de Privacidade</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Termos de Serviço</a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white">Central de Ajuda</a>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h3 className="font-semibold text-lg mb-4">Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Mail className="h-5 w-5" />
                    <span>contato@inboxentregas.com</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Phone className="h-5 w-5" />
                    <span>(11) 99999-9999</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-12 pt-8">
              <p className="text-center text-gray-400">
                © {new Date().getFullYear()} Inbox Entregas. Todos os direitos reservados.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;