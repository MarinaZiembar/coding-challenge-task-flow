import styles from './Menu.module.css';
import logo from '../../../assets/logo.svg'
import { Link } from 'react-router-dom';

type MenuItems ={
  id:string,
  path:string,
  icon:string,
  label:string
}

type MenuProps = { 
  activeItem: string, 
  menuItems:Array<MenuItems>,
};

const Menu: React.FC<MenuProps> = ({menuItems, activeItem}) => {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} className={styles.brandLogo}/>
        <p className={styles.brandName}>TaskFlow.</p>
      </div>
      <ul className={styles.itemsContainer}>
        {menuItems?.map((item) => (
          <li key={item.id}>
            <Link to={item.path} className={[styles.itemContainer, activeItem === item.id && styles.active].join(' ')}>
              <img src={item.icon} alt=""/>
              <p>{item.label}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Menu;
