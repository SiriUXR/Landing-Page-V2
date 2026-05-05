import { useSmoothScroll } from './hooks/useSmoothScroll'
import { Navigation } from './sections/Navigation'
import { Hero } from './sections/Hero'
import { Problems } from './sections/Problems'
import { DesignPrinciples } from './sections/DesignPrinciples'
import { DevelopmentJourney } from './sections/DevelopmentJourney'
import { ExperimentHub } from './sections/ExperimentHub'
import { Solutions } from './sections/Solutions'
import { Reflections } from './sections/Reflections'
import { Footer } from './sections/Footer'

function App() {
  useSmoothScroll()

  return (
    <div className="min-h-screen text-[#23223B] bg-[linear-gradient(180deg,#F6EEFF_0%,#FFFFFF_45%)]">
      <Navigation />
      <Hero />
      <Problems />
      <DesignPrinciples />
      <DevelopmentJourney />
      <ExperimentHub />
      <Solutions />
      <Reflections />
      <Footer />
    </div>
  )
}

export default App
