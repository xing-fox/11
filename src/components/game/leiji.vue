<template>
  <div class="IgmyS">
    <div class="cBC7E">累积局数</div>
    <div class="NyE6o _7MvHp">
      <div class="YI36v">
        <div class="_2MqBM">
          <div class="_3efyx _4k-Uu">
            <div class="_61lzO">庄</div>
          </div>
        </div>
        <div class="_123-1">{{data['zhuang']}}</div>
      </div>
      <div class="YI36v">
        <div class="_2MqBM">
          <div class="_3efyx _3Pupf">
            <div class="_61lzO">闲</div>
          </div>
        </div>
        <div class="_123-1">{{data['xian']}}</div>
      </div>
      <div class="YI36v">
        <div class="_2MqBM">
          <div class="_3efyx cLnVB">
            <div class="_61lzO">和</div>
          </div>
        </div>
        <div class="_123-1">{{data['he']}}</div>
      </div>
      <div class="YI36v">
        <div class="_2MqBM">
          <div class="_3efyx WMm9g">
            <div class="_61lzO">庄对</div>
          </div>
        </div>
        <div class="_123-1">{{data['zhuang_dui']}}</div>
      </div>
      <div class="YI36v">
        <div class="_2MqBM">
          <div class="_3efyx _3fGDy">
            <div class="_61lzO">闲对</div>
          </div>
        </div>
        <div class="_123-1">{{data['xian_dui']}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leiji',
  props: ['toleiji'],
  data () {
    return {
      game_Id: this.toleiji,
      data: {}
    }
  },
  methods: {
    onResultHistory: function (vo) {
      var self = this
      // console.log('累计==' + JSON.stringify(vo))
      if (vo.desk_id == self.game_Id) {
        for (var name in vo) {
          self.$set(self.data, name, vo[name])
        }
      }
    }
  },
  // mounted () {
  //   this.global.addMessageListener('baijiale_desk_result_history', this.onResultHistory)
  // }
  watch: {
    '$store.state.onResultHistory': function () { var self = this; self.onResultHistory(self.$store.state.onResultHistory) }
  }
}
</script>
<style>
@-webkit-keyframes ku1UC {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes ku1UC {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1lKGP {
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
@keyframes _1lKGP {
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
._7K3O2 {
  display: -ms-flexbox;
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 2500;
  color: hsla(0, 0%, 100%, 0.87);
}
.yUiBb {
  width: 2.09em;
  height: 100%;
  border-right: 0.01em solid #24211a;
}
.IgmyS {
  width: 1.39em;
  height: 100%;
  -ms-flex-direction: column;
  flex-direction: column;
}
.IgmyS,
.IgmyS .cBC7E {
  display: -ms-flexbox;
  display: flex;
}
.IgmyS .cBC7E {
  width: 100%;
  height: 2em;
  font-size: 0.12em;
  background-color: #24211a;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
@-webkit-keyframes _1qmJ5 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1qmJ5 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1llpR {
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
@keyframes _1llpR {
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
.NyE6o {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  z-index: 5002;
  color: hsla(0, 0%, 100%, 0.87);
  font-weight: 600;
  padding-top: 0.02em;
  padding-right: 0.04em;
}
.NyE6o._7MvHp .YI36v {
  padding-right: 0.09em;
  border-bottom: 1px solid #24211a;
}
.YI36v {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
  height: 0.31em;
}
.YI36v ._2MqBM {
  width: 0.34em;
  height: 100%;
}
.YI36v ._2MqBM,
.YI36v ._2MqBM ._3efyx {
  -ms-flex-pack: center;
  justify-content: center;
}
.YI36v ._2MqBM,
.YI36v ._2MqBM ._3efyx,
.YI36v ._123-1 {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
.YI36v ._123-1 {
  -ms-flex-pack: end;
  justify-content: flex-end;
  letter-spacing: 0.00714em;
  width: 1.57143em;
  font-size: 0.14em;
}
._3Pupf,
._4k-Uu,
.cLnVB {
  width: 0.2em;
  height: 0.2em;
  border-radius: 50%;
}
.cLnVB {
  background-color: #06f039;
}
._4k-Uu {
  background-color: #ff101a;
}
._3Pupf {
  background-color: #002bf7;
}
._61lzO {
  color: #fff;
  font-size: 0.14em;
}
.cLnVB ._61lzO {
  text-shadow: 0 0 0.21429em #000;
}
.WMm9g ._61lzO {
  color: #ff101a;
}
._3fGDy ._61lzO {
  color: #002bf7;
}
</style>
