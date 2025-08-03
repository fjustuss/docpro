import React, { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Features from './components/Features'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import Auth from './components/Auth'
import Footer from './components/Footer'

function App() {
  const [user, setUser] = useState<any>(null)
  const [showAuth, setShowAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleLoginClick = () => {
    if (user) {
      // User is logged in, could redirect to dashboard
      alert('Você já está logado! Em breve será redirecionado para o dashboard.')
    } else {
      // Scroll to login section
      const loginElement = document.getElementById('login')
      if (loginElement) {
        loginElement.scrollIntoView({ behavior: 'smooth' })
      }
      setShowAuth(true)
    }
  }

  const handleAuthSuccess = () => {
    setShowAuth(false)
    alert('Login realizado com sucesso! Em breve você será redirecionado para o dashboard.')
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    setUser(null)
    setShowAuth(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-pink-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando Doçura Pro...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header onLoginClick={handleLoginClick} />
      <Hero onLoginClick={handleLoginClick} />
      <About />
      <Features />
      <Pricing />
      <Testimonials />
      
      {!user && (
        <Auth onAuthSuccess={handleAuthSuccess} />
      )}
      
      {user && (
        <section className="py-20 bg-green-50">
          <div className="max-w-md mx-auto px-4 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Bem-vindo, {user.user_metadata?.full_name || user.email}!
              </h2>
              <p className="text-gray-600 mb-6">
                Você está logado no Doçura Pro. Em breve você será redirecionado para o dashboard completo.
              </p>
              <button
                onClick={handleLogout}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Sair
              </button>
            </div>
          </div>
        </section>
      )}
      
      <Footer />
    </div>
  )
}

export default App