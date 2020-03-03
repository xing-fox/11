<template>
  <div class="_2xnyH _2xW1I">
    <div class="af6PY _1OxGp"
         @click='baijiale'
         :disabled="active">
      <span>百家乐</span>
    </div>
    <div @click='baijiale'
         :disabled="!active"
         class="af6PY _1OxGp beqqP">
      <span>其他游戏</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'righttab',
  data () {
    return {
      active: true
    }
  },
  methods: {
    baijiale: function () {
      this.active = !this.active
      this.$store.dispatch('SetBaOt', this.active)
      // console.log('in')
    }
  },
  watch:{
    "$store.state.baijiale":function(){
      this.active = this.$store.state.baijiale
    },
  }
}
</script>
<style>
@-webkit-keyframes Qpn1A {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes BPuCH {
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
@keyframes Qpn1A {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes BPuCH {
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
._3f9ez {
  height: 0.32em;
  width: 100%;
}
._1OxGp,
._15lq_ {
  position: relative;
  height: 100%;
  width: inherit;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.6);
  border-left: 1px solid #24211a;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 600;
  background-color: #040403;
}
._1OxGp:first-child,
._15lq_:first-child {
  border: 0;
}
._1OxGp:before,
._15lq_:before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
._1OxGp span,
._15lq_ span {
  position: relative;
  font-size: 0.16em;
}
._15lq_[disabled],
[disabled]._1OxGp {
  color: #fdeed4;
}
._15lq_[disabled]:before,
[disabled]._1OxGp:before {
  position: absolute;
  background-color: #7d7254;
}
._2SfcA {
  width: 0.25em;
}
._2SfcA,
._8OAMg {
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
._8OAMg {
  position: relative;
  width: inherit;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  color: hsla(0, 0%, 100%, 0.6);
  border-left: 1px solid #24211a;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font-weight: 600;
  background-color: #040403;
  border-radius: 0.06em 0 0 0.06em;
  border: 0;
}
._8OAMg:before {
  position: absolute;
  content: '';
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}
._8OAMg span {
  position: relative;
  font-size: 0.12em;
  letter-spacing: 0.03333em;
  padding-left: 0.16667em;
}
._8OAMg[disabled] {
  color: #fdeed4;
}
._8OAMg[disabled]:before {
  position: absolute;
  background-color: #7d7254;
  border-radius: 0.06em 0 0 0.06em;
}
._2Y4FL {
  top: 0;
  left: 0;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._2Y4FL,
._2Y4FL ._1BkqJ {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
._2Y4FL ._1BkqJ {
  height: 0.48em;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
}
._2Y4FL ._1BkqJ ._1s1-v {
  height: 0.48em;
  width: 0.48em;
}
._2xW1I {
  position: relative;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -ms-flex-direction: row;
  flex-direction: row;
  width: 100%;
  height: 0.32em;
}
._1OxGp {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 0.9em;
}
._1OxGp > span {
  font-size: 0.14em;
  line-height: 1;
  text-align: center;
  font-weight: 100;
}
.ja-JP ._1OxGp.beqqP > span {
  width: 4.85714em;
}
._3Qr2m {
  display: -ms-flexbox;
  display: flex;
  position: relative;
  height: 6.53em;
  width: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
._1FnjZ {
  z-index: 1;
  width: 0.06em;
  border-radius: 4px;
  background-color: rgba(125, 114, 84, 0.8);
}
._1FnjZ:hover {
  background-color: hsla(44, 31%, 61%, 0.8);
}
</style>
