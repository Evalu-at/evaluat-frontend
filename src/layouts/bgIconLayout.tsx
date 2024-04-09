import evaluAtCornerLeft from '../assets/evaluAtCornerLeft.svg';
import evaluAtCornerRight from '../assets/evaluAtCornerRight.svg';

export function BgIconLayout() {
  return (
    <div>
      <img
        className="absolute bottom-0 left-0"
        src={evaluAtCornerLeft}
        style={{ width: '350px' }}
      />
      <img
        className="absolute top-0 right-0"
        src={evaluAtCornerRight}
        style={{ width: '250px' }}
      />
    </div>
  );
}
