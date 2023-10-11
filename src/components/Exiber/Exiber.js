function Exiber({img, nome, ano }){
	return (
		<div className="div-Exiber">
			<img src={img} className="img-exibe"  alt={nome} />
			<h3>{nome}</h3>
			<p>{ano}</p>
		</div>
	);	
}
export default Exiber;
