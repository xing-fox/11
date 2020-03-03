<template>
  <div class="_2W52N shouye">
    <div class="_1lpyl">
      <!-- 左边 -->
      <left-part></left-part>
      <!-- middle -->
      <middle-part></middle-part>
      <!-- RIGHT -->
      <right-part></right-part>
    </div>
  </div>
</template>
<script>
import LeftPart from './left/left'
import MiddlePart from './middle/middle'
import RightPart from './right/right'
export default {
  components: {
    LeftPart,
    MiddlePart,
    RightPart
  },
  name: 'shouye',
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
@-webkit-keyframes W9AFf {
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
@keyframes W9AFf {
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
@-webkit-keyframes F0ey- {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
@keyframes F0ey- {
  to {
    -webkit-transform: rotate(1turn);
    transform: rotate(1turn);
  }
}
._2W52N {
  height: 100%;
  width: 100%;
  background-image: url(../../assets/4b599546.jpg);
  background-size: 100% 110%;
}
._2W52N ._1lpyl {
  width: 100%;
  padding-left: 0.53em;
  padding-right: 0.21em;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin-top: 0.65em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
._2W52N ._1lpyl ._15AXJ {
  position: relative;
  height: 6.53em;
  width: 3.82em;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  background-size: 100%;
  cursor: pointer;
}
</style>
