import '../styles/education.css'

const Education = ()=>{
    return (
        <section className="education-st">
            <h3 className="text-center">Educación</h3>
            <div className="table-responsive-lg">            
            <table className="table table-secondary table-responsive-mb">
                <thead>
                    <tr>
                        <th scope="col">Grado</th>
                        <th scope="col">Institución</th>
                        <th scope="col">Años</th>
                        <th scope="col">Ubicación</th>
                        <th scope="col">Descripción</th>
                        <th scope="col">Estado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td scope="row">Tecnico Contador</td>
                        <td>Instituto Superior de Comercio</td>
                        <td>2009 - 2013</td>
                        <td>Coquimbo, Chile</td>
                        <td>Enseñanza media completa titulado de tecnico contador.</td>
                        <td>Egresado</td>
                    </tr>
                    <tr>
                        <td scope="row">Diseño y Desarrollo de Video-Juegos</td>
                        <td>Universidad Sek</td>
                        <td>2018 - 2019</td>
                        <td>Santiago, Chile</td>
                        <td>Programacion orientada a objetos y ciencias de la ludología.</td>
                        <td>Suspendida</td>
                    </tr>
                    <tr>
                        <td scope="row">Analista programador computacional</td>
                        <td>Instituto Profecional de Chile</td>
                        <td>2021 - 2023</td>
                        <td>Coquimbo, Chile</td>
                        <td>Técnicas de programación, gestión de datos, ciberseguridad, especialización en el desarrollo avanzado de aplicaciones web,
                            Administracion de base de datos Habilidades de pensamiento logico.</td>
                        <td>Egresado</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </section>
    );
}

export default Education;