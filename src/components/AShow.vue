<template>
<div>这是ashow组件，这是我们所记住的，测试一下push{{content}}</div>
</template>
<script>
export default{
   props:{
       content:{
           type:[String,Array],
           default:''
       }
   }
}
</script>