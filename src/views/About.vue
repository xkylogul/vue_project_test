<template>
<div>这是关于我的一个密码{{food}}</div>
</template>
<script>
export default {
    name:'about',
    props:{
        food:{
            type:String,
            default:'apple'
        }
    }
}
</script>