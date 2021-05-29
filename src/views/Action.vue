<template>
<div>这是{{id}}</div>

</template>
<script>
export default {
    //name:'action'
    props:{
        id:{
            type:String,
            default:'hkhj'
        }
    }
}
</script>