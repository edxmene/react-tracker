import PropTypes from "prop-types";

const Button = ({ color, text, buttonClicked }) => {
  return (
    <button
      style={{ backgroundColor: color }}
      className="btn"
      onClick={buttonClicked}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
}; // To make strict requirement for props

export default Button;
