<template>
  <div style="display: block;" class="init-loading" id="init-loading">
    <div class="loading-center">
      <div class="loading-ring">
        <div class="loading-ball-holder">
          <div class="loading-ball1"></div>
          <div class="loading-ball2"></div>
          <div class="loading-ball3"></div>
          <div class="loading-ball4"></div>
        </div>
      </div>
      <p style="display: none;"></p>
    </div>
  </div>
</template>
<style lang="less" scoped>
.init-loading {
  position: absolute;
  top: 40%;
  right: 0;
  left: 0;
  width: 100px;
  height: 100px;
  margin: 0 auto;
  line-height: 100px;
  background: #fff;
  box-shadow: 0 0 10px 0 #e3e3e4;
  border-radius: 4px;
  z-index: 9999;
  .loading-center {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
  }
  .loading-ring {
    position: relative;
    width: 23px;
    height: 23px;
    margin: 0 auto;
    border: 2px solid #9c27b0;
    border-radius: 100%;
    border: hidden;
  }
  .loading-ball-holder {
    position: absolute;
    width: 6px;
    height: 24px;
    left: 9px;
    top: 0;
    animation: loading-ball 1.3s linear infinite;
  }
  .loading-ball1 {
    position: absolute;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #f25643;
  }
  .loading-ball2 {
    position: absolute;
    bottom: 0;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #15bc83;
  }
  .loading-ball3 {
    position: absolute;
    top: 9px;
    left: -9px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #3296fa;
  }
  .loading-ball4 {
    position: absolute;
    top: 9px;
    right: -9px;
    width: 6px;
    height: 6px;
    border-radius: 100%;
    background: #ff943e;
  }
}
</style>