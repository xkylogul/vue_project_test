<template>

<div> {{add_num}}这是关于我的一个电话:<button   @click="handleClick">点击</button>
<button @click="handle_num">改变add_num</button>
<button @click="action_num">action操作</button>
</div>
</template>
<script>
import {mapState,mapActions} from 'vuex'
export default {
    name:'tel',
    methods:{
        handleClick(){
            this.$bus.$emit('on-cli','夏克玉')
        },
        handle_num(){
      // this.SET_ADD_NUM(state,5)
     this.$store.commit('SET_ADD_NUM',5)
        },
        action_num(){
        //this.getNum()
        //this.getNum()
       // console.log(JSON.stringify(this.$store)+'dispatch')
        this.$store.dispatch('getNum')
        }
    },
    computed:{
      /*   ...mapState(['num_ber','add_num']) */
    /*  ...mapMutations([
          'SET_ADD_NUM'
     ]
        ), */
        
        ...mapState({
            num_ber:state=>state.num_ber,
            add_num:state=>state.add_num
        }),
        ...mapActions([
            'getNum'
        ])

        
     /*  num_ber(){
          return this.$store.state.num_ber 
      },
      add_num(){
          return    this.$store.state.add_num 
      } */
    }
}
</script>