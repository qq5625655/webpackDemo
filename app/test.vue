<template>
  <h2>22222222222222233333
    <p>34444555</p>
    <button>aaaaa3333322233</button>
  </h2>
  
</template>
<script>
export default {
  name:'test'
}
// 异步处理，这里进行的是异步
import('./yibu.js').then(({add})=>{
  console.log(add(2, 3));
})
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