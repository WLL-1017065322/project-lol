<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}广告位</h1>
    <!-- 组件得加上 .native 才能监听原生事件 prevent 阻止跳转 -->
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>

      <el-form-item label="广告">
        <el-button size="small" @click="model.items.push({})">
          <i class="el-icon-plus"></i>
          添加广告
        </el-button>
        <!-- 默认换行 -->
        <el-row type="flex" style="flex-wrap:wrap">
          <el-col :md="24" v-for="(item,index) in model.items" :key="index">
            <el-form-item label="跳转链接(url)">
              <el-input v-model="item.image"></el-input>
            </el-form-item>
            <el-form-item label="图片" style="margin-top:0.5rem">
              <el-upload
                class="avatar-uploader"
                :action="$http.defaults.baseURL + '/upload'"
                :show-file-list="false"
                :on-success="res=> $set(item,'image',res.url)"
              >
                <img v-if="item.image" :src="item.image" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>

            <el-form-item>
              <el-button size="small" type="danger" @click="model.items.splice(0,1)">删除</el-button>
            </el-form-item>
          </el-col>
        </el-row>
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
      model: {
        items: []
      }
    };
  },
  methods: {
    // afterUpload(res) {
    //   // this.$set(this.model, "icon", res.url);
    //   this.items.icon = res.url;

    //   // console.log(res);
    // },
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/ad/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/ad", this.model);
      }
      this.$router.push("/ad/list");
      this.$message({
        type: "success",
        message: "保存成功"
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/ad/${this.id}`);
      // 直接赋值导致data定义的完全覆盖
      // this.model = res.data;
      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchParents() {
      const res = await this.$http.get(`rest/ad`);
      this.parents = res.data;
      console.log(this.parents);
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
