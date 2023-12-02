import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export const UnderConstructionPage = () => {
  return (
    <>
      <Link className="link-label" to={"/" + useParams().backTo}>
        Click here to go back!
      </Link>
      <h1 className="header-35 mt-4"> Under Construction</h1>
      <p>Sorry! This functionality is still being developed!</p>
    </>
  );
};
