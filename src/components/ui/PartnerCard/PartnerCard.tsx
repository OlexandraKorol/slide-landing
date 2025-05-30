import '../PartnerCard/PartnerCard.css';


interface PartnerCardProps {
  quote: string;
  name: string;
  position: string;
  employees: string;
  imageSrc: string;
}

export const PartnerCard: React.FC<PartnerCardProps> = ({ quote, name, position, employees, imageSrc }) => {
  return (
    <div className="partner-card">
      <p className="partner-card__quote">{quote}</p>

      <div className="partner-card__person">
        <div className="partner-card__info">
          <p className="partner-card__name">{name}</p>
          <p className="partner-card__position">{position}</p>
          <p className="partner-card__employees">{employees} TEAMMATES</p>
        </div>
        <img className="partner-card__image" src={imageSrc} alt="Partner Image" />
      </div>
    </div>
  );
}