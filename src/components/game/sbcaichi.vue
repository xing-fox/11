<template>
  <div class="yUiBb caichi_left">
    <div class="_2atOf">
      <div class="_84vtR">
        <span class="_1Alr-">大</span>
        <span class="_2V0co">{{data.da}}</span>
      </div>
      <div class="_84vtR">
        <span class="_1Alr-">小</span>
        <span class="_2V0co">{{data.xiao}}</span>
      </div>
      <div class="_84vtR">
        <span class="_1Alr-">双</span>
        <span class="_2V0co">{{data.shuang}}</span>
      </div>
      <div class="_84vtR">
        <span class="_1Alr-">单</span>
        <span class="_2V0co">{{data.dan}}</span>
      </div>
      <div class="a63pH">
        <div class="_84vtR">
          <div class="nzA04 _3SXdD _2jchk"></div>
          <span class="_2V0co">{{data['1']}}</span>
        </div>
        <div class="_84vtR">
          <div class="nzA04 _1djDV _2jchk"></div>
          <span class="_2V0co">{{data['2']}}</span>
        </div>
      </div>
      <div class="a63pH">
        <div class="_84vtR">
          <div class="nzA04 _2mz_h _2jchk"></div>
          <span class="_2V0co">{{data['3']}}</span>
        </div>
        <div class="_84vtR">
          <div class="nzA04 _2QLgR _2jchk"></div>
          <span class="_2V0co">{{data['4']}}</span>
        </div>
      </div>
      <div class="a63pH">
        <div class="_84vtR">
          <div class="nzA04 _2WtR6 _2jchk"></div>
          <span class="_2V0co">{{data['5']}}</span>
        </div>
        <div class="_84vtR">
          <div class="nzA04 _3Xa6c _2jchk"></div>
          <span class="_2V0co">{{data['6']}}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {formatCurrency} from '@/utils/deals'
export default {
  name: 'caichi',
  data () {
    return {
      data: {}
    }
  },
  methods: {
    onSBMoneyPool: function (vo) {
      var self = this
      // console.log('即时彩池==' + JSON.stringify(vo))
      for (var name in vo) {
        self.$set(self.data, name, formatCurrency(vo[name]))
      }
    }
  },
  mounted () {
    var self = this; self.onSBMoneyPool(self.$store.state.onSBMoneyPool)
  },
  watch: {
    '$store.state.onSBMoneyPool': function () { var self = this; self.onSBMoneyPool(self.$store.state.onSBMoneyPool) }
  }
}
</script>

