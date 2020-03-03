<template>
  <div class="LUSC0">
    <div class="_2m4z6"
         @click="close"></div>
    <span class="_3ny3q">线上客服</span>
    <div class="j8ZdH">
      <div class="_1ukaL">
        <div class="_3Vpiz"
             data-type="msg"></div>
        <div class="_1px0I">线上咨询</div>
      </div>
      <div class="_1ukaL">
        <div class="_3Vpiz"
             data-type="phone"></div>
        <div class="_1px0I">客服热线</div>
        <div class="_1px0I">+63 2304-1687</div>
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
@-webkit-keyframes _3K9wJ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3K9wJ {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes LYQyR {
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
@keyframes LYQyR {
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
.j8ZdH {
  -ms-flex-pack: center;
  justify-content: center;
  height: 5.73em;
}
._1ukaL,
.j8ZdH {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
}
._1ukaL {
  -ms-flex-direction: column;
  flex-direction: column;
  width: 1.76em;
  height: 1em;
}
._3Vpiz[data-type='msg'] {
  width: 0.56em;
  height: 0.56em;
  margin-bottom: 0.17em;
  border-radius: 50%;
  background: url(data:image/png;base64,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);
  background-size: 0.24em 0.24em;
  background-color: #7d7254;
  background-repeat: no-repeat;
  background-position: center;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  cursor: pointer;
}
._3Vpiz[data-type='msg']:hover {
  background-color: #bbaa7d;
}
._3Vpiz[data-type='msg']:hover ~ ._1px0I {
  color: hsla(0, 0%, 100%, 0.87);
}
._3Vpiz[data-type='phone'] {
  width: 0.56em;
  height: 0.56em;
  margin-bottom: 0.17em;
  border-radius: 50%;
  background: url(data:image/png;base64,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);
  background-size: 0.24em 0.24em;
  background-color: #7d7254;
  background-repeat: no-repeat;
  background-position: center;
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  cursor: pointer;
}
._3Vpiz[data-type='phone']:hover {
  background-color: #bbaa7d;
}
._3Vpiz[data-type='phone']:hover ~ ._1px0I {
  color: hsla(0, 0%, 100%, 0.87);
}
._1px0I {
  color: hsla(0, 0%, 100%, 0.6);
  text-align: center;
  font-size: 0.2em;
  letter-spacing: 0.01em;
  font-weight: 500;
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
