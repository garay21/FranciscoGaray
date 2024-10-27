import '../styles/projects.css'
import CardItem from "../components/hooks/CardItem";
import { ProjectsData as pd } from "../components/constants/ConstProjects.js";

const Projects = ()=>{
    return (
        <section className="projects-st">
            <h4 className="text-center m-2">Projectos Publicos.</h4>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Desarrollador Video-Juegos.
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">                            
                            {
                                pd.gameProject.map((item)=>{
                                    return <CardItem Title={item[0]} Img={item[1]} Ref={item[2]} Details={item[3]} Tecno={item[4]}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Desarrollador Web .
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {
                                pd.webProjects.map((item)=>{
                                    return <CardItem Title={item[0]} Img={item[1]} Ref={item[2]} Details={item[3]} Tecno={item[4]}/>
                                })
                            }
                        </div>
                    </div>
                </div>
                {/* <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Desarrollador Sql.
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {
                                pd.sqlProjects.map((item)=>{
                                    return <CardItem Title={item[0]} Img={item[1]} Ref={item[2]} Details={item[3]} Tecno={item[4]}/>
                                })
                            }
                        </div>
                    </div>
                </div> */}
                <div className="accordion-item">
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        Desarrollador Mobile.
                    </button>                    
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            {
                                pd.mobileProjects.map((item)=>{
                                    return <CardItem Title={item[0]} Img={item[1]} Ref={item[2]} Details={item[3]} Tecno={item[4]}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;