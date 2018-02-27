<template>
    <header class="header">
        <div class="f-bg"></div>
        <div class="f-head-con">
            <a href="javascript:;" @click="changegoodslistpage()"><i class="iconfont icon-qianjin-copy"></i></a>
            <div class="f-head">
                <a href="javascript:;"><i class="iconfont icon-xiaoxi"></i></a>
                <a href="javascript:;"><i class="iconfont icon-shiliangzhinengduixiang42"></i></a>
                <a href="javascript:;" @click="changeShopCart()"><i class="iconfont icon-gouwuche"></i></a>
            </div>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
        methods:{
            changeShopCart:function(){
                this.$router.push("/shopcarpage")
            },
            changegoodslistpage:function(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .header{
        width: 100%;
        z-index: 999;
        height:0.5rem;
        position: absolute;
    }
    .header .f-bg{
        position: absolute;
        width:100%;
        height:100%;
        opacity:0;
        background: #FFFFFF;
        z-index: 0;
    }
    .header .f-head-con{
        position: absolute;
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        z-index: 999;
        padding:0 0.12rem;
        box-sizing: border-box;
    }
    header .f-head-con a{

        color: #FFFFFF;
    }
    header .f-head-con a i{
        font-size: 20px;
    }
    header .f-head-con .f-head a{
        margin-left: 0.27rem;
    }
</style>