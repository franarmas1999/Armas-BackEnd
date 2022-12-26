//DESAFIO PRIMER ENTREGABLE

const  fs  =  requerir ( "fs" ) ;

const  writeFile  =  ( ruta ,  productos )  =>
	fs . promesas _ writeFile ( ruta ,  JSON . stringify ( {  productos : productos  } ) ) ;

const  readFile  =  asíncrono  ( ruta )  =>  {
	const  asyncGetProducts  =  await  fs . promesas _ leerArchivo ( ruta ) ;
	const  parseResult  =  JSON . analizar ( asyncGetProducts ) ;

	volver  parseResult ;
} ;

clase  ProductManager  {
	constructor ( ruta )  {
		esto _ productos  =  [ ] ;
		esto _ ruta  =  ruta ;
	}

	inicializar  =  asíncrono  ( )  =>  {
		const  existeArchivo  =  fs . existeSync ( esta.ruta ) ; _ _

		si  ( archivoexiste )  {
			consola _ log ( "El archivo ya existia!" ) ;
			const  { productos }  =  esperar  readFile ( esta ruta ) ; _
			esto _ productos  =  productos ;
		}  más  {
			await  writeFile ( este.ruta , este.productos ) ; _ _ _ _ 
			consola _ log ( "El archivo se creo exitosamente!" ) ;
		}
	} ;

	getProductos  =  asíncrono  ( )  =>  {
		const  fileData  =  await  readFile ( este .ruta ) ; _
		devolver  datos de archivo ;
	} ;

	addProduct  =  async  ( { título , descripción , precio , miniatura , código , existencias } )  =>  {
		// Aqui solo valido por el titulo o por el codigo, no hay problema que se repita cualquiera de los otros campos
		const  productoEncontrado  =  esto . productos _ encontrar (
			( producto )  =>  producto . titulo  ===  titulo  ||  producto _ código  ===  código
		) ;

		if  ( producto encontrado )  {
			consola _ registro (
				`Error ya existe un producto con ese título ${ title } o código ${ code } `
			) ;
		}  más  {
			const  id  =  esto . productos _ longitud  +  1 ;
			esto _ productos _ empujar ( {
				identificación ,
				titulo ,
				descripción ,
				precio ,
				miniatura ,
				código ,
				existencias ,
			} ) ;
			await  writeFile ( este.ruta , este.productos ) ; _ _ _ _ 
			consola _ log ( "Producto creado exitosamente" ) ;
		}
	} ;

	getProductById  =  ( id )  =>  {
		const  productoEncontrado  =  esto . productos _ encontrar (
			( producto )  =>  producto . identificación  ===  identificación
		) ;

		if  ( producto encontrado )  {
			devolver  producto encontrado ;
		}  más  {
			consola _ log ( "No se encuentra un producto con ese id" ) ;
			devolver  nulo ;
		}
	} ;

	actualizarProducto  =  asíncrono  ( id ,  nuevoProducto )  =>  {
		const  findIndexProduct  =  esto . productos _ buscarIndice (
			( producto )  =>  producto . identificación  ===  identificación
		) ;

		if  ( buscarProductoÍndice  !==  - 1 )  {
			const  id  =  esto . productos [ buscarProductoÍndice ] . identificación ;

			esto _ productos [ findIndexProduct ]  =  {
				identificación ,
				... nuevoProducto ,
			} ;
			await  writeFile ( este.ruta , este.productos ) ; _ _ _ _ 
			consola _ log ( "Actualizado correctamente" ) ;
		}  más  {
			consola _ log ( "No se encuentra un producto con ese id" ) ;
		}
	} ;

	eliminarProducto  =  asíncrono  ( id )  =>  {
		const  findIndexProduct  =  esto . productos _ buscarIndice (
			( producto )  =>  producto . identificación  ===  identificación
		) ;

		if  ( buscarProductoÍndice  !==  - 1 )  {
			const  nuevosProductos  =  esto . productos _ filtro (
				( producto )  =>  producto . identificación  !==  identificación
			) ;
			await  writeFile ( este .ruta , nuevosProductos ) ; _ 
			consola _ log ( "Eliminado correctamente" ) ;
		}  más  {
			consola _ log ( "No se encuentra un producto con ese id" ) ;
		}
	} ;
}

 función  asíncrona principal ( )  {
	const  productManger  =  new  ProductManager ( "./data.json" ) ;
	esperar  productManger . inicializar ( ) ;

	let  products  =  await  productManger . obtenerProductos ( ) ;
	consola _ registro ( productos ) ;

	const  nuevoProducto  =  {
		título : "P1" ,
		descripción : "D1" ,
		precio : "P1" ,
		miniatura : "T1" ,
		código : "C1" ,
		existencias : "S1" ,
	} ;

	esperar  productManger . agregarProducto ( nuevoProducto ) ;

	productos  =  espera  productManger . obtenerProductos ( ) ;
	consola _ registro ( productos ) ;

	const producto a  actualizar  =  {
		título : "P0" ,
		descripción : "D0" ,
		precio : "P1" ,
		miniatura : "T1" ,
		código : "C1" ,
		existencias : "S1" ,
	} ;

	esperar  productManger . actualizarProducto ( 1 ,  productoaActualizar ) ;

	productos  =  espera  productManger . obtenerProductos ( ) ;
	consola _ registro ( productos ) ;

	esperar  productManger . eliminarProducto ( 1 ) ;

	productos  =  espera  productManger . obtenerProductos ( ) ;
	consola _ registro ( productos ) ;
}

principal ( ) ;