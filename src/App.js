import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import HomepageLight from "./pages/HomepageLight";
import HomepageDark from "./pages/HomepageDark";
import Homepage2 from "./pages/Homepage2";
import Homepage2Light from "./pages/Homepage2Light";
import Homepage2Dark from "./pages/Homepage2Dark";
import Homepage3 from "./pages/Homepage3";
import Homepage3Light from "./pages/Homepage3Light";
import Homepage3Dark from "./pages/Homepage3Dark";
import Bloglist from "./pages/Bloglist";
import BlogDetails from "./pages/BlogDetails";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}>
         
        </Route>
        <Route path="/dark" element={ <HomepageDark />}>
         
        </Route>
        <Route path="/light" element={<HomepageLight />}>
          
        </Route>
        <Route path="/index-2" element={<Homepage2 />}>
          
        </Route>
        <Route path="/index-2-light" element={ <Homepage2Light />}>
         
        </Route>
        <Route path="/index-2-dark" element={<Homepage2Dark />}>
          
        </Route>
        <Route path="/index-3" element={<Homepage3 />}>
          
        </Route>
        <Route path="/index-3-light" element={<Homepage3Light />}>
          
        </Route>
        <Route path="/index-3-dark" element={ <Homepage3Dark />}>
         
        </Route>
        <Route path="/blogs" component={Bloglist} exact />
        <Route path="/blogs/blog-details/:id/:title" component={BlogDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
