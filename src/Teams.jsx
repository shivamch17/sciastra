import AdvisorList from "./components/AdvisorList.jsx";
import Footer from "./components/Footer.jsx";
import MentorList from "./components/MentorList.jsx";
import { Navbar } from "./components/Navbar.jsx";
import UniCard from "./components/UniCard.jsx";
import { universities } from "./constants.js";
const Teams = () => {
      
  return (
    <>
    <Navbar/>
        <div className='heading-container mt-10'>
          <p className='heading'>
          Learn from scientists and research scholars from the top institutes in the world
          </p>
        </div>
        <div className='flex-auto justify-center flex-col '>
          <div className='grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-10 p-2 sm:mx-auto md:mx-auto'>
            {universities.map((university,index) => (
            <UniCard
              key={index}
              title={university.title}
              imageSrc={university.imageSrc}
            />
          ))}
          </div>
          <MentorList/>
          <AdvisorList/>
          <Footer/>
        </div>
    </>
  )
}

export default Teams;
