<template>
    <header>
        <div class="head-Top">
            <a href="javascript:;" @click="changeIndex()"><i class="iconfont icon-qianjin-copy"></i></a>
            <h1>{{title}}</h1>
            <div class="hea-R">
                <a href="javascript:;"><i class="iconfont icon-fangdajing"></i></a>
                <a href="javascript:;" @click="changeshopcartpage()"><i class="iconfont icon-gouwuche"></i></a>
            </div>
        </div>
    </header>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["title"],
        methods:{
            changeshopcartpage:function(){
                this.$router.push("/shopcarpage")
            },
            changeIndex:function(){
                this.$router.go(-1)
            }
        }

    }
</script>

<style scoped>


    header{
        width:100%;
        height:auto;
    }
    .head-Top{
        width:100%;
        height:0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding:0 0.13rem;
    }

    header a .iconfont{
        color: #f52e41;
        font-size: 20px;
    }
    header h1{
        font-size: 18px;
        color:#000;
        text-indent: 0.3rem;
    }
    .hea-R a:first-child{
        padding-right:0.23rem;
    }
</style>