var  app=new Vue({
    el:"#app",
    data:{
        matho:88,
        yuwen:99
    },
    computed:{
        sum:function(){
            return this.matho+this.yuwen
        },
        average:function(){
            return this.sum/2
        }
    }
})