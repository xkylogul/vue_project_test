<template>
<div>
    <input @input="handleInput" :value="value">
    
</div>
</template>

<script>
export default{
    name:'AInput',
    props:{
        value:{
            type:[String,Array],
            default:''
        }
    },
    methods:{
        handleInput(e){
       const value =e.target.value
       this.$emit('input',value)
        }
    }
}
</script>