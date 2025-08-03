import React from 'react'
import { Package, ClipboardList, BarChart3, UserCheck, Calendar, ShoppingCart } from 'lucide-react'

const features = [
  {
    icon: Package,
    title: 'Controle de Estoque',
    description: 'Gerencie ingredientes, produtos prontos e receba alertas de reposição automáticos.'
  },
  {
    icon: ClipboardList,
    title: 'Gestão de Pedidos',
    description: 'Organize todos os pedidos, prazos de entrega e acompanhe o status de produção.'
  },
  {
    icon: BarChart3,
    title: 'Relatórios de Vendas',
    description: 'Análises detalhadas de faturamento, produtos mais vendidos e períodos de maior demanda.'
  },
  {
    icon: UserCheck,
    title: 'Cadastro de Clientes',
    description: 'Mantenha informações completas dos clientes e histórico de compras.'
  },
  {
    icon: Calendar,
    title: 'Agenda de Produção',
    description: 'Planeje sua produção diária, organize entregas e otimize seu tempo.'
  },
  {
    icon: ShoppingCart,
    title: 'Vendas Online',
    description: 'Receba pedidos pelo site, WhatsApp e redes sociais em um só lugar.'
  }
]

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Funcionalidades pensadas especificamente para confeitarias, 
            desde pequenos ateliês até grandes estabelecimentos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow group"
            >
              <div className="bg-gradient-to-br from-pink-100 to-orange-100 p-4 rounded-xl w-fit mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}