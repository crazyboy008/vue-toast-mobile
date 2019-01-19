<template>
  <transition name="toast-fade">
    <popup :mask="mask" v-show="showValue">
      <div class="toast-box">
        <loading v-show="type==='loading'" class="loading"></loading>
        <div class="toast-tip" v-html="content"></div>
      </div>
    </popup>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Popup from './popup.vue'
  import Loading from './loading.vue'

  export default {
    components: {
      Loading,
      Popup
    },
    props: {
      type: String,
      time: {
        type: Number,
        default: 2000
      },
      mask: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        showValue: false
      }
    },
    methods: {
      show() {
        this.showValue = true
        this.clearTimer()
        this.$nextTick(() => {
          if (this.time !== 0) {
            this.timer = setTimeout(() => {
              this.hide()
              this.$emit('timeout')
            }, this.time)
          }
        })
      },
      hide() {
        this.showValue = false
        this.clearTimer()
      },
      clearTimer() {
        clearTimeout(this.timer)
        this.timer = null
      }
    },
    beforeDestroy () {
      this.clearTimer()
    },
    watch: {
      showValue(newVal) {
        this.$emit('on-change', newVal)
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .toast-fade-enter-active, .toast-fade-leave-active {
    transition: all 0.3s;
    opacity: 1;
  }
  .toast-fade-enter, .toast-fade-leave-to {
    opacity: 0;
  }
  .toast-box {
    line-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: hsla(0,0%,7%,.7);
    color: #fff;
    text-align: center;
    padding: 20px 30px;
    border-radius: 10px;
    .loading {
      padding-right: 20px;
    }
    .toast-tip {
      display: inline-block;
      font-size: 34px;
    }
  }
</style>
