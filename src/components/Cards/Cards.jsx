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
    slidesToShow: Math.min(5, characters.length), 
    slidesToScroll: 5,
  };

  return (
    <>
    <div className={style.story}>
      <Slider {...sliderSettings} className={style.slick}>
        {characters.map((character) => (
          <Link to={`/image/${character.id}`} key={character.id} className={style.link}>
            <img src={character.image} alt={`Character ${character.id}`}/>
            <p>{character.name}</p>
          </Link>
        ))}
        </Slider>
      </div>
      <div className={style.container}>
        {characters.map((character) => (
          <Card key={character.id} character={character} onClose={onClose} />
        ))}
      </div>
    </>
  );
}
