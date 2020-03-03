<template>
  <div class="_1xWk6 logo">
    <div class="_3qiwk">
      <div class="_35NyS Yzv5p"
           style="background-size: 0.48em 0.48em;"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tubiao',
  data () {
    return {
      enterstate: 1,
      active: 0
    }
  },
  methods: {
    enter: function () {
      this.enterstate = 1
      console.log('ooo')
    },
    leave: function () {
      this.enterstate = 0
    },
    enterone: function ($event) {
      $event.currentTarget.className = '_31gC6 _1_E-g'
    },
    leaveone: function ($event) {
      $event.currentTarget.className = '_31gC6'
    },
    clickone: function ($event, index) {
      this.active = index
      console.log(this.active)
    }
  }
}
</script>

<style scoped>
@import '../assets/style/tubiao.css';
</style>
