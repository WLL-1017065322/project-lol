# project-lol

## 使用技术

vue-cli

## 使用的非 vue 库


## 已完成功能-前端



## 未完成的功能-前端

1 数据录入更新

2 个别样式更新

3 token 时间

## 已完成功能-后端



## 未完成功能-后端

1 登录注册

2 添加分类

3 echarts

999 自动化录入数据(更新数据,提醒数据更新)




# 附录
## 爬取英雄数据



```
$$(".selete-item label").map(item=>{return item.innerText})

$$(".selete-item label").map((item,index)=>{return {
    name:item.innerText,
    hero:$$("#jSearchHeroDiv a").map(item=>{
        return {
            name:$$("p",item)[0].innerText,
            img:$$("img",item)[0].currentSrc
        }
    })
}

{
    name:"全部",
    hero:$$("#jSearchHeroDiv a").map(item=>{
        return {
            name:$$("p",item)[0].innerText,
            img:$$("img",item)[0].currentSrc
        }
    })
}
let qunbu = JSON.stringify({
  name: "全部",
  hero: $$("#jSearchHeroDiv a").map(item => {
    return {
      name: $$("p", item)[0].innerText,
      img: $$("img", item)[0].currentSrc,
      title:$$("img", item)[0].alt.split(" ")[1],
    };
  })
});

$$(".news-type-list a").map(el=>{return el.innerText})

nav:
JSON.stringify
$$(".entry-list li").map(el=>{
  return {
    title:$$("a span",el)[0].innerText,
    navClass:el.classList[0]
    }})
```
```
获取轮播图片地址
$$(".promo-item a").map(el=>{return el.href})

$$(".promo-item a img").map(el=>{return el.src})
```