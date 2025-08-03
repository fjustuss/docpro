import React from 'react'
import { Heart } from 'lucide-react'

interface HeaderProps {
  onLoginClick: () => void
}

export default function Header({ onLoginClick }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-sm fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Heart className="h-8 w-8 text-pink-500" fill="currentColor" />
            <span className="text-2xl font-bold text-gray-900">Doçura Pro</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('funcionalidades')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Funcionalidades
            </button>
            <button 
              onClick={() => scrollToSection('planos')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Planos
            </button>
            <button 
              onClick={() => scrollToSection('depoimentos')}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              Depoimentos
            </button>
            <button 
              onClick={onLoginClick}
              className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors"
            >
              Entrar
            </button>
          </nav>

          <button 
            onClick={onLoginClick}
            className="md:hidden bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition-colors"
          >
            Entrar
          </button>
        </div>
      </div>
    </header>
  )
}