<template>
  <div id="bigbox">
    <router-view></router-view>
    <el-menu :default-active="active" class="el-menu-demo app-nav" mode="horizontal" @select="handleSelect" router v-show="hid!='reg'" v-model="hid">
      <el-menu-item :index="item.path" v-for="item in menus" :key="item.name" class="nav-item"><i :class="item.icon"></i><span>{{item.text}}</span></el-menu-item>
    </el-menu>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
    return{
      active:'/home',
      hid:"",
      menus:[{
        name:"home",
        path:"/home",
        text:"首页",
        icon:"el-icon-s-home"
      },{
        name:"destination",
        path:"/destination",
        text:"目的地",
        icon:"el-icon-location"
      },{
        name:"discover",
        path:"/discover",
        text:"发现",
        icon:"el-icon-discover"
      },{
        name:"list",
        path:"/list",
        text:"订单",
        icon:"el-icon-s-order"
      },{
        name:"mine",
        path:"/mine",
        text:"我的",
        icon:"el-icon-s-custom"
      }]
    }
  },
  methods:{
    handleSelect(index) {
      this.active = index;
      // this.$router.push(index)
    }
  },
  created(){
    this.hid = this.$route.name
  },
  components: {
    
  }
}
</script>

<style>
#bigbox,#app,html,body{
  height: 100%;
  width:100%;
  margin:0;
  padding:0;
}
#bigbox{
  display:flex;
  flex-direction: column;
}
.box{
  flex:1;
  overflow-y: scroll;
}
.app-nav{
  height: 60px;
  display:flex;
  width: 100%;
  overflow:hidden;
  z-index:1000;
}
.nav-item{
  display: flex;
  padding:0 !important;
  text-align: center;
  justify-items: center !important;
  align-items: center !important;
  flex:1;
  flex-direction: column;
}
.nav-item span{
  line-height: 25px;
}
.nav-item i{
  line-height:35px;
  font-size: 24px !important;
  margin-right: 0 !important;
  text-align: center
}
.reg-box{
  flex:1;
  overflow-y: scroll;
}
</style>
