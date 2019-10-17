<template>
  <div class="about">
    <h1>{{id?'编辑':'新建'}}英雄</h1>
    <!-- 组件得加上 .native 才能监听原生事件 prevent 阻止跳转 -->
    <el-form label-width="100px" @submit.native.prevent="save">
      <el-tabs value="basic" type="border-card">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>

          <el-form-item label="图标">
            <!-- <el-input v-model="model.icon"></el-input> -->
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(model,'avatar',res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="Banner">
            <!-- <el-input v-model="model.icon"></el-input> -->
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res => $set(model,'banner',res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item label="类型">
            <!-- multiple 多选 -->
            <el-select v-model="model.categories" multiple>
              <!-- 从英雄分类找出来 -->
              <el-option
                v-for="item of categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="顺风出装">
            <!-- multiple 多选 -->
            <el-select v-model="model.items1" multiple>
              <!-- 从英雄分类找出来 -->
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="逆风出装">
            <!-- multiple 多选 -->
            <el-select v-model="model.items2" multiple>
              <!-- 从英雄分类找出来 -->
              <el-option v-for="item of items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="当你使用">
            <el-input type="textarea" v-model="model.DATAallytips"></el-input>
          </el-form-item>
          <el-form-item label="敌方使用">
            <el-input type="textarea" v-model="model.DATAenemytips"></el-input>
          </el-form-item>


          <el-form-item label="难度"> 
            <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.difficult"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.skills"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.attack"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate style="margin-top:0.6rem" :max="9" show-score v-model="model.scores.survive"></el-rate>
          </el-form-item>
        </el-tab-pane>

        <el-tab-pane label="技能" name="skills">
          <el-button size="small" @click="model.skills.push({})">
            <i class="el-icon-plus"></i>
            添加技能
          </el-button>
          <!-- 默认换行 -->
          <el-row type="flex" style="flex-wrap:wrap">
            <el-col :md="12" v-for="(item,index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res=> $set(item,'icon',res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>

              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input v-model="item.tips" type="textarea"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button size="small" type="danger" @click="model.skills.splice(0,1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>

        <el-tab-pane label="最佳搭档" name="partners">
          <el-button size="small" @click="model.partners.push({})">
            <i class="el-icon-plus"></i> 添加英雄
          </el-button>
          <el-row type="flex" style="flex-wrap: wrap">
            <el-col :md="12" v-for="(item, i) in model.partners" :key="i">
              <el-form-item label="英雄">
                <el-select filterable v-model="item.hero">
                  <el-option
                    v-for="hero in heroes"
                    :key="hero._id"
                    :value="hero._id"
                    :label="hero.name"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="描述">
                <el-input v-model="item.description" type="textarea"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button size="small" type="danger" @click="model.partners.splice(i, 1)">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>

      <el-form-item style="margin-top: 1rem;">
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
      categories: [],
      items: [],
      heroes: [],
      model: {
        name: '',
        avatar: '',
        scores: {
          difficult: 0,
          skill: 0,
          attack: 0,
          survive: 0
        },
        skills: [],
        partners: []
      }
    };
  },
  methods: {
    // afterUpload(res) {
    //   // this.$set(this.model, "icon", res.url);
    //   this.model.icon = res.url;

    //   // console.log(res);
    // },
    // successload(res){
    //   // res => $set(model,'avatar',res.url)
    //   this.$set(this.model,'icon',res.url)
    //   console.log('11');
    // },

    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heros/${this.id}`, this.model);
      } else {
        res = await this.$http.post('rest/heros', this.model);
      }
      this.$router.push('/heros/list');
      this.$message({
        type: 'success',
        message: '保存成功'
      });
    },
    async fetch() {
      const res = await this.$http.get(`rest/heroes/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
      console.log('res.data', res.data);
    },
    // 报错
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      // this.categories = res.data;
      this.categories = Object.assign({}, this.model, res.data);
      // console.log("this.categories:", this.categories);
    },
    async fetchItems() {
      const res = await this.$http.get(`rest/items`);
      // this.categories = res.data;
      this.items = Object.assign({}, this.model, res.data);
    },
    async fetchHeroes() {
      const res = await this.$http.get(`rest/heroes`);
      this.heroes = res.data;
    }
  },
  created() {
    this.fetchItems();
    this.fetchCategories();
    this.fetchHeroes();
    this.id && this.fetch();
  },
  components: {}
};
</script>

<style scoped lang="scss">
</style>
