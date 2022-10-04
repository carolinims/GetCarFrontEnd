import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <ul>
        <div className={styles.footerBackground}>
          <img className={styles.img} src='/assets/MainLogoB.png' alt='Logo Get Car' />
        </div>
        © 2022 - Todos os direitos reservados
        | Use sinto de seguranaça, proteja a vida! - Respeite a sinalização e os limites de velocidade! - Se beber não dirija!
      </ul>
    </footer>
  );
}