<template>
  <div class="LUSC0">
    <div class="_2m4z6"
         @click='back'></div>
    <span class="_3ny3q">自定筹码</span>
    <div class="_3JL2h">
      <div class="_3tl4f">
        <span>请选择至多12个筹码</span>
      </div>
      <div class="_1v3Pj">
        <template v-for="(chip,index) in chips">
          <div class="fggh3">
            <div class="_2YIp6 _28ITJ"
                 role="button"
                 tabindex="index"
                 :key='index'
                 @click="isSelected($event,index)"
                 :disabled="init_chips.indexOf(index)>-1?false:true">
              <div :class="'chip-one-'+index"></div>
            </div>
            <div class="_3hNcV"
                 v-show="ishow(index)"> </div>
          </div>
        </template>
      </div>
    </div>
    <div class="_2-Sua">
      <div role="presentation"
           @click='back'
           class="JWtoK _3dJXs">
        <div class="_2mZGu">返回默认</div>
      </div>
      <div role="presentation"
           :disabled="isClick"
           @click='changeChip'
           class="JWtoK _25ceV">
        <div class="_2mZGu">确定</div>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import {chips} from '@/utils/deals'
export default {
  name: 'allchip',
  data () {
    return {
      chips :chips,//总共筹码
      init_chips :[],//底部筹码
      selected:{},
      change_index:[],
      isClick:false
    }
  },
  methods: {
    ishow:function(index){
      var self = this
      self.selected[index] = self.init_chips.indexOf(index)>-1?true:false;
      return self.selected[index]
    },
    isSelected:function(e,index){
      //console.log(e.currentTarget.getAttribute('disabled'));
      if(e.currentTarget.getAttribute('disabled')){
        return
      }
      var ele = e.currentTarget.nextElementSibling.style.display;
      var change_index = this.init_chips.indexOf(index)
      if(ele =='none'){
        ele='block';
        this.change_index.pop()
      }else{
        ele='none'
        this.change_index.push(change_index)
      }
      if(this.change_index.length>1){
        this.isClick = true;
      }else{
        this.isClick = false;
      }
      e.currentTarget.nextElementSibling.style.display=ele
      
    },
    back:function(){
      this.$store.dispatch('ShowChip', false)
    },
    changeChip:function(){
      this.back()
      this.$store.dispatch('ChangeChipIndex', this.change_index)
    }
  },
  mounted(){
     this.init_chips =this.$store.getters.messArray_get;
      //console.log("messArray_get "+this.$store.getters.messArray_get)
  },
  // computed:{
  //   ...mapGetters([
  //     'messArray_get'
  //   ])
  // },
  // watch: {
  //   messArray_get: function(val){
  //     console.log("messArray_get "+val)
  //   }
  // },

}
</script>

<style scoped>
@import '../../assets/style/dialog.css';
@import '../../assets/style/chip.css';
</style>
