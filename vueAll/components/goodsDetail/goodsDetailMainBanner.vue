<template>
    <div class="f-banner">
        <div class="swiper-container" id="swiper-container1">
            <div class="swiper-wrapper">
                <div class="swiper-slide" :slidx="index" :slide="m" v-for="(m,index) in imgslide"><img :src="m"></div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination" id="swiper-pagination1"></div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:["imgslide"],
        methods:{
            slideImg:function(){
                var mySwiper1 = new Swiper('#swiper-container1',{
                    pagination: '#swiper-pagination1',
                    paginationType : 'bullets',
                    observer:true,//修改swiper自己或子元素时，自动初始化swiper
                    observeParents:true//修改swiper的父元素时，自动初始化swiper
                })
            }
        },
        mounted:function () {
            this.slideImg();
        }
    }
</script>

<style scoped>
    .f-banner{
        width:100%;
    }
    .f-banner .swiper-container{
        width:100%;
    }
    .f-banner .swiper-container img{
        width:100%;
    }
    .f-banner .swiper-pagination{
        top:90%;
    }

    /*banner*/
</style>