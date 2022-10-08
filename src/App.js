import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/navbar.component";
import HomePage from "./pages/home/home.page";
import GetQuotesPage1 from "./components/get-a-qoute/GetQuotesPage1";
import LoadDetails from "./components/get-a-qoute/LoadDetails";
import CarrierReply from "./components/get-a-qoute/CarrierReply";
import AdditionalInfo from "./components/get-a-qoute/Additionalnfo";
import Review from "./components/get-a-qoute/Review";
import Pdf7 from "./pages/home/Pdf7";
import Pdf8 from "./pages/home/Pdf8";
import Pdf1 from "./pages/home/Pdf1";
import Pdf2 from "./pages/home/Pdf2";
import Pdf3 from "./pages/home/Pdf3";
import Pdf4 from "./pages/home/Pdf4";
import Pdf5 from "./pages/home/Pdf5";
import Pdf6 from "./pages/home/Pdf6";
import Services from "./pages/home/services.page";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/services" index element={<Services />} />
          <Route path="/getaqoute" element={<GetQuotesPage1 />} />
          <Route path="/loaddetails" element={<LoadDetails />} />
          <Route path="/carrierReply" element={<CarrierReply />} />
          <Route path="/additionalInfo" element={<AdditionalInfo />} />
          <Route path="/review" element={<Review />} />
          <Route path="/pdf7" element={<Pdf7 />} />
          <Route path="/pdf1" element={<Pdf1 />} />
          <Route path="/pdf2" element={<Pdf2 />} />
          <Route path="/pdf3" element={<Pdf3 />} />
          <Route path="/pdf4" element={<Pdf4 />} />
          <Route path="/pdf5" element={<Pdf5 />} />
          <Route path="/pdf6" element={<Pdf6 />} />
          <Route path="/pdf8" element={<Pdf8 />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
