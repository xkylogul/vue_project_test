<template>
<div>
    <div>这是父组件--{{spaced}}</div>
    <router-view></router-view>
</div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex'
const {mapState} =createNamespacedHelpers('user')
export default {
    name:'home',
    computed:{
        ...mapState({
            spaced:state=>state.spaced
        })

        
    }
}
</script>