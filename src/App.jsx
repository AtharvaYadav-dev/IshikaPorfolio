import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import AboutDoctor from './components/AboutDoctor';
import ServicesTreatments from './components/ServicesTreatments';
import ConditionsTreated from './components/ConditionsTreated';
import HowItWorks from './components/HowItWorks';
import ServiceAreas from './components/ServiceAreas';
import SymptomChecker from './components/SymptomChecker';
import Testimonials from './components/Testimonials';
import FaqSection from './components/FaqSection';
import AppointmentSection from './components/AppointmentSection';
import Footer from './components/Footer';
import AppointmentModal from './components/AppointmentModal';
import FloatingActions from './components/FloatingActions';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCondition, setSelectedCondition] = useState('');
  const [selectedArea, setSelectedArea] = useState('');
  const [selectedService, setSelectedService] = useState('');

  const handleOpenBooking = () => {
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  const handleSelectCondition = (condition) => {
    setSelectedCondition(condition);
  };

  const handleSelectArea = (area) => {
    setSelectedArea(area);
  };

  const handleSelectService = (service) => {
    setSelectedService(service);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 pb-20 lg:pb-0">
      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* Quick Credibility / Trust Stats Strip */}
        <TrustStats />

        {/* About Dr. Ishika Gupta Section */}
        <AboutDoctor onOpenBooking={handleOpenBooking} />

        {/* Core Services & Treatments Offered */}
        <ServicesTreatments 
          onSelectService={handleSelectService} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Conditions Treated Grid & Filter */}
        <ConditionsTreated 
          onSelectCondition={handleSelectCondition} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Step-by-Step How Home Visits Work (Physica inspiration) */}
        <HowItWorks onOpenBooking={handleOpenBooking} />

        {/* Specific Service Areas in Mumbai */}
        <ServiceAreas 
          onSelectArea={handleSelectArea} 
          onOpenBooking={handleOpenBooking} 
        />

        {/* Interactive Symptom & Treatment Advisor */}
        <SymptomChecker 
          onOpenBooking={handleOpenBooking} 
          onSelectCondition={handleSelectCondition} 
        />

        {/* Verified Patient Stories & Testimonials */}
        <Testimonials onOpenBooking={handleOpenBooking} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Comprehensive Booking & Inquiries Section */}
        <AppointmentSection 
          prefillCondition={selectedCondition} 
          prefillArea={selectedArea} 
          prefillService={selectedService} 
        />
      </main>

      {/* Footer & Contact Information */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Quick Action Floating Controls & Mobile Bottom Bar */}
      <FloatingActions onOpenBooking={handleOpenBooking} />

      {/* Fast Booking Modal */}
      <AppointmentModal 
        isOpen={modalOpen} 
        onClose={handleCloseBooking} 
        initialCondition={selectedCondition}
        initialArea={selectedArea}
        initialService={selectedService}
      />
    </div>
  );
}

export default App;
