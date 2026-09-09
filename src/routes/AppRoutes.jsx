import { Route, Routes } from 'react-router-dom'
import { AboutPage, ApiIndex, CareerPage, CatalogPage, ContactPage, IndustryIndex, NotFound, ServiceIndex, SoftwareIndex } from '../pages/Pages.jsx'
import HomePageOverhaul from '../pages/HomePage.jsx'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePageOverhaul />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/career" element={<CareerPage />} />
      <Route path="/careers" element={<CareerPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/software" element={<SoftwareIndex />} />
      <Route path="/software/:slug" element={<CatalogPage type="software" />} />
      <Route path="/api" element={<ApiIndex />} />
      <Route path="/api/:slug" element={<CatalogPage type="api" />} />
      <Route path="/services" element={<ServiceIndex />} />
      <Route path="/services/:slug" element={<CatalogPage type="services" />} />
      <Route path="/industries" element={<IndustryIndex />} />
      <Route path="/industries/:slug" element={<CatalogPage type="industries" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes