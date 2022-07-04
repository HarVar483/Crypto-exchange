import { lazy, Suspense } from "react";
import "./App.css";

// import Dashboard from "./pages/Dashboard/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { getByLabelText } from "@testing-library/react";
import AlertNotification from "./pages/AlertNotification/AlertNotification";
import CmsIndex from "./pages/CMS/CmsIndex";
import Privacy from "../src/pages/CMS/Privacy";
import EditTerm from "../src/pages/CMS/EditTerm";
import Help from "../src/pages/HelpCenter/Help";
import EditPrivacy from "../src/pages/CMS/EditPrivacy";
const EditProfile = lazy(() => import("./pages/Auth/EditProfile"));

const Dashboard = lazy(() => import("./pages/Dashboard/index"));
const Sidebar = lazy(() => import("../src/commons/Sidebar/index"));
const Header = lazy(() => import("../src/commons/Header/index"));
const Footer = lazy(() => import("../src/commons/Footer"));
const Customer = lazy(() => import("../src/pages/Customer/index"));

const Login = lazy(() => import("../src/pages/Auth/Login"));
const Forget = lazy(() => import("../src/pages/Auth/Forget"));
const Kyc = lazy(() => import("../src/pages/KYC/index"));
const Coin = lazy(() => import("../src/pages/CoinPair/index"));
const AddCoin = lazy(() => import("../src/pages/CoinPair/AddCoin"));
const CustomerInfo = lazy(() => import("../src/pages/Customer/CustomerInfo"));
const EditCustomer = lazy(() =>
  import("../src/pages/Customer/EditCustomerInfo")
);
const Fee = lazy(() => import("../src/pages/Fees/index"));
const AddFee = lazy(() => import("../src/pages/Fees/AddFee"));
const Report = lazy(() => import("../src/pages/ReportsExport/index"));
const Transaction = lazy(() => import("../src/pages/Transaction/index"));
const Ticket = lazy(() => import("../src/pages/Tickets/index"));
const Cms = lazy(() => import("../src/pages/CMS/CmsIndex"));
const editTerm = lazy(() => import("../src/pages/CMS/EditTerm"));
const editPrivacy = lazy(() => import("../src/pages/CMS/EditPrivacy"));
const help = lazy(() => import("../src/pages/HelpCenter/Help"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback="LOading....">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/sidebar" element={<Sidebar />} />
            <Route path="/header" element={<Header />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/customer" element={<Customer />} />
            <Route path="/customerinfo" element={<CustomerInfo />} />
            <Route path="/editcustomer" element={<EditCustomer />} />
            <Route path="/forget" element={<Forget />} />
            <Route path="/kyc" element={<Kyc />} />
            <Route path="/coin" element={<Coin />} />
            <Route path="/addcoin" element={<AddCoin />} />
            <Route path="/fee" element={<Fee />} />
            <Route path="/addfee" element={<AddFee />} />
            <Route path="/alerts-notification" element={<AlertNotification />} />

            <Route path="/report" element={<Report />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/report" element={<Report />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route
              path="/alerts-notification"
              element={<AlertNotification />}
            />
            <Route path="/ticket" element={<Ticket />} />
            <Route path="/cms" element={<CmsIndex />} />
            <Route path="/editTerm" element={<EditTerm />} />
            <Route path="/editPrivacy" element={<EditPrivacy />} />
            <Route path="/help" element={<Help />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
} 

export default App;
