import Hero from '../components/sections/Hero'
import ValueProps from '../components/sections/ValueProps'
import ServicesPreview from '../components/sections/ServicesPreview'
import ClientsStrip from '../components/sections/ClientsStrip'
import CTABand from '../components/sections/CTABand'

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProps />
      <ServicesPreview />
      <ClientsStrip />
      <CTABand />
    </>
  )
}
