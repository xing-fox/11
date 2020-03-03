<template>
  <div class="_2FQ8z _3uFku _2OY8W right">
    <div class="_2Y4FL">
      <tubiao></tubiao>
      <right-tab></right-tab>
      <right-canvas></right-canvas>
    </div>
  </div>
</template>
<script>
import Tubiao from './tubiao'
import RightTab from './righttab'
import RightCanvas from './rightcanvas'
export default {
  name: 'right',
  components: {
    Tubiao,
    RightTab,
    RightCanvas
  },
  data () {
    return {

      active: false
    }
  },
  methods: {
    enter: function () {
      this.active = true
      // console.log('in')
    },
    leave: function () {
      this.active = false
      // console.log('out')
    }
  }
}
</script>
<style scoped>
@-webkit-keyframes _1p01g {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _1p01g {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes w2dXn {
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
@keyframes w2dXn {
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
._2FQ8z {
  height: 100%;
}
.ys9Hi {
  width: 3.52em;
  margin: 0.04em 0 0 0.32em;
}
._3uFku,
.ys9Hi {
  position: relative;
  height: 7.22em;
}
._3uFku {
  width: 1.8em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  margin: 0 0.04em 0 0;
}
._3uFku._2OY8W {
  margin: 0.04em 0.04em 0 0;
}
._3c1Kj {
  width: 1px;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
}
._3c1Kj._2OY8W {
  margin: 0.04em 0 0;
  height: calc(100% - 0.04em);
}
._3c1Kj .IE ._3c1Kj {
  min-width: calc(100vw - 5.6em);
}
</style>
