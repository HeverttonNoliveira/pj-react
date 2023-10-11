//icons
// import { LiaAngleLeftSolid } from "react-icons/lia";
// import { LiaAngleRightSolid } from "react-icons/lia";

//Importes
import SeriesAnimes from "../SeriesAnimes/SeriesAnimes";

//css
import "./main.css";

//Séries
import film1 from "../img/filme1.jpg";
import film2 from "../img/filme2.jpg";
import film3 from "../img/filme3.jpg";
import film4 from "../img/filme4.jpg";
import film5 from "../img/filme5.jpg";
import film6 from "../img/filme6.jpg";

//Animes
import ani1 from "../img/anime1.jpg";
import ani2 from "../img/anime2.jpg";
import ani3 from "../img/anime3.jpg";
import ani4 from "../img/anime4.jpg";
import ani5 from "../img/anime5.jpg";
import ani6 from "../img/anime6.jpg";

function Main() {
	const Serie = [
		{ img: film1, nome: "Gigante de Aço", ano: 2010 },
		{ img: film2, nome: "Brookly 99", ano: 2017 },
		{ img: film3, nome: "The Boys", ano: 2018 },
		{ img: film4, nome: "Super Natural", ano: 2010 },
		{ img: film5, nome: "The Witcher", ano: 2020 },
		{ img: film6, nome: "Vinkings", ano: 2015 },
	];

	const Anime = [
		{ img: ani1, nome: "One Punch", ano: 2010 },
		{ img: ani2, nome: "Full Metal", ano: 2017 },
		{ img: ani3, nome: "Hellsig", ano: 2018 },
		{ img: ani4, nome: "Dragon Ball Classico", ano: 2010 },
		{ img: ani5, nome: "Fate", ano: 2020 },
		{ img: ani6, nome: "One Piece", ano: 2015 },
	];

	return (
		<main>
			<div className="serie">
				<SeriesAnimes title={"Series e Filmes"} list={Serie}/>
			</div>
			<div className="anime">
				<SeriesAnimes title={"Animes"} list={Anime}/>
			</div>
		</main>
	);
}
export default Main;
