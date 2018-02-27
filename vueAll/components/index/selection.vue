<template>
    <div class="selection">
        <a href="#" class="one">
            <img src="../../assets/img/limeng/p7.jpg" style="width:37px;height:37px;"/>
            <h4><span>{{pro.title}}</span><span>婚礼跟妆</span></h4>
            <p>关注</p>
        </a>
        <a href="#" class="two"><img :src="pro.pic" style="width:100%;height:235px;"/></a>
        <h5>{{pro.intro}}</h5>
        <h6><span>{{pro.price}}</span>
            <a href="#">
                <i class="iconfont icon-shoucang"></i>
                <span> 收藏</span>
            </a>
        </h6>
    </div>

</template>
<script type="text/ecmascript-6">
    export default {
        props:["idx","pro"]
    }
</script>

<style scoped>

</style>