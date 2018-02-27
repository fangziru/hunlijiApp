<template>
    <div class="all">
        <header-all></header-all>
        <section-all :list="shopList"></section-all>
        <footer-all></footer-all>
    </div>

</template>
<script type="text/ecmascript-6">
    import sectionAll from "../components/index/section.vue";
    import footerAll from "../components/public/indexFooter.vue";
    import headerAll from "../components/public/indexHeader.vue";
    import shopApi from "../api/indexApi";


    export default {
        components:{
            sectionAll,
            footerAll,
            headerAll
        },
        created:function(){
            this.initData();
        },
        methods: {
            initData:function(){
                shopApi.getData((data)=>{
                    this.shopList=data;
                })
            }
        },
        data(){
            return{
                shopList:[]
            }
        }
    }
</script>

<style scoped>
    .all{
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
</style>