<template>
<div>
<A-Input v-model="inputValue"></A-Input>
{{inputValue}}
<A-Show :content='inputValue'></A-Show>
</div>
</template>
<script>
import AInput from '_c/AInput.vue'
import AShow from '_c/AShow.vue'
export default{
    name:'store',
    data(){
        return{
            inputValue:''
        }
    },
components:{
    AInput,
    AShow
}
}
</script>