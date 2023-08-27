import PropTypes from 'prop-types';

const MentorCard = (props) => {
  return (
    <div className="max-w-sm mx-8 p-4 flex flex-col justify-between">
      <div className="rounded-full overflow-hidden h-28 w-28 mx-auto mb-2 flex-shrink-0">
        <img
          src={props.imageSrc}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center flex-grow">
        <h2 className="text-lg font-semibold mb-1">{props.title}</h2>
        <p className="text-sm text-gray-600 overflow-hidden h12">{props.description}</p>
      </div>
    </div>
  );
}

MentorCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MentorCard;
