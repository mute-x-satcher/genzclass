import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';

// Lazy load components
const Hero = lazy(() => import('./components/Hero'));
const AdmissionForm = lazy(() => import('./components/AdmissionForm'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ImageCarousel = lazy(() => import('./components/ImageCarousel'));
const Subjects = lazy(() => import('./components/Subjects'));
const Admin = lazy(() => import('./components/Admin'));

// Loading component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-600"></div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Testimonials />
                <ImageCarousel />
                <Subjects />
              </>
            } />
            <Route path="/admission" element={<AdmissionForm />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/admin" element={<Admin/>} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
