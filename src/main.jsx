import { createRoot } from 'react-dom/client';
import Navbar from './Navbar.jsx';
import Content from './content.jsx';
import ThirdSection from "./third-section.jsx"
import FourthSection from './fourth-section.jsx';
import FifthSection from './fifth-section.jsx'; 
import SixthSection from './sixth-section.jsx'; 
import SevetnSection from './seventh-section.jsx'
import BottomSection  from './bottom-section.jsx';
createRoot(document.getElementById('root')).render(
  <>
    <Navbar />
    <Content />
    <ThirdSection/>
    <FourthSection/>
    <FifthSection/>
    <SixthSection/>
    <SevetnSection/>
    <BottomSection/>
  </>
);
