<template>
  <div class="_15AXJ moddle-part"
       @mouseover="enter"
       @mouseleave="leave"
       @click='enterGameHall'
       role="presentation">
    <div class="gHJIJ"></div>
    <div class="_32V79 _38ffd"
         :class="active? '_3rBzh' : '' "></div>
    <div class="_2r6Vf"
         :class="active? '_1ZjyC' : '' ">
      <span class="_2avQ6">真人厅</span>
    </div>
    <div class="_27621">
      <div class="_1T7iQ"
           role="button"
           tabindex="0"
           v-show="active">
        <span class="_16jrb">立即进入</span>
      </div>
    </div>
    <div class="_PSNi _77Szs _3zheu"
         :class="active? '_3rBzh' : '' "></div>
    <div class="_3Ds4v"></div>
  </div>
</template>
<script>
export default {
  name: 'middle',
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
    },
    enterGameHall: function () {
      this.$store.commit('GAMEREADY', false)
      this.$store.dispatch('SetuPage', 'GAMEHALL')
      var storage = window.localStorage
      var flag = storage.getItem('first')
      if (!flag) {
        this.$store.commit('FIRSTNOTICED', true)
        this.$store.commit('HALLNOTICE', '1')
        storage.setItem('first', true)
      }
    }
  }
}
</script>
<style>
</style>
