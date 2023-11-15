import SocialNetworkContainer from "./SocialNetworkContainer";
import InformationContainer from "./InformationContainer";

import Avatar from "../img/foto.png";

import "../styles/components/sidebar.sass";

const Sidebar = () => {
return (
    <aside id="sidebar">
        <img src={Avatar} alt="Matheus Battisti" />
        <p className="title">Desenvolvedor</p>
        <SocialNetworkContainer />
        <InformationContainer />
        <div>
        <a href="https://vite-portfolio-beta.vercel.app" className="btn">
            Voltar
            </a>
            <a href="../src/curriculo.pdf" className="btn back">
            Download currículo
            </a>
        </div>
    </aside>
    );
};

export default Sidebar;
