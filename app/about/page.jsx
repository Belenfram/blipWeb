//import Footer from "@/components/Footer";
//import Navbar from "@/components/Navbar";

/*export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="min-h-screen bg-gray-700 text-white mt-16 pb-16">
                <Navbar />
                <div className="text-2xl font-semibold mb-4">
                    Hola
                </div>
                
                <Footer />
            </div>
        </div>
    );
}*/

/*export default function About() {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="min-h-screen bg-gray-700 text-white mt-16 pb-16">
                <Navbar />
                    <main className="flex-1">
                        <div className="text-2xl font-semibold mb-4">
                            <h1>Hola</h1>
                        </div>
                    </main>
                <Footer />
            </div>
        </div>
    );
}*/

// Importamos los componentes necesarios
/*import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Definimos el componente de la página
export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
                <div className="container mx-auto py-8">
                    <h1 className="text-2xl font-bold mb-4">Acerca de Nosotros</h1>
                    <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus lacinia nunc vel mattis. Morbi at suscipit massa. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris id est non odio malesuada fermentum sed quis justo. Integer ut vehicula lacus.</p>
                    <p className="text-lg mb-4">Quisque lacinia lectus in nibh euismod, eget ullamcorper enim tincidunt. Curabitur bibendum vehicula metus, id vulputate libero tempus ac. Proin sed sapien vel sem iaculis luctus. Vivamus id fringilla quam. Nullam consequat nisi ac velit ultricies volutpat. Donec ullamcorper urna ut dui vestibulum, sed tristique dui scelerisque. Sed suscipit purus quis ligula malesuada, at efficitur risus molestie. Fusce auctor tortor at lectus feugiat, vitae fringilla magna varius. Donec blandit tincidunt leo, non eleifend eros vehicula ac.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}*/
'use client'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-gray-700 text-white mt-16 pb-16">
            <Navbar />
            <main className="flex-1 mt-10">
            <br></br>
                <h2 className="text-2xl font-bold text-center">Proyecto:</h2>
                <h1 className="text-3xl font-bold mb-7 text-center">BLIP :MONTACARGAS INTELIGENTE PARA ALMACENES</h1>
                
                <div className="container mx-auto px-32">
                    <p className="text-2xl font-bold">Problemática:</p>
                    <p className="text-lg mb-4 text-justify">La problemática clave en los almacenes es la necesidad de incrementar la eficiencia en la administración de inventarios y operaciones logísticas. Los métodos tradicionales pueden ser propensos a errores, consumir tiempo y recursos, y no siempre permiten una toma de decisiones informada.</p>
                </div>

                <div className="container mx-auto px-32">
                    <p className="text-2xl font-bold">Alcance:</p>
                    <p className="text-lg mb-4 text-justify">La implementación del sistema busca lograr eficiencia y precisión en la clasificación, mejorando la seguridad laboral y aumentando la eficiencia en la cadena de suministro. Además, generará empleo relacionado con la operación y mantenimiento de los robots.</p>
                </div>

                <div className="container mx-auto px-32">
                    <p className="text-2xl font-bold">Metodología:</p>
                    <p className="text-lg mb-4 text-justify">El proyecto se desarrolla bajo el marco de trabajo ágil SCRUM, una metodología flexible que permite desarrollar proyectos en contextos dinámicos y cambiantes, basándose en la entrega continua y regulares del producto final presentando entregables al término de cada periodo basándose en el cronograma de actividades.
                    Trabajando en base a Sprints de una duración de dos a tres semanas, generando una retroalimentación al final de dicho periodo para identificar los errores y éxitos, y aplicar dicha retroalimentación en el siguiente sprint.</p>
                    <ol className="text-lg text-justify">
                        <li>1. Definición del Producto:  Montacargas a escala inteligente que puede identificar y pesar objetos</li>
                        <li>2. Lista de Pendientes del Producto (Product Backlog): Capacidad de identificar objetos, la capacidad de pesar objetos, la comunicación de datos, la interfaz de usuario, etc.</li>
                        <li>3. Planificación del Sprint:  El equipo Scrum selecciona un conjunto de elementos del Product Backlog para trabajar durante un período de tiempo definido llamado Sprint. En la planificación del Sprint, se decide qué funcionalidades se implementarán primero y cómo se llevarán a cabo.</li>
                        <li>4. Sprint:  Durante el Sprint, que generalmente dura de 1 a 4 semanas, el equipo trabaja en desarrollar las funcionalidades seleccionadas. El trabajo se divide en tareas más pequeñas y se asigna a los miembros del equipo.</li>
                        <li>5. Reuniones Diarias (Daily Scrum): Todos los días durante el Sprint, el equipo se reúne brevemente para discutir el progreso, identificar cualquier obstáculo y planificar el trabajo para el próximo día.</li>
                        <li>6. Revisión del Sprint (Sprint Review): Al finalizar el Sprint, el equipo realiza una revisión para demostrar las funcionalidades completadas al Product Owner (el cliente o representante del cliente) y recopilar retroalimentación.</li>
                        <li>7. Retrospectiva del Sprint (Sprint Retrospective): También al finalizar el Sprint, el equipo realiza una retrospectiva para identificar qué salió bien, qué podría mejorarse y cómo pueden hacerse ajustes para el próximo Sprint.</li>
                        <li>8. Entrega del Producto (Incremento Potencialmente Entregable): Después de varios Sprints, el montacargas a escala inteligente se desarrolla de manera iterativa e incremental, con nuevas funcionalidades agregadas en cada Sprint. Al final del proyecto, se entrega un producto completo y funcional.</li>
                        <li>9. Iteración y Mejora Continua:  A lo largo del proyecto, el equipo continúa iterando sobre el Product Backlog, refinando y priorizando las características restantes según la retroalimentación del cliente y las lecciones aprendidas en cada Sprint.</li>
                    </ol>
                </div>
                <br></br>
                <p className="text-2xl font-bold text-center">Equipo de Trabajo:</p>
                <br></br>
                <div className="container mx-auto px-32">
                    <p className="text-lg text-center">SCRUM MASTER:</p>
                    <p className="text-lg mb-4 text-center">Vega Reséndiz Helen</p>
                    <br></br>
                    <p className="text-lg text-center">DEVELOPER:</p>
                    <p className="text-lg mb-4 text-center">Cabrera Valeriano Marco César</p>
                    <br></br>
                    <p className="text-lg text-center">DEVELOPER:</p>
                    <p className="text-lg mb-4 text-center">Huchim Onofre Yeimy Belen</p>
                    <br></br>
                    <p className="text-lg text-center">DEVELOPER:</p>
                    <p className="text-lg mb-4 text-center">Ordaz Ríos Diego</p>
                </div>
            </main>
            <Footer />
        </div>
    );
}



