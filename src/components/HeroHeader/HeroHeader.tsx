import voucherLogo from "../../assets/voucher-logo.png";
import "./HeroHeader.css";

function HeroHeader() {
  return (
    <header className="hero-header" aria-labelledby="hero-slogan">
      <div className="hero-header__glow" aria-hidden="true" />

      <div className="hero-header__content">
        <img
          className="hero-header__logo"
          src={voucherLogo}
          alt="Voucher Barbearia"
        />

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
