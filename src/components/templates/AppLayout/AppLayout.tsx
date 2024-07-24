import { menuItems } from '../../../data/menuItems';
import Searchbar from '../../molecules/Searchbar/Searchbar';
import Menu from '../../organisms/Menu/Menu';
import styles from './AppLayout.module.css';

type AppLayoutProps = { 
  children: React.ReactNode,
  activeMenuItem: string, 
};

const AppLayout:  React.FC<AppLayoutProps> = ({children, activeMenuItem}) => {
  return (
    <div className={styles.container}>
      <Menu activeItem={activeMenuItem} menuItems={menuItems}/>
      <div className={styles.templateContainer}>
        {activeMenuItem === 'dashboard' && <Searchbar/>}
        { children }
      </div>
    </div>
  );
}

export default AppLayout;
