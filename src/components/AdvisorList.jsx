import AdvisorCard from './AdvisorCard';
import { advisors } from '../constants';
const AdvisorList = () => {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold m-10 mt-20 heading1 p-4">Mentor & Advisor</h1>
      <div className="m-5 flex flex-wrap items-center justify-center sm:mx-auto">
        {advisors.map((person, index) => (
            <AdvisorCard
              key={index}
              title={person.name}
              imageSrc={`https://xsgames.co/randomusers/assets/avatars/${person.gender}/${parseInt(Math.random()*70)}.jpg`}
              description={person.description}
            />
        ))}
      </div>
    </div>
  );
}

export default AdvisorList;
