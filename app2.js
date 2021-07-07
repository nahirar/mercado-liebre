const listadoProductos = {
	vestidos: [
		'vestido broderie',
		'vestido towel',
		'vestido voile',
	],
	remeras: [
		'remera alforzas',
		'remera bordada',
		'musculosa',
	]
}
{
function recomendados (preferencia) {
	let preferencias = preferencia;
	let productos= listadoProductos[preferencias];
    console.log(productos)
	return 
    //res.render({productos: productos});
}
};
console.log(recomendados('vestidos'))
