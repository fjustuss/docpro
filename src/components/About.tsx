import React from 'react'
import { Target, Users, Zap } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Criado especialmente para confeiteiros que querem crescer
            </h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              O Doçura Pro nasceu da necessidade real de confeiteiros que precisavam de uma solução 
              completa e fácil de usar. Nossa missão é simplificar a gestão do seu negócio para que 
              você possa focar no que faz de melhor: criar doces irresistíveis.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <Target className="h-6 w-6 text-pink-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Foco no seu negócio</h3>
                  <p className="text-gray-600">Automatize tarefas administrativas e concentre-se na produção.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-lg">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Atendimento personalizado</h3>
                  <p className="text-gray-600">Gestão completa de clientes e histórico de pedidos.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-yellow-100 p-3 rounded-lg">
                  <Zap className="h-6 w-6 text-yellow-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Resultados rápidos</h3>
                  <p className="text-gray-600">Aumente sua produtividade e vendas desde o primeiro dia.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/1251175/pexels-photo-1251175.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Confeitaria profissional"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-pink-600">98%</div>
                <div className="text-sm text-gray-600">Satisfação</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}