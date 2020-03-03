<template>
  <div class="DgQY7">
    <div class="_3wL9_">
      <div class="_5GT4F"><span class="ripple text-l center-block kkGYm"
              @click="closed"
              role="button">我知道了</span>
        <span class="ripple text-l center-block kkGYm"
              v-if='hallnotice=="1"||hallnotice=="2"'
              @click="next"
              role="button">{{text}}</span></div>
      <!-- {{text[hallnotice]}} -->
      <div class="_3IaNO">
        <div class="_17j8i a4Lrc"
             role="button"
             tabindex="0"></div><span class="_1NMHb"
              role="button"
              tabindex="0">不再显示</span>
      </div>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  name: 'firstnotice',
  data () {
    return {
      tooltip: false,
      page: 'GGBAR',
      img: "",
      text: '下一页',
      hallnotice: 1
    }
  },
  methods: {
    closed: function () {
      this.$store.commit('FIRSTNOTICED', false);
      this.$store.commit('HALLNOTICE', '0')
      this.hallnotice = 0
    },
    next: function () {
      if (this.hallnotice == 1) {
        this.$store.commit('HALLNOTICE', '2');
        this.hallnotice = 2
        this.text = '上一页'
      } else if (this.hallnotice == 2) {
        this.hallnotice = 1
        this.$store.commit('HALLNOTICE', '1');
        this.text = '下一页'
      }
    }
  },
  mounted () {
    this.page = this.$store.state.page;
    this.hallnotice = this.$store.state.hallnotice
  },
  watch: {
    '$store.state.hallnotice': function () {
      this.hallnotice = this.$store.state.hallnotice
    },
  },
}
</script>

<style scoped>
@-webkit-keyframes _338z7 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _338z7 {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _8Cf0Z {
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
@keyframes _8Cf0Z {
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
.DgQY7 {
  height: 100%;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  z-index: 15000;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  min-width: 0;
}
._3wL9_,
.DgQY7 {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
  position: absolute;
}
._3wL9_ {
  left: 0;
  right: 0;
  bottom: 0.7em;
  z-index: 15500;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 0.76em;
}
._5GT4F,
._5GT4F .kkGYm {
  display: -ms-flexbox;
  display: flex;
}
._5GT4F .kkGYm {
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  width: 9.42857em;
  height: 2.28571em;
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  background-color: #24211a;
  border-radius: 7.14286em;
  outline: none;
}
._5GT4F .kkGYm:nth-child(2) {
  margin-left: 1.71429em;
}
._5GT4F .kkGYm:last-child {
  background-color: #7d7254;
}
._5GT4F .kkGYm:focus,
._5GT4F .kkGYm:hover {
  color: #fff;
  text-decoration: none;
  outline: none;
  background-color: #bbaa7d;
}
._3IaNO {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: center;
  justify-content: center;
  height: 0.2em;
}
._17j8i {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 0.2em;
  height: 0.2em;
  background-size: contain;
  margin-right: 0.07em;
  border: 0.01em solid hsla(0, 0%, 100%, 0.87);
  border-radius: 100%;
  outline: none;
}
._17j8i.a4Lrc {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAABJlBMVEUAAAAC6akGu4wA5aYA0JYA5aYAuoYA7awB0JYA36EByJEA7asCtIMB0JUA56kEvIwB56gCv4sA67EPxIkAuYcAw40A6agA4KEAv4kAtoMA7asB2Z0AsoEA76wAsIAB3aABwIwBtIIAr4ACs4EA7qwB1JoCv4sA8K0BsoABx5AAxpAAuIQAuYUAwYv///8A1psA0JYAxY4A3J4AyZEAvYkA56YA3qAA05gA5KQA66oA4qMAu4cAtYIA2p0As4EAy5MA4KIAzZPO8ugH0JggvZISuIn3/Pvv+vfm+PPf9vDW9OuT6dFRzqwP0JnE7+O78eKv792b7NWI6c6D28JX579M57s81qtBx6Ib0J42w5wtwJi36Nul7tl56Mlq58R01rpm0rQ64LEvubXDAAAALHRSTlMAHBzUs7KynJmDgn9/ZCoqJCQNDdT99/f399XV1bOzn5+fmYaFf39kZNXV1P4I40sAAAINSURBVDjLndBnd6JAFIDhEWOJGktM7z3Z3RkCMmoEdhFLEjVuet3+///E3ssoCAE/5JHjXOA9MAfyUcXjbGpzM5U9Lk6r8gdrDdfaQT4ii6UaAalYWJddaqBqo4pggXkpS4LmE9VQifnAa+NnoHpWhcO/xmO+50EXJT75zIQ+RcLrZpu63tSbPrp3bdbd4HJtquXxNrcrtQocNTgqwJtrj4/Oui26fCXKgyw/OENe7PBrhN8y+IeT2OX6abhf2A0UHNexK0Z0d9jdM7uOJ0UI5+r1UziBP3dFt9j9oariXJuD8LAeov0Tu7+UaUodHUKYVoS7geJq32B3hZ2QhnBGjANZvh13w2vIzrGzFWHGDZ9kcNNWFFuxhy2YL54pUy0LTvEahmkLqVfncPe6DeNLH7tX6DRLsC18dcayNEtTjWcsvw+1lx6sl29Opzn3QAY/j4ZUTl8voGg9XcJ/r4PdBPw8JREyTt+wQf0O5arqlapWIuCTirDs9Jyu1aWcqZM+E5QRHWMG7fRxn9j5wwxBhUWGnLLbkn+Y1GB+iwXi2GEjnNLuPXQ8EO4QQVphnDP4cShNSvkoxEtoRSIjR3zMoJQaBvc7Iq6kMUIxDEgST3mBRlookwnSl8hOIj7lJBVMaiJYnDlZJkG5VfOd1RwJIe1+C9iVSLjC/oZXbewXyBSlk9ze1tZe7qREPug/pOjhd0cY6YcAAAAASUVORK5CYII=);
  border: none;
}
._1NMHb {
  font-size: 0.14em;
  color: hsla(0, 0%, 100%, 0.87);
  text-transform: capitalize;
  outline: none;
}
</style>
