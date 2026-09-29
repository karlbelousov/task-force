"use client";

export default function EnterFormModal({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  return (
    <div className="overlay">
      <section className="modal form-modal">
        <h2>Вход на сайт</h2>
        <form action="#" method="post">
          <p>
            <label className="form-modal-description" htmlFor="enter-email">
              Email
            </label>
            <input
              className="enter-form-email input input-middle"
              type="email"
              name="enter-email"
              id="enter-email"
            />
          </p>
          <p>
            <label className="form-modal-description" htmlFor="enter-password">
              Пароль
            </label>
            <input
              className="enter-form-email input input-middle"
              type="password"
              name="enter-email"
              id="enter-password"
            />
          </p>
          <button className="button" type="submit">
            Войти
          </button>
        </form>
        <button
          className="form-modal-close"
          type="button"
          onClick={onCloseModal}
        >
          Закрыть
        </button>
      </section>
    </div>
  );
}
