<template>
<div class="box">
    <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="item" :name="item" v-for="item in listTab" :key="item" class="tab-item">
            <div class="wait">
                <img src="../assets/images/rabbit.jpg">
                <p>暂无订单信息</p>
            </div>
        </el-tab-pane>
    </el-tabs>
    
</div>

</template>
<script>
    export default{
        data(){
            return{
                activeName:'全部订单',
                listTab:["全部订单","待付款","未出行","待评价","退款"]
            }
        },
        methods:{
            handleClick(){

            }
        }

    }


</script>
<style scoped>
    .wait{
        width: 100%;
        text-align: center
    }
    .wait img{
        max-width: 60%;
    }

</style>