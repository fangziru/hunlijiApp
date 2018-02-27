<template>
    <div>
        <h1>{{item.goodstitle}}</h1>
        <p></p>
    </div>
</template>

<script type="text/ecmascript-6">
    import goodsListApi from "../api/indexApi";

    console.log(3)
    export default {
        data(){
            return {
                item:{}
            }
        },
        methods:{
            initData:function() {
                var {id}=this.$route.query;
                goodsListApi.getGoodsList((data) => {
                    this.item = data[id];
                })
            }
        },
        created:function(){
            this.initData()
        }
    }
</script>

<style scoped>

</style>