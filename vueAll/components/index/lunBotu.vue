<template>
    <div class="l-lunbo">
        <div class="swiper-container footer1" style="margin:0 auto;">
            <div class="swiper-wrapper">
                <div class="swiper-slide slid">
                    <img src="../../assets/img/limeng/banner1.jpg"/>
                </div>
                <div class="swiper-slide slid">
                    <img src="../../assets/img/limeng/banner2.jpg"/>
                </div>
                <div class="swiper-slide slid">
                    <img src="../../assets/img/limeng/banner3.jpg"/>
                </div>
                <div class="swiper-slide slid">
                    <img src="../../assets/img/limeng/banner4.jpg"/>
                </div>
                <div class="swiper-slide slid">
                    <img src="../../assets/img/limeng/banner5.jpg"/>
                </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination btn1" style="position:relative;top:-24px; "></div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">

    export default {
        mounted:function(){
            var swiper = new Swiper('.footer1', {
                pagination: '.btn1',
                autoplay: 2000,
                effect: 'coverflow',//切换效果为：3d流
                grabCursor: true,//鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状
                centeredSlides: true,
                slidesPerView: 'auto',
                coverflow: {
                    rotate: 30,//slide做3d旋转时Y轴的旋转角度。默认50。
                    stretch: 20,//每个slide之间的拉伸值，越大slide靠得越紧。 默认0。
                    depth: 100,//slide的位置深度。值越大z轴距离越远，看起来越小。 默认100。
                    modifier: 1,//depth和rotate和stretch的倍率,值越大这三个参数的效果越明显。默认1。
                    slideShadows : false//开启slide阴影。默认 true。
                }
            });
        }
    }
</script>

<style scoped>

</style>