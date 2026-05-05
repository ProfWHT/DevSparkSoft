import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import TeamPage from './pages/TeamPage';
import ContactPage from './pages/ContactPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import AdminLayout from './components/AdminLayout';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AdminTeamPage from './pages/AdminTeamPage';
import AdminBlogGeneratorPage from './pages/AdminBlogGeneratorPage';
import AdminImageGeneratorPage from './pages/AdminImageGeneratorPage';
import AboutCeoPage from './pages/AboutCeoPage';
import AdminBlogEditorPage from './pages/AdminBlogEditorPage';
import AdminBlogSeederPage from './pages/AdminBlogSeederPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-brand-dark text-brand-light font-sans antialiased">
        <Header />
        <main>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/about-ceo" element={<AboutCeoPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-and-conditions" element={<TermsPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboardPage />} />
              <Route path="team" element={<AdminTeamPage />} />
              <Route path="blog-generator" element={<AdminBlogGeneratorPage />} />
              <Route path="image-generator" element={<AdminImageGeneratorPage />} />
              <Route path="blog-editor" element={<AdminBlogEditorPage />} />
              <Route path="blog-seeder" element={<AdminBlogSeederPage />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;