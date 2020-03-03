<template>
  <div class="LUSC0">
    <div class="_2m4z6"
         @click='close'></div>
    <span class="_3ny3q">下载 App</span>
    <div class="_241KP">
      <div class="_1u-eV"></div>
      <div class="_2lYmg">
        <div class="_2C9sv"
             role="button"
             tabindex="0">
          <div class="_17eE9">
            <div role="button"
                 tabindex="0"
                 class="_2beD1"
                 style="width: 1em; height: 1em;">
              <img src='../assets/androidewm.png'
                   style="height: 79px; width: 79px;">
              <!-- <canvas height="79"
                      width="79"
                      style="height: 79px; width: 79px;"></canvas> -->
            </div>
          </div>
        </div>
        <div class="_2XQpw">
          <div class="_1X_1F"></div>
          <div class="_3ad-K"></div>
          <div class="QwRzm"></div>
        </div>
        <div class="_9mDcN">
          <span>完美支援 iOS 8、Android 4.5 及以上版本
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'history',
  data () {
    return {
      enterstate: 1,
      active: 0
    }
  },
  methods: {
    close: function () {
      this.$store.dispatch('HistoryShow', false)
    }
  }
}
</script>

<style scoped>
@-webkit-keyframes _1yR52 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1yR52 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2ofWm {
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
@keyframes _2ofWm {
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
._241KP {
  display: -ms-flexbox;
  display: flex;
  width: 6.08em;
  height: 5.6em;
  margin: 0.7em auto 0;
}
._241KP ._1u-eV {
  width: 4.08em;
  height: 100%;
  background-image: url(../assets/fae51fb5.png);
  background-size: 100% 100%;
}

:lang(zh-CN) ._241KP ._1u-eV {
  background-image: url(../assets/13124dbf.png);
}
._241KP ._2lYmg {
  width: 1.6em;
  height: 100%;
  margin-left: 0.4em;
}
._241KP ._2lYmg ._2C9sv {
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 1.44em;
  width: 1.44em;
  -webkit-box-shadow: inset 0 0.01em 0.02em 0 #d9cfb2;
  box-shadow: inset 0 0.01em 0.02em 0 #d9cfb2;
  border-style: solid;
  border-width: 0.005em;
  border-image-source: linear-gradient(0deg, #998d6e, #dacfb2);
  border-image-slice: 1;
  background-color: #7d7254;
  margin-top: 0.71em;
}
._241KP ._2lYmg ._2C9sv,
._241KP ._2lYmg ._2C9sv ._17eE9 {
  display: -ms-flexbox;
  display: flex;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
._241KP ._2lYmg ._2C9sv ._17eE9 {
  height: 1.2em;
  width: 1.2em;
  background-color: #fdeed4;
  padding: 0.1em;
}
._241KP ._2lYmg ._2C9sv ._17eE9 ._2beD1,
._241KP ._2lYmg ._2XQpw {
  display: -ms-flexbox;
  display: flex;
}
._241KP ._2lYmg ._2XQpw {
  width: 100%;
  height: 0.72em;
  margin-top: 0.16em;
}
._241KP ._2lYmg ._2XQpw ._1X_1F {
  height: 0.72em;
  width: 0.72em;
  background-image: url(../assets/1e58e577.png);
  background-size: 100% 100%;
}
._241KP ._2lYmg ._2XQpw ._3ad-K,
._241KP ._2lYmg ._2XQpw .QwRzm {
  height: 0.38em;
  width: 0.32em;
  margin-left: 0.12em;
  margin-top: 0.34em;
  background-size: 100% 100%;
}
._241KP ._2lYmg ._2XQpw ._3ad-K {
  background-image: url(data:image/png;base64,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);
}
._241KP ._2lYmg ._2XQpw .QwRzm {
  background-image: url(data:image/png;base64,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);
}
._241KP ._2lYmg ._9mDcN {
  display: -ms-flexbox;
  display: flex;
  white-space: pre;
  width: 100%;
  height: 1.32em;
  margin-top: 0.1em;
  line-height: 1.65;
  letter-spacing: 0.006em;
  color: hsla(0, 0%, 100%, 0.87);
  font-weight: 600;
}
._241KP ._2lYmg ._9mDcN span {
  font-size: 0.16em;
}
._3XAtm {
  position: absolute;
}
._1u-eV {
  position: relative;
}
._1u-eV ._3XAtm {
  width: 0.37em;
  height: 0.22em;
  top: 0.36em;
  left: 0.85em;
  background: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(#4e3421),
    to(#352219)
  );
  background: linear-gradient(180deg, #4e3421, #352219);
}
._2XQpw {
  position: relative;
}
._2XQpw ._3XAtm {
  width: 0.6em;
  height: 0.6em;
  top: 0.06em;
  left: 0.06em;
  background: linear-gradient(45deg, #101010, #282828, #101010);
}
._1rCDQ {
  width: 100%;
  height: 100%;
}
._1rCDQ.d9QtX {
  background: url(../assets/6f76e0a2.png) no-repeat 50%;
  background-size: cover;
}
._1rCDQ._3PNog {
  background: url(../assets/2632aadd.png) no-repeat 50%;
  background-size: contain;
}
@-webkit-keyframes _2-RWt {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _2-RWt {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _2ceUl {
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
@keyframes _2ceUl {
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
.LUSC0 {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  padding: 0.72em 2.1em;
  z-index: 20000;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.9);
  cursor: default;
}
.LUSC0._3rTKX {
  padding: 0;
}
.LUSC0._1JRhS {
  position: fixed;
  padding: 72px 0;
  margin: 0 auto;
  font-size: 100px;
}
._3ny3q {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  height: auto;
  color: #bbaa7d;
  font-size: 0.3em;
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.02667em;
}
._2m4z6 {
  position: absolute;
  right: 0.24em;
  top: 0.24em;
  width: 0.32em;
  height: 0.32em;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbVJREFUWAnNl6tOBDEUQHcAw1siloRP4BuwaxB8BAIEwSJI8CTIFYRvgIQQNBrFH+DAIkgQMJzbpZvOo53eTiehyZ12+jpnZqdtdjT6T6ksy11iZ0gn5l8j9ixjyRYETvmQ+KJ8VRTFq23LlQucuU6JMeVNGLeFTM7NFtk5sSj3pE8iq4QLN4TZ5WZBckzeye5ndea6wvWEQVl+Dg/8BcazeQMWTMcJ5X17T977TQTgUx78uyIg4JwSXXDhNQRyScTAvQJ9JWLhQYFUCQ28U0AroYVHCcRKpMCjBbokUuEqgYDENW0HxFj6/CXZZMw6txW+vHUZ+jpLPU9b36zq3aPhMlAtIIMCEiq4zGXOAiko0xP9P1rGPMr22lLvrVILOB/cRsusx7SrDjCVgAN3P7g3R0R9ikYLeODym18Qd6kSUR9hAD5favSpr46oo7xTIAZunz5FIiiggadKeAVS4CkSrQJ94FqJhkAOuEaiIpATHisxFxgCHiNhBIaEd0nYnbCko3uIqE81C/LlHFIPtLk75k+FyVtYJc6II8L+RfPNl1zP3BPikthuTELlMjEY3AJhrNvyL0h+VD/Mo7VFAAAAAElFTkSuQmCC);
  background-size: 100% 100%;
  cursor: pointer;
}
</style>
