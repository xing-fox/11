<template>
  <div class="ekYVE ">
    <div class="_28wAg _1xMvy">
      <span class="_2xghV">庄</span>
      <span class="_2Vzf7">{{data.zhuang}}</span>
    </div>
    <div class="_28wAg _33ptD">
      <span class="_2xghV">闲</span>
      <span class="_2Vzf7">{{data.xian}}</span>
    </div>
    <div class="_28wAg _2Q828">
      <span class="_2xghV">和</span>
      <span class="_2Vzf7">{{data.he}}</span>
    </div>
    <div class="_28wAg _1xMvy">
      <span class="_2xghV">庄对</span>
      <span class="_2Vzf7">{{data.zhuang_dui}}</span>
    </div>
    <div class="_28wAg _33ptD">
      <span class="_2xghV">闲对</span>
      <span class="_2Vzf7">{{data.xian_dui}}</span>
    </div>
    <!-- <div class="_28wAg">
        <span class="_2xghV">大</span>
        <span class="_2Vzf7">0</span>
      </div>
      <div class="_28wAg">
        <span class="_2xghV">小</span>
        <span class="_2Vzf7">0</span>
      </div> -->
  </div>
</template>

<script>
import { formatCurrency } from '@/utils/deals'
export default {
  name: 'caichi',
  props: ['tocaichi'],
  data () {
    return {
      game_Id: this.tocaichi,
      data: {}
    }
  },
  methods: {
    onMoneyPool: function (vo) {
      var self = this
      // console.log('即时彩池==' + JSON.stringify(vo))
      // console.log('彩池', this.normalizedSize)
      if (vo.desk_id == self.game_Id) {
        for (var name in vo) {
          self.$set(self.data, name, formatCurrency(vo[name]))
        }
      }
    }
  },
  watch: {
    '$route' (to, from) {
      this.game_Id = this.$route.params.id
      console.log('彩池', this.game_Id)
    }
  },
  mounted () {
    this.global.addMessageListener('baijiale_bet_summary', this.onMoneyPool)
  }
}
</script>

<style>
@-webkit-keyframes _9Xbtl {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _9Xbtl {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _3M1Oa {
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
@keyframes _3M1Oa {
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
.ekYVE {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  width: 100%;
  font-weight: 600;
  color: hsla(0, 0%, 100%, 0.87);
}
.ekYVE > :not(:last-child) {
  border-bottom: 0.01em solid hsla(0, 0%, 100%, 0.12);
}
.ekYVE._2kP8w ._28wAg {
  height: 0.25em;
  padding: 0 0.08em;
  border-bottom: 0.01em solid #24211a;
}
.ekYVE._2kP8w ._2Vzf7,
.ekYVE._2kP8w ._2xghV {
  font-size: 0.14em;
}
.ekYVE._2kP8w ._2Vzf7 {
  color: hsla(0, 0%, 100%, 0.87);
}
._28wAg {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 0.2em;
  width: 100%;
  padding: 0 0.04em;
}
._28wAg._2KzZ6 {
  height: 0.19em;
}
._1xMvy {
  color: #ff101a;
}
._33ptD {
  color: #002bf7;
}
._2Q828 {
  color: #06f039;
}
._2Vzf7,
._2xghV {
  font-size: 0.12em;
}
._2Vzf7 {
  color: hsla(0, 0%, 100%, 0.87);
}
</style>
