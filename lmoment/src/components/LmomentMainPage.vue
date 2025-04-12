<template>
    <div class="main-wrapper">
      <!-- Хедер -->
      <div class="top-bar">
        <span class="time">9:41</span>
        <img src="@/assets/logo.svg" class="top-logo" alt="logo" />
        <div class="status-icons">
          <img src="@/assets/signal.svg" alt="signal" />
          <img src="@/assets/wifi.svg" alt="wifi" />
          <img src="@/assets/battery.svg" alt="battery" />
        </div>
      </div>
  
      <!-- Цикл + персонаж -->
      <div class="circle-section">
        <img src="@/assets/circle-bg.svg" class="circle-bg" alt="bg" />
        <div class="circle-center">
          <img src="@/assets/person.png" class="circle-image" alt="meditation" />
        </div>
  
        <!-- Контроль плеера -->
        <div class="controls">
          <span>1:14</span>
          <div class="buttons">
            <button><img src="@/assets/star.svg" alt="fav" /></button>
            <button class="play-btn"><img src="@/assets/play.svg" alt="play" /></button>
            <button><img src="@/assets/share.svg" alt="share" /></button>
          </div>
          <span>6:32</span>
        </div>
        <input type="range" min="0" max="100" class="progress-bar" />
      </div>
  
      <!-- Список треков -->
      <div class="track-list">
        <div class="track">
          <img src="@/assets/wave.svg" class="track-icon" />
          <div class="track-info">
            <span class="track-title">Future Sky</span>
          </div>
          <button class="pause-icon">
            <img src="@/assets/pause.svg" alt="pause" />
          </button>
        </div>
        <div class="track">
          <img src="@/assets/wave.svg" class="track-icon" />
          <div class="track-info">
            <span class="track-title">Future Lmomento Sky</span>
          </div>
          <button class="pause-icon">
            <img src="@/assets/pause.svg" alt="pause" />
          </button>
        </div>
      </div>
  
      <!-- Нижняя навигация -->
      <div class="bottom-nav">
        <button class="nav-item active">
          <img src="@/assets/home.svg" />
          <span>Главная</span>
        </button>
        <button class="nav-item">
          <img src="@/assets/lang.svg" />
          <span>Язык земли</span>
        </button>
        <button class="nav-item">
          <img src="@/assets/state.svg" />
          <span>Состояние</span>
        </button>
        <button class="nav-item">
          <img src="@/assets/forest.svg" />
          <span>Лес богатства</span>
        </button>
      </div>
    </div>
  </template>
  
  <style scoped>
  .main-wrapper {
    max-width: 430px;
    margin: 0 auto;
    padding: 20px 16px;
    background: linear-gradient(180deg, #e9f1fd 0%, #f9fbff 100%);
    font-family: sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  }
  
  .top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  }
  
  .top-logo {
    width: 40px;
  }
  
  .status-icons img {
    width: 18px;
    margin-left: 4px;
  }
  
  .circle-section {
    position: relative;
    text-align: center;
  }
  
  .circle-bg {
    width: 100%;
    max-width: 340px;
    margin: 0 auto;
  }
  
  .circle-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  
  .circle-image {
    width: 96px;
    height: 96px;
    border-radius: 50%;
    object-fit: cover;
    border: 6px solid #ffffff;
  }
  
  .controls {
    margin-top: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
  }
  
  .buttons {
    display: flex;
    gap: 16px;
  }
  
  .play-btn {
    background: #f2f8ff;
    border-radius: 50%;
    padding: 12px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
  
  .progress-bar {
    width: 100%;
    margin: 8px 0;
    appearance: none;
    height: 4px;
    background: #b8d7f4;
    border-radius: 8px;
  }
  
  .track-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin: 16px 0;
  }
  
  .track {
    display: flex;
    align-items: center;
    background: white;
    border-radius: 16px;
    padding: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.05);
    justify-content: space-between;
  }
  
  .track-icon {
    width: 40px;
    height: 40px;
  }
  
  .track-title {
    font-weight: 600;
    font-size: 14px;
    margin-left: 12px;
  }
  
  .pause-icon img {
    width: 24px;
  }
  
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background: white;
    padding: 12px;
    border-radius: 30px;
    box-shadow: 0 -2px 10px rgba(0,0,0,0.05);
  }
  
  .nav-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    color: #aaa;
    gap: 4px;
    background: none;
    border: none;
  }
  
  .nav-item.active {
    color: #4a90e2;
  }
  
  .nav-item img {
    width: 24px;
    height: 24px;
  }
  </style>
  