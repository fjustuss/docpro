import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Maria Silva',
    business: 'Doces da Maria',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'O Doçura Pro revolucionou minha confeitaria! Agora consigo organizar todos os pedidos e nunca mais perco uma encomenda. Meu faturamento aumentou 40% em 3 meses.',
    rating: 5
  },
  {
    name: 'João Santos',
    business: 'Confeitaria Doce Sabor',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'A agenda de produção mudou minha vida! Antes eu trabalhava até tarde organizando os pedidos. Agora tudo é automático e tenho mais tempo para criar novos sabores.',
    rating: 5
  },
  {
    name: 'Ana Costa',
    business: 'Ateliê da Ana',
    image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    text: 'Os relatórios me ajudaram a entender quais produtos vendem mais. Consegui focar nos doces mais lucrativos e otimizar meu estoque. Recomendo para todos os confeiteiros!',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mais de 500 confeitarias já transformaram seus negócios com o Doçura Pro.
            Veja alguns depoimentos reais dos nossos clientes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="h-12 w-12 rounded-full object-cover mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}