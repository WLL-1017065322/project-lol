<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide v-for="(swiper,index) in swiperLists" :key="index">
        <img class="w-100" :src="swiper" alt />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-2" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-drak-1">
      <div class="d-flex flex-wrap">
        <div class="nav-item mb-3" v-for="(item,index) in navLists" :key="index">
          <i class="sprite" :class="'sprite-'+item.navClass"></i>
          <div class="py-2">{{item.title}}</div>
        </div>
      </div>

      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>

    <!-- end of navicons -->

    <!-- <div class="card p-3 bg-white mt-3">
      <div class="card-header d-flex ai-center">
        <i class="iconfont icon-menu"></i>
        <div class="fs-xxl flex-1 px-2">新闻资讯</div>
        <i class="iconfont icon-menu1"></i>
      </div>
      <div class="card-body pt-3">
        <div class="nav jc-between">
          <div class="nav-item active">
            <div class="nav-link">热门</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">新闻</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">公告</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">活动</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">赛事</div>
          </div>
        </div>
        <div class="pt-3">
          <swiper >
            <swiper-slide v-for="m in 5" :key="m">
              <div v-for="n in 5" :key="n" class="py-2">
                <span>[新闻]</span>
                <span>|</span>
                <span>现场直击 | 峡谷调整玩家体验全纪录</span>
                <span>06/02</span>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>-->

    <!-- end of card1 -->
    <!-- <m-card icon="menu" title="新闻资讯">
      <div class="nav jc-between">
        <div class="nav-item active">
          <div class="nav-link">热门</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">新闻</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">公告</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">活动</div>
        </div>
        <div class="nav-item">
          <div class="nav-link">赛事</div>
        </div>
      </div>
      <div class="pt-3">
        <swiper>
          <swiper-slide v-for="m in 5" :key="m">
            <div v-for="n in 5" :key="n" class="py-2">
              <span>[新闻]</span>
              <span>|</span>
              <span>现场直击 | 峡谷调整玩家体验全纪录</span>
              <span>06/02</span>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </m-card>-->
    <!-- card2 -->
    <m-list-card icon="menu" title="新闻资讯" :categories="newsCats">
      <template v-slot:items="{category}">
        <router-link
          tag="div"
          :to="`articles/${news._id}`"
          v-for="(news,index) in category.newsList"
          :key="index"
          class="py-2 fs-lg d-flex"
        >
          <span class="text-info">[{{news.categoryName}}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark text-ellipsis">{{news.title}}</span>
          <span class="text-grey-1 fs-sm">{{news.createdAt | date}}</span>
        </router-link>
      </template>
    </m-list-card>
    <m-list-card icon="toukui" title="英雄列表" :categories="heroCats">
      <template v-slot:items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem">
          <router-link
            tag="div"
            :to="`/heroes/${hero._id}`"
            v-for="(hero,index) in category.heroList"
            :key="index"
            class="text-center p-2"
            style="width:20%;"
          >
            <img :src="hero.img" class="w-100" alt />
            <div>{{hero.name}}</div>
          </router-link>
        </div>
      </template>
    </m-list-card>
    <!-- card3 -->
    <!-- <m-card icon="menu" title="精彩视频"></m-card> -->
    <!-- card4 -->
    <!-- <m-card icon="menu" title="图文攻略"></m-card> -->
    <!-- card5 -->
  </div>
</template>

<script>
import dayjs from 'dayjs';
export default {
  data() {
    return {
      swiperOption: {
        pagination: {
          el: '.pagination-home'
        }
      },
      swiperSlides: [1, 2, 3],
      newsCats: [],
      heroCats: [],
      navLists: [
        { title: '爆料站', navClass: 'blz' },
        { title: '故事站', navClass: 'gsz' },
        { title: '周边商城', navClass: 'zbsc' },
        { title: '体验服', navClass: 'tyf' },
        { title: '新人专区', navClass: 'xrzq' },
        { title: '荣耀·传承', navClass: 'rycc' },
        { title: '同人社区', navClass: 'trsq' },
        { title: '王者营地', navClass: 'wzyd' },
        { title: '公众号', navClass: 'gzh' }
      ],
      swiperLists: [
        'https://ossweb-img.qq.com/upload/adw/image/20191013/f6e663c9e901b84bc2401421f4529df0.jpeg',
        'https://ossweb-img.qq.com/upload/adw/image/20191011/090fdd39257067e6a49dddab6a856c82.jpeg',
        'https://ossweb-img.qq.com/upload/adw/image/20191015/3d652900dbe9dfc1446c9daede8b0638.jpeg',
        'https://ossweb-img.qq.com/upload/adw/image/20191015/b6c016689f1e078c2cc94b49cc017ecf.jpeg',
        'https://ossweb-img.qq.com/upload/adw/image/20191011/55eaaba8eeae5addeda5505b74d41826.jpeg'
      ]
    };
  },
  filters: {
    date(val) {
      return dayjs(val).format('MM/DD');
    }
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get('/news/list');
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get('/heroes/list');
      this.heroCats = res.data;
      console.log(res.data);
    }
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  components: {}
};
</script>

<style lang="scss">
// 加上scoped 会使样式失效
// @import '../assets/scss/_variables.scss';
@import '../assets/scss/style copy.scss';
.pagination-home {
  // padding: 0 0.5rem 1rem;
  opacity: 1;
  border-radius: 0.1538rem;
  .swiper-pagination-bullet {
    background: map-get($colors, 'white');
    &.swiper-pagination-bullet-active {
      background: map-get($colors, 'info');
    }
  }
}

.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      // &:nth-child(4n){
      border-left: none;
    }
  }
}
</style>
