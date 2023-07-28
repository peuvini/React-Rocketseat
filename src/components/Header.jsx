import styles from './Header.module.css'

import igniteLogo from "../images/ignite-logo.svg" /* Importacao das imagens pelo javascript */

export function Header(){
    return(
        <header className={styles.header}>
            <img src={igniteLogo} alt='Logotipo da Ignite'/>
        </header>
    )
}