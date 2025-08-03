import React from 'react'
import { ArrowRight, Play, Heart } from 'lucide-react'

interface HeroProps {
  onLoginClick: () => void
}

export default function Hero({ onLoginClick }: HeroProps) {
  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-pink-50 via-cream-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              O sistema que{' '}
              <span className="text-pink-600">adoça</span> a gestão da sua confeitaria
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Controle vendas, estoque, pedidos e clientes de forma simples e eficiente. 
              Transforme sua confeitaria em um negócio mais organizado e lucrativo.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-pink-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-700 transition-colors flex items-center justify-center group">
                Testar Grátis
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={onLoginClick}
                className="border-2 border-pink-600 text-pink-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-pink-600 hover:text-white transition-colors flex items-center justify-center"
              >
                <Play className="mr-2 h-5 w-5" />
                Entrar no Sistema
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-xl p-6">
                <div className="space-y-4">
                  <div className="h-4 bg-pink-300 rounded w-3/4"></div>
                  <div className="h-4 bg-orange-300 rounded w-1/2"></div>
                  <div className="h-32 bg-gradient-to-br from-pink-200 to-orange-200 rounded-lg flex items-center justify-center">
                    <Heart className="h-16 w-16 text-pink-500" fill="currentColor" />
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-pink-300 rounded w-full"></div>
                    <div className="h-3 bg-orange-300 rounded w-2/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}