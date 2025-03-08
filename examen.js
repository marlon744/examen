
const productos = [
    {nombre: "Producto 1", imagen: "url_imagen1.jpg", precio: "$10", descripcion: "Descripción del Producto 1", categoria: "Categoría 1"},
    {nombre: "Producto 2", imagen: "url_imagen2.jpg", precio: "$20", descripcion: "Descripción del Producto 2", categoria: "Categoría 2"},
    {nombre: "Producto 3", imagen: "url_imagen3.jpg", precio: "$30", descripcion: "Descripción del Producto 3", categoria: "Categoría 1"},
    {nombre: "Producto 4", imagen: "url_imagen4.jpg", precio: "$40", descripcion: "Descripción del Producto 4", categoria: "Categoría 3"},
    {nombre: "Producto 5", imagen: "url_imagen5.jpg", precio: "$50", descripcion: "Descripción del Producto 5", categoria: "Categoría 2"},
];


function renderizarProductos() {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h2>${producto.nombre}</h2>
            <p>${producto.precio}</p>
            <button onclick="verMas('${producto.descripcion}')">Ver más</button>
        `;
        contenedor.appendChild(div);
    });
}


function verMas(descripcion) {
    alert(descripcion);
}


function filtrarProductos() {
    const categoriaSeleccionada = document.getElementById('filtro-categoria').value;
    const productosFiltrados = productos.filter(producto => producto.categoria === categoriaSeleccionada || categoriaSeleccionada === "Todas");
    renderizarProductos(productosFiltrados);
}


document.getElementById('filtro-categoria').addEventListener('change', filtrarProductos);


document.addEventListener('DOMContentLoaded', renderizarProductos);
