const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Formações</h2>
            <div className="project-grid">
            <p className="project-card">
                <p>
                    <h4>Ensino médio:</h4>
                    ETEC Vila Formosa<br></br>
                    <h4>Curso:</h4>
                    Análise e Desenvolvimento de Sistemas<br></br>
                    <h4>Data:</h4>
                    2020-2022<br></br>
                </p>
            </p>
            <p className="project-card">
                <p>
                    <h4>Ensino superior:</h4>
                    Universidade Cruzeiro do Sul<br></br>
                    <h4>Curso:</h4>
                    Ciência da Computação<br></br>
                    <h4>Data:</h4>
                    2023-2026<br></br>
                </p>
            </p>
            </div>
        </section>
    );
};

import "../styles/components/ProjectsContainer.sass";
export default ProjectsContainer;
