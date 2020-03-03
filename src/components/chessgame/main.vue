<template>
  <div class="_3R5rX">
    <div class="_3zL1i"></div>
    <div class="_3g_G4">
      <span class="_1lXmJ">棋牌游戏</span>
    </div>
    <div class="_1588C">
      <div class="WeXiy"
           style="position: absolute; height: 3.52em; width: 3.52em; left: 0em; top: 0em;">
        <li class="u0MNT"
            role="presentation"><img class="_1bXpA"
               alt="QP_zhajinhua"
               src="../../assets/6f26d4e6-e30b-4b16-439f-3f1e1e9b0c6e@1x.jpg">
          <div class="_2sqI8">
            <div class="_3dyaM">炸金花</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="WeXiy"
           style="position: absolute; height: 1.72em; width: 3.52em; left: 3.6em; top: 0em;">
        <li class="u0MNT"
            role="presentation"><img class="_1bXpA"
               alt="QP_tongbiniuniu"
               src="../../assets/f13f98de-0275-4c57-5d40-f359c22ce549@1x.jpg">
          <div class="_2sqI8">
            <div class="_3dyaM">通比牛牛</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="WeXiy"
           style="position: absolute; height: 1.72em; width: 1.72em; left: 3.6em; top: 1.8em;">
        <li class="u0MNT"
            role="presentation"><img class="_1bXpA"
               alt="QP_dragontiger"
               src="../../assets/47c843b4-03b2-4e02-5fda-c537477ff3e2@1x.jpg">
          <div class="_2sqI8">
            <div class="_3dyaM">百人龙虎</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="WeXiy"
           style="position: absolute; height: 1.72em; width: 1.72em; left: 7.2em; top: 0em;">
        <li class="u0MNT"
            role="presentation"><img class="_1bXpA"
               alt="QP_zhajinhuaspeed"
               src="../../assets/6850f86c-9f41-480d-7473-0b4f366e196f@1x.jpg">
          <div class="_2sqI8">
            <div class="_3dyaM">极速炸金花</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="WeXiy"
           style="position: absolute; height: 1.72em; width: 3.52em; left: 5.4em; top: 1.8em;">
        <li class="u0MNT"
            role="presentation"><img class="_1bXpA"
               alt="QP_qiangzhuangniuniu"
               src="../../assets/903eba8b-1275-49eb-6a50-eed7a110586d@1x.jpg">
          <div class="_2sqI8">
            <div class="_3dyaM">抢庄牛牛</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
      <div class="WeXiy"
           style="position: absolute; height: 3.52em; width: 1.72em; left: 9em; top: 0em;">
        <li class="u0MNT"
            role="presentation"><img class="_1bXpA"
               alt="QP_bairenniuniu"
               src="../../assets/868bf3d9-c86e-4099-4ccb-222de99c08bd@1x.jpg">
          <div class="_2sqI8">
            <div class="_3dyaM">百人牛牛</div>
            <div class="ripple text-l center-block _3cEX7">
              <div class="_39at- ripple">进入游戏</div>
            </div>
          </div>
        </li>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CHESSGAME',
  data () {
    return {
      active: 0
    }
  },
  methods: {
    enter: function (index) {
      this.active = index
    },
    leave: function () {
      this.active = 0
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes dX6da {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes dX6da {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes Tv6Dv {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
@keyframes Tv6Dv {
  0% {
    background-position: 100% 0, 100% 100%, 0 100%, 0 0;
  }
  50% {
    background-position: 50% 0, 100% 50%, 50% 100%, 0 50%;
  }
  to {
    background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  }
}
._3R5rX {
  height: 100%;
  width: 100%;
  background-image: url(../../assets/5a924dd0.jpg);
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
}
._3R5rX,
._3R5rX ._3zL1i {
  background-size: 100% 100%;
}
._3R5rX ._3zL1i {
  height: 1.2em;
  width: 1.2em;
  background-image: url(../../assets/7caaf4a6.png);
  margin-top: 0.22em;
}
._3R5rX ._3g_G4 {
  display: -ms-flexbox;
  display: flex;
  text-shadow: 0 0.02em 0.04em rgba(255, 0, 248, 0.85), 0 0 0.1em #ff00ef;
  color: #fff;
  margin-top: -0.02em;
  font-weight: 600;
}
._3R5rX ._3g_G4 ._1lXmJ {
  font-size: 0.36em;
}
._3R5rX ._1588C {
  position: relative;
  height: 3.52em;
  width: 10.72em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0 1.04em;
  margin: 0.68em auto 0;
}
._3R5rX ._1588C .WeXiy {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
