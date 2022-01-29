import Link from 'next/link';
import styles from '../../../styles/components/Header.module.scss';
import { FiGithub } from 'react-icons/fi';
export default function Header() {
  return (

    <nav className={styles.header}>
      <div className={styles.title}>
        <Link href='/' passHref>
          <a><h1 className={styles.headerTitle}>Apollo AI</h1></a>
        </Link>
      </div>
      <div className={styles.headerButtons}>
        <Link href='/' passHref>
          <a className={styles.headerButton}>Home</a>
        </Link>
        <Link href='/posts' passHref>
          <a className={styles.headerButton}>Posts</a>
        </Link>
        <Link href='/about' passHref>
          <a className={styles.headerButton}>About</a>
        </Link>
        <div >
          <a className={styles.headerIcon} href='https://github.com/GabrielBG0/apollo-ai' target="_blank" rel="noreferrer">
            <FiGithub />
          </a>
        </div>
      </div>
    </nav>

  )
}