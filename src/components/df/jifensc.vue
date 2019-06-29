<template>
    <div >
        <div id="jifen">
            <p>请重新进入</p>
        <p>请返回后重新进入积分商城~</p>
        <img src="../img/retrylogin.png" alt="">
        </div>
    </div>
</template>
<script>
export default {
    name:"jifensc",
}
</script>
<style scoped>
#jifen{
    text-align: center;
    margin-top: 2rem;
}
p:nth-of-type(1){
    font-size: 0.3rem;
    color: blue;
}
p:nth-of-type(2){
    padding: 0.15rem
}
img{
    width: 1.5rem;
    margin-top: 0.1rem;
}
</style>
