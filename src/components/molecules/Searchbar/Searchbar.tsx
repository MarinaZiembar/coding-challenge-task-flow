import styles from './Searchbar.module.css';
import search from '../../../assets/search.svg'
import { useContext } from 'react';
import { AppContext } from '../../../contexts/AppContext';
import Input from '../../atoms/Input/Input';

type MenuProps = { 
  activeItem: string, 
  menuItems:Array<object>,
};

const Searchbar: React.FC = () => {

  const {searchTasksByName} = useContext(AppContext);

  const handleChange = (e) => {
    searchTasksByName(e.target.value)
  }

  return (
    <div className={styles.container}>
        <Input
          name="searchbar"
          id="searchQuery"
          type="text"
          handleChange={handleChange}
          invisible={true}
        />
        <img className={styles.icon} src={search} alt="Search icon"/>
    </div>
  );
}

export default Searchbar;
