import { AiTwotoneCalendar, AiOutlineFileText } from 'react-icons/Ai';
import { descriptionJSON } from '../json/description.json';

const Descripition = ({ id, title, date, descripition }) => {
  return (
    <div>
      <div className="info" key={id}>
        <p className="tagline">{title}</p>

        <h3>
          <AiTwotoneCalendar />
          Data Lançamento:
        </h3>
        <p>{date}</p>
        <h3>
          <AiOutlineFileText />
          Descrição:
        </h3>
        <p>{descripition}</p>
      </div>
    </div>
  );
};

export default Descripition;
