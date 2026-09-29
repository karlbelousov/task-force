"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import EnterFormModal from "@/components/EnterFormModal";
import { useState } from "react";

export default function LandingPage() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <div className="table-layout">
      <Header onOpenModal={() => setIsOpenModal(true)} />
      <main>
        <div className="landing-container">
          <div className="landing-top">
            <h1>
              Работа для всех.
              <br />
              Найди исполнителя на любую задачу.
            </h1>
            <p>
              Сломался кран на кухне? Надо отправить документы? Нет времени
              самому гулять с собакой? У нас вы быстро найдёте исполнителя для
              любой жизненной ситуации?
              <br />
              Быстро, безопасно и с гарантией. Просто, как раз, два, три.{" "}
            </p>
            <button className="button">Создать аккаунт</button>
          </div>
          <div className="landing-center">
            <div className="landing-instruction">
              <div className="landing-instruction-step">
                <div className="instruction-circle circle-request" />
                <div className="instruction-description">
                  <h3>Публикация заявки</h3>
                  <p>Создайте новую заявку.</p>
                  <p>Опишите в ней все детали и стоимость работы.</p>
                </div>
              </div>
              <div className="landing-instruction-step">
                <div className="instruction-circle  circle-choice" />
                <div className="instruction-description">
                  <h3>Выбор исполнителя</h3>
                  <p>Получайте отклики от мастеров.</p>
                  <p>
                    Выберите подходящего
                    <br />
                    вам исполнителя.
                  </p>
                </div>
              </div>
              <div className="landing-instruction-step">
                <div className="instruction-circle  circle-discussion" />
                <div className="instruction-description">
                  <h3>Обсуждение деталей</h3>
                  <p>
                    Обсудите все детали работы
                    <br />в нашем внутреннем чате.
                  </p>
                </div>
              </div>
              <div className="landing-instruction-step">
                <div className="instruction-circle circle-payment" />
                <div className="instruction-description">
                  <h3>Оплата&nbsp;работы</h3>
                  <p>По завершении работы оплатите услугу и закройте задание</p>
                </div>
              </div>
            </div>
            <div className="landing-notice">
              <div className="landing-notice-card card-executor">
                <h3>Исполнителям</h3>
                <ul className="notice-card-list">
                  <li>Большой выбор заданий</li>
                  <li>Работайте где удобно</li>
                  <li>Свободный график</li>
                  <li>Удалённая работа</li>
                  <li>Гарантия оплаты</li>
                </ul>
              </div>
              <div className="landing-notice-card card-customer">
                <h3>Заказчикам</h3>
                <ul className="notice-card-list">
                  <li>Исполнители на любую задачу</li>
                  <li>Достоверные отзывы</li>
                  <li>Оплата по факту работы</li>
                  <li>Экономия времени и денег</li>
                  <li>Выгодные цены</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      {isOpenModal && (
        <EnterFormModal onCloseModal={() => setIsOpenModal(false)} />
      )}
    </div>
  );
}
