import Hero from '../components/sections/Hero'
import ValueProps from '../components/sections/ValueProps'
import AboutSection from '../components/sections/AboutSection'
import ServicesPreview from '../components/sections/ServicesPreview'
import ClientsStrip from '../components/sections/ClientsStrip'
import InternationalSection from '../components/sections/InternationalSection'
import NewsSection from '../components/sections/NewsSection'
import CTABand from '../components/sections/CTABand'
import ContactSection from '../components/sections/ContactSection'

/* Sitio público como una sola página (landing). Cada bloque es una
   sección anclada para la navegación por scroll. */
export default function Landing() {
  return (
    <>
      <Hero />
      <ValueProps />
      <div id="nosotros" className="section-anchor"><AboutSection /></div>
      <div id="servicios" className="section-anchor"><ServicesPreview /></div>
      <div id="clientes" className="section-anchor"><ClientsStrip /></div>
      <div id="internacional" className="section-anchor"><InternationalSection /></div>
      <div id="novedades" className="section-anchor"><NewsSection /></div>
      <CTABand />
      <div id="contacto" className="section-anchor"><ContactSection /></div>
    </>
  )
}
