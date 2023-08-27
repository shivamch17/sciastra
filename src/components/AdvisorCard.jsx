import PropTypes from 'prop-types';

const AdvisorCard = (props) => {
  return (
    <div className="max-w-xs rounded-3xl shadow-2xl mx-8 p-4 flex flex-col justify-between">
      <div className="rounded-full overflow-hidden mx-auto mb-2 flex-shrink-0">
        <img
          src={props.imageSrc}
          alt={props.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center flex-grow">
        <h2 className="text-lg font-semibold mb-1">{props.title}</h2>
        <p className="text-sm text-gray-600 overflow-hidden">{props.description}</p>
        <a href="mailto:your.email@example.com">
        <button className="nav-contact text-white p-2 mt-4 rounded-full">
        Message him now
        </button>
        </a>
      </div>
    </div>
  );
}

AdvisorCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default AdvisorCard;
