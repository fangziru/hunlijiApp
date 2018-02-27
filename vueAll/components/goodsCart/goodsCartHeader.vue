<template>
    <header class="f-header">
        <a href="javascript:;" @click="changeshopcarpage()"><i class="iconfont icon-qianjin-copy"></i></a>
        <span>{{title}}</span>
        <a href="javascript:;"><i class="iconfont icon-xiaoxi"></i></a>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["title"],
        methods:{
            changeshopcarpage:function(){
                this.$router.go(-1)
//                location.reload();
            }
        }
    }
</script>

<style scoped>
    .f-header{
        width:100%;
        height:0.5rem;
        background: #FFFFFF;
        display: flex;
        padding:0 0.17rem;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        font-size: 20px;
        border-bottom: 1px solid #f0f0f2;
    }
    .f-header span{
        color: #383838;
        font-weight: 500;
    }
    .f-header a i{
        font-size: 20px;
        color: #f93143;
    }
</style>