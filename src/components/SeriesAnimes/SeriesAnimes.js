import Exiber from "../Exiber/Exiber";
import "./seriesAnimes.css"

function SeriesAnimes({ title, list}) {
	return (
		<div>
			<div className="h1-boder">
			<h2 >{title}</h2>
			</div>
			<div className="card">
			<div className="div-seriesAnimes">
				{list.map((listMap) => (
					<Exiber img={listMap.img} nome={listMap.nome} ano={listMap.ano} />
				))}
			</div>
			</div>
		</div>
	);
}
export default SeriesAnimes;
