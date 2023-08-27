import PropTypes from 'prop-types';

const UniCard = (props) => {
  return (
    <div className="max-w-sm mx-8 p-4 mt-4 rounded-md shadow-md bg-white flex flex-col justify-between hover:shadow-lg">
      <img src={props.imageSrc} alt={props.title} className="w-full max-h-40 object-contain rounded-md mb-2" />
      <div className="text-center">
        <h2 className="text-lg font-semibold mb-1">{props.title}</h2>
      </div>
    </div>
  );
}

UniCard.propTypes = {
    imageSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  
export default UniCard;
