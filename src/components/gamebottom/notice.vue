<template>
  <div class="JUjOz">
    <div class="_3xGxe">
      <div class="_1lzPa"></div>
      <div class="_2pzK-">
        <div class="_23aeU">
          <div class="_2EMC5"
               style="animation-duration: 31.6423s;">
            <div class="_1tmpW">
              <div class="_36YXH"> 2020/02/10 12:55 请各会员注意:小心保护自己的会员之账号,切勿使用太简单的组合密码并经常更改密码。</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  name: 'notice',
  data () {
    return {
    }
  },
  methods: {
  },
  watch: {
    '$store.state.hallnotice': function () {

      if (this.$store.state.hallnotice == "0" || this.$store.state.hallnotice == "2") {
        this.chipnotice = false
      } else if (this.$store.state.hallnotice == "1") {
        this.chipnotice = true

      }
    },
    '$store.state.page': function () {
    }
  },
}
</script>

<style scoped>
@import "../../assets/style/footer.css";
</style>
