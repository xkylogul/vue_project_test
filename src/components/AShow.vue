<template>
<div>这是ashow组件{{content}}</div>
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