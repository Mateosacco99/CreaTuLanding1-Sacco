import styles from '../styles/navBar.module.scss';
import Cart from './CartWidget';
import { BotonGenerico } from './BotonGenerico';

const NavBar = () => {
    return (
        <nav className={styles['nav-container']}>
            <h1><img className={styles.logo} src="/Autoequipe.png" alt="Autoequipe" /></h1>
            <BotonGenerico href="#" tipo="primario">Inicio</BotonGenerico>
            <BotonGenerico href="#" tipo="primario">Productos</BotonGenerico>
            <BotonGenerico href="#" tipo="primario">Sobre Nosotros</BotonGenerico>
            <BotonGenerico href="#" tipo="primario">Contacto</BotonGenerico>
            <BotonGenerico href="#" tipo="carrito"><Cart /></BotonGenerico>
        </nav>
    );
}

export default NavBar;