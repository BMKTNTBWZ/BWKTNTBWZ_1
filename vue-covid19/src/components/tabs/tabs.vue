<script>
import Content from "./content.vue";
export default {
  name: "Tabs",
  data() {
    return {
      // 所有内容部分的容器
      pans: [],
    };
  },
  props: {
    currentIndex: {
      type: [String, Number],
      default: 1,
    },
  },
  components: {
    Content,
  },
  methods: {
    getIndex(index) {
      this.$emit("onIndex", index);
    },
  },
  render() {
    return (
      <div>
        <ul class="tabs-header">{this.$slots.default}</ul>
        <Content pans={ this.pans }/>
      </div>
    );
  },
};
</script>

<style scoped>
.tabs-header {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 2px solid #ededed;
}
</style>