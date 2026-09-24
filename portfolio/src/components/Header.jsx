export default function Header() {
    return (
        <header className="site-header">
            <div className="page-container header-container">
                <a href="#inicio" className="header-logo">
                    João Abreu
                </a>

                <nav className="header-nav" aria-label="Navegação principal">
                    <a href="#sobre">Sobre</a>
                    <a href="#projetos">Projetos</a>
                    <a href="#experiencias">Experiências</a>
                    <a href="#contato">Contato</a>
                </nav>
            </div>
        </header>
    );
}