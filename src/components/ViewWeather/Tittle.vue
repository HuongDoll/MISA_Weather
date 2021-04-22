<template>
  <div class="tittle">
    <div>THỜI TIẾT HÀ NỘI</div>
    <input type="text" name="" id="" placeholder="Tìm kiếm địa điểm">
  </div>
</template>

<script>

export default {
  created() {
  },
  name: "Tittle",
  props: {
    msg: String,
  },
  methods: {
    
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tittle{
    width: 100%;
    height: 80px;
    background-color: aquamarine;
    display: flex;;
}
.tittle div{
    font-size: 24px;
    font-weight: 700;
    padding: 16px;
}
input{
    width: 200px;
    height: 40px;
    position: absolute;
    right: 0px;
    margin: 16px;
    border-radius: 5px;
}
</style>
