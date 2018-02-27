<template>
    <div class="f-bottom-bg">
        <div><i class="iconfont icon-close"></i><br/>请选择规格</div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped>
    .f-bottom-bg{
        width:100%;
        height:100%;
        position: absolute;
        z-index: 9999999;
        background: rgba(148,148,148,0.3);
        display: none;
    }
    .f-bottom-bg div{
        width:1.01rem;
        height:0.78rem;
        position: absolute;
        left:50%;
        top:50%;
        margin-left: -0.5rem;
        margin-top: -0.3rem;
        background: #FFFFFF;
        text-align: center;
        font-size: 14px;
        color: #000000;
        padding-top: 0.14rem;
        box-sizing: border-box;
        line-height: 0.25rem;
        border-radius: 0.12rem;
    }
    .f-bottom-bg div i{
        font-size: 25px;
        margin-bottom: 0.12rem;
    }
</style>