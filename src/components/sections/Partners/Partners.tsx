import { PartnerCard } from "../../ui/PartnerCard/PartnerCard";
import '../Partners/Partners.css';
import PartnerData from '../../../utils/partners_data.json'

import partner1 from "../../../assets/partners/partner1.png";
import partner2 from "../../../assets/partners/partner2.png";
import partner3 from "../../../assets/partners/partner3.png";
import partner4 from "../../../assets/partners/partner4.png";
import partner5 from "../../../assets/partners/partner5.png";
import partner6 from "../../../assets/partners/partner6.png";
import partner7 from "../../../assets/partners/partner7.png";
import partner8 from "../../../assets/partners/partner8.png";
import Button from "../../ui/Button/Button";

const images: Record<string, string> = {
  "partner1.png": partner1,
  "partner2.png": partner2,
  "partner3.png": partner3,
  "partner4.png": partner4,
  "partner5.png": partner5,
  "partner6.png": partner6,
  "partner7.png": partner7,
  "partner8.png": partner8,
};

export const Partners: React.FC = () => {
  return (
    <section className="partners">

      <p className="partners__title">Trusted by over 10,000 companies</p>


      <div className="partners__grid">
        {PartnerData.map((partner, index) => (
          <PartnerCard
            key={index}
            quote={partner.quote}
            name={partner.name}
            position={partner.position}
            employees={partner.team_size}
            imageSrc={images[partner.image]}
          />
        ))}
        <div className="partners__readMore">
          <p >
            Read more <br />
            <span className="hand-underline">reviews → </span>
          </p>
        </div>
      </div>


      <p className="partners__title">Trusted by over 10,000 companies</p>

      <p className="partners__actionText">
        Create space for your team to do their best work.
      </p>
      <Button className="partners__actionButton">Sign me up</Button>
    </section>
  );
}