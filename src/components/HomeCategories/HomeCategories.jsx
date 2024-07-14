import './HomeCategories.scss';
import { useSelector } from 'react-redux';
import Category from './Category/Category';

const HomeCategories = () => {
  const homeOrderList = useSelector((state) => state.guide.homeOrder);

  return (
    <div className="homeCategories-container">
      {homeOrderList.map((homeOrder) => (
        <Category key={homeOrder.id} {...homeOrder} />
      ))}
    </div>
  );
};

export default HomeCategories;
