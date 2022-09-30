<template>
  <div class="navbar">
    <!-- <hamburger class="hamburger-container" /> -->
    <!-- <breadcrumb class="breadcrumb-container" /> -->
    <img src="../../assets/common/logoone.png" alt="" class="logoImg">
    <div class="right-menu">
      <div class="avatar-container">
        <div class="avatar-wrapper">
          <img v-if="userInfo.image" :src="userInfo.image" class="user-avatar">
          <img v-else src="../../assets/common/user.png" class="user-avatar">
          <span @click="logout"><span style="margin:0 10px">欢迎您, {{ userInfo.userName }}</span> 退出</span>
          <i class="el-icon-caret-bottom" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
// import Breadcrumb from '@/components/Breadcrumb'
// import Hamburger from '@/components/Hamburger'

export default {
  components: {
    // Breadcrumb
    // Hamburger
  },

  computed: {
    ...mapGetters([
      'sidebar',
      'avatar',
      'userInfo'
    ])
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    async logout() {
      await this.$store.dispatch('user/logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  overflow: hidden;
  position: relative;
  background: #5373e0;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
  .logoImg {
    margin: 10px 0 0 15px;
    width: 88px;
    height: 35px;
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }

  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;
    color: #fff;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background .3s;

        &:hover {
          background: rgba(0, 0, 0, .025)
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          vertical-align: middle;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -15px;
          top: 20px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
