import MentorCard from './MentorCard';
import { mentors , subjects } from '..//constants';
import React from 'react';
const MentorList = () => {

  const cardsPerRow = 6;
  const mentorRows = [];
  for (let i = 0; i < mentors.length; i += cardsPerRow) {
    mentorRows.push(mentors.slice(i, i + cardsPerRow));
  }
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-semibold m-10 mt-20 heading1 p-4">Meet your mentors</h1>
      <div className="m-5">
        {mentorRows.map((row, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <h2 className="text-lg text-left my-4 font-semibold sub p-4">{subjects[rowIndex]}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4">
              {row.map((person, index) => (
                <MentorCard
                  key={index}
                  title={person.name}
                  imageSrc={`https://xsgames.co/randomusers/assets/avatars/${person.gender}/${parseInt(Math.random()*70)}.jpg`}
                  description={person.description}
                />
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default MentorList;
