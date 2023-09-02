import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import style from "./Storys.module.css";

export default function Storys(props) {
  const { characters } = props;

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: Math.min(5, characters.length),
    slidesToScroll: 5,
  };

  return (
    <div className={style.story}>
      <Slider {...sliderSettings} className={style.slick}>
        {characters.map((character) => (
          <Link
            to={`/image/${character.id}`}
            key={character.id}
            className={style.link}
          >
            <img src={character.image} alt={`Character ${character.id}`} />
            <p>{character.name}</p>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
