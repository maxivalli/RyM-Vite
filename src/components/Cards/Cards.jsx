import { Link } from "react-router-dom";
import Card from "../Card/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters, onClose } = props;

  const sliderSettings = {
    dots: true,
    infinite: false, 
    speed: 500,
    slidesToShow: Math.min(6, characters.length), 
    slidesToScroll: 6,
  };

  return (
    <>
    <div className={style.story}>
      <Slider {...sliderSettings} className={style.slide}>
        {characters.map((character) => (
          <Link to={`/image/${character.id}`} key={character.id}>
            <img src={character.image} alt={`Character ${character.id}`}/>
          </Link>
        ))}
        </Slider>
      </div>
      <div className={style.mainContainer}>
        {characters.map((character) => (
          <Card key={character.id} character={character} onClose={onClose} />
        ))}
      </div>
    </>
  );
}
