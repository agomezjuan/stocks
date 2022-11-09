import Layout from "./components/Layout/Layout";
import Products from "./pages/Products";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
      </Route>
      <Route path="*" element={<h1>404: Not Found</h1>} />
    </Routes>
    // <div className="App">
    //   <Header />
    //   <Footer />
    // </div>
  );
}

export default App;
