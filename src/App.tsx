import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Loader from './Components/Loader';
import Stepper from './Components/Stepper/Stepper';
import StoneSelectorModal from './Components/Modal/StoneSelectorModal';
import StepOne from './Components/Steps/StepOne';
import StepTwo from './Components/Steps/StepTwo';
import StepThree from './Components/Steps/StepThree';

const Product_Details = lazy(() => import('./Pages/ProductPage/Product_Details'));
const NotFound = lazy(() => import('./Components/NotFound'));
const Home = lazy(() => import('./Pages/Home'));

const StepContent = ({
  activeStep,
  stoneSelected,
  onStoneSelect,
}: {
  activeStep: number;
  stoneSelected: string;
  onStoneSelect: (stone: string) => void;
}) => {
  switch (activeStep) {
    case 1:
      return <StepOne />;
    case 2:
      return <StepTwo selectedStone={stoneSelected} onStoneSelect={onStoneSelect} />;
    case 3:
      return <StepThree />;
    default:
      return null;
  }
};

const App: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [stoneSelected, setStoneSelected] = useState<string>("");

  const handleStepClick = (id: number) => {
    if (id === 1) {
      setActiveStep(1);
    } else if (id === 2) {
      if (activeStep === 1) {
        setShowModal(true);
      } else {
        toast.warn("Please complete Step 1 first.")
      }
    } else if (id === 3) {
      if (activeStep === 2 && stoneSelected) {
        setActiveStep(3);
      } else {
        toast.warn("Please complete Step 2 by selecting a stone.");
      }
    }
  };

  const handleStoneSelect = (stone: string) => {
    setStoneSelected(stone);
    setShowModal(false);
    setActiveStep(2);
  };

  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <div className="w-[90%] lg:w-[92%] mx-auto mt-6">
          {/* Stepper Global */}
          <Stepper
            activeStep={activeStep}
            stoneSelected={stoneSelected}
            onStepClick={handleStepClick}
          />

          {/* Render Steps only on homepage */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <StepContent
                    activeStep={activeStep}
                    stoneSelected={stoneSelected}
                    onStoneSelect={handleStoneSelect}
                  />
                </>
              }
            />
            <Route path="/*" element={<NotFound />} />
            <Route path="/products/:id" element={<Product_Details />} />
          </Routes>
        </div>

        {/* Modal for Step 2 */}
        {showModal && (
          <StoneSelectorModal
            onSelect={handleStoneSelect}
            onClose={() => setShowModal(false)}
          />
        )}
      </Suspense>
      <ToastContainer />
    </Router>
  );
};

export default App;
