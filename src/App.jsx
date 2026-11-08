import { useState, useEffect } from "react";
import Encabezado from "./components/Encabezado.jsx";
import TarjetaProducto from "./components/TarjetaProducto.jsx";
import PanelCarrito from "./components/PanelCarrito.jsx";
import Aviso from "./components/Aviso.jsx";
import { productos } from "./data/productos.js";

function App() {
    // Estado de la tienda (ya viene listo)
    const [carrito, setCarrito] = useState([]);
    const [aviso, setAviso] = useState("");
    const [carritoAbierto, setCarritoAbierto] = useState(false);

    // Valores calculados a partir del carrito (ya vienen listos)
    const totalUnidades = carrito.reduce((suma, item) => suma + item.cantidad, 0);
    const totalPrecio = carrito.reduce((suma, item) => suma + item.precio * item.cantidad, 0);

    // Si el producto ya está en el carrito, le sube la cantidad; si no, lo agrega con cantidad 1
    function agregarAlCarrito(producto) {
        const yaEsta = carrito.some((item) => item.id === producto.id);

        if (yaEsta) {
            setCarrito(carrito.map((item) =>
                item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
            ));
        } else {
            setCarrito([...carrito, { ...producto, cantidad: 1 }]);
        }

        setAviso(`Agregaste ${producto.nombre} al carrito`);
    }

    function quitarDelCarrito(id) {
        setCarrito(carrito.filter((item) => item.id !== id));
    }

    // ────────────────────────────────────────────────────────────
    //  TICKET 1 · La pestaña cuenta el carrito
    //  Cuando el carrito cambie, la pestaña del navegador debe decir
    //  "(3) Mercado Orbital" (con el número real de unidades).
    //
    //  Pistas:
    //  - Usa useEffect (ya está importado arriba).
    //  - El texto de la pestaña se cambia con document.title = ...
    //  - El efecto lee totalUnidades: ¿qué va en el arreglo de dependencias?
    // ────────────────────────────────────────────────────────────

    // TODO Ticket 1


    // ────────────────────────────────────────────────────────────
    //  TICKET 2 · El aviso se borra solo
    //  Al agregar un producto aparece el aviso abajo, pero se queda
    //  pegado para siempre. Debe desaparecer a los 2,5 segundos.
    //
    //  Pistas:
    //  - Si aviso está vacío (""), el efecto no hace nada: return.
    //  - setTimeout(() => { ... }, 2500) espera y luego ejecuta.
    //    Dentro, vuelve a dejar el aviso vacío con setAviso("").
    //  - setTimeout devuelve un id. Guárdalo en una constante.
    //  - Cleanup: return () => clearTimeout(id);
    //  - El efecto debe correr cada vez que aviso cambia.
    // ────────────────────────────────────────────────────────────

    // TODO Ticket 2


    // ────────────────────────────────────────────────────────────
    //  TICKET 3 · Escape cierra el carrito
    //  Con el panel del carrito abierto, la tecla Escape lo cierra.
    //
    //  Pistas (es el mismo patrón de la teoría):
    //  - Dentro del efecto define function manejarTecla(e) { ... }
    //  - Si e.key === "Escape", llama a setCarritoAbierto(false).
    //  - window.addEventListener("keydown", manejarTecla);
    //  - Cleanup: return () => window.removeEventListener("keydown", manejarTecla);
    //  - El efecto no lee ningún estado: el arreglo va vacío.
    // ────────────────────────────────────────────────────────────

    // TODO Ticket 3


    // ────────────────────────────────────────────────────────────
    //  EXTRA (opcional) · La tecla C abre y cierra el carrito
    //  Si el carrito está cerrado, C lo abre; si está abierto, lo cierra.
    //  Ojo: este efecto sí lee carritoAbierto. Piensa qué va en el arreglo.
    // ────────────────────────────────────────────────────────────


    return (
        <div className="app">
            <Encabezado
                totalUnidades={totalUnidades}
                onAbrirCarrito={() => setCarritoAbierto(true)}
            />

            <section className="bienvenida">
                <img src="/img/nova-tienda.png" alt="Nova en el mostrador del Mercado Orbital" />
                <div>
                    <h2>Bienvenido al puesto de Nova</h2>
                    <p>Repuestos revisados uno por uno en el hangar. Si algo falla, Kuma lo arregla.</p>
                </div>
            </section>

            <main className="catalogo">
                {productos.map((producto) => (
                    <TarjetaProducto
                        key={producto.id}
                        producto={producto}
                        onAgregar={agregarAlCarrito}
                    />
                ))}
            </main>

            <Aviso mensaje={aviso} />

            {carritoAbierto && (
                <PanelCarrito
                    items={carrito}
                    total={totalPrecio}
                    onCerrar={() => setCarritoAbierto(false)}
                    onQuitar={quitarDelCarrito}
                />
            )}
        </div>
    );
}

export default App;
