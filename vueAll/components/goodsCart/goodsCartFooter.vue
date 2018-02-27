<template>
    <footer class="f-footer">
        <div><div class="f-check" @click="checkgood()"><span v-show="istrue" class="checkbg"></span></div>全选</div>
        <div>
            <p>实付金额：￥{{tm}}</p>
            <p>节省：￥{{dm}}</p>
        </div>
        <div><a href="javascript:;">去结算{{"("+tn+")"}}</a></div>
    </footer>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["checkgood","istrue","tn","tm","dm"]
    }
</script>

<style scoped>
    span.checkbg{
        display: block;
        border-radius: 50%;
        width:0.19rem;
        height:0.19rem;
        background: url("../../assets/img/goodsImg/icon.png");
        background-size: 100%;
        border:none;
        position: relative;
        left:-0.01rem;
        top:-0.01rem;
    }
    .f-footer{
        height:0.58rem;
        border-top: 1px solid #e6e6e6;
        width:100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #FFFFFF;
        font-size: 14px;
        padding:0 0.14rem;
        box-sizing: border-box;
    }
    .f-check{
        width:0.17rem;
        height:0.17rem;
        border:1px solid #c0c0c0;
        display: inline-block;
        border-radius: 50%;
        margin-right: 0.14rem;
    }
    .f-footer > div:first-child{
        color: #252525;
    }
    .f-footer > div:nth-child(2) p:first-child{
        color: #f81f33;
        font-size: 13px;
    }
    .f-footer > div:nth-child(2) p:last-child{
        color: #949494;
        font-size: 13px;
    }
    .f-footer .f-check{
        margin-right: 0.05rem;
        position: relative;
        top: 5px;
    }
    .f-footer a{
        display: block;
        width:0.91rem;
        height:0.3rem;
        border-radius: 0.18rem;
        background: #f83244;
        line-height: 0.3rem;
        text-align: center;
        color: #FFFFFF;
    }
</style>