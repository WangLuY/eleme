<template>
  <div>
    <div id="nav">
      <img @click="back()" src="../img/back.png" alt />
      <span>教我拍大片</span>
      <div></div>
    </div>
    <div id="content">
      <div>
        <img src="../img/4920bc3a0a34c0d26a4460ce03157jpeg.jpeg" alt />
        <p>1. 清晰 拍照时持稳手机，避免出现大幅度晃动。将焦点对准食物本身，锁焦后、点击快门。</p>
      </div>
      <div>
        <img src="../img/5efc9ee81ceba1ae835b0c2298ba9jpeg.jpeg" alt />
        <p>2. 光线 尽量选择明亮、柔和的光线，避免强光直射；拍摄时避免身体或器物的阴影遮住食物本身，有条件时，可以用小型手电进行补光，以提高食物质感。</p>
      </div>
      <div>
        <img src="../img/958696046787bb467708c8d9a5171jpeg.jpeg" alt />
        <p>3. 构图 构图可以选择通用的三分构图法或中心构图法，如果是拍摄整体食物时，需要考虑食物的完整性；如果拍摄特写时，需要将细节体现清楚。</p>
      </div>
      <div>
        <img src="../img/b9716e028917fd81f6c5a99242b6fjpeg.jpeg" alt />
        <p>4.角度 可以选择45度拍摄、90度俯拍或者水平拍摄，一切都看你的心情哦</p>
      </div>
      <div>
        <img src="../img/ca198810b12c8fc57ae562c6fa92cjpeg.jpeg" alt />
        <p>5. 背景 可以选择合适的背景拍摄，例如黑色能体现食物蒸腾的热气，白色让食物更有质感，米色更加温馨等；但背景尽量不要太乱，以免影响整体效果。</p>
      </div>
      <div>
        <img src="../img/d31b1f81eb853c6042b9c172a514bjpeg.jpeg" alt />
        <p>6. 细节 餐具的搭配使用、人物的烘托、道具的陪衬等都能使食物更具诱惑力，照片更有氛围。</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "paidapian",
  methods: {
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
#content {
  margin-top: 0.45rem;
}
#content img {
  width: 100%;
  margin: 0.1rem 0;
}
p {
  font-size: 0.13rem;
  line-height: 0.15rem;
}
</style>
