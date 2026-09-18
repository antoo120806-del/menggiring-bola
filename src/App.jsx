import Header from './components/Header.jsx'
import Intro from './components/Intro.jsx'
import StepsSection from './components/StepsSection.jsx'
import ConsistencySection from './components/ConsistencySection.jsx'
import TipsSection from './components/TipsSection.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-poster pb-10">
      <div className="mx-auto w-full max-w-[1040px] px-3 sm:px-5">
        <header className="pt-5 sm:pt-8">
          <Header />
          <Intro />
        </header>

        <main>
          <StepsSection />
          <ConsistencySection />
          <TipsSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}