<style>
@-webkit-keyframes _3ujAt {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@keyframes _3ujAt {
  0% {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
  }
}
@-webkit-keyframes _1kp4Y {
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
@keyframes _1kp4Y {
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
._2atOf {
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  padding-top: 0.02em;
}
._2atOf,
._84vtR {
  display: -ms-flexbox;
  display: flex;
  width: 100%;
}
._84vtR {
  -ms-flex-pack: justify;
  justify-content: space-between;
  -ms-flex-align: center;
  align-items: center;
  height: 0.25em;
  padding: 0 0.08em;
  border-bottom: 0.01em solid #24211a;
}
.a63pH {
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: row;
  flex-direction: row;
}
.a63pH ._84vtR {
  height: 0.27em;
  padding: 0.02em 0.08em 0 0.05em;
}
._1Alr-,
._2V0co {
  font-size: 0.14em;
  font-weight: 600;
  color: hsla(0, 0%, 100%, 0.87);
}
._2jchk._2jchk {
  height: 0.2em;
  width: 0.2em;
}
.nzA04 {
  width: 30px;
  height: 30px;
}
._3SXdD {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAArdJREFUSA2tV02LE0EQrZ5MhL0uKooL3tw9ZD24F/XgD/CP5KLCXkWU/QWCN//OXhQhBtaAqxCIOLJ48JBD3Cw7H/ZrfNBT6emZaAqy1V0f71VVd2Y2ZrlcPi7L8q2I7FRVJcYYgYZwDb1ByZIkGZrFYvHdEu1sAritcPotV2bm83nV1BEDoUPyPxNJAdoEDLKYzx6ROw7okOjCgEVbiiSC0wgdEj8RfsSRvCkeduL7+WlRFA4AAQRhB6FCCNIl3idCvF/oyqhjwEj2xQeCPVQ4bdrvOvbB1lnriegOY1jujAHQRdqA9QQ0pp/viHVA057A8LNYgsHGsfKOwNYktY4JAt0k5bcfcnn8XoqTUxfSu7sn/Uf3Jbl9q3Z54NR4KJY2M5vN7Dr8iGQQ/eXHiZwfvZZ88qVWVzrYla1Xh5LcG9TselMjnk6nze15mSY7k99PX66QMiTd35OtN0f2iX9z5RhYOGOhE5xHl09+/KGRFED5p1MpbAyw8GzAh+sQfidiABcnn6GiwpgQkbZ1utW8wVHWv06MFSRt0qnjPM8l2d9tw3IxiNXdhfadOgZj8vBAcIFwliHBza4eHLiz5WXybzFyYKct4SUIVUUf9MW1bek/fyIg0IKC+i+eyeWNq65bEHDk1MDnGtqMx+NOXyeQ2X9Z5MrPXyLvRlJNvjp+M7gjYju9uL7tgHVR/t4R8iEyGo3sPvwA8ZOwZiLG1ev13NhwpszX8bH9P7+PMX4WQmKeHzQk5t/o+5gFUJPcVWH/4JxRFPRa7+NQRz54rEPGEaP2dmJlTdqvOBTDbqAh7NzXNeIQSMimgXWMLowkfiG01TpuG5UG1sS6MB3v+93lQgDEd2AfS4RfFwpbTNgtNDrOLECnnzB+Igg0cZufRdm4DLd6aA3uRxsd1BpIT4Bxa+rMxg//AO9TU8ZQqJfgAAAAAElFTkSuQmCC);
}
._1djDV,
._3SXdD {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
._1djDV {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAArtJREFUSA3tVzvPKVEU3cNErRLFV6klfoJeJBJ/QUKr81uERqMVieg0KLQ6JbkqnUKI55117l1zt+N45ZOvujsZ68x+rLXPmccZ3m63y53P57qIfF0uF/E8T4AwjoEftGUkEql4m83mVyD09QniZ40zHmgtvfV6fbk3IyYCXfadFfFBeo8YYo9iwSUylwPoMrsxcNHno4jkdBK1nz4ihDCmuEuY9RpZ759OJ0OAQpJst1uZzWZSr+OeEykWi5LNZiUWi4VNws98IIykQBgE6cM5xqzxVqvV1QVE8mAwkGq1KkEM+ZJIJKTdbks6nQ6bhJ+kj4QojnyOgRHM2D46nU4oigI0gNmj23cO8CKf/BwDzTVmxxB5ZOgURrRz9VLaMdZxlSLsgl0By+WyWV4WY6kLhYIRRBzCroMxzaXH1AJ6i8UifI5Bho72+71MJhPpdrtGG42kUinxfZ+9OJGzAcLIB4TpuDefzwP/bcBk/k1Gh58wLWwep1dJdSFqHs3IFdc65ubSjp8a/xf+qZX+8wL5lNo7N9vVJmE3YBPZcfsuZzwajZohXyh8XOHk+Fv7MUk04r3eaDSMcD6fl0wmE24syGOzd/djU2n96EKESAIMvqNkOp1KrVYLN5jRaCStVkuSyaTZLFDDJs3uhBMcXBq+X/W7FWPkEO18kPZ6vVAU55h9s9nE0HBrvpulBiENiZgN0GWMAZ8Zm2aNcz9+dcacPRAbS6lUutnVcrmciSFHH954PA53p1e6Rsd6VXQNYvhk6vf7xo1G4vF4mI861nvD4fDf2moWxzgsurO0IMajxO3zeDyaa4s6mBa++gLRASTaQlgq+IAuQ+xwOAgEYeRjPmuB5uZyBVBoC+lCTQyBVwz1bAYzXgYnL/2F0YUu4WdxNhfkLfHKrAQO86eNAaJNZK8A897EZZBf+Q2XWliKZP3TqgAAAABJRU5ErkJggg==);
}
._2mz_h {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAzhJREFUSA2tlztLJEEQx2vWxdhIREw0FsxMzRdF8CuImgoGfhYfiSCbiihmJq6BmYqJYKLeRmYGovjam19z/7na3h6dvbNgqJ56/OvRXfPIXl5eGp+fnxtmNtbpdCzLMoNDWsN/kNq1Wm0le3p6+pUHGvsJ4O8Slz6P1c4eHx87ZRXJEJ6i/+lIHdAyYIJ9pcu3KGwHPEVxYmBJVsdJ4BKKe7lk4gRireCpwPL3XP71j4+PAICjQJ6fn+36+to2NjhzZgsLCzYzM2ODg4NFkshlD4cECocIKBn3rOWTPTw8dG0gxsfHx7a6umq5DnsbHh62ZrNpk5OTRZLIBfpVIAXHXmt4jYrja29vrwiKAwlQPdn2c4GLvfC1hoc9VsYE+YrIFBKPbX0rY5381KWaslBW8OXl5dBeOdPq+fn5EBA9gVOXdB7LrxULnt3d3RVzDBgZvb6+2tnZme3v74fYJDIxMWH1el25JLmqgUPCg0Nen93e3ubyXkWw/GNMhjF58FhXdu8Dh3EqM4zlONKN+/t729zcDGq2YHp6OnTDA6OMK/Z42c3NTdc4eWVqzRasra0Vp579393dtfHx8ZR5qSwcLlpZ5QKFfdd8c89a1VfBkE0YJwCqkPY1ZUtbAa1KfVX8/v5uS0tLPaM2Nzdn6FRNFZ5dXV31tceAnp+f28HBQSiOREZHR7tGpWxK/GHLLi4uijmO2+QNvY6WDwwMhGBU6kk6ZHqgeL3W//Q+LttP5By2ra2tgD87O2tTU1MhQQS+kNL3sTLz3Dsi93Obf0fZ5eWlra+vF6e+1WrZzs6OjYyMFAcPDCi8nbjhUmv0fGU/WeuwYMM6ZQ/Y4eFhEZR7qt/e3mZZ4Aivp9WAighCVfAUSQf/jpS0fJLv46oVq3o4j9LFxcWeUWs0GkGHjb+y09PT0lMdV0HWZOy74m3Q8cl0dHQUxCQyNDRU2Hv/7OTk5G9vPUpiraDwFAHMmOn1yajRPdn7wF1fIF4BcByIViGDpwjd29tbeIqhF57s5QsPhyulwDEO5B09MAGqEP5Khorb+U2lXxjvmAr8nV7J5XZtPgRWckH4aZNCPAaKOyC7Pnk7t1/5DeKF/ex5s2G6AAAAAElFTkSuQmCC);
}
._2mz_h,
._2QLgR {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
._2QLgR {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1tJREFUSA2tVz1oFFEQnt27y4VILIwBxYA2CsZKwc5GRIQgaOdPG/TqNPZa2Ap2BishYhlBCwOKNgnBwkMwgvG08IJFsIh6ernL7fm+cb9lbvN278QM7M7bN9988/N+uAuazeZUFEX3RGSi2+1KEAQCDeEYegelHoZhJWg0Gl9coImdIO6XOO0uVj3Y2NjoZlVEILRP/qcjRZBmESNYns0tkS4HtE/SiYGLc0U4kZyT0D6xjrADx+BZeMyT3/oXO52OEgBAElbgS4Qkg+BtIOBtottanSaGg52z3bBEwNhAsFk7eGxhWjEmfRK129L68Emasw/VXL54ToZPnZSgVNJvEGtAxX2W37NzXpyPO1hbW8vc1c2XS/Jz5qZE69/UNxwfk9G5uzJ09HAPV/PVkjRmbm3DlSeP9OBsR0KUj3X2PZvzzxIyMCABVM+2UrfmF7y4NCdjQeuuRssgNiPOqSH1giOwkDwcMdRcGugQk8yMY2iQl69dEbSXgnHpwlnFw44Hvnk42Im1OqjVav5rCdG2tqT7+q20Hy9o7PL1q9I9eECCYlG/kaBW4TZXGieHJqQbhn/tcXfUKX4Fq6ur2YFjkLvUdYSM82RQHDh0jfPIYOsXkP6D4oAfKDCJd1L3Daw70LQa6+qTQXH0zQ3stryUv67L5v1Hii+cPyOdE8ekQ+9Y+3Bbxyclim82JAVJNiM2ZbVa9d5cAJffrMjmjdvJ5YDjNPLgjjT27U1IQDhcfe/F/do/npx34KzoObbni2ME7jx5ngSFE26ulqseu5dnHeMsHDjIB80zDa2t5roBaNthM7RjkpC4YI1mzOTMVNKBENEBwMMxdKvVktL0pW03VzB12t0r7mKJ8Rhn4cDBJMHJMXSwvLzs36YuTVSya6Um0dMXmvTQ9GX5vmdU2i4ohB0quXaPvPvYg/sxtjvBKdi9kCx9gsXFxczAcMAaFuMrElnjgXNagCsUCmpruytUqzJLB7wNrGvsIyIxg1lHkKYFOC4B+RCIftSsOPccp8nhxErSNnzTxsQYxCbCuZ6KbStARBAd08TAWAGOGMxzbBPhnP7Y8xn6OcKeThRzeWILQcV1RzDQXxjriADpwP3sTMrh6viVWXET+qeNBuo0EdvEDhH3j7ru8JU/4NFbUUd4DRgAAAAASUVORK5CYII=);
}
._2WtR6 {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA1RJREFUSA2tl70vdEEUxs9da2sVIhpbE52WekOEf0HQShT+Fh+NRLQiRKcRCY0gChIN3q10CvFt3/ub5Jl39u6d3Suvk9yc2XnOcz5n7u4mr6+vte/v71UzG2w0GpYkiaERrdG/KPVSqbSYPD8//0kDDf6G406JC09j1ZOnp6dGrCIZovPkfzpSxmnMMcHaYemI3DjQeZJNDF/aK0OSc21Kh/vakyYQawVXYDh5PHD2xS9/fX25DwBy8vLyYjc3N7a6ypkzm52dtfHxcatUKt4p+7JHI+/v73Z9fe15MzMzNjExYd3d3Q4PE00eHx+bBkhWh4eHtrS0ZCnmCL29vba9vW3Dw8M+SQBlLx3jjYyMtNiWqDj77Ozs+KAEIAGqp7J2T4wn/3BZo92MybiIaHbSRTiygcOj7pSUhbJCLywsGO2VsJ6ennZEcDnJ6hhPvhULndzf3/t7rIw4JKenp7a7u+ti47BarVq5XFYuufrz89NOTk6iPFWLTu7u7tJ48VckRmSYFfYRcUM8hrGv4tx1Cknt1hDpxsPDg62trTlTRjA2Nua6EToGVJDc5G5vb5uuU7vAYIxgeXnZn3rmv7W1ZUNDQ52oTbg7XLSyyAOTuet+85m1qi/iQzbuOuGgiGh2eba0E6dF5UcVc2rn5+dbrtrU1JSBqZoiOrm6uvrRjHF6fn5ue3t7rjgSGRgY8C8GHTBArdWp8LAlFxcX/h6HbcI4/aXgyFQTnkywrq4uj2V5YIheNiGude73MUE4NOvr685ucnLSRkdHXSA2YvMswvNdODs7S+3/vUAALi8vbWVlxZ9erszm5qb19fW5oKE9a3Un7V4ur7+/v+XguW8nyDy0hvbu7+/7oFRI9RsbGw5jxqG9eNjFeGD4hivd0mocxURE4VTKHrqT4Fe26Jbv47e3N5ubm2u5MrVazT4+PhxZFeNADnmVxnhg2IZPcnx8nHuq+elzcHDgCsFhT0+PzzjWFSrP48kejY3TR0dHub3lSuhrkOvEbDwp0locxnhUEAZu+gUSArRF91czZI81Ok/AGAc8RP5kLy7aHa48AGI2UEgMHROgiMBXMlRcTz8U+gsTEvMCd8KVXGpX54fAYrrh/rQJkM46ynZAdj/U9dR+8S/v6erPS0UBJgAAAABJRU5ErkJggg==);
}
._2WtR6,
._3Xa6c {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
._3Xa6c {
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAA4tJREFUSA2tl7svfEEUx89dr05HQjSip6NVCyH+BUFJovGnWNFIROkRQSES0RCNVyGiYreiUki893c/E9/7m529wyac5N5zZs73PGfmzm7y/Pw89Pn5WTSzrkqlYkmSGBySDP9DKhcKhenk6emplAbq+gvHPyUufRqrnDw+PlZiFQkIz6PfdKQRpzHHBEuXIdMTyE8SHWNh5Ec4OHOykQxvlBFBQmC6/nZ1dWULCwuobXx83AYHB625udmNwWP/8vKSi2tpaXE4JeQHTh4eHrJW+wrk/f19m5mZsfv7e+egvb3dVldXra+vL0sSxd7ens3Oztbgent7Ld1IVR1TjAICWatycebX1tYyZwQggWKxaB8fH+4Bg7y+vp6Lkx7uy9g08sojgDEiOdqsVsdw+AaTRwW/QmWmoFNTU0Z7RchjY2Mue+xwDDaGw873qVgu8VKpFC3t9fXVjo6ObHNz08UmQE9PT7a5lJBwGxsbVbimpiZBanhye3ubu7l8pNqlTvg6XxZOc+CZk51kuDvHlA4x4drwtS6hoRzIccixh2K4qsCxzYWDt7c3u7u7s8XFRYY2Ojpq/f39phYqMVod4gYGBqyhoaGqYufk65Xc3NxE1/j4+Njm5uayo8LmWllZse7ubt+H1Yvzjdyupr3hA4hNpY8HY2RVL3y9OOHF3ScT45C0XuE8Y1qMA6henAN7r2jF7+/vNjk5WXOOR0ZGDJ0yrxcnvHhyeXkZXWNAp6entrW15XIlkc7Ozpoq83AdHR3Zd1pd0WZ0/OzsLDvHXiecCICPPA+kL5UbpC//eCCzi6EQ5yaDV133sZ8xyYgkuwrSwMLRAemEhQsH//Y+BpBem7a0tOTsh4eHjatOTlUxyjycMwpeme3JyUnWaibljPZeXFzY/Px8dqQ4x8vLy27DqSrae35+notra2tzSWbB0q4oRvQ+xuH29nYWlMQ5x1RPclpH5BgOH0qQgLKBR+9jlDHCif/EcATFD8lBqhYevY/5Tk9MTNSc46GhIfcbC4c8/N6K4fiGE4QEwic5PDz8v02D1Mn0+vradnd3nYYAra2tzpkPFW5nZ6cGpypRSHb84OAgd3MBxCGbTLcRXdCaofeJ9QSHU3XDDwQWf5r79j5WewgYGjKWEzhY4Rw451UVODUop4Z1/YXxDcPAjH/SK5cUV2ZXT6cT7k+bFOKhI6piDv4LKqe20/8A7JvrjAykl0MAAAAASUVORK5CYII=);
}
._2gBJt {
  background-image: url(data:image/png;base64,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);
}
._2gBJt,
.DS5Nz {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
.DS5Nz {
  background-image: url(data:image/png;base64,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);
}

._2T_hq,
.UF0-_ {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}

._1TlBd,
.dIHcl {
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 100% 100%;
}
</style>
