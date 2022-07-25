let carrito = function (){

    let items = [];

    function incrementarCantidad(producto) {

        items = items.map(function(prod){

            if(prod.producto.id == producto.id) {
                
                return {
                    producto: prod.producto,
                    cantidad: prod.cantidad + 1
                }
            }
            else
                return prod;
        });
    }

    function agregarNuevoProd(producto) {

        items.push ({
            producto: producto,
            cantidad: 1
        });
    }

    function quitarProducto(producto) {

        items = items.filter(function (prod) {
            return prod.producto.id !== producto.id
        });
    }

    function reporteTotal() {

        let precioTotal = items.reduce(function (precio, prod) {

            return precio + (prod.producto.precio * prod.cantidad)
        }, 0);

        let detalle = items.map(function (prod){
            return {
                nombre: prod.producto.nombre,
                precioUnitario: prod.producto.precio,
                cantidad: prod.cantidad,
                total: prod.cantidad * prod.producto.precio
            }
        });

        return {
            total: precioTotal,
            detalle: detalle
        };
    }

    return {
        incrementar: incrementar,
        agregar: agregar,
        quitar: quitar,
        reporte: reporte
    }
    
}
