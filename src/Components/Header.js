import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title }) => {
  const buttonClick = () => {
    console.log("clickButton");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button text="Add" buttonClicked={buttonClick} />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
}; // To make strict requirement for props
export default Header;
