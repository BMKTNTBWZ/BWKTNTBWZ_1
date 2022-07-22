<script>
export default {
  props:{
    label:{
      type:String,
      default:"tab"
    },
    index:{
      type:[String,Number],
      default:1
    }
  },
  name:"Tab",
  computed:{
    isActive(){
      return this.$parent.currentIndex == this.index
    }
  },
  mounted(){
    // console.log(this.$parent.currentIndex);
    // this.$parent.pans.push(this.$slots.default)
    this.$parent.pans.push(this)
  },
  methods:{
    clickItemHandle(){
      // 改变currentIndex的值，就可以改变高亮
      // 事件回调
      this.$parent.getIndex(this.index)
    }
  },
  render(){
    let classNames = {
      tab:true,
      active:this.isActive
    }
    return(
      <li onClick={ this.clickItemHandle } class={ classNames }>{ this.label }</li>
    )
  }
}
</script>

<style scoped>

.tab {
    flex: 1;
    list-style: none;
    line-height: 40px;
    margin-right: 30px;
    position: relative;
    text-align: center;
}

.tab.active {
    border-bottom: 2px solid blue;
}

</style>