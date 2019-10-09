<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}分类</h1>
    <!-- 组件得加上 .native 才能监听原生事件 prevent 阻止跳转 -->
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="上级分类">
        <el-select v-model="model.parent" placeholder="请选择">
          <!-- label 显示的内容 ,value 当前的内容 -->
          <el-option
            v-for="item in parents"
            :key="item._id"
            :label="item.name" 
            :value="item._id"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      model: {},  
      parents: []
    };
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/categories/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/categories", this.model);
      }
      this.$router.push("/categories/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/categories/${this.id}`);
      this.model = res.data;
      // console.log("this.model",this.model);
    },
    async fetchParents() {
      const res = await this.$http.get(`rest/categories`);
      this.parents = res.data;
      // console.log(this.parents);
      
    }
  },
  created() {
    this.fetchParents();
    this.id && this.fetch();

  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
