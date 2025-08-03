import React from 'react'
import { Check, Star } from 'lucide-react'

const plans = [
  {
    name: 'Básico',
    price: 'R$ 29',
    period: '/mês',
    description: 'Ideal para ateliês e confeitarias pequenas',
    features: [
      'Até 100 produtos cadastrados',
      'Gestão básica de pedidos',
      'Controle de estoque simples',
      'Relatórios básicos',
      'Suporte por email'
    ],
    cta: 'Começar Grátis',
    popular: false
  },
  {
    name: 'Profissional',
    price: 'R$ 59',
    period: '/mês',
    description: 'Para confeitarias em crescimento',
    features: [
      'Produtos ilimitados',
      'Gestão avançada de pedidos',
      'Controle completo de estoque',
      'Relatórios avançados',
      'Agenda de produção',
      'Cadastro de clientes',
      'Suporte prioritário'
    ],
    cta: 'Assinar Agora',
    popular: true
  },
  {
    name: 'Premium',
    price: 'R$ 99',
    period: '/mês',
    description: 'Solução completa para grandes confeitarias',
    features: [
      'Todos os recursos do Profissional',
      'Vendas online integradas',
      'Múltiplos usuários',
      'API personalizada',
      'Relatórios personalizados',
      'Integração com WhatsApp',
      'Suporte 24/7'
    ],
    cta: 'Assinar Premium',
    popular: false
  }
]

export default function Pricing() {
  return (
    <section id="planos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Planos que cabem no seu bolso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comece grátis e evolua conforme seu negócio cresce. 
            Todos os planos incluem 7 dias de teste gratuito.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
                plan.popular ? 'border-pink-500 scale-105' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="h-4 w-4 mr-1" fill="currentColor" />
                    Mais Popular
                  </div>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600 ml-1">{plan.period}</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                  plan.popular 
                    ? 'bg-pink-600 text-white hover:bg-pink-700' 
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600">
            Todos os planos incluem <strong>7 dias grátis</strong> • Cancele quando quiser • Sem taxas de setup
          </p>
        </div>
      </div>
    </section>
  )
}