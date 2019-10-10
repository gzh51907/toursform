<template>
  <div class="box">
    <div class="block">
      <el-carousel height="280px" arrow="never" indicator-position="none">
        <el-carousel-item v-for="item in img" :key="item.url">
          <img :src="item.url" class="banner" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-nav">
        <el-row>
            <el-col v-for="item in 4" :key="item" :span="6">
                <span class="nav-img"></span>
                <i>途风精品</i>
            </el-col>
        </el-row>
        <el-row>
            <el-col v-for="item in 4" :key="item" :span="6">
                <span class="nav-img"></span>
                <i>途风精品</i>
            </el-col>
        </el-row>
    </div>
    <div class="ad">
        <img src="../assets/images/750×180.jpg">
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
        img:[{
            url:require('../assets/images/banner1.jpg'),
        },{
            url:require('../assets/images/banner2.jpg'),
        },{
            url:require('../assets/images/banner3.jpg'),
        },{
            url:require('../assets/images/banner4.jpg'),
        },{
            url:require('../assets/images/banner5.jpg'),
        }],
        nav:[{

        }]
    }
  },
  created(){
     
  },
    
};
</script>
<style scoped>
.banner {
  max-width: 100%;
}
.home-nav{
    margin-top: 28px;
}
.home-nav{
    font-size: 14px;
    font-family: "Microsoft Yahei","-apple-system","Helvetica Neue",Roboto,"Segoe UI",sans-serif;
}

.el-row{
    margin-top: 10px;
}
.el-col{
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-items: center;
    align-items:center;
}
.nav-img{
    display: block;
    width: 72px;
    height: 72px;
    background: url("../assets/images/home-nav.png") no-repeat;
    background-size: 320px 184px;
    background-position: 0 0;
}
.ad{
    text-align: center;
    margin-top: 10px;
}
.ad img{
    max-width: 330px;
    margin:10px auto; 
}
.el-col:nth-of-type(1) .nav-img{
    background-position: -144px -72px;
}
.el-col:nth-of-type(2) .nav-img{
    background-position: 0 -72px;
}
.el-col:nth-of-type(3) .nav-img{
    background-position: -72px 0;
}
.el-col:nth-of-type(4) .nav-img{
    background-position: -144px 0;
}
.el-row:nth-of-type(2) .el-col:nth-of-type(1) .nav-img{
    background-position: -216px 0;
}
.el-row:nth-of-type(2) .el-col:nth-of-type(2) .nav-img{
    background-position: -72px -72px;
}
.el-row:nth-of-type(2) .el-col:nth-of-type(3) .nav-img{
    background-position: 0 0;
}
.el-row:nth-of-type(2) .el-col:nth-of-type(4) .nav-img{
    background-position: -216px -72px;
}
</style>