import Header from '../components/header'
import Footer from '../components/footer'

export default function Layout ({children}) {
  return (
    <>
      <Header/>
      <main className="container mx-auth">
        {children}
      </main>
      <Footer/>
    </>
  )
}