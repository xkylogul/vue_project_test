<template>
<div>这是家
    {{food}}
    {{add_strs}}
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    name:'home',
    props:{
        food:{
            type:String,
            default:'apple'
        }
    },
    computed:{
        ...mapGetters(['add_strs'])
    }
}
</script>