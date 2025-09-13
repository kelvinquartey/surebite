import { useNavigate, useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

const ScrollNavLink = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: to } });
    } else {
      scroller.scrollTo(to, {
        duration: 400,
        smooth: true,
        offset: -80,
      });
    }
  };

  return (
    <a href={`/#${to}`} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default ScrollNavLink;
