import Button from "../../ui/Button/Button";
import "./Price.css";

export const Price: React.FC = () => {
  return (
    <section className="price">
      <div className="price__content">

        <p className="price__title">Simple, transparent pricing</p>
        <p className="price__subtitle">No credit card required. Cancel anytime.</p>
        <Button className="price__button" variant="primary">Start for free</Button>
        <Button variant="secondary" isIcon={true}>Compare all plans</Button>
      </div>


        <div className="price__cards">
          <div className="price-card price-card--free">
            <p className="price-card__title">Free</p>
            <div className="price-card__plan">Plan</div>
            <div className="price-card__divider" />
            <div className="price-card__price">
              <span className="price-card__currency">$</span>
              <span className="price-card__amount">0</span>
              <span className="price-card__period">/month</span>
            </div>
            <div className="price-card__desc">Up to 50 docs</div>
          </div>
          <div className="price-card price-card--standard">
            <h3 className="price-card__title">Standard</h3>
            <div className="price-card__plan">Plan</div>
            <div className="price-card__divider" />
            <div className="price-card__price">
              <span className="price-card__currency">$</span>
              <span className="price-card__amount">6</span>
              <span className="price-card__cents">67</span>
              <span className="price-card__period">/month</span>
            </div>
            <div className="price-card__desc">per user</div>
          </div>
        </div>
    </section>
  );
}