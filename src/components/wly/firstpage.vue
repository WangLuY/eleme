<template>
    <div>
        <div class="swiper">
             <swiper :options="swiperOption" ref="mySwiper" >
                <!-- slides -->
                <swiper-slide>
                    <ul class="topImg" >
                        <router-link :to="'/shangjialist?latiitude='+$store.state.dingwei.latitude+'&longitude='+$store.state.dingwei.longitude+'&name='+v.title" tag="li" v-for="(v,i) in foodPage1" :key="i">
                            <img :src="'https://fuss10.elemecdn.com'+v.image_url" alt="">
                            <p>{{v.title}}</p>
                        </router-link>
                    </ul>
                </swiper-slide>
                 <swiper-slide>
                    <ul class="topImg" >
                        <router-link :to="'/shangjialist?latiitude='+$store.state.latitude+'&longitude='+$store.state.longitude+'&name='+v.title" tag="li" v-for="(v,i) in foodPage2" :key="i">
                            <img :src="'https://fuss10.elemecdn.com'+v.image_url" alt="">
                            <p>{{v.title}}</p>
                        </router-link>
                    </ul>
                </swiper-slide>
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                <!-- <div class="swiper-button-prev" slot="button-prev"></div> -->
                <!-- <div class="swiper-button-next" slot="button-next"></div> -->
                <!-- <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
            </swiper>
        </div>
        <!-- 商家列表 -->
        <ul>
            <li >

            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name:"firstpage",
    created() {
        this.getImgs();
        // this.getRest();
        // alert(100)
    },
    data() {
        return {
            //接收所有图片对象
            imgsObj:[],
            //获得所需要的轮播页数
            swiperpage:[],
            //进行分页
            foodPage1:[],
            foodPage2:[],
            swiperOption: {
            // some swiper options/callbacks
            // 所有的参数同 swiper 官方 api 参数
            // ...
                pagination:{
                    el: '.swiper-scrollbar',
                    type: 'bullets',
                }
                
            },
            //定义一个空数组接收值
            restObj:[]
        }
    },
    methods: {
        getImgs(){
            const api="https://elm.cangdu.org/v2/index_entry";
            this.$http.get(api).then(
                res=>{
                    console.log("获取商家属性");
                    console.log(res.data);
                    this.imgsObj=res.data;
                    const swipers=Math.ceil(res.data.length/8);
                    for (let i = 0; i < res.data.length; i++) {
                        if(i<8){
                            this.foodPage1.push(res.data[i]);
                        }else{
                            this.foodPage2.push(res.data[i]);
                        }
                    }

                }
            );
        },
        //获得所有商家的信息
        // getRest(){
        //     const api="https://elm.cangdu.org/shopping/restaurants?latitude="+this.$store.state.dingwei.latitude+"&longitude="+this.$store.state.dingwei.longitude;
        //     this.$http.get(api).then(
        //          res=>{
                     
        //         }
        //     )
        // }
    },
}
</script>

<style lang="">
.addr{
    text-align: center;
    font-size:0.2rem;
}
.swiper{
    margin-top: 0.6rem;
    /* border: 1px solid; */
}
.topImg{
    list-style-type: none;
    float: left;
    display: flex;
    flex-wrap:wrap;
    align-content: space-around;
    /* border: 1px solid; */
}
.topImg>li{
    box-sizing: border-box;
    padding: 0.15rem;
    text-align: center;
    width: 25%;
    font-size: 0.13rem;
}
.topImg>li>img{
    box-sizing: border-box;
    padding: 0.02rem;
    width: 100%;
}

</style>