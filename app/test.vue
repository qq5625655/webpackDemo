<template>
  <h2>22222222222222233333
    <p>34444555</p>
    <button>aaaaa3333322233</button>
  </h2>
  
</template>
<script>
const a = '111';
let promise1 = new Promise((res, rej)=>{
  res(1)
}).then((res)=>{
  console.log(res);
})
export default {
  name:'test'
}

</script>
<style scoped lang="scss">
  h2{
    color: red;
    background: blue;
    display: flex;
    p{
      color: blue;
    }
  }
  
</style>