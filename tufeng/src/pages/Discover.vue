<template>
<div class="box">
    <h4 class="title">发现</h4>
    <el-tabs :tab-position="tabPosition" style="height:100%">
        <el-tab-pane :label="item.tabTitle" v-for="item in tab" :key="item.tabTitle" class="dis-tab">
            <ul class="tab-list">
                <li v-for="ele in list" :key="ele" >{{ele}}</li>
            </ul>
        </el-tab-pane>
  </el-tabs>
</div>

</template>
<script>
    export default{
        data(){
            return{
                tabPosition: 'left',
                tab:[{
                    tabTitle:"美国东海岸",
                },{
                    tabTitle:"美国西海岸",
                },{
                    tabTitle:"佛罗里达州",
                },{
                    tabTitle:"夏威夷州",
                },{
                    tabTitle:"美国其它目的地",
                },{
                    tabTitle:"加拿大",
                },{
                    tabTitle:"欧洲",
                },{
                    tabTitle:"澳洲",
                },{
                    tabTitle:"新西兰",
                },{
                    tabTitle:"亚洲",
                },{
                    tabTitle:"游轮",
                },{
                    tabTitle:"其他",
                }],
                list:["纽约","华盛顿","费城","波士顿","迈阿密","芝加哥","奥兰多"]
            }
        }

    }


</script>
<style scoped>
    .title{
        height: 44px;
        text-align: center;
        line-height: 44px;
        margin:0;
        font-size: 18px;
        border-bottom: 1px solid #e5e5e5;
    }
    .tab-list{
        list-style: none;
        padding-left: 0;
        margin:10px auto;
        width: 80%;
        display:flex;
        flex-wrap: wrap;
        justify-items:space-between;
    }
    .tab-list li{
        width: 44%;
        height: 36px;
        line-height: 36px;
        background:#e5e5e5;
        text-align: center;
        margin-right: 10px;
        margin-top:10px;
    }
    .el-tabs>>>.el-tabs__header{
        width:33%;
        text-align: center;
        background:#e5e5e5;
    }
    .el-tabs>>>.active{
        background:#fff;
    }
</style>