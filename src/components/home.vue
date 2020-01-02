<template>
    <div  class="homeBox">
        <el-container>
            <el-header>
                <div>
                    <img src="../assets/heima.png" alt />
                    <span>兴利超市</span>
                </div>
                <el-button type="info" >退出</el-button>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <!-- 折叠侧边栏 -->
                    <div class="toggleBtn">
                    <span>|||</span>
                    </div>
                    <!-- unique-opened 只保持一个菜单展开 -->
                    <!-- 折叠侧边栏collapse和关闭侧边栏动画collapse-transition -->
                    <el-menu
                    background-color="#333744"
                    text-color="#fff"
                    active-text-color="#409EFF"
                    unique-opened
                    :collapse-transition="false"
                    router
                    >
                    <!-- 一级表单 -->
                    <!-- 一定要记得属性的绑定 -->
                    <el-submenu v-for="item in data" :key="item.id" :index="item.id+''">
                        <!-- 一级表单模板区域 -->
                        <template slot="title">
                        <span>{{item.title}}</span>
                        </template>
                        <!-- 二级表单 -->
                        <!-- 将index作为每个二级菜单跳转地址 -->
                        <el-menu-item >
                            {{item.title2}}
                        </el-menu-item>
                    </el-submenu>

                    </el-menu>
                </el-aside>
                <el-main>
                       <!-- 路由占位符 -->
        <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
  data () {
    return {
      data: [
        { id: 1, title: '个人信息', title2: '个人信息' },
        { id: 2, title: '商品管理', title2: '商品分类' },
        { id: 3, title: '个人信息', title2: '个人信息' },
        { id: 4, title: '个人信息', title2: '个人信息' }
      ]
    }
  },
  methods: {},
  created () {}
}
</script>
<style lang="less" scoped>
.homeBox {
  height: 100%;
}
.el-header {
  background: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  color: #ffffff;
  font-size: 20px;
  div {
    display: flex;
    align-items: center;
    span {
      padding-left: 15px;
    }
  }
}
.el-aside {
  background: #333744;
  .el-menu {
    border-right: none;
  }
}
.el-main {
  background: #eaedf1;
}
.el-container{
    height:100%;
}
.toggleBtn {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  text-align: center;
  letter-spacing: 0.2em;
  cursor: pointer;
}
</style>
