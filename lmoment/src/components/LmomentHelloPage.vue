<template>
  <div class="phone-wrapper">
    <!-- Видео на фоне -->
    <video autoplay muted loop playsinline class="video-bg">
      <source src="/bg.mp4" type="video/mp4" />
    </video>

    <!-- Оверлей для улучшения читаемости -->
    <div class="overlay"></div>

    <div class="content">
      <!-- Логотип -->
      <div>
        <img src="@/assets/logo.svg" alt="Logo" class="logo" />
        <p class="title">L-moment<br />Время любви</p>
      </div>

      <div>
        <div class="information">
          <!-- Кнопка паузы -->
          <div class="play-button">
            <div class="pause-icon"></div>
          </div>

          <div>
            <!-- Описание -->
            <p class="desc">
              15 минут в день которые<br />
              настраивают твою жизнь на мысли<br />
              и состояния, ведущие<br />
              к процветанию
            </p>
          </div>
          <div>
            <!-- Текст для входа -->
            <p class="signin">Войти в L-moment с помощью</p>
          </div>
        </div>
        <!-- Соцсети -->
        <div class="socials">
          <img src="@/assets/yandex.svg" alt="Yandex" />
          <img src="@/assets/google.svg" alt="Google" />
          <img src="@/assets/vk.svg" alt="VK" />
          <img src="@/assets/ok.svg" alt="OK" />
          <img src="@/assets/mail.svg" alt="Mail" />
        </div>

        <button class="care-btn">
          <img src="@/assets/vector.svg" alt="" />
          Служба заботы
        </button>
      </div>
      <!-- Кнопка службы заботы -->
    </div>
  </div>
</template>
  
  
<style scoped>
/* Обёртка "телефона" */
.phone-wrapper {
  position: relative;
  width: 100%;
  max-width: 430px;
  margin: 0 auto;
  height: 100vh;
  overflow: hidden;
  background: black;
}

.information {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}

.play-button {
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 999px;
  padding: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
}

.pause-icon {
  display: flex;
  gap: 6px;
}

.pause-icon::before,
.pause-icon::after {
  content: "";
  display: block;
  width: 6px;
  height: 20px;
  background-color: #1c2a49;
  border-radius: 2px;
}

/* Видео на фоне */
.video-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

/* Оверлей для улучшения читаемости текста */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.2),
    rgba(255, 255, 255, 0.8)
  );
  z-index: 1;
}

/* Статус-бар */
.status-bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  color: white;
}

.time {
  font-size: 14px;
}

.icons {
  display: flex;
  gap: 6px;
}

.status-icon {
  width: 16px;
  height: 16px;
}

/* Контент */
.content {
  position: relative;
  z-index: 2;
  height: 100%;
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  color: #1c2a49;
  text-align: center;
}

/* Логотип */
.logo {
  width: 68px;
  margin-top: 20px; /* Увеличил отступ, чтобы учесть статус-бар */
}

/* Заголовок */
.title {
  font-size: 14px;
  font-weight: 600;
  margin-top: 6px;
  line-height: 1.4;
}

/* Кнопка паузы */
.play-button {
  background: white;
  border-radius: 50%;
  padding: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.play-button img {
  width: 24px;
  height: 24px;
}

/* Описание */
.desc {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 12px;
  color: #1c2a49;
  font-weight: 700;
}

/* Текст для входа */
.signin {
  font-size: 12px;
  font-weight: 700;
  margin-bottom: 10px;
}

/* Соцсети */
.socials {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
}

.socials img {
  width: 36px;
  height: 36px;
  background: white;
  padding: 6px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

/* Кнопка службы заботы */
.care-btn {
  box-shadow: -8.17px -8.17px 13.07px 0px #ffffffc4;
  box-shadow: 8.17px 8.17px 16.33px 0px #0a0a0a0f;
  box-shadow: 3px 3px 5px 0px #00000005;
  background: #4aa8f0;
  color: white;
  border: none;
  border-radius: 999px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
  cursor: pointer;
  width: 100%;
}

/* Адаптация для маленьких экранов */
@media (max-width: 360px) {
  .content {
    padding: 16px 12px;
  }

  .desc {
    font-size: 13px;
  }

  .socials img {
    width: 32px;
    height: 32px;
  }

  .care-btn {
    font-size: 13px;
    padding: 10px 20px;
  }
}

/* Для десктопов (имитация телефона) */
@media (min-width: 768px) {
  .phone-wrapper {
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
    border-radius: 40px;
    margin: 20px auto;
  }
}
</style>
    