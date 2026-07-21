import "./HeroHeader.css";

const logoModules = import.meta.glob<string>("../../assets/*.{png,jpg,jpeg,JPG,JPEG}", {
  eager: true,
  import: "default",
  query: "?url",
});

const brandLogo = Object.values(logoModules)[0];

function HeroHeader() {
  return (
    <header className="hero-header" aria-labelledby="hero-slogan">
      <div className="hero-header__glow" aria-hidden="true" />

      <div className="hero-header__content">
        {brandLogo ? (
          <img
            className="hero-header__logo"
            src={brandLogo}
            alt="Lucendy Style"
          />
        ) : (
          <div
            className="hero-header__logo hero-header__logo--missing"
            role="img"
            aria-label="Logo da Lucendy Style ainda não adicionada"
          />
        )}

        <p className="hero-header__slogan" id="hero-slogan">
          Seu próximo visual começa aqui.
        </p>

        <div className="hero-header__explore" aria-hidden="true">
          <span>Explore a barbearia</span>
          <span className="hero-header__arrow">⌄</span>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
