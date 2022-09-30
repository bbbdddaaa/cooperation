<template>
  <div class="dashboard-container">
    <div class="left">
      <div class="left-top">
        <div class="bgc1" />
        <div class="bgc2" />
      </div>
      <div class="left-bottom" />
    </div>
    <div class="right">123</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Home',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard-container {
  display: flex;
  .left {
    .left-top {
    display: flex;
      .bgc1 {
          margin: 30px 20px;
          width: 482px;
          height: 166px;
          border-radius: 10px;
          background-color: skyblue;
      }
      .bgc2 {
          margin: 30px 20px 30px 0;
          width: 405px;
          height: 166px;
          border-radius: 10px;
          background-color: pink;
      }
    }
    .left-bottom {
      margin-left: 20px;
      width: 906px;
      height: 352px;
      border-radius: 10px;
      background-color: greenyellow;
    }
  }
  .right {
    margin: 30px 0;
    width: 289px;
    height: 538px;
    border-radius: 10px;
    background-color: yellow;
  }
}
</style>
