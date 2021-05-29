<template>
<div>这是关于我的一个邮箱:{{message}}</div>
</template>
<script>
export default {
    name:'email',
    data(){
        return{
            message:''
        }
    },
    
    mounted(){

        console.log(this.$bus)
        this.$bus.$on('on-cli',me=>{
     this.message=me
        })
    }
}
</script>