import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="main-container page-footer__container">
        <div className="page-footer__info">
          <p className="page-footer__info-copyright">
            © 2021, ООО «ТаскФорс» Все права защищены
          </p>
          <p className="page-footer__info-use">
            «TaskForce» — это сервис для поиска исполнителей на разовые задачи.
            mail@taskforce.com
          </p>
        </div>
        <div className="page-footer__links">
          <ul className="links__list">
            <li className="links__item">
              <Link href="/">Задания</Link>
            </li>
            <li className="links__item">
              <Link href="/">Мой профиль</Link>
            </li>
            <li className="links__item">
              <Link href="/">Исполнители</Link>
            </li>
            <li className="links__item">
              <Link href="/">Регистрация</Link>
            </li>
            <li className="links__item">
              <Link href="/">Создать задание</Link>
            </li>
            <li className="links__item">
              <Link href="/">Справка</Link>
            </li>
          </ul>
        </div>
        <div className="page-footer__copyright">
          <Link href="https://htmlacademy.ru">
            <Image
              className="copyright-logo"
              src="/img/academy-logo.png"
              width={185}
              height={63}
              alt="Логотип HTML Academy"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
