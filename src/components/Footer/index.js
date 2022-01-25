import styles from '../../../styles/components/Footer.module.scss';
import { BsFillSuitHeartFill } from 'react-icons/bs';
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMsg}>
        <div>
          <p>Made with <BsFillSuitHeartFill color='#e31b23' /> by <a rel="noopener noreferrer" href="https://github.com/GabrielBG0" target="_blank"><u>GBG</u></a></p>
        </div>
        <div className={styles.copyright}>
          <p>Copyright © Apollo AI {year} All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}