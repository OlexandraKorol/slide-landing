import Button from "../../ui/Button/Button";
import avatar from "../../../assets/testimonial_avatar.png";
import "./Testimonial.css";

export const Testimonial = () => {
  return (
    <section className="testimonial">
      <p className="testimonial__title">Move ideas forward. <br /> Docs, meet Discussions.</p>
      <p className="testimonial__subtitle">Decisions don't work on their own, and neither does your team. In Slite, decision-making and async discussion comes built-in, inside Docs. Say goodbye to scattered conversations and endless Slack threads.</p>

      <Button variant="primary" className="testimonial__button">I want that too</Button>


      <div className="testimonial__content">
        <div className="testimonial__line testimonial__line--top" />
        <blockquote className="testimonial__quote">
          <span>
            <em>
              Slite let us bring the two most important communication bits in the same place: documentation &amp; decision-making. The connection between docs and discussions makes decision-making more efficient, transparent &amp; contextualized.
            </em>
          </span>
        </blockquote>
        <div className="testimonial__author-block">
          <div>
            <div className="testimonial__author-name">SEBASTIEN GENDREAU</div>
            <div className="testimonial__author-role">CPO OF AGORAPULSE</div>
          </div>
        </div>
        <img className="testimonial__avatar" src={avatar} alt="Sébastien Gendreau" />
        <div className="testimonial__line testimonial__line--bottom" />
      </div>
    </section>
  );
}