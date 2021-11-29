import { Link } from "react-router-dom";
import existNot from "../../img/rick-gif.gif";
import { BsFillArrowUpLeftCircleFill } from "react-icons/bs";


const NoCharacterDetail = () => {
  return (
    <>

        <Link to="/" className="detail__back">
          <p className="detail__back">
            <BsFillArrowUpLeftCircleFill />
            Go back
          </p>
        </Link>
      <div className="noCharacter">
        <p className="noCharacter__text">
         OOps!
        </p>
        <img className="noCharacter__img" src={existNot} alt="error 404" />
      </div>
    </>
  );
};

export default NoCharacterDetail;