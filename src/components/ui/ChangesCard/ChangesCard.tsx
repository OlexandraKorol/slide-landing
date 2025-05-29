import './ChangesCard.css';
import ChangeCartImage from '../../../assets/change_card.png';

export const ChangesCard: React.FC = () => {
  return (
    <div className="card">
      <img src={ChangeCartImage} alt="Avatar" className="avatar-image" />
      <div className="text-content">
        <h3>Georges made some changes</h3>
        <p>The abnormal guide to remote</p>
      </div>
    </div>
  );
}

