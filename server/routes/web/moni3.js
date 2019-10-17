let qunbu3 = {
  name: "全部",
  heroes: [
    {
      name: "黑暗之女",
      title: "安妮",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big1000.jpg",
      scores: { difficult: 6, skills: 10, attack: 2, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Annie_Passive.png",
          name: "嗜火",
          description:
            "在施放4个技能后，安妮的下一次伤害类技能就会对目标造成短暂的晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AnnieQ.png",
          name: "碎裂之火",
          description:
            "安妮向目标投出注入了法力值的火球，对目标造成魔法伤害。如果目标死于碎裂之火，则碎裂之火消耗的法力值会返还给安妮，且碎裂之火的冷却时间减半。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AnnieW.png",
          name: "焚烧",
          description:
            "安妮向锥形区域施放一道烈焰，对区域内的所有敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AnnieE.png",
          name: "熔岩护盾",
          description:
            "为安妮提供百分比伤害减免，爆发性的移动速度加成，并且任何对安妮进行普通攻击的敌人都会受到伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AnnieR.png",
          name: "提伯斯之怒",
          description:
            "安妮召唤地狱火泰迪：提伯斯为其作战，对目标区域造成伤害，提伯斯也会攻击和烧伤站在它周围的敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 安妮的终极必杀技和晕眩技能一起使用能够扭转局势。",
        "- 使用碎裂之火技能杀死小兵，可以让安妮在游戏早期打到很多钱。",
        "- 熔岩护盾能够有效地帮助安妮叠加嗜火技能所带来的晕眩，有时尽早升1级该技能是合算的。"
      ],
      DATAenemytips: [
        "- 安妮召唤的巨熊提伯斯能烧伤他附近的敌方单位。切记远离被召唤出的提伯斯。",
        "- 召唤师技能惩戒也能够对提伯斯造成伤害。",
        "- 留意安妮身上白色的漩涡能量，这意味着她已经准备好施放眩晕。"
      ],
      infotitle:
        "既拥有危险夺命的能力，又拥有小大人儿的可爱模样，安妮是一名掌握着深不可测的占火魔法的幼女魔法师。安妮生活在诺克萨斯北边的山脚下，即使是在这种地方，她也仍然是魔法师中的异类。她与火焰的紧密关系与生俱来，最初是伴随着喜怒无常的情绪冲动出现的，不过后来她学会了如何掌握这些“好玩的小把戏”。其中她最喜欢的就是召唤她亲爱的泰迪熊提伯斯——一头狂野的守护兽。安妮已经迷失在了永恒的天真里。她在黑暗的森林中游荡，……"
    },
    {
      name: "狂战士",
      title: "奥拉夫",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big2000.jpg",
      scores: { difficult: 3, skills: 3, attack: 9, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Olaf_Passive.png",
          name: "狂战之怒",
          description: "奥拉夫每损失1%的生命值，就会增加1%的攻击速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OlafAxeThrowCast.png",
          name: "逆流投掷",
          description:
            "奥拉夫将战斧投至目标区域，对所有被战斧穿过的敌人造成伤害并减速。如果奥拉夫捡起斧头，那么该技能冷却时间就会减少4.5秒。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OlafFrenziedStrikes.png",
          name: "残暴打击",
          description:
            "奥拉夫的攻击速度得到提升，并获得生命偷取，且他损失的生命值越多，所受的治疗效果也越多。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OlafRecklessStrike.png",
          name: "鲁莽挥击",
          description:
            "奥拉夫以破釜沉舟之势发动进攻，对目标造成真实伤害（不受护甲与魔抗减免），同时，自身也会根据敌方所受的伤害而受到真实伤害的反噬。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OlafRagnarok.png",
          name: "诸神黄昏",
          description: "奥拉夫暂时免疫控制技能。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 奥拉夫可以在生命垂危时组合使用狂战之怒、残暴打击和诸神黄昏，来变得不可思议地强大。",
        "- 激活残暴打击所获得的额外治愈能力，可以增强你的生命偷取，并从友军的治疗技能上获得更多治疗效果。"
      ],
      DATAenemytips: [
        "- 奥拉夫生命值越低，就越危险。保留你的限制技能来解决他。",
        "- 在对线期阻止奥拉夫拿到他的斧头，能最大限度减少他所造成的骚扰。",
        "- 在诸神黄昏的持续期间里，奥拉夫防御伤害的能力会降低，但是免疫控制技能。因此，如果你无法摆脱处在诸神黄昏状态下的奥拉夫的话，就尽量和队友一起集火掉他吧。"
      ],
      infotitle:
        "奥拉夫是一股无坚不摧的毁灭之力，战斧在手的他别无所求，只想光荣地死在战斗中。奥拉夫来自弗雷尔卓德的海岸半岛洛克法，他曾在一次占卜预言中听闻自己将安详地死去——这是懦夫的命运，也是对他们族人的莫大侮辱。于是，为了追寻另外一种结局，他在狂怒的驱动下在这片土地上暴跳横行，屠杀了数十名伟大的战士和传说中的野兽，希望能够找到能够阻止自己的对手。如今他是凛冬之爪部族残酷的执法者，希望在即将到来的大战中找到自己……"
    },
    {
      name: "正义巨像",
      title: "加里奥",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big3000.jpg",
      scores: { difficult: 5, skills: 6, attack: 1, survive: 10 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Galio_Passive.png",
          name: "巨像重击",
          description:
            "每过若干秒，加里奥的下次普攻就能在小范围内造成额外魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GalioQ.png",
          name: "战争罡风",
          description:
            "加里奥发射两道罡风，罡风在汇聚后会形成一团大型龙卷风，造成持续伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GalioW.png",
          name: "杜朗护盾",
          description:
            "加里奥在防御姿态下蓄力，同时移动速度减慢。在蓄力得以释放时，加里奥将嘲讽并伤害附近的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GalioE.png",
          name: "正义冲拳",
          description: "加里奥将暂时后跳然后冲锋，击飞他遇到的第一个敌方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GalioR.png",
          name: "英雄登场",
          description:
            "加里奥将一名友军的当前位置作为他的着陆点。在短暂的延迟后，加里奥会落到该位置上，然后击退附近的敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 即使在被控制的情况下，你也可以施放【W杜朗护盾】。",
        "- 你可以使用小地图上的友军图标来施放【R英雄登场】。 你可以利用【E正义冲拳】的小后跳来躲避敌方的技能。"
      ],
      DATAenemytips: [
        "- 加里奥在积蓄【W杜朗护盾】时移动会变慢。",
        "- 在加里奥施放【R英雄登场】时，可以趁加里奥还没跃至空中时打断这个技能。",
        "- 加里奥无法用【E正义拳击】翻越墙体。"
      ],
      infotitle:
        "光彩熠熠的德玛西亚城外，石巨像加里奥始终如一地守望着。他被创造出来是为了抵挡来犯的法师，但却经常要一动不动地矗立数十年，只有当强大的魔法力量出现时，他才会激活。而只要加里奥活动起来，他便会充分利用每一刻，品味荡气回肠的战斗和来之不易的守护人民的荣耀。可惜，他的胜利永远都喜忧参半，因为消灭魔法的同时，也消灭了他活跃力量的源泉。每一次胜利都会使他再次进入不知世事的休眠。"
    },
    {
      name: "卡牌大师",
      title: "崔斯特",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big4000.jpg",
      scores: { difficult: 9, skills: 6, attack: 6, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Cardmaster_SealFate.png",
          name: "灌铅骰子",
          description:
            "在击杀了一名单位后，崔斯特会投掷他的“幸运”骰，并随机获得1到6的额外赏金。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/WildCards.png",
          name: "万能牌",
          description:
            "崔斯特扔出三张卡牌，卡牌会对沿途的每个敌方单位造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PickACard.png",
          name: "选牌",
          description: "崔斯特挑选魔法卡牌，用于下次攻击，并附加额外效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CardmasterStack.png",
          name: "卡牌骗术",
          description:
            "崔斯特每四次攻击附加一次额外伤害。另外，崔斯特的攻击速度得到被动提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Destiny.png",
          name: "命运",
          description:
            "崔斯特为他的敌人算卜命运，短时间内显示所有敌方英雄的位置，并可使用传送，让他在引导1.5秒后传送至目标位置。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 与你的友军合作，争取最佳时机使用命运来伏击敌人。",
        "- 潜行角色通常会在生命值较低时逃离战斗。利用命运技能发现潜行目标，并将其消灭。",
        "- 卡牌大师可以作为物理系或法系角色，他能够配合不同的队伍构成。"
      ],
      DATAenemytips: [
        "- 当你的英雄没有生命值时，早点躲避万能牌的攻击。",
        "- 如果你的生命值很低，小心敌方的崔斯特使用命运技能来击杀你。"
      ],
      infotitle:
        "崔斯特·菲特是一名声名狼藉的纸牌高手和诈骗惯犯，世界上任何有人烟的地方都有他施展魅力和赌艺的足迹，让那些富人和痴人既羡慕又嫉恨。他很少会认真起来干一件事，总是用一抹轻蔑的微笑和一副漫不经心的随性面对每一天。无论面对什么情况，崔斯特的袖子里永远都会藏着一张王牌。"
    },
    {
      name: "德邦总管",
      title: "赵信",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big5000.jpg",
      scores: { difficult: 2, skills: 3, attack: 8, survive: 6 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/XinZhaoP.png",
          name: "果决",
          description: "每第三次攻击造成额外伤害并治疗赵信自身。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XinZhaoQ.png",
          name: "三重爪击",
          description: "赵信的下3次普攻将造成额外伤害并且第三次攻击将击飞目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XinZhaoW.png",
          name: "风斩电刺",
          description:
            "赵信用他的长枪斩击他的前方，之后将长枪向前刺击，并使被击中的敌人减速。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XinZhaoE.png",
          name: "无畏冲锋",
          description:
            "赵信对一名敌人发起冲锋，对范围内的所有敌人造成伤害并使他们暂时减速。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XinZhaoR.png",
          name: "新月护卫",
          description:
            "赵信对附近的敌人造成基于目标当前生命值的伤害，并击退未被挑战的目标。赵信会创造出一个圆环，且自身不会受到来自圆环之外的敌人所造成的伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 赵信是优秀的团战发起者。冲在阵型的前方来开始战斗，并使用你的终极技能来造成最大的伤害。",
        "- 尽量移动到好的位置，好让你终极技能的击退效果的作用提升到最大。"
      ],
      DATAenemytips: [
        "- 赵信是个强劲的团战发起者，他的冲锋和终极技能都能够对附近敌方单位造成伤害。 在他使用终极技能时要和队友分散。",
        "- 赵信严重依赖他的三重爪击来获得伤害及减少冷却时间的效果，所以阻止他完成他的连招，将会有很显著的效果。"
      ],
      infotitle:
        "赵信是效忠于光盾王朝的坚毅勇士。他曾经沦落于诺克萨斯的角斗场，在无数次角斗中得以幸存。被德玛西亚军队解救以后，他便发誓为这群勇敢的解放者贡献生命和忠诚。最称手的三爪长枪相伴，赵信现在为自己的第二祖国而战，一往无前，暴虎冯河。"
    },
    {
      name: "无畏战车",
      title: "厄加特",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big6000.jpg",
      scores: { difficult: 8, skills: 3, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/Urgot_Passive.png",
          name: "回响烈焰",
          description:
            "厄加特的普攻和【净除】会周期性地触发他腿上的烈焰喷射，造成物理伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/UrgotQ.png",
          name: "腐蚀电荷",
          description:
            "发射一个可爆炸的电荷至目标位置，对爆炸波及到的敌人造成物理伤害和减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/UrgotW.png",
          name: "净除",
          description:
            "厄加特减速自身的同时对附近的敌人们火力全开。优先攻击被厄加特近期用其它技能命中过的敌方英雄，并触发回响烈焰。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/UrgotE.png",
          name: "鄙弃",
          description:
            "厄加特向一个方向冲锋，为自身提供护盾并践踏非英雄的敌人。如果他捕捉到一个敌方英雄，他将会停下并将该英雄抛到他的另一侧。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/UrgotR.png",
          name: "超越死亡的恐惧",
          description:
            "厄加特发射一个化学钻头，刺穿命中的第一个敌方英雄。如果该英雄的生命值低于一定阈值，那么厄加特就会将该英雄评判为弱者并将其处决。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 多注意你每条腿的冷却时间，因为它们是你伤害的重要构成部分。",
        "- 命中【腐蚀电荷】或【鄙弃】就能用【净除】来锁定目标——这是一种可让多条腿快速地连续发射的好办法。",
        "- 将【超越死亡的恐惧】留给那些看上去就虚弱得快死的敌人。这个技能在灭除那些逃命中的敌人时尤其有效。"
      ],
      DATAenemytips: [
        "- 厄加特严重依赖他的几条腿来打击对手，而这些腿都有独立的冷却时间并且只会在他攻击腿所面对的方向上的敌人时贡献火力。避免吃到多条腿的火力。",
        "- 厄加特可以用【净除】来造成并吸收海量的伤害，但在它开火时，厄加特自身会被减速。",
        "- 如果你被【超越死亡的恐惧】所击中，要尽力避免限时内让血量降到斩杀线（你25%的最大生命值）。"
      ],
      infotitle:
        "厄加特曾一度是诺克萨斯强大的处刑人，但这个让他为之杀人如麻的帝国，最后却背叛了他。铁链束缚着他，并迫使他在一个新的地方懂得了力量的真正意义——祖安地下深处的监牢矿坑——“沉钩”。后来的一场灾难让祖安城中混乱肆虐，厄加特也借机破土而出，在祖安的地下犯罪世界傲视群雄。曾经奴役他的铁链，现在是他折磨猎物的工具，他会用枪火洗礼自己新的家园，肃清那些不配苟活的人，将祖安铸成一座痛苦的熔炉。"
    },
    {
      name: "诡术妖姬",
      title: "乐芙兰",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big7000.jpg",
      scores: { difficult: 9, skills: 10, attack: 1, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LeBlancP.png",
          name: "镜花水月",
          description:
            "当乐芙兰跌至40%最大生命值以下时，她会隐形1秒并创造一个幻像（不能造成伤害），幻像最多可持续8秒。\n\n【镜花水月】有1分钟的冷却时间。\n\n可以通过按住alt键的同时使用鼠标右键或再次施放此技能来控制【镜花水月】生成的幻像。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LeblancQ.png",
          name: "恶意魔印",
          description:
            "乐芙兰朝目标投射一个魔印，造成魔法伤害并标记目标3.5秒。用一个技能对被标记的目标造成伤害时，会引爆魔印，造成附加伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LeblancW.png",
          name: "魔影迷踪",
          description:
            "乐芙兰位移至目标位置，并对目标位置附近的敌人造成魔法伤害。在接下来的4秒里，她可以激活此技能来回到她的初始位置。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LeblancE.png",
          name: "幻影锁链",
          description:
            "乐芙兰抛出一条锁链来束缚命中的第一个敌人。如果目标持续被束缚1.5秒，那么目标就会受到额外的魔法伤害并且被禁锢。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LeblancR.png",
          name: "故技重施",
          description: "乐芙兰可以施放她刚才施放的同一技能的故技重施版。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 魔影谜踪和故技重施一起释放，可以让对方难以猜出你要回到哪一个魔影谜踪的法阵上。",
        "- 使用魔影迷踪可以帮助你有好的站位来施放幻影锁链。",
        "- 你可以用恶意魔印与幻影锁链来防止有闪现技能的角色逃跑，最多持续4秒。"
      ],
      DATAenemytips: [
        "- 乐芙兰的终极技能可以在她的技能施放期间，或是，少见地在一个遥远的位置创造一个假的乐芙兰。",
        "- 在远处创造的假乐芙兰将会跑向距它最近的敌方英雄，施放一个无害的技能，随后立刻消失。",
        "- 要先对乐芙兰发起攻击，来规避她的大部分小诡计，尤其是她在近期用过她的位移技能【魔影迷踪】时。",
        "- 晕眩或沉默乐芙兰将阻止她激活【魔影迷踪】返回。"
      ],
      infotitle:
        "即使是在秘密团体黑色玫瑰的成员内部，乐芙兰也同样保持神秘，而乐芙兰这个名字也只是众多化名之一。这个皮肤惨白的女人自从诺克萨斯建国初期就开始操纵大小人物，推动事态发展。这位女法师能用魔法制造自己的镜像，她可以出现在任何地点、任何人面前、甚至同时现身于许多地方。乐芙兰永远都在暗处密谋策划，而她真正的动机和她变换不定的身份一样令人难以捉摸。"
    },
    {
      name: "猩红收割者",
      title: "弗拉基米尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big8000.jpg",
      scores: { difficult: 7, skills: 8, attack: 2, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/VladimirP.png",
          name: "血色契约",
          description:
            "每40额外生命值会增加弗拉基米尔1法术强度，每1法术强度会增加弗拉基米尔1.4额外生命值。（该效果不会自我循环叠加）"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VladimirQ.png",
          name: "鲜血转换",
          description:
            "弗拉基米尔从目标敌人身上偷取生命值。当弗拉基米尔的资源槽攒满后，鲜血转换将暂时获得增益，提升伤害和治疗效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VladimirSanguinePool.png",
          name: "血红之池",
          description:
            "弗拉基米尔潜入血泊之中，变得无法被选取，持续2秒。血泊上的敌人被减速，同时弗拉基米尔会从他们身上吸取生命。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VladimirE.png",
          name: "血之潮汐",
          description:
            "弗拉基米尔消耗他的生命值来持续灌注一个蓄血库，蓄血库在释放时会对他身边的敌人造成伤害，但会被敌方单位所阻挡。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VladimirHemoplague.png",
          name: "血之瘟疫",
          description:
            "弗拉基米尔令一片区域感染上剧毒瘟疫，增加受感染敌人所受的伤害。在几秒后，血之瘟疫会对被感染的敌人造成魔法伤害，并根据命中的敌方英雄数来治疗弗拉基米尔。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 鲜血转换会在治疗弗拉基米尔之前立即对敌人造成伤害，令它成为游戏中最好的最后一击方法之一。",
        "- 在能攻击到最多单位的地方施放血之瘟疫。",
        "- 血红之池能躲避飞来的法术，它可以用来避开控制技能。"
      ],
      DATAenemytips: [
        "- 尽量在【R血之瘟疫】引爆前干掉弗拉基米尔，否则每个被感染的英雄都会为弗拉基米尔提供治疗效果。",
        "- 在团战开始时逼迫弗拉基米尔交出【W血红之池】，就会最大限度地消耗他的生命值。",
        "- 【破败王者之刃】和【兰德里的折磨】等克制高生命值的装备能有效地对抗弗拉基米尔。"
      ],
      infotitle:
        "弗拉基米尔是一个渴望凡人鲜血的魔鬼，早在诺克萨斯帝国建立之初就开始干涉帝国的内政。他的血巫术不仅能超越自然规律延长他的寿命，而且还能让他随心所欲地控制其他人的身体和思想。在诺克萨斯贵族奢华的沙龙聚会上，这个能力让他围绕自己建立了狂热的教众，而在底层的后巷里，这个能力则让他吸干敌人的鲜血。"
    },
    {
      name: "末日使者",
      title: "费德提克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big9000.jpg",
      scores: { difficult: 9, skills: 9, attack: 2, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/FiddleSticks_Passive.png",
          name: "恐惧降临",
          description:
            "在站立不动或引导技能状态下持续1.5秒，就会用【恐惧降临】强化费德提克。定身类控制效果会重置它的计时器。\n\n【恐惧降临】提供移动速度，但在费德提克开始移动后仅持续1.5秒。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Terrify.png",
          name: "恐惧",
          description: "恐惧目标，让目标以受损的速度逃离费德提克。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Drain.png",
          name: "生命吸取",
          description: "费德提克偷取敌人的生命能量，造成持续伤害同时治疗自己。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/FiddlesticksDarkWind.png",
          name: "黑暗之风",
          description:
            "一阵风袭击一个敌方单位，溅射周围敌方单位，对其造成伤害并沉默。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Crowstorm.png",
          name: "群鸦风暴",
          description:
            "一群杀人鸦盘旋于费德提克身边，每秒对范围内的所有敌方单位造成伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 使用暗黑之风来击杀大量小兵，试着对小兵使用生命吸取来获得最大的吸血效果。",
        "- 在发起群鸦风暴或生命吸取前对敌人使用恐惧可以确保造成最大伤害。",
        "- 如果你购买增强法术的物品，费德提克会显得很脆弱。试着用符文和物品取得攻守平衡。"
      ],
      DATAenemytips: [
        "- 不要在你靠近友军时发起攻击。黑暗之风会在你和友军之间来回反弹，并延长其沉默时间。",
        "- 如果费德提克使用了群鸦风暴技能，你可使用晕眩或减速技能，并逃出技能射程，直到该技能消散。",
        "- 如果费德提克消失不见，则要小心他是否埋伏在树林中引导群鸦风暴。"
      ],
      infotitle:
        "费德提克是一个骇人的活体稻草人，一个徘徊在黑暗中的憎恶之物，他挥舞着一把镰刀并捕食着粗心的生物们。在群鸦们的凶蛮啄杀的协助下，费德提克会先品味猎物们的恐惧，然后再于飓风般的羽毛与溅血的利喙之中取走猎物们的性命。"
    },
    {
      name: "无极剑圣",
      title: "易",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big11000.jpg",
      scores: { difficult: 4, skills: 2, attack: 10, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/MasterYi_Passive1.png",
          name: "双重打击",
          description: "易大师每攻击数次，就会同时对目标进行2次打击。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AlphaStrike.png",
          name: "阿尔法突袭",
          description:
            "易以肉眼难以发觉的速度穿梭于战场，对多个敌人造成物理伤害，同时处于不可被选取的状态下。阿尔法突袭可以暴击，并对野怪造成额外物理伤害。普通攻击可以减少阿尔法突袭的冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Meditate.png",
          name: "冥想",
          description:
            "易通过集中念力来活化他的身体，从而回复生命值，并暂时减少所受的伤害。此外，易还会为双重打击充能，并暂停无极剑道和高原血统的持续时长。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/WujuStyle.png",
          name: "无极剑道",
          description: "提供额外真实伤害至普攻"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Highlander.png",
          name: "高原血统",
          description:
            "易以超乎想象的身法进行移动，短时间内提升移动速度和攻击速度，并免疫减速效果。该技能激活期间，易在击杀掉一名敌方英雄的同时，会延长该技能的持续时间。在击杀和助攻后，也会被动地减少易其它技能的冷却时间。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 如果你在与远程玩家作战的兵线，升级冥想可以让你在线上呆得更久，比对手升级更快。",
        "- 早期，无极剑道在给小兵们最后一击的时候很强。",
        "- 试着在一名敌方英雄前使用阿尔法突袭来攻击小兵，这样在技能结束的时候，你就处于一个安全距离的位置了。"
      ],
      DATAenemytips: [
        "- 冥想能够有效地治疗持续伤害，但易大师在游戏前期很容易被配合gank。",
        "- 如果易大师试图用无极剑道补兵，则连续几次攻击他，令其不得不消耗法力使用冥想回复生命值。",
        "- 虽然易大师在使用高原血统时不能被减速，但其它限制技能还能够阻止他。"
      ],
      infotitle:
        "易师锤炼身体、磨砺心智，直至身心合一。尽管他将暴力作为不得已的选择，但他优雅迅猛的剑法总是让这一手段显得尤为快捷。作为无极之道最后的门徒，易大师致力于这个门派的传承，用七度洞悉目镜搜寻着最有资格的人，寻找潜在的新弟子。"
    },
    {
      name: "牛头酋长",
      title: "阿利斯塔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big12000.jpg",
      scores: { difficult: 7, skills: 5, attack: 6, survive: 9 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Alistar_E.png",
          name: "凯旋怒吼",
          description:
            "在阿利斯塔晕眩或强制位移敌方英雄，或是在附近敌人死亡时，他会为他的怒吼积攒充能。当完全充能时，他会治疗自身和附近的所有友方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Pulverize.png",
          name: "大地粉碎",
          description:
            "阿利斯塔锤击地面，对附近的敌人造成魔法伤害并使他们浮空。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Headbutt.png",
          name: "野蛮冲撞",
          description: "阿利斯塔冲撞目标，对其造成伤害并击退目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AlistarE.png",
          name: "践踏",
          description:
            "阿利斯塔践踏附近的敌方单位，无视单位的碰撞体积并在他伤害到一名敌方英雄时获得一层充能。在满层充能时，阿利斯塔的下次对敌方英雄发起的普攻将造成额外魔法伤害和晕眩效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/FerociousHowl.png",
          name: "坚定意志",
          description:
            "阿利斯塔发出野性的咆哮，移除身上所有控制效果，并且持续时间内所受的物理和魔法伤害将减少。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 使用大地粉碎可以让你在更好的位置施放野蛮冲撞。",
        "- 移动速度对于阿利斯塔非常重要，因此买鞋时要慎重考虑。",
        "- 使用闪现可以让你抓住毫无防备的目标，继而用大地粉碎与野蛮冲撞将他们撞回你的友军中。"
      ],
      DATAenemytips: [
        "- 阿利斯塔具有很强的破坏力也很结实，尝试着攻击更脆弱的输出型英雄才是更好的选择。",
        "- 在敌方防御塔附近时要小心大地粉碎和野蛮冲撞的连击。",
        "- 当阿利斯塔使用终极技能时，你可以后退并等到效果消逝后，再对其进行攻击。"
      ],
      infotitle:
        "阿利斯塔一直都是威名远扬的巨力勇士，他要为自己被屠杀的氏族向诺克萨斯帝国复仇。虽然他曾被奴役，并被迫成为斗兽场中的角斗士，但他坚不可摧的意志使他免于沦为真正的野兽。现在，挣脱了奴役枷锁的他继续以受苦之人和弱者的名义战斗。他的愤怒，还有犄角、蹄子和拳头，都是他的武器。"
    },
    {
      name: "符文法师",
      title: "瑞兹",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big13000.jpg",
      scores: { difficult: 7, skills: 10, attack: 2, survive: 2 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Ryze_P.png",
          name: "奥术专精",
          description:
            "瑞兹的技能会造成基于他法力值加成的额外伤害，并且他的最大法力值会基于他的法术强度来获得百分比的提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RyzeQ.png",
          name: "超负荷",
          description:
            "被动部分：瑞兹的其它基础技能会重置【超负荷】的冷却时间并且充能一层符文。当瑞兹带着2层符文施放【超负荷】时，他会获得短暂的爆发性移动速度加成。\n\n施放时，瑞兹会沿直线扔出一团纯粹能量，来对命中的第一个敌人造成伤害。如果目标身上有【涌动】效果，那么【超负荷】会造成额外伤害并弹射至附近带有【涌动】效果的敌人身上。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RyzeW.png",
          name: "符能禁锢",
          description:
            "瑞兹将一个目标陷入一个符文牢笼中，来对其造成伤害和减速效果。如果目标身上带有【涌动】效果，那么减速效果会替换为禁锢效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RyzeE.png",
          name: "法术涌动",
          description:
            "瑞兹放出一颗纯净魔法能量球，对一名敌人造成伤害并对附近的敌人造成减益效果。瑞兹的技能可以对带有该减益的敌人造成额外效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RyzeR.png",
          name: "曲境折跃",
          description:
            "被动部分：【超负荷】对带有【涌动】效果的目标造成更多伤害。\n\n施放时，瑞兹会创造一个传送门来通向一个附近的位置。在若干秒后，站在传送门附近的友军会被传送至目标位置。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 使用【Q超负荷】的被动来最大化伤害或移动速度。 【E法术涌动】的冷却时间很短，可以利用这点来将【涌动】效果散播到多个敌人身上。 在【R曲境折跃】的充能期间，瑞兹可以移动并施放其它技能，并且这么做不会导致传送门被取消。"
      ],
      DATAenemytips: [
        "- 对那些身上带有【涌动】效果的人来说，瑞兹尤为危险。",
        "- 要利用【曲境折跃】的施放时间来想好如何处理即将从传送门中出现的敌人。",
        "- 在瑞兹施放【曲境折跃】期间，如果能用控制技能使他无法施法或无法移动，那么这个技能就会被取消。"
      ],
      infotitle:
        "瑞兹是符文之地广为人知的最老练的法师之一。他生于远古，饱经风霜，肩负着不可承受之重任。这位大法师的武器，是他无可摧折的决心和丰富的秘法学识，他一生都在寻找着世界符文 ——它们是令这世界从无到有、万物成形的原生魔法所留下的碎片。他一定要找到所有这些神秘的字符，以免落入恶人之手，因为瑞兹知道它们可能给符文之地带来怎样的浩劫。"
    },
    {
      name: "亡灵战神",
      title: "赛恩",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big14000.jpg",
      scores: { difficult: 5, skills: 3, attack: 5, survive: 9 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Sion_Passive1.png",
          name: "死亡荣耀",
          description:
            "在被击杀后，赛恩会回光返照一段时间并且生命值会快速衰减。在此期间，他的攻击会变得超快，获得生命偷取，并且每次攻击会额外造成基于目标最大生命值的额外伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SionQ.png",
          name: "残虐猛击",
          description:
            "赛恩开始蓄力，并在释放时对他前方的一个区域进行一次强劲的猛击，对区域内的敌人造成伤害。如果他蓄力时间足够久，那么被命中的敌人还会受到击飞和晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SionW.png",
          name: "灵魂熔炉",
          description:
            "赛恩为自己套上护盾，并能在3秒后再次激活这个技能来对身边的敌人造成魔法伤害。在赛恩击杀敌人时，他会被动获得最大生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SionE.png",
          name: "杀手怒吼",
          description:
            "赛恩发射一个短程冲击波，来对命中的第一个敌人造成伤害、减速效果和破甲效果。如果冲击波命中的是小兵或者野怪，那么目标敌方单位还会被击退，对沿途的所有敌方单位造成伤害、减速和护甲击碎效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SionR.png",
          name: "蛮横冲撞",
          description:
            "赛恩朝着一个方向冲锋，持续提升移动速度。他可以朝着鼠标悬停处进行微小的转向。当他与一名敌人产生碰撞时，他会基于敌人们与碰撞点之间的距离造成伤害和击飞效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在【R蛮横冲撞】进行时，你只有非常微弱的转向能力，所以请先规划好冲撞的直线。",
        "-【E杀手怒吼】是一个强大的起手技能，可以为一记强劲的【Q残虐猛击】争取足够久的时间。",
        "-【W灵魂熔炉】的增益状态会显示护盾的剩余生命值，利用这个信息来完美选择它的爆炸时机。"
      ],
      DATAenemytips: [
        "- 即使会被赛恩的【Q残虐猛击】给命中，也要让赛恩提前放出这个技能，从而减少这个技能的影响力。",
        "- 利用赛恩死后的时间来重新站位，并准备好迎接他的回光返照。"
      ],
      infotitle:
        "赛恩是一个来自先前时代的诺克萨斯战争英雄，曾经徒手掐死过一代德玛西亚国王。但他拒绝了死亡和湮灭，以活尸的状态继续为帝国效命。只要挡住他的去路，都会被他无差别地屠杀，敌我不分，足可证明他已经失去了从前的人性。即便如此，他腐朽的身体还是被钉进了粗糙的装甲，继续以丧心病狂的鲁莽冲上战场，在每一下巨斧的挥砍中艰难地回忆真正的自我。"
    },
    {
      name: "战争女神",
      title: "希维尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big15000.jpg",
      scores: { difficult: 4, skills: 1, attack: 9, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Sivir_Passive.png",
          name: "敏锐疾行",
          description: "希维尔在攻击一名敌方英雄时，会短暂地获得移动速度提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SivirQ.png",
          name: "回旋之刃",
          description:
            "希维尔像挥舞回力标一样挥出她的十字刃，并在往返时造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SivirW.png",
          name: "弹射",
          description:
            "希维尔的下几次普通攻击将弹射到周围的目标上，对次要目标造成较少伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SivirE.png",
          name: "法术护盾",
          description:
            "制造一层法术屏障，来格挡一次敌方单体技能。如果希维尔成功格挡了一次技能，那么就会回复法力值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SivirR.png",
          name: "狩猎",
          description:
            "希维尔在战斗中引领她的友军，为他们提供持续一段时间的爆发性移动速度加成。此外，这个技能还会在弹射激活时，为希维尔提供被动的攻击速度加成。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 希维尔的回旋之刃在到达最远射程后会飞回她手中，因此在扔出后你可以调整位置使它更容易命中敌人。",
        "- 弹射会立刻重置希维尔的普通攻击，所以在进行一次普攻之后立刻激活它，就能最大化伤害输出。",
        "- 尽量留着法术护盾，来帮你抵挡那些可以限制你的技能，例如：晕眩和束缚。"
      ],
      DATAenemytips: [
        "- 回旋之刃会消耗大量法力值，躲避该技能会让希维尔受挫。如果她在扔出去时击中了你，在其返回时你要避免再次被击中。",
        "- 希维尔是一个强大的推线英雄，所以如果任由她独自推线的话，你将发现己方的防御塔很快就被摧毁了。",
        "- 当你使用一个法师与希维尔对线时，你可以假装压上施法再退回，来诱骗她用掉法术护盾。"
      ],
      infotitle:
        "希维尔是著名的宝藏猎人和雇佣兵队长，在恕瑞玛沙漠中进行频繁的契约交易。她的兵器是一柄颇具传奇色彩的十字刃，她曾赢得过无数次战斗，虽然她本人报价不菲，但却深得雇主青睐。她有着著名的无畏决心和无尽的野心，并且以自己的事业为傲——只要赏金够高，她就能从凶险的恕瑞玛古墓中寻回深埋于地下的宝藏。不过随着好几股远古的力量搅动着恕瑞玛的根骨，希维尔突然发现自己被裹挟着、拉扯着，卷入了截然不同的命运。"
    },
    {
      name: "众星之子",
      title: "索拉卡",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big16000.jpg",
      scores: { difficult: 3, skills: 7, attack: 2, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/Soraka_Passive.png",
          name: "救赎",
          description: "索拉卡在朝着附近低血量的友方英雄移动时会提升移动速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SorakaQ.png",
          name: "流星坠落",
          description:
            "一颗流星从天而降，落在目标地点，造成魔法伤害，并对区域中心的敌人造成减速效果。如果一名敌人被此技能命中，那么索拉卡就会回复生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SorakaW.png",
          name: "星之灌注",
          description: "索拉卡牺牲自己的一部分生命值来治疗一个友方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SorakaE.png",
          name: "星体结界",
          description:
            "在目标区域创造一个结界，沉默结界中的所有敌人。当结界消散时，仍在结界内的敌人会被禁锢。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SorakaR.png",
          name: "祈愿",
          description:
            "索拉卡让友军充满希望，立刻使她和所有友方英雄回复生命值。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 索拉卡是个很强大的盟友，用她的治疗技能让己方团队不停前进。",
        "- 你可以在地图的任意位置用【R祈愿】拯救原本要丧命的队友。",
        "- 【E星体结界】在限制敌方走位时非常强大。"
      ],
      DATAenemytips: [
        "- 在团战中，如果索拉卡冲到前线治疗她的队友，那么就集中火力攻击索拉卡。",
        "- 如果索拉卡将【E星体结界】用来压制，那么可以利用这个技能冷却时间长的特点来赚取优势。",
        "- 集火索拉卡要比集火她正在治疗的友军更轻松。"
      ],
      infotitle:
        "索拉卡是来自巨神峰彼端天界维度的流浪者。她放弃了不朽的神格，保护凡间的种族免遭他们自身暴力本能的伤害。她对自己遇见的每个人都施以同情与仁慈——即使是那些对她心存恶念的人也不例外。虽然索拉卡见证了这世上如此多的苦痛与挣扎，但她依然相信符文之地的人们依然有更多潜力尚未发现。"
    },
    {
      name: "迅捷斥候",
      title: "提莫",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big17000.jpg",
      scores: { difficult: 6, skills: 7, attack: 5, survive: 3 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Teemo_P.png",
          name: "游击队军备",
          description:
            "如果提莫在短时间内静止站立且不受任何伤害，就会进入无定期的隐形状态。如果提莫在草丛中，他就能在移动的同时进入并保持隐形状态。离开隐形状态后，提莫会获得“出奇制胜”的增益效果，提升攻击速度，持续3秒。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BlindingDart.png",
          name: "致盲吹箭",
          description:
            "用一团强力的毒液来侵蚀一名敌人的视野，对目标单位造成伤害并使目标致盲一段时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MoveQuick.png",
          name: "小莫快跑",
          description:
            "提莫动如脱兔，提升移动速度，直到被敌方英雄或防御塔击中为止。提莫可以通过冲刺来获得额外移动速度，且短时间内不会因被击中而使加速效果中止。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ToxicShot.png",
          name: "毒性射击",
          description: "提莫每次攻击附带毒液伤害，造成持续性伤害，持续4秒。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TeemoRCast.png",
          name: "种蘑菇",
          description:
            "提莫投掷一个可爆炸的毒性陷阱，需要消耗提莫背包里的一个蘑菇。陷阱会在被敌方踩中时爆炸，释放出一团毒云，对附近的敌人造成减速效果和持续伤害。如果提莫把一个蘑菇扔到另一个蘑菇上，那么这个蘑菇会进行弹跳，获得额外的施放距离。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 提莫的蘑菇用来打钱是很有效的。",
        "- 将你的蘑菇放在地图上的关键位置，比如靠近龙或纳什男爵的地方，以便在敌人试图杀死他们的时候能侦查到。"
      ],
      DATAenemytips: [
        "- 提莫的毒性射击技能对被击中再退后的玩家同样有效，在你准备好反击之前要和提莫保持距离。",
        "- 你可以用神谕透镜来安全地摧毁关键地区的蘑菇。"
      ],
      infotitle:
        "不惧艰难险阻、不惧坎坷危途，提莫怀着无比的热情和欢欣的精神探索着整个世界。作为一个约德尔人，他对自己的道德观坚定不移，同时对班德尔斥候的信条感到自豪，有的时候，他的热忱甚至会让他无法看到，自己行为会在更大的意义上导致什么样的后果。虽然有的人认为这支斥候小队是否真正存在还有待商榷，但有一件事是肯定的：提莫的信念绝不容小觑。"
    },
    {
      name: "麦林炮手",
      title: "崔丝塔娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big18000.jpg",
      scores: { difficult: 4, skills: 5, attack: 9, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Tristana_Passive.png",
          name: "瞄准",
          description: "崔丝塔娜的射程随等级提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TristanaQ.png",
          name: "急速射击",
          description: "崔丝塔娜急速射击，短时间内提升攻击速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TristanaW.png",
          name: "火箭跳跃",
          description:
            "崔丝塔娜朝地面开火，跳跃至目标区域，落地造成伤害并减速附近敌人一小段时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TristanaE.png",
          name: "爆炸火花",
          description:
            "当崔丝塔娜杀死一个单位，加农炮弹会炸裂伤害周围的敌人。可通过主动施放这个技能来将一颗炸弹放置在目标身上，炸弹会在短时间内或被崔丝塔娜攻击数次后爆炸，爆炸时对目标及其附近的敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TristanaR.png",
          name: "毁灭射击",
          description:
            "崔丝塔娜装填巨型加农炮弹攻击目标单位，造成巨大伤害并击退目标。如果目标携带着【爆炸火花】的炸弹，那么该炸弹的爆炸半径翻倍。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 崔丝塔娜的巨枪可以让它远距离攻击目标。利用这个可以防止你的敌人靠近你。",
        "- 在你对一个敌人叠满【爆炸火花】的层数后，再用【火箭跳跃】跳到这个敌人身上，就能对这个敌人造成爆发性的伤害。",
        "- 你可以用【急速射击】来帮你尽快在敌方英雄身上叠满【爆炸火花】。"
      ],
      DATAenemytips: [
        "- 如果你看见崔丝塔娜在交战中激活急速射击，那么晕眩她，并且后退，直到该技能消散。",
        "- 对线时远离你的小兵，减少爆炸射击所带来的附带伤害。"
      ],
      infotitle:
        "许多约德尔人都将自己的精力花在探索发现、发明创造或者搞恶作剧上，然而崔丝塔娜则一心向往伟大勇者们的冒险故事。她听闻了太多关于符文之地的事，关于不同的势力、关于庞大的战争。崔丝塔娜相信自己也有资格成为传奇。她首次踏进了这个世界，拿着她信赖的加农炮“轰隆”，用坚定的勇气和乐观精神跳进战场。"
    },
    {
      name: "祖安怒兽",
      title: "沃里克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big19000.jpg",
      scores: { difficult: 3, skills: 3, attack: 9, survive: 5 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/WarwickP.png",
          name: "血之饥渴",
          description:
            "沃里克的普攻造成额外魔法伤害。如果沃里克的生命值低于50%，那么他会获得等额的治疗效果。如果他的生命值低于25%，则治疗效果提升至三倍。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/WarwickQ.png",
          name: "野兽之口",
          description:
            "沃里克向前猛扑并撕咬他的目标，造成基于目标最大生命值的伤害，并造成基于实际伤害值的治疗效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/WarwickW.png",
          name: "鲜血追猎",
          description:
            "沃里克感知生命值在50%以下的敌人，在朝着这些敌人移动时会获得移动速度加成，并在攻击这些敌人时会获得攻速加成。当这些敌人的生命值在20%以下时，他会狂暴并让这些加成提升至三倍。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/WarwickE.png",
          name: "远祖嗥叫",
          description:
            "沃里克获得持续2.5秒的伤害减免效果。在效果结束时，或者重新激活技能时，沃里克会嗥叫，使附近的敌人因恐惧而逃跑1秒。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/WarwickR.png",
          name: "无尽束缚",
          description:
            "沃里克朝一个方向跳跃（跳跃距离可从他的移动速度加成中获益），将他所碰撞到的第一个敌方英雄压制1.5秒。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 跟随你的【W鲜血追猎】的血迹就能找到那些生命值较低的敌方英雄。",
        "- 沃里克的终极技能的施放距离可以从任何移动速度加成中获益，包括友方的增益效果和召唤师技能。",
        "- 【Q野兽之口】会跟随敌人。在你按住这个技能键时，即使敌人用了奔跑、突进或传送技能，沃里克也会跟随他们出现在相应位置。"
      ],
      DATAenemytips: [
        "- 沃里克普攻会在他生命值较低时治疗他。把你的控制技能留到他残血时用，不要给他反击的机会。",
        "- 沃里克在对抗生命值较低的敌人时会获得强化。维持好你的生命值，别让他有可乘之机。",
        "- 沃里克终极技能的施放距离可从他的移动速度加成中获益。"
      ],
      infotitle:
        "沃里克是一头游猎于祖安灰色小巷的怪兽。他的身体接受了痛苦的实验并发生了变异，融合了精密复杂的储液舱和药泵，向他的血管中注入炼金合成的愤怒激素。他从阴影中一跃而出，猎杀那些在城市最深处肆虐的罪犯。沃里克会被鲜血吸引，血腥味让他失去理智。没有哪个沾血的人能够逃过他的猎杀。"
    },
    {
      name: "雪原双子",
      title: "努努和威朗普",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big20000.jpg",
      scores: { difficult: 4, skills: 7, attack: 4, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/NunuPassive.png",
          name: "弗雷尔卓德的召唤",
          description:
            "努努提升威朗普和一名附近友军的攻击速度和移动速度，并使威朗普的普攻可以伤害目标周围的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NunuQ.png",
          name: "吞噬",
          description:
            "威朗普撕咬一个小兵、野怪或敌方英雄，造成巨大伤害并回复自己的生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NunuW.png",
          name: "史上最大雪球！",
          description:
            "威朗普滚起一个雪球，它的尺寸和速度将随着滚动时间而增长。雪球会伤害并击飞敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NunuE.png",
          name: "雪球飞射",
          description:
            "努努掷出多个雪球以伤害敌人。当他完成后，威朗普就会禁锢被雪球命中过的任何英雄或大型野怪。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NunuR.png",
          name: "绝对零度",
          description:
            "努努和威朗普在一个区域内创造一阵强大的暴风雪，来减速敌人并在结束时造成巨额伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 吞噬可以让努努呆在线上对抗敌方远程英雄。",
        "- 如果有对手即将跑出射程，你可以选择早点打断绝对零度造成部分伤害。",
        "- 延迟施放绝对零度直到对手使用完首轮限制，通常是有益的。尽量在冲入团战之前再等待一下。"
      ],
      DATAenemytips: [
        "- 打断绝对零度技能的引导会减低你队伍所受到的伤害。",
        "- 使用召唤师技能闪现，将确保你逃离绝对零度技能。",
        "- 【史上最大雪球！】移动得非常快但无法快速转向，因此尽量不要沿直线逃跑，而是要进行突然、大角度的转向。"
      ],
      infotitle:
        "很久以前，曾有个小男孩，他要证明自己是个英雄，于是决定去杀掉一头凶猛的怪兽——但他却发现这个怪兽其实是个孤独的魔法雪人，而且他需要的只是一个朋友。雪人和男孩被古老的力量所连结，也因对雪球的共同爱好而玩到一起。努努和威朗普如今在弗雷尔卓德的土地上肆意撒欢打滚，为想象中的冒险注入鲜活的生命力。他们希望能够在前面的某个地方找到努努的母亲。如果他们能拯救她，或许他们就真的是英雄了。"
    },
    {
      name: "赏金猎人",
      title: "厄运小姐",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big21000.jpg",
      scores: { difficult: 1, skills: 5, attack: 8, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/MissFortune_W.png",
          name: "厄运的眷顾",
          description: "在对一个新目标进行普攻时，厄运小姐会造成额外物理伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MissFortuneRicochetShot.png",
          name: "一箭双雕",
          description:
            "厄运小姐向敌人发射子弹，伤害他们以及他们后面的目标。两次攻击都可以施加【厄运的眷顾】。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MissFortuneViciousStrikes.png",
          name: "大步流星",
          description:
            "厄运小姐在不被攻击时会被动获得移动速度加成。可以主动施放这个技能来获得短时间的攻击速度加成。在【大步流星】尚未冷却完毕时，【厄运的眷顾】可减少【大步流星】的剩余持续时间。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MissFortuneScattershot.png",
          name: "枪林弹雨",
          description:
            "厄运小姐发射一阵弹雨来获得目标区域的视野，对敌人造成几波伤害，并减缓他们的移动速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MissFortuneBulletTime.png",
          name: "弹幕时间",
          description:
            "厄运小姐向她面前的锥形范围内引导一阵子弹风暴，对敌人造成大量伤害。这个技能的每波子弹都可以暴击。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 厄运小姐如果近期没有受到伤害，就会提高速度。避免受到攻击可以让她移动非常迅速。",
        "- 如果敌方英雄躲在小兵背后，则对最远处的敌方小兵使用一箭双雕；它会弹射到敌方英雄身上造成大量伤害。",
        "- 在【大步流星】尚未冷却时，要尽量利用【厄运的眷顾】来最大化攻击速度加成的持续时间。"
      ],
      DATAenemytips: [
        "- 厄运小姐的加速会被我方的伤害移除。",
        "- 如果你能追上厄运小姐，她很容易被击杀。在团队作战中先锁定她为目标。"
      ],
      infotitle:
        "以美貌闻名，但却以无情立命的莎拉是一位比尔吉沃特的船长，她在这座港镇的强硬犯罪集团中塑造了不容轻视的形象。在她还是个孩子的时候，亲眼目睹了海盗之王普朗克谋杀了自己的家人。多年以后她残忍地报仇雪恨，把他和他的旗舰连人带船一同炸飞。所有低估她的人都会发现，自己面对的是一个极具欺骗性的狡黠对手，还有可能要处理肚子里的一两颗子弹。"
    },
    {
      name: "寒冰射手",
      title: "艾希",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big22000.jpg",
      scores: { difficult: 4, skills: 2, attack: 7, survive: 3 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Ashe_P.png",
          name: "冰霜射击",
          description:
            "艾希的攻击会让目标减速，并使艾希对这些目标造成更高伤害。\n\n艾希的暴击不会造成额外伤害，但会对目标施加一个强化版减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AsheQ.png",
          name: "射手的专注",
          description:
            "艾希会在攻击时聚集【全神贯注】效果。在【全神贯注】到达最大值时，艾希就能施放【射手的专注】来消耗掉所有【全神贯注】效果，以临时提升她的攻击速度，并在持续期间将她的普攻转变为一阵强力的飓风箭阵。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Volley.png",
          name: "万箭齐发",
          description:
            "艾希向前方的锥形范围射出9支箭，对敌人造成额外伤害。该技能也会触发冰霜射击的效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AsheSpiritOfTheHawk.png",
          name: "鹰击长空",
          description:
            "艾希将她的猎鹰之灵派去执行侦查任务，可派往地图上的任意地点。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/EnchantedCrystalArrow.png",
          name: "魔法水晶箭",
          description:
            "艾希射出一支沿直线飞行的魔法水晶箭。如果水晶箭命中了一名敌方英雄，那么它会对该英雄造成伤害和晕眩效果，晕眩时长取决于水晶箭的飞行距离。此外，该英雄附近的敌方单位会受到伤害和减速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 尽量预判敌人行进的方向发射魔法水晶箭 ，这样可以加大射击命中率。",
        "- 万箭齐发的箭矢会被命中的第一个敌人所阻挡，因此请注意拉开距离，以防所有箭矢都被敌方的前排英雄所吸收。",
        "- 鹰击长空能侦查野区中的目标，这让你在野区中作战很有优势。"
      ],
      DATAenemytips: [
        "- 艾希几乎没有防御技能，因此是优先的gank目标。",
        "- 如果艾希有段时间没有施放她的【魔法水晶箭】，那么你在地图上移动时就要特别小心。"
      ],
      infotitle:
        "作为阿瓦罗萨部族的战母，寒冰血脉的艾希率领着北方人数最多的部落。她克己、智慧、忠于理想，但并不适应自己作为领袖的角色，艾希与自己血脉中蕴藏的先祖魔法相通，挽起了臻冰打造的长弓。她的族人相信她就是神话中的女英雄阿瓦罗萨的转世，在人们的追随下，艾希希望夺回那些属于部族的古代领土，从而让弗雷尔卓德再次实现统一。"
    },
    {
      name: "蛮族之王",
      title: "泰达米尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big23000.jpg",
      scores: { difficult: 5, skills: 2, attack: 10, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Tryndamere_Passive.png",
          name: "战斗狂怒",
          description:
            "泰达米尔每次攻击、暴击或击杀都能获得怒气。怒气被动地增加他的暴击几率，且可以通过释放嗜血杀戮来消耗。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TryndamereQ.png",
          name: "嗜血杀戮",
          description:
            "泰达米尔对战斗极度饥渴，他受伤程度越高，攻击力越强。他能通过释放【Q嗜血杀戮】消耗怒气并治疗自己。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TryndamereW.png",
          name: "蔑视",
          description:
            "泰达米尔嘲笑敌人，减少身边敌方英雄的物理攻击。转身逃跑的敌人会被减速。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TryndamereE.png",
          name: "旋风斩",
          description:
            "泰达米尔挥舞大剑冲向目标，对冲锋路线上所有敌人造成伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/UndyingRage.png",
          name: "无尽怒火",
          description:
            "泰达米尔是如此渴望战斗，以至于承受再多的伤害也不会死亡。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 推迟激活无尽怒火是促使敌方英雄过度激进地想来杀死你的有效方式。",
        "- 嗜血杀戮是治疗泰达米尔的有效方式，试着在增益消失之前激活它。",
        "- 如果敌人叠加护甲，可购买最后的轻语或者幽梦之灵。"
      ],
      DATAenemytips: [
        "- 尽早的骚扰泰达米尔，使其无法击杀小兵、无法通过嗜血杀戮技能回复生命值。",
        "- 切记：只有在背对泰达米尔的前提下，他才能够减缓你的速度。",
        "- 泰达米尔造成的大多是物理伤害。如果他变得过于强大，可以考虑购买荆棘之甲。"
      ],
      infotitle:
        "桀骜不羁和无尽的愤怒驱使着泰达米尔在弗雷尔卓德所向披靡。他曾公开挑战北方最伟大的战士，让自己为未来更黑暗的时代做好准备。这位愤怒的野蛮人一直都在为自己被灭绝的氏族寻求复仇，不过最近他与阿瓦洛萨部族的战母艾希联手，并在她的族群中重新安家。他非人的力量与毅力是众人皆知的传奇，而且也为他和他的新盟友带来了无数次奇迹般的胜利。"
    },
    {
      name: "武器大师",
      title: "贾克斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big24000.jpg",
      scores: { difficult: 5, skills: 7, attack: 7, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Armsmaster_MasterOfArms.png",
          name: "无情连打",
          description: "贾克斯连续的普通攻击，会持续地提高他的攻击速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JaxLeapStrike.png",
          name: "跳斩",
          description:
            "贾克斯跳向一个单位。如果目标是敌人，贾克斯会用他的武器狠狠地抽打敌人的脸，造成额外伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JaxEmpowerTwo.png",
          name: "蓄力一击",
          description: "贾克斯为武器充能，使他的下次攻击能造成额外伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JaxCounterStrike.png",
          name: "反击风暴",
          description:
            "贾克斯的武艺让他能够在短时间里躲闪掉所有即将到来的普通攻击，随后对所有周围的敌人快速发起反击，并将他们击晕。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JaxRelentlessAssault.png",
          name: "宗师之威",
          description:
            "每连续攻击2次，第3次攻击就会造成额外的魔法伤害。另外，贾克斯可以激活这个技能来施放他的内力，暂时性地提升他的护甲和魔法抗性。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 贾克斯的跳斩能对友军施放，包括侦查守卫，你可以利用这个逃离敌人的追杀。",
        "- 诸如鬼索的狂暴之刃和海克斯科技枪刃等物法双加成的装备，都对贾克斯大有裨益。"
      ],
      DATAenemytips: [
        "- 通过短时间爆发来伤害贾克斯，而不要跟他过于靠近。不让他连续攻击，就能极大降低他所造成的伤害。",
        "- 贾克斯可以在短时间内躲闪掉所有即将到来的普通攻击，并在结束后晕眩周围的敌军。请等到他的躲闪结束后再发起攻击。"
      ],
      infotitle:
        "无论是各种兵器的技法，还是刻薄的挖苦嘲讽，贾克斯都无人能及，他是目前已知的最后一名艾卡西亚武器大师。曾经，故乡的人们狂妄自大地引来了虚空，结果导致家园被夷为平地。在那之后，贾克斯和他的同胞发誓要保护仅存的一切。如今，世界上的魔法再次涌起，沉睡的威胁也再次被触动。于是贾克斯开始在瓦洛兰漫游，手握艾卡西亚的最后光明，考验他遇到的每一名战士，寻找可与自己分庭抗礼的强者，并肩作战。"
    },
    {
      name: "堕落天使",
      title: "莫甘娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big25000.jpg",
      scores: { difficult: 1, skills: 8, attack: 1, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/FallenAngel_Empathize.png",
          name: "灵魂吸取",
          description:
            "莫甘娜从她的敌人身上吸取灵魂，在对英雄、大型小兵和大型野怪造成技能伤害时获得治疗效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MorganaQ.png",
          name: "暗之禁锢",
          description:
            "莫甘娜用黑暗魔法将一名敌人禁锢在原地，迫使其感受自己造成的痛苦并对其造成魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MorganaW.png",
          name: "折磨之影",
          description:
            "莫甘娜在一个区域施放一团诅咒之影，对胆敢站在她黑色环形之中的敌人造成伤害。敌人会持续受到魔法伤害，并且生命值越低受到伤害越高。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MorganaE.png",
          name: "黑暗之盾",
          description:
            "莫甘娜为一名友方英雄涂上一层保护性的星火屏障，在被打破之前吸收魔法伤害和限制效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MorganaR.png",
          name: "灵魂镣铐",
          description:
            "莫甘娜全力释放她的星界能量，与此同时，她的羽翼会解除束缚并且会悬浮在地面上。她将黑暗痛苦组成的锁链抽击到附近的敌方英雄身上，在朝向他们移动时获得移动速度。锁链会减速并造成初段伤害，并在一段延迟后，晕眩那些未能挣脱的敌方英雄。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 精明地使用黑暗之盾可以决定团战的结果。",
        "- 增强生存力的道具可以使莫甘娜在联合使用黑暗之盾与灵魂镣铐时变得极难杀死。",
        "- 如果兵线上只有你自己，那么痛苦腐蚀能有效地帮助你打钱。"
      ],
      DATAenemytips: [
        "- 【W折磨之影】会对失去大量生命值的敌人造成成吨的伤害。在血量较低时，要留心莫甘娜把你诱骗到它范围内的企图。",
        "- 莫甘娜经常需要使用【Q暗之禁锢】来发起其他进攻，把小兵当护盾，从而躲避【Q暗之禁锢】。 【E黑暗之盾】让莫甘娜免疫限制效果，但这个护盾可以被魔法伤害给灌爆。"
      ],
      infotitle:
        "在天界与凡间双重本性的夹缝中左右为难的莫甘娜，束缚了自己的双翼并拥抱了人性，还将自己的痛苦和怨恨施加给那些失信和堕落之人。她抗拒一切在她眼中不公正的法律和传统，并从德玛西亚的黑影中投出保护的盾牌和暗焰的锁链，在别人想要打压的暗处为真理而战。最重要的是，莫甘娜坚信，即使是被放逐、被遗弃的人，也可能有朝一日东山再起。"
    },
    {
      name: "时光守护者",
      title: "基兰",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big26000.jpg",
      scores: { difficult: 6, skills: 8, attack: 2, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Zilean_Passive.png",
          name: "瓶中时光",
          description:
            "基兰将时光储存为经验值。\n\n当他拥有足够的经验值来使一名友方英雄升级时，他就能通过右键点击该友方英雄来使其升级。基兰自身也会获得等值的经验值。无法在战斗中使用。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZileanQ.png",
          name: "定时炸弹",
          description:
            "将一颗炸弹扔向目标区域，炸弹会附着在靠近它的单位身上（英雄优先）。炸弹会在3秒后爆炸，造成范围魔法伤害。如果炸弹被另一颗定时炸弹给提前引爆，那么还会使敌人晕眩。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZileanW.png",
          name: "穿梭未来",
          description:
            "基兰为未来的对抗做准备，减少他所有其它基础技能的冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TimeWarp.png",
          name: "时光发条",
          description:
            "基兰扭曲任意单位的时光，短时间内提升友方单位移动速度或减少敌方单位移动速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ChronoShift.png",
          name: "时光倒流",
          description:
            "基兰对友方英雄施放时光结界，若目标死亡，则时光倒流，救活目标。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你可以连续使用【Q定时炸弹】和【W穿梭未来】来快速地将两颗定时炸弹放到一个目标上。放置第二颗炸弹会引爆第一颗，并晕眩附近的敌人。",
        "- 【E时光发条】能让友军追杀敌人，或者从败仗逃脱。",
        "- 【R时光倒流】能有效保护本方的主力输出英雄，但过早使用该技能会导致敌方转移攻击目标，降低效果。"
      ],
      DATAenemytips: [
        "- 如果你能跟上基兰的速度，你可以等到他的终极技能效果消逝之后，再发出夺命一击。",
        "- 基兰很容易死在集火之下，但是很难被单杀。想杀他时，请你的队伍集中火力。"
      ],
      infotitle:
        "基兰曾是一位强大的艾卡西亚法师，在目睹了家园被虚空毁灭以后，他开始执迷于时间的流逝。他甚至没有时间为这场灾难感到悲哀，立刻就召唤了远古的时间魔法，预测全部的发展结局。从实际结果来说，他已成为不朽的存在。如今的基兰在过去、现在、未来之间漂泊，弯折、扭曲自己周围的时间，追寻那稍纵即逝的关键时刻，逆转时光，阻止艾卡西亚的毁灭。"
    },
    {
      name: "炼金术士",
      title: "辛吉德",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big27000.jpg",
      scores: { difficult: 5, skills: 7, attack: 4, survive: 8 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Singed_Passive.png",
          name: "剧毒冲流",
          description:
            "辛吉德借助附近英雄的后向气流，在经过他们时获得爆发性的移动速度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/PoisonTrail.png",
          name: "剧毒踪迹",
          description:
            "辛吉德在身后留下剧毒踪迹，对经过上面的敌人造成持续伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MegaAdhesive.png",
          name: "强力粘胶",
          description: "扔出一瓶强力粘合剂在地上，其中的敌人会被减速和缚地。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Fling.png",
          name: "过肩摔",
          description:
            "伤害目标敌方单位，并将他们投掷到辛吉德身后。如果辛吉德将目标扔到强力粘胶上，目标还会被禁锢。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/InsanityPotion.png",
          name: "疯狂药剂",
          description: "辛吉德喝下精心炮制的化学药剂，大幅提高战斗属性。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 剧毒踪迹在打钱与骚扰方面是很有效的，可以让辛吉德主宰他所在那条线的形势。",
        "- 用疯狂药剂诱使敌人在剧毒踪迹上追捕你。",
        "- 将敌人扔进你的塔内可以对他们造成巨大伤害。"
      ],
      DATAenemytips: [
        "- 保持一定距离，避免被过肩摔投掷到敌人堆里去。",
        "- 辛吉德要接近你的队伍，才能施展技能，充分利用这一点，在攻击他的友军时，使用控制技能限制他的移动。",
        "- 追击辛吉德的时候要小心，他很难被打倒，且在你追赶过程中，他能用剧毒踪迹对你造成伤害。"
      ],
      infotitle:
        "辛吉德是一位智力超群的祖安炼金术士，用自己的生命推动知识的边界。没有什么代价是他不能付出的，包括自己的理智。他的疯狂是否有迹可循？他的合剂几乎无不生效，只不过多数人都认为辛吉德已经丧失了全部人性的感知，所到之处只会留下苦难与恐惧的剧毒踪迹。"
    },
    {
      name: "痛苦之拥",
      title: "伊芙琳",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big28000.jpg",
      scores: { difficult: 10, skills: 7, attack: 4, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Evelynn_Passive.png",
          name: "恶魔魅影",
          description:
            "在脱离战斗之后，伊芙琳会进入【恶魔魅影】。【恶魔魅影】会在伊芙琳生命值较低时治疗她，还会在伊芙琳到达6级之后额外提供【伪装】效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Evelynn_Passive.png",
          name: "game_character_passiveName_Evelynn",
          description: "game_character_passiveDescription_Evelynn"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EvelynnQ.png",
          name: "憎恨之刺",
          description:
            "伊芙琳用鞭子进行抽击，对命中的第一个敌方单位造成伤害。随后，伊芙琳可以朝附近的敌人发出一列尖刺，至多可发射3次。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EvelynnW.png",
          name: "引诱",
          description:
            "伊芙琳诅咒她的目标，并使她在一段延时后的下次攻击或技能对目标施加魅惑和魔抗击碎效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EvelynnE.png",
          name: "鞭笞",
          description:
            "伊芙琳鞭笞她的目标，并造成伤害。她随后会获得短暂持续的移动速度加成。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【引诱】的准备时间也许看上去有点久，但它所具备的魅惑和魔抗击碎效果会为伊芙琳带来极大优势，所以等待是值得的。",
        "- 在潜行时，要注意你是否被敌方英雄所侦测到。你可以通过敌方英雄头上逐渐变黄和变红的眼睛来识别。",
        "- 在生命值较低时，伊芙琳可利用【恶魔魅影】的治疗效果和【伪装】重返战场，打敌人一个措手不及。"
      ],
      DATAenemytips: [
        "- 购买控制守卫可以帮助你侦测伊芙琳的位置，从而对她的伏击做好准备。",
        "- 伊芙琳的很大一部分威胁都在她的魅惑效果“引诱”上。保护那些带有“引诱”标记的友军，或者，如果你被标记了，确保你的友军隔在你和伊芙琳可能发起攻击的位置之间。",
        "- 如果你猜测伊芙琳已经离开了你的战线，可以通过打字以及在小地图上进行标记来让友军知道。"
      ],
      infotitle:
        "在符文之地的黑暗裂缝中，恶魔伊芙琳一直在搜寻着下一个目标。她披着人类女性的撩人外表，勾引她的猎物。只要有人被她魅惑，伊芙琳就会显露出真正的形态。她会施加难以言喻的折磨，从而让自己在猎物的疼痛中获得满足。对于这个恶魔来说，这样的欢愉只是无心无邪的滥情。但是对于符文之地上的其他人，听到的则是血肉模糊的传说，提醒着人们肉欲的危险和纵欲的代价。"
    },
    {
      name: "瘟疫之源",
      title: "图奇",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big29000.jpg",
      scores: { difficult: 6, skills: 3, attack: 9, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Twitch_Passive.png",
          name: "死亡毒液",
          description: "图奇的攻击会使目标感染死亡毒液，每秒造成真实伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TwitchHideInShadows.png",
          name: "埋伏",
          description:
            "图奇进入伪装状态，持续一段短暂的时间并且移动速度得到提升。当离开伪装状态后，图奇会暂时获得攻击速度加成。\n\n当一名身上带有【死亡毒液】的敌方英雄死亡时，此技能的冷却会重置。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TwitchVenomCask.png",
          name: "剧毒之桶",
          description:
            "图奇扔出一个毒性之桶来引爆一个区域，对区域内的敌人造成减速效果，并对他们施加死亡毒液效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TwitchExpunge.png",
          name: "毒性爆发",
          description:
            "图奇引爆他那卑劣的毒素，对已中毒的敌人进行更为深远的蹂躏。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TwitchFullAutomatic.png",
          name: "火力全开",
          description:
            "图奇让十字弩火力全开，快速地朝他面前射出强力且射程极远的穿刺箭头。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 图奇是游戏中最高攻击速度的英雄之一，尽量购买像黑色切割者、或智慧末刃等带有攻击附带效果的道具。",
        "- 【E毒性爆发】范围很大，在使用之前尽量给对手多叠几层【死亡毒液】。",
        "- 你可以用【W剧毒之桶】来追上那些超出射程的敌人。"
      ],
      DATAenemytips: [
        "- 图奇很脆弱。你可以趁他伪装状态之外时抓住他倾泻火力。",
        "- 法术护盾不能阻挡死亡毒液的伤害，但是它们能够阻挡图奇施放毒性爆发的效果。",
        "- 如果你猜测图奇已经离开了兵线，请尽快告知你的队友。"
      ],
      infotitle:
        "虽然出身只是一只瘟疫老鼠，但图奇却靠热情成为了一位污秽的鉴赏家，他可不介意弄脏自己的爪子。他使用一把炼金动力十字弩瞄准皮城人的镀金心脏，发誓要让这些生活在上层都市的人们知道他们真实的自我究竟有多么肮脏。他总是鬼鬼祟祟蹑手蹑脚，不是在地沟区翻来翻去，就是在别的地方深挖人类的垃圾堆，寻找被丢弃的宝藏……或者是一块发霉的三明治。"
    },
    {
      name: "死亡颂唱者",
      title: "卡尔萨斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big30000.jpg",
      scores: { difficult: 7, skills: 10, attack: 2, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Karthus_Passive.png",
          name: "死亡契约",
          description:
            "在死亡时，卡尔萨斯会化为一个灵体，能够在接下来的7秒里继续施放技能。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KarthusLayWasteA1.png",
          name: "荒芜",
          description:
            "卡尔萨斯在目标区域释放一次有延迟的爆炸魔法，对区域内的所有敌人造成伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KarthusWallOfPain.png",
          name: "痛苦之墙",
          description:
            "卡尔萨斯创造一道可通过的魔能之墙。所有穿过墙体的敌方单位都会被暂时降低移动速度和魔法抗性。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KarthusDefile.png",
          name: "亵渎",
          description:
            "卡尔萨斯被动地从他的猎物那里窃取法力，每杀死一个敌人就会获得法力。卡尔萨斯也可以转化这种力量，用猎物的灵魂环绕自身，对附近的敌人造成伤害，但会急速消耗他自己的法力。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KarthusFallenOne.png",
          name: "安魂曲",
          description: "在引导3秒后，卡尔萨斯就会对所有敌方英雄造成伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 让友军帮忙，告诉你何时使用安魂曲，从而击杀在不同线的对手。",
        "- 用荒芜来打钱及骚扰敌方英雄是非常有效的。"
      ],
      DATAenemytips: [
        "- 卡尔萨斯死后能够施放短暂的技能。远离他的尸体以保安全。",
        "- 确保你有足够的生命值从安魂曲中存活，虽然这意味着你得经常回到基地去回复生命值。"
      ],
      infotitle:
        "卡尔萨斯是湮灭的使者，是不死的亡灵。从来都是未见其恐怖身影，先闻其鬼魅挽歌。活着的人惧怕那些永世不得超生的亡灵，但卡尔萨斯却在亡灵的存在中只看到了美丽和纯洁，这是生与死的完美融合。当卡尔萨斯从暗影岛获得新生的时候，他决心要担任不死亡灵的使徒，把死亡的欣喜带给所有凡人。"
    },
    {
      name: "虚空恐惧",
      title: "科加斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big31000.jpg",
      scores: { difficult: 5, skills: 7, attack: 3, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/GreenTerror_TailSpike.png",
          name: "肉食者",
          description:
            "当科加斯杀死一个单位时，他会回复生命值和法力值。回复的数值会随着科加斯的等级而提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Rupture.png",
          name: "破裂",
          description: "使目标地面破裂，将敌人抛向空中，造成伤害并减速。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/FeralScream.png",
          name: "野性尖叫",
          description:
            "科加斯向面前锥形区域施放恐怖声波，造成魔法伤害并沉默数秒。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VorpalSpikes.png",
          name: "恐惧之刺",
          description:
            "科加斯的攻击会释放致命的尖刺，伤害并减速面前所有的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Feast.png",
          name: "盛宴",
          description:
            "吞噬一个敌方单位，造成高额真实伤害。若目标被吞噬致死，科加斯就会长大，提高最大生命值。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 尽量调整普攻的角度，好让虚空尖刺能够同时击杀敌方小兵并伤害敌方英雄。",
        "- 如果你难以吃掉英雄的话，那就多吃小兵让自己变大。",
        "- 将破裂与肉食者联合使用可以很好地增加生命和法力。"
      ],
      DATAenemytips: [
        "- 购买一些增加生命值的物品能够降低被科加斯快速杀死的机率。",
        "- 集中精力阻止科加斯达到其最大体积。",
        "- 破裂技能释放前，附近地面会有烟云预兆。你要对此多加注意，阻止科加斯的连击。"
      ],
      infotitle:
        "自从科加斯出现在符文之地烈日照射之下的那一刻起，它就被永不餍足的饥饿所驱使。虚空吞噬一切生命的欲望完美地体现在科加斯的身上，它复杂的生物构造能够迅速将物质转化为身体的成长，不仅会增加肌肉的质量和密度，还能让外壳变得有如钻石般坚硬。当单纯的体型增长已经不能满足它时，这只虚空生物就会将多余的物质形成锋利的骨刺吐出体外，刺穿猎物，为稍后的盛宴进行准备。"
    },
    {
      name: "殇之木乃伊",
      title: "阿木木",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big32000.jpg",
      scores: { difficult: 3, skills: 8, attack: 2, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Amumu_Passive.png",
          name: "诅咒之触",
          description:
            "阿木木的普通攻击会诅咒他的敌人，使敌人会从即将到来的魔法伤害中承受额外真实伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BandageToss.png",
          name: "绷带牵引",
          description:
            "阿木木向目标投掷粘稠的绷带，将自己拉向目标，并对目标造成伤害和眩晕效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AuraofDespair.png",
          name: "绝望光环",
          description:
            "附近的敌人陷入绝望，每秒损失一定百分比的最大生命值并刷新身上的诅咒效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Tantrum.png",
          name: "阿木木的愤怒",
          description:
            "永久减少阿木木所受的物理伤害。主动施放时，阿木木可以发泄他的怒火，对周围的敌人造成伤害。阿木木每被攻击一次，该技能的冷却时间就会减少0.5秒。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CurseoftheSadMummy.png",
          name: "木乃伊之咒",
          description:
            "阿木木用绷带将附近敌方单位通通缠住，对他们施加诅咒效果，并造成伤害，并使其无法攻击或移动。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 阿木木极度依赖队友，尽量与友军同线来取得最大的效果。",
        "- 冷却时间减少的阿木木很强，但他很难通过装备来获取冷却缩减。击杀苍蓝雕纹魔像获得增益来减少冷却时间，而不需要牺牲装备数值。",
        "- 绝望光环在对付其他坦克时很有效，确保你的绝望光环能攻击到对方最高生命值的英雄。"
      ],
      DATAenemytips: [
        "- 当阿木木施放终极必杀技时，避免和友军聚成一团。",
        "- 频繁的移动或躲在小兵后面都能让阿木木绷带牵引技能无法击中你。",
        "- 阿木木的绝望光环按生命比例伤害，所以购买增加生命值的物品效果并不一定理想。"
      ],
      infotitle:
        "在远古的恕瑞玛，有一个孤独而又忧郁的灵魂，阿木木。他在世间游荡，只为找到一个朋友。他遭受了一种远古的巫术诅咒，注定忍受永世的孤单，因为被他触碰就意味着死亡，他的喜爱便是毁灭。所有自称见过阿木木的人都说他是一具活生生的死尸，身材矮小，通体捆绑着青灰色的绷带。世人围绕阿木木编造了许多神话故事、民间传说和史诗传奇。这些故事世代传颂，以至于再也没人能分得清哪些是真相，哪些是幻想。"
    },
    {
      name: "披甲龙龟",
      title: "拉莫斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big33000.jpg",
      scores: { difficult: 5, skills: 5, attack: 4, survive: 10 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Armordillo_ScavengeArmor.png",
          name: "锥刺甲壳",
          description:
            "拉莫斯的普攻造成额外魔法伤害，这个伤害可从护甲值中获益。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PowerBall.png",
          name: "动力冲刺",
          description: "拉莫斯缩成球状冲击目标，造成魔法伤害并减速目标。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DefensiveBallCurl.png",
          name: "尖刺防御",
          description:
            "拉莫斯进入防御状态，极大提高护甲值和魔法抗性，增幅锥刺甲壳的伤害，并反弹攻击造成伤害，但他自身也会在效果持续期间被减速。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/PuncturingTaunt.png",
          name: "狂乱嘲讽",
          description:
            "拉莫斯嘲讽一个敌方英雄或野怪，强制目标鲁莽地攻击自己。此外，他会获得持续一小段时间的攻速加成，但这个加成可通过激活他的其它技能来延长持续时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Tremors2.png",
          name: "地动山摇",
          description:
            "拉莫斯施放毁灭性的脉冲震荡波，对附近的敌人造成伤害和减速效果。防御塔所受的来自此技能的伤害翻倍。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 动力冲刺可以作为一种有效的逃跑方法。",
        "- 在你的防御塔附近嘲讽敌人可以让防御塔攻击敌人。",
        "- 地动山摇与尖刺防御可以在游戏后期用来摧毁防御塔（地动山摇对建筑物有效）。如果你在团队作战中陷入困境，可以转而攻击建筑物。"
      ],
      DATAenemytips: [
        "- 在拉莫斯不使用尖刺防御时攻击他，因为拉莫斯不用此技能时，他的属性要远低于一般的坦克英雄。",
        "- 拉莫斯通常会堆高护甲，在他没有用尖刺防御时，把他留给法师来解决吧。"
      ],
      infotitle:
        "许多人对其崇拜敬仰，少数人对其嗤之以鼻，但所有人都对其一无所知。奇怪而有趣的生物拉莫斯就是一个谜团。他全身覆盖尖刺硬壳，人们对他的出身来历的猜测层出不穷——有人说他是半神，有人说他是神谕者，有人说他只是普通的野兽，遭遇了魔法的影响而发生彻底变异。无论真相如何，拉莫斯始终都默不作声，而且不会为任何人停留，永远都在沙漠中奔走游荡。"
    },
    {
      name: "冰晶凤凰",
      title: "艾尼维亚",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big34000.jpg",
      scores: { difficult: 10, skills: 10, attack: 1, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Anivia_P.png",
          name: "寒霜涅槃",
          description:
            "在濒临死亡的时候，艾尼维亚将会变成一枚凤凰蛋。如果凤凰蛋在6秒内没有被击破的话，艾尼维亚就会闪亮重生。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FlashFrost.png",
          name: "寒冰闪耀",
          description:
            "艾尼维亚挥动翅膀聚集空气，制造一枚冰晶向目标区域施放，冰冻并伤害路径上的所有敌人。当冰晶爆裂时，它会晕眩并伤害一定范围内的所有敌人。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/Crystallize.png",
          name: "寒冰屏障",
          description:
            "艾尼维亚利用空气中的湿气，召唤出一道不可穿越的冰之墙来阻挡所有移动。该墙持续很短一段时间后就会融化。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Frostbite.png",
          name: "霜寒刺骨",
          description:
            "艾尼维亚扇动双翅，朝她的目标喷射出一股刺骨的强风，造成低额伤害。如果目标已被【Q寒冰闪耀】和【R冰川风暴】所减速，那么将会受到该技能双倍的伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/GlacialStorm.png",
          name: "冰川风暴",
          description:
            "艾尼维亚召唤出一朵夹杂着冰块和冰雹的雨云，对敌人造成伤害，并使其减速。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在恰当的时机使用寒冰闪耀+霜寒刺骨的连招将对敌人造成毁灭性的伤害。",
        "- 艾尼维亚在释放冰川风暴时极度依赖法力。试着出一些法力道具或击杀苍蓝雕纹魔像获得它的增益效果。",
        "- 她的凤凰蛋在前期是很难被敌方英雄所杀的，你可以狠狠地进攻来占据优势。"
      ],
      DATAenemytips: [
        "- 当艾尼维亚在兵线上时试着gank他。人越多，越容易杀死她的凤凰蛋。",
        "- 如果你是远程英雄，则尽可能远离艾尼维亚，躲避寒冰闪耀技能。",
        "- 在兵线上攻击艾尼维亚，因为在丛林中她能用低等级的寒冰屏障封锁路径。"
      ],
      infotitle:
        "艾尼维亚是一个充满仁慈的飞禽形态灵体，曾经历过无数次诞生、死亡与重生的轮回，始终眷顾着弗雷尔卓德。她是生于凛冽冰风中的半神，可以操控冰雪的元素之力，阻挡那些胆敢侵犯她家园的人。艾尼维亚指引并保护着北方贫瘠土地上的人类部落，而这些人类也将她奉为希望的象征和重大变革的预兆。她的每一次奋战都不遗余力，因为她知道，自己的记忆将会超越牺牲，长久地留存，而她也将在崭新的明天中重生。"
    },
    {
      name: "恶魔小丑",
      title: "萨科",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big35000.jpg",
      scores: { difficult: 9, skills: 6, attack: 8, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Jester_CarefulStrikes.png",
          name: "背刺",
          description:
            "在目标的背后时，萨科的普攻和【E双面毒刃】会造成额外伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Deceive.png",
          name: "欺诈魔术",
          description:
            "萨科进入隐形状态并传送到目标位置。\n\n他在隐形状态下的第一次普攻将获得增强，造成额外伤害并减少此技能的冷却时间。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JackInTheBox.png",
          name: "惊吓魔盒",
          description:
            "萨科丢出一个隐形且会动的惊吓魔盒。在触发时，盒子会恐惧附近的敌人，然后对其进行攻击。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TwoShivPoison.png",
          name: "双面毒刃",
          description:
            "萨科的毒刃在命中时会被动地使目标中毒，减少目标的移动速度。他可以将毒刃扔向目标，造成伤害和中毒效果。扔出的毒刃会对生命值低于30%的目标造成额外伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HallucinateFull.png",
          name: "幻像",
          description:
            "萨科在身边制造一个自己的幻像，幻像能够攻击周围的敌人（对防御塔造成较少伤害）。在死亡时爆炸，它会爆炸，生成三个小型惊吓魔盒并对附近的敌人造成伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 使用【Q欺诈魔术】穿越地形可以帮助你干净利落地逃脱。",
        "- 尽量购买带有攻击附加效果的道具，这些也会有助于你的幻象。",
        "- 诸如无尽之刃等提高暴击伤害的效果可以加强背刺的伤害。"
      ],
      DATAenemytips: [
        "- 如果萨科前期表现不错，把侦查守卫布置到他的野怪营地附近来对抗他是值得的。",
        "- 如果萨科使用【欺诈魔术】进入战场，他短时间内将无法重新使用该技能，利用这个机会和你的队伍一起快速将他打倒。"
      ],
      infotitle:
        "很久以前有人为一个孤独的小王子制作了一个玩物，一只附有魔法的提线人偶，它就是如今那个以杀人和破坏取乐的萨科。由于黑魔法的腐化，再加上痛失爱主，曾经友善的人偶如今只能在折磨灵魂制造苦痛的时候才能感到愉悦。小孩子的玩具和简单的戏法在他手中都有了致命的效果。而且，他觉得自己的血腥“游戏”滑稽至极——如果有谁在死寂的夜里听到了阴森的窃笑，或许那就是恶魔小丑看中了他们，作为自己新的玩物。"
    },
    {
      name: "祖安狂人",
      title: "蒙多医生",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big36000.jpg",
      scores: { difficult: 5, skills: 6, attack: 5, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/DrMundo_Passive.png",
          name: "肾上腺激素",
          description: "蒙多医生每秒回复0.3%的最大生命值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/InfectedCleaverMissileCast.png",
          name: "病毒屠刀",
          description:
            "蒙多医生投掷病毒屠刀，对目标造成当前生命值一定百分比的伤害，并对目标施加持续一小段时间的减速效果。蒙多医生以他人的痛苦为乐，当他成功击中目标时，可回复一部分生命消耗(在完成致命一击时可回复双倍)。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BurningAgony.png",
          name: "痛苦燃烧",
          description:
            "蒙多医生消耗生命值来减少所受限制效果的持续时间并对附近敌人持续造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Masochism.png",
          name: "潜能激发",
          description:
            "蒙多医生获得基于已损失生命值的攻击力，并且他的下次普攻会头槌他的目标以造成额外伤害。在蒙多医生受到魔法伤害或消耗生命值时，会为他被动提升魔法抗性。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Sadism.png",
          name: "背水一战",
          description:
            "蒙多医生消耗部分生命值，短暂提升移动速度并巨幅提升生命回复速度。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 时机正好的背水一战可以引诱敌方英雄来攻击你，即使他们没有足够的攻击输出消灭你。",
        "- 振奋盔甲能够增加使用终极必杀技所回复的生命值，缩短所有技能的冷却时间。",
        "- 屠刀对中立怪物的杀伤力很强。可以通过中立怪物打钱，直到终极必杀技能够治疗你，而不用回到基地。"
      ],
      DATAenemytips: [
        "- 在蒙多医生使用终极必杀技后马上和队友使用强大的攻击技能。如果不能够立刻杀死他，他会迅速回复生命值。",
        "- 当蒙多医生使用背水一战消耗部分生命值，从而短暂提升移动速度并巨幅提升生命回复速度时，可尝试使用引燃。"
      ],
      infotitle:
        "精神与认知彻底崩坏、杀人的欲望永不满足、浑身皮肤紫得发黑，这就是蒙多医生，这就是祖安人在漆黑的夜里不敢出门的原因。这个头脑简单的恐怖怪人似乎唯一关心的东西就是痛苦，不仅是施加痛苦，而且也是感受痛苦。他抡着一把巨大的切肉刀，举重若轻。他曾经捕捉并折磨过数十名祖安居民，因此声名狼藉。他将自己的行为称为“手术”，但却没有任何真正的目的。他残酷无情。他神出鬼没。他想去哪儿就去哪儿。另外，准确地说，他并不是……"
    },
    {
      name: "琴瑟仙女",
      title: "娑娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big37000.jpg",
      scores: { difficult: 4, skills: 8, attack: 5, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Sona_Passive_Charged.png",
          name: "能量和弦",
          description:
            "娑娜施放3次技能后的下次攻击会造成额外的魔法伤害，并根据娑娜最后激活的乐章来附加特殊效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SonaQ.png",
          name: "英勇赞美诗",
          description:
            "娑娜弹奏英勇赞美诗，弹出音波，对附近的两名敌人造成魔法伤害，优先选取英雄和野怪为目标。娑娜会暂时获得一个光环，为附近友军的下一次攻击提供额外魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SonaW.png",
          name: "坚毅咏叹调",
          description:
            "娑娜弹奏坚毅咏叹调，弹出保护性的旋律，治疗娑娜和附近的一个受伤的友军。娑娜会暂时获得一个光环，为附近的友军提供一层护盾。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SonaE.png",
          name: "迅捷奏鸣曲",
          description:
            "娑娜弹奏迅捷奏鸣曲，为她自己提供移动速度加成。娑娜会暂时获得一个光环，在区域内的友军在下次攻击命中后为他们提供移动速度加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SonaR.png",
          name: "狂舞终乐章",
          description:
            "娑娜弹奏她的终极和弦，对敌方英雄造成魔法伤害，并晕眩他们，强制他们开始跳舞。这个技能的等级会减少所有基础技能的基础冷却时间。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在娑娜的光环激活时，要确保紧靠队友来提供效果，同时也要避免被敌人攻击到。",
        "- 将【R狂舞终乐章】留到改变局势的那一刻。",
        "- 在合适的时机使用【W坚毅咏叹调】，将最大化你的生存能力。"
      ],
      DATAenemytips: [
        "- 看到娑娜时要散开，避免她施法让你和友军跳舞。",
        "- 先杀死娑娜，因为如果她一个人长时间停留会达到治疗友军的效果。"
      ],
      infotitle:
        "娑娜是德玛西亚的一流弦乐演奏家，“叆华”的优美和弦与多变曲调就是她唯一的语言。这种文雅的举止让她深得上流社会的宠爱，不过也有其他人怀疑她如魔咒般的旋律其实是在施放魔法——而魔法可是德玛西亚的大忌。娑娜始终对外人一言不发，但她最亲密的同伴却不知为何能完全理解她。娑娜弹拨的和声不仅能够安抚受伤的盟友，而且还能打击掉以轻心的敌人。"
    },
    {
      name: "虚空行者",
      title: "卡萨丁",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big38000.jpg",
      scores: { difficult: 8, skills: 8, attack: 3, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Kassadin_Passive.png",
          name: "虚空之石",
          description: "卡萨丁所受的魔法伤害减少15%，并无视单位的碰撞体积。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NullLance.png",
          name: "虚无法球",
          description:
            "卡萨丁向目标发射虚空能量法球，造成伤害并打断目标的技能引导。满溢的能量会在他身边环绕，提供一个可吸收魔法伤害的临时护盾。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NetherBlade.png",
          name: "虚空之刃",
          description:
            "被动：卡萨丁的普通攻击会造成额外魔法伤害。主动：卡萨丁的下次普通攻击会造成显著的额外魔法伤害并回复法力值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ForcePulse.png",
          name: "能量脉冲",
          description:
            "附近有单位施放法术技能时，卡萨丁将吸收能量，当充能完毕后，吸收的能量可转化为脉冲，对面前锥形区域内敌人造成伤害并减速。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RiftWalk.png",
          name: "虚空行走",
          description:
            "卡萨丁传送到附近区域，对区域内的敌方单位造成魔法伤害。 在一段时间内连续施放虚空行走技能会消耗更多的法力值，但也会造成额外伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 卡萨丁有多条装备路线，他可以通过法力和法术强度装备来做一个法师，或者出冷却缩减和魔法抗性的装备来对抗对方的法师。",
        "- 卡萨丁的终极技能有很多用途，并且比多数终极技能的冷却时间短，你可以把它作为常规技能来用。",
        "- 尽量获得苍蓝雕纹魔像增益来缓冲【R虚空行走】不断提升的法力消耗。"
      ],
      DATAenemytips: [
        "- 卡萨丁对目标主要造成魔法伤害。如果发展顺利，可考虑购买诸如水银之靴和女妖面纱这样的魔抗装来抵挡他。",
        "- 卡萨丁每连续使用一次【R虚空行走】，都会消耗更多的法力。你在追击他时要牢记这点。",
        "- 卡萨丁需要6次充能（周围有英雄施放技能）才能施放减【E能量脉冲】，使目标减速。如果他升级了该技能，你最好明智地使用你的技能，因为你在施放技能的同时会为卡萨丁充能。"
      ],
      infotitle:
        "在世界上最黑暗的地方，卡萨丁切出了一道燃烧的裂口，他知道自己已经时日无多。他曾是恕瑞玛地区的向导和冒险家，后来选择在恕瑞玛南方平静的部落中安家落户——直到那一天，他的村庄被虚空吞噬。卡萨丁发誓要报仇雪恨，于是整合了许多秘法器物和禁忌之术，以便应对前方的险阻。最后，卡萨丁动身前往艾卡西亚的废土，准备面对任何虚空的造物，寻找那位自封的先知，马尔扎哈。"
    },
    {
      name: "刀锋舞者",
      title: "艾瑞莉娅",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big39000.jpg",
      scores: { difficult: 5, skills: 5, attack: 7, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Irelia_Passive.png",
          name: "艾欧尼亚热诚",
          description:
            "当艾瑞莉娅用技能命中敌人时，她会获得可叠加的攻击速度加成。这个效果在满层时还会为艾瑞莉娅提供攻击附伤。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IreliaQ.png",
          name: "利刃冲击",
          description:
            "艾瑞莉娅向前突进以打击她的目标，并治疗自身。如果目标被标记或死于利刃冲击，那么它的冷却时间会刷新。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IreliaW.png",
          name: "距破之舞",
          description:
            "艾瑞莉娅开始蓄力以进行一次打击，蓄力越久则打击造成的伤害越多。在蓄力期间她所受的物理伤害降低。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IreliaE.png",
          name: "比翼双刃",
          description:
            "艾瑞莉娅放出两柄相互聚拢的利刃。利刃之间被击中的敌人会受到伤害、晕眩效果并被标记。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IreliaR.png",
          name: "先锋之刃",
          description:
            "艾瑞莉娅发射庞大数量的利刃，它们会在命中一名敌方英雄时向外爆开。被利刃命中的敌人会受到伤害并被标记。然后利刃会形成一道刃墙，在敌人穿过时造成伤害、和减速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在你前往目标英雄的途中，先用【利刃冲击】攻击低生命的小兵，再用【利刃冲击】攻击目标英雄，便可瞬间移动很远的距离。",
        "- 【距破之舞】不可被控制效果打断，可尝试用它来免除即将到来的控制效果。",
        "- 【比翼双刃】没有最大飞行距离，可尝试以创造性的方式来使用它。"
      ],
      DATAenemytips: [
        "- 多关注【艾欧尼亚狂热】的层数，并且试图在它刚消失时与艾瑞莉娅开战。",
        "- 兵线可极大地增强艾瑞莉娅的机动能力，不要在她处在一大波小兵之中时与她作战。",
        "- 不要把你的重要技能倾泻在【距破之刃】上。"
      ],
      infotitle:
        "诺克萨斯对艾欧尼亚的占领催生了许多英雄，但没有谁像纳沃利的艾瑞莉娅一般令人意外。她将家乡的古老舞艺化为战技，以精心修习的优雅身姿操控着致命的刀丛。在她证明了自己的战斗实力后，被众人推举为反抗军的领袖和首脑，为了守卫家园而奋斗至今。"
    },
    {
      name: "风暴之怒",
      title: "迦娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big40000.jpg",
      scores: { difficult: 7, skills: 7, attack: 3, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Janna_Tailwind.png",
          name: "顺风而行",
          description:
            "迦娜被动获得8%移动速度，并且附近友方英雄在朝她移动时会获得这个移动速度加成。\n\n此外，迦娜的普攻会造成基于她移动速度加成的额外魔法伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HowlingGale.png",
          name: "飓风呼啸",
          description:
            "迦娜改变气压和温度，在目标区域召唤小型风暴，对沿途的所有单位造成伤害和击飞效果。召唤风暴时，迦娜可以再次使用此技能来立刻施放风暴，造成的伤害取决于蓄力时间的长短。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SowTheWind.png",
          name: "和风守护",
          description:
            "迦娜召唤出一个空气元素灵体，来被动地提升她的移动速度，并使她能够穿越单位。她也可以主动激活这个技能，来对敌方目标造成伤害和减速效果。在技能尚未冷却时，被动的加速效果不生效。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/EyeOfTheStorm.png",
          name: "风暴之眼",
          description:
            "迦娜制造出一阵防御性的气旋，来为目标友军或防御塔吸收即将到来的伤害，并提高目标的攻击力。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ReapTheWhirlwind.png",
          name: "复苏季风",
          description:
            "迦娜召唤魔法风暴围绕自己，将敌人击退并治疗区域内的友军。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 风暴之眼可以用于友方的防御塔。",
        "- 快速发出飓风呼啸（不要蓄力）可以很好的控制对方队伍。",
        "- 迦娜的终极技能可以将敌人从受伤友军身边推开或者甚至打散敌人。"
      ],
      DATAenemytips: [
        "- 保留一个打断技能给迦娜的终极技能。",
        "- 留心听飓风呼啸蓄力的声音，以防迦娜在屏幕后或树林的突袭。",
        "- 迦娜辅助友军处于最强劲状态。骚扰她的友军能够削弱迦娜对你的威胁。"
      ],
      infotitle:
        "风暴是她的武器，符文之地是她的家园。神秘的迦娜是风元素的精灵，保护着祖安城内无依无靠的人们。有人相信她的诞生是源于符文之地水手们的祈愿，他们会祈祷友善的风伴他们渡过险恶的海域，战胜无情的风暴。后来她的眷顾和庇护被召唤到了祖安深处，在那里，迦娜成为了无助之人的希望灯塔。没人知道她会在何时何地出现，但大多数时候，她的到来都意味着援手。"
    },
    {
      name: "海洋之灾",
      title: "普朗克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big41000.jpg",
      scores: { difficult: 9, skills: 4, attack: 7, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Gangplank_Passive.png",
          name: "烈火审讯",
          description: "每过几秒，普朗克的近战攻击就会让他的对手着火。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/GangplankQWrapper.png",
          name: "枪火谈判",
          description: "攻击目标，每击杀一个敌方单位时都会掠夺金币。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GangplankW.png",
          name: "坏血病疗法",
          description: "吃掉柑橘类水果，来移除控制效果并回复生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GangplankE.png",
          name: "火药桶",
          description:
            "普朗克在目标区域为一个火药桶开盖。如果他攻击火药桶，那么火药桶会爆炸，将这次攻击的伤害传播到范围内的敌人身上，并将他们减速。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GangplankR.png",
          name: "加农炮幕",
          description: "普朗克给他的船发信号，来轰炸一个区域，伤害并减速敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 枪火谈判可以附带像冰霜之锤或黑色切割者的攻击附带效果。",
        "- 留意地图上低生命值的敌人，你可以突然使用加农炮幕击杀他。",
        "- 尽量将加农炮幕放在逃跑道路上来截断逃兵。"
      ],
      DATAenemytips: [
        "- 枪火谈判可以造成高额的物理伤害。如果敌人的普朗克表现不错，那么提供护甲的物品将对你大有裨益。",
        "- 一旦普朗克到达6级，就要留意他的全地图终极技能，加农炮幕！"
      ],
      infotitle:
        "诡计多端、心狠手辣的普朗克是被废黜的强盗之王，他令人恐惧的名号广达远至。他一度是港口城市比尔吉沃特的统治者。虽然现在他的威权已经不再，但人们相信这只会让他变得更加可怖。普朗克若是知道有人要从他手中抢走比尔吉沃特，必然会大肆血洗这座城市。而如今有了火枪、弯刀，还有一桶桶的火药，他决心要夺回自己失去的东西。"
    },
    {
      name: "英勇投弹手",
      title: "库奇",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big42000.jpg",
      scores: { difficult: 6, skills: 6, attack: 8, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Corki_RapidReload.png",
          name: "海克斯科技军备",
          description:
            "库奇的普通攻击会造成一定百分比的魔法伤害而非物理伤害。每过一段时间，【弹药包】就会出现在库奇的基地中以供他拾取，并且一旦被拾起，就会暂时为他提供非战斗状态下的移动速度加成并将【瓦尔基里俯冲】升级为【特别快递】。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/PhosphorusBomb.png",
          name: "磷光炸弹",
          description:
            "库奇向目标区域发射一枚闪光弹，对范围内的敌人造成魔法伤害。这个技能还会暂时让目标区域附近的非隐形的单位和英雄现形。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/CarpetBomb.png",
          name: "瓦尔基里俯冲",
          description:
            "库奇飞行一小段距离，同时投下炸弹。炸弹会制造出一条毁灭与死亡的路径，对留在路径中的敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GGun.png",
          name: "格林机枪",
          description:
            "库奇使用格林机枪扫射他面前锥形范围内的敌人，造成伤害并降低敌人护甲和魔法抗性。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MissileBarrage.png",
          name: "火箭轰击",
          description:
            "库奇朝着他的目标地点发射一枚导弹。导弹会在命中第一个敌人后爆炸，并对目标周围单位造成伤害。库奇每隔一段时间就会挂载一枚导弹，最多挂载7枚。每发射2枚导弹后，下一次就会发射超级导弹，造成额外伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 磷光炸弹可以用来暴露躲在附近草丛里的敌人。",
        "- 瓦尔基里俯冲也可用来防身，试着用它来快速逃脱。",
        "- 库奇在使用格林机枪时也能进行普通攻击。将格林机枪的伤害最大化是掌握库奇的关键。"
      ],
      DATAenemytips: [
        "- 小心库奇的磷光炸弹的溅射伤害，就算你躲在小兵后面也会受伤。",
        "- 库奇使用【瓦尔基里俯冲】或【特别快递】后变得脆弱。若库奇用这些技能来切入战场，则可把注意力转移到他身上。"
      ],
      infotitle:
        "约德尔飞行员库奇最爱两件事物：一是飞行，二是自己英俊的小胡子，排名不分先后。离开班德尔城以后，他在皮尔特沃夫安家，从此爱上了这里奇异壮观的各式机器。他决定投身于飞行装置的开发事业，带领一群老练飞行员组成了一只空中防御力量，得名“尖啸之蛇”。临危不乱的库奇在他第二故乡的空域戒备巡逻，而他还从没见过什么问题是一轮导弹齐射不能解决的。"
    },
    {
      name: "天启者",
      title: "卡尔玛",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big43000.jpg",
      scores: { difficult: 5, skills: 8, attack: 1, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Karma_Passive.png",
          name: "聚能之炎",
          description:
            "卡尔玛每用一个技能伤害到一个敌方英雄时，梵咒的冷却时间就会减少。卡尔玛的普通攻击也有此效果，但减少的冷却时间减半。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KarmaQ.png",
          name: "心灵烈焰",
          description:
            "卡尔玛向前方发射一枚灵能法球。这枚法球会在命中第一个敌人时爆炸，并造成伤害。\n\n梵咒增效：除爆炸之外，梵咒还会提升她的心灵烈焰的破坏力，同时创造出一个火环，火环会在短暂的延时后造成伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KarmaSpiritBind.png",
          name: "坚定不移",
          description:
            "卡尔玛在她和目标敌人之间产生一条灵链，同时造成持续伤害，并使目标暴露。如果灵链在一段时间内没有被破坏，那么目标敌人就会被束缚在原地并再次受到伤害。\n\n梵咒增效：卡尔玛强化灵链，治疗自身并延长禁锢时长。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KarmaSolKimShield.png",
          name: "鼓舞",
          description:
            "卡尔玛召唤一个防御性的护盾来吸收即将到来的伤害，并为目标友军提升移动速度。\n\n梵咒增效：能量从目标处向外辐射，强化初始护盾，并对附近的友方英雄施加鼓舞效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KarmaMantra.png",
          name: "梵咒",
          description:
            "卡尔玛的下个技能会获得强化，造成额外特效。梵咒在1级时就可以使用，并且不需要投入技能点。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 聚能之炎鼓励激进型的打法。找机会把技能和普攻扔到你的对手身上，来降低梵咒的冷却时间，并保持攻击的态势。",
        "- 在使用坚定不移时，先用心灵烈焰来减速你的敌人，或者用鼓舞来加强自己的速度，就能帮你解决跟不上目标的烦恼。",
        "- 在有梵咒时，不要过于保守。聚能之炎是最强大的团战技能，因此可以轻易地为梵咒进行多次充能。"
      ],
      DATAenemytips: [
        "- 卡尔玛的被动技能，会在她用技能和普攻命中敌人时减少梵咒的冷却时间。不要给她白打你的机会。",
        "- 卡尔玛的灵光闪耀会在落地区域喷发，造成额外伤害。反应快一点，走出那个圈就可以避免承受成吨的伤害。",
        "- 坚定不移是一个强大的脱身手段。保持足够远的距离，来避免被束缚，并在之后寻求交战的时机。"
      ],
      infotitle:
        "要说哪位英雄能代表艾欧尼亚的精神传统，没有谁比卡尔玛更合适。她是一个古代灵魂在当代的化身，经历过无数次转世，每次获得新生都会继承以前的全部记忆，同时也被赐予常人无法理解的力量。她在最近一次遭遇危难之时倾尽全力引领他的人民，但她知道，要获得和平与和谐，就必须付出重大代价——既是对她自己，也是对她深爱的土地。"
    },
    {
      name: "瓦洛兰之盾",
      title: "塔里克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big44000.jpg",
      scores: { difficult: 3, skills: 5, attack: 4, survive: 8 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Taric_Passive.png",
          name: "正气凌人",
          description:
            "每次施放技能会强化塔里克的下2次普攻，以造成额外魔法伤害，使他的基础技能的冷却时间减少，并且可以快速地连续攻击。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaricQ.png",
          name: "星光之触",
          description:
            "基于已储存的充能来治疗附近的友方英雄。【正气凌人】的强化普攻会为这个技能提供一层充能。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaricW.png",
          name: "坚毅壁垒",
          description:
            "被动提升塔里克和带有【坚毅壁垒】效果的友方英雄的护甲。\n\n主动施放会为一名友方英雄提供护盾和【坚毅壁垒】效果，只要该英雄呆在塔里克身边，【坚毅壁垒】效果会一直持续。塔里克的技能也会从带有【坚毅壁垒】效果的友方英雄身上施放。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaricE.png",
          name: "炫光",
          description:
            "塔里克准备施放一束星光，在短暂的延迟后，会对敌人造成魔法伤害和晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaricR.png",
          name: "宇宙之辉",
          description:
            "在短暂的延迟后，放射一道宇宙能量到附近的友方英雄身上，让他们免疫伤害一段时间。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【正气凌人】的冷却缩减部分，让诸如【冰霜之心】、【冰脉护手】和【振奋盔甲】等冷却缩减装在塔里克身上尤显强大。",
        "- 使用低充能数的【Q星光之触】会导致同样法力带来的治疗效果变少，但可通过【正气凌人】来极大地提升塔里克的持续伤害。",
        "- 与其把【R宇宙之辉】留到最后时刻并让所有人在延迟期间都有丧命的危险，不如在你预感到团战即将开始的时候尽快施放。"
      ],
      DATAenemytips: [
        "- 塔里克的终极技能【R宇宙之辉】会在生效前有段很长的延迟时间。尽量快速做出判断，来看看是否能够脱离战斗或在这段延迟时间内击杀掉他的友军。",
        "- 塔里克的被动技能【正气凌人】，可让他通过对敌人进行普攻来减少他的技能冷却时间。尽量在团战中放他风筝，并在新一波小兵还没到达时教训他。"
      ],
      infotitle:
        "塔里克是保护者星灵，用超乎寻常的力量守护着符文之地的生命、仁爱以及万物之美。塔里克由于渎职而被放逐，离开了祖国德玛西亚，前去攀登巨神峰寻找救赎，但他找到的却是来自星界的更高层的召唤。现在的塔里克与古代巨神族的神力相融合，以瓦洛兰之盾的身份，永不疲倦地警惕着阴险狡诈的虚空腐化之力。"
    },
    {
      name: "邪恶小法师",
      title: "维迦",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big45000.jpg",
      scores: { difficult: 7, skills: 10, attack: 2, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Veigar_Entropy.png",
          name: "超凡邪力",
          description:
            "维迦是最强大的恶魔，甚至能对符文之地之心发起攻击——并且他只会越来越强大！用技能攻击一名敌人、击杀单位或拆毁防御塔都会为维迦永久提升法术强度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VeigarBalefulStrike.png",
          name: "黑暗祭祀",
          description:
            "维迦释放一束黑暗能量，对最先被命中的两个敌人造成魔法伤害。被这个能量束所击杀的单位，会永久地为维迦提供一些法术强度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VeigarDarkMatter.png",
          name: "黑暗物质",
          description:
            "维迦召唤一大团黑暗物质轰击目标区域，落地造成魔法伤害。【超凡邪力】的层数会缩短这个技能的冷却时间。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VeigarEventHorizon.png",
          name: "扭曲空间",
          description:
            "在短暂的延迟后，维迦在目标区域创造一个能够维持3秒的扭曲空间，穿过此区域边界的敌人将会受到短时间的晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VeigarR.png",
          name: "能量爆裂",
          description:
            "引爆目标敌方英雄，造成大量魔法伤害，并基于目标已损失生命值提升伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 使用扭曲空间来确保暗黑物质成功击中。",
        "- 维迦极度依赖和冷却缩减。买一些增加以上属性的装备，会令你的被动技能更有效，并能让你可以施放更多的黑暗祭祀。",
        "- 维迦是非常脆弱的，尽量保证你有至少一个召唤师技能用来防身。"
      ],
      DATAenemytips: [
        "- 黑暗物质能造成巨大伤害，但可以避免。留意声音和视觉指示，了解技能施放的时间和地点。",
        "- 扭曲空间技能只晕眩边缘上的单位。如果你在技能范围内而不穿过边缘，你仍能移动和攻击。",
        "- 维迦的终极技能伤害会基于你的已损失生命值而提升。"
      ],
      infotitle:
        "维迦是热衷于黑暗巫术的大师。几乎没有哪个凡人敢碰的恐怖力量，他却能敞开怀抱。作为拥有自由精神的班德尔城居民，他渴望突破约德尔魔法的边界，于是转而研究那些被隐藏数千年的秘法文字。现在他已经变成了一个偏执的生物，对宇宙的奥秘无限向往。人们总会低估维迦的力量。虽然维迦发自心底地觉得自己是邪恶的，不过他的一些心底的原则也的确会让人质疑他的深层动机。"
    },
    {
      name: "巨魔之王",
      title: "特朗德尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big48000.jpg",
      scores: { difficult: 5, skills: 2, attack: 7, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Trundle_Passive.png",
          name: "国王的贡品",
          description:
            "每当附近有一个敌方单位死亡，特朗德尔都会获得相当于它们一部分最大生命值的治疗效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TrundleTrollSmash.png",
          name: "利齿撕咬",
          description:
            "特朗德尔撕咬敌方，造成伤害，并暂时减少敌人的移动速度，削弱敌人的攻击力。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/trundledesecrate.png",
          name: "冰封领域",
          description:
            "特朗德尔将目标区域变成他的领土，增加自己在该区域的攻击速度、移动速度，并且会从所有治疗手段中获得额外治疗效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TrundleCircle.png",
          name: "寒冰之柱",
          description:
            "特朗德尔在目标地点召唤寒冰之柱，令敌人无法通过，并减缓附近敌方单位的移动速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TrundlePain.png",
          name: "强权至上",
          description:
            "特朗德尔直接偷取目标的一部分生命值、大量的护甲和魔抗。在接下来的4秒里，特朗德尔将继续偷取双倍的等量的生命值、护甲值和魔抗。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 特朗德尔擅长在冰封领域内战斗。试着把敌人引到此区域内。",
        "- 用强权至上来削弱强大的敌方坦克或以此让你的队伍集中火力。",
        "- 利齿撕咬能够很好地降低敌人的物理伤害，试着将此技能用于敌方的物理输出英雄。"
      ],
      DATAenemytips: [
        "- 特朗德尔在特定地形下作战能力超强。试着让他离开冰封领域。",
        "- 尽快逃离他的寒冰之柱，因为它会极大地减慢你的速度。"
      ],
      infotitle:
        "特朗德尔是一个粗鄙且狡猾的巨魔，性格非常顽劣。没有什么东西不能被他打到屈服认输，甚至是弗雷尔卓德本身。他的领土意识极强，任何进入他领地的蠢蛋都会被他追杀。巨大的臻冰棍棒随时伺候。他会让敌人感到刺骨寒冷，并且用锯齿状的冰柱刺穿他们，最后在他们血溅冰原的时候放声大笑。"
    },
    {
      name: "诺克萨斯统领",
      title: "斯维因",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big50000.jpg",
      scores: { difficult: 8, skills: 9, attack: 2, survive: 6 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Swain_P.png",
          name: "狂食鸦群",
          description:
            "斯维因的鸦群会收集魂屑来治疗斯维因并回复他的法力值。斯维因可以通过右键点击一个被定身的敌方英雄来将其拉向斯维因，同时造成伤害并抽取一片魂屑。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SwainQ.png",
          name: "解脱之触",
          description:
            "斯维因释放多道恶魔之力，这种力量可以穿透命中的目标并在命中敌方英雄时停下。被一道以上的恶魔之力所命中的敌人，会受到基于恶魔之力数量的更多伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SwainW.png",
          name: "帝国视界",
          description:
            "斯维因睁开恶魔之眼来对敌人造成伤害和减速效果。在命中敌方英雄时会使该英雄显形，并为斯维因提供一片魂屑。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SwainE.png",
          name: "永不复行",
          description:
            "斯维因释放一道恶魔之手向前击出。手臂随后会返回至斯维因处，并禁锢它命中的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SwainR.png",
          name: "恶魔升华",
          description:
            "斯维因变身为恶魔并从附近的敌方英雄、小兵和中立野怪身上吸取生命值。斯维因能施放【恶魔耀光】来造成相当于他已吸取生命值的伤害，结束他的变身并用一记魂焰新星来残害附近的敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 如果你很难用【永不复行】来束缚住敌人，可以试试趁着敌人靠近敌方小兵的时候释放该技能，来用爆炸带给TA惊喜。",
        "- 在兵线上时，尽量试着从一个安全的距离上利用【解脱之手】的穿透伤害来消耗敌人。 【帝国视界】本身非常难以命中敌人，所以要时刻留意地图各处的遭遇战，来对那些被干扰了注意力或被控制的敌人使用，这样就能更易命中敌人。",
        "- 【恶魔升华】也许会让斯维因非常难以被击杀，但敌人也可以非常容易地走出技能范围。如果敌人的机动性已经高到爆表，可以尝试购买一些减速装备，来将敌人留在技能范围内。"
      ],
      DATAenemytips: [
        "- 如果你被定身，那么斯维因的被动就会非常强大。请打起十二分的精神来应对那些拥有定身技能的敌方英雄。",
        "- 高机动性可以克制斯维因的所有基础技能：【解脱之手】是对越近的敌人造成越多伤害，【帝国视界】拥有一个非常久的延迟，而【永不复行】则必须是在返程途中才会特别危险。 购买任一带有【重伤】效果的装备，即在斯维因开启【恶魔升华】期间更易将他击杀。"
      ],
      infotitle:
        "斯维因是一位高瞻远瞩的帝国统领，他指挥着帝国的战团在前线冲杀。虽然他在艾欧尼亚的战场上受到了重伤，但他靠着一只新生的恶魔手臂以及无情的意志夺得了诺克萨斯的权力。如今，这位统领正在向着只有他一人能看见的黑暗进军。"
    },
    {
      name: "皮城女警",
      title: "凯特琳",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big51000.jpg",
      scores: { difficult: 6, skills: 2, attack: 8, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Caitlyn_Headshot.png",
          name: "爆头",
          description:
            "每进行几次基础攻击，对中了她的陷阱或绳网的单位进行攻击时，凯特琳就会造成一次【爆头】效果，造成随暴击几率增长的额外伤害。在对中了陷阱或绳网的目标进行攻击时，凯特琳的【爆头】攻击距离翻倍。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CaitlynPiltoverPeacemaker.png",
          name: "和平使者",
          description:
            "凯特琳加速转动步枪，1秒后进行穿透射击，造成物理伤害（目标身后的单位受到较少伤害）。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CaitlynYordleTrap.png",
          name: "约德尔诱捕器",
          description:
            "凯特琳设下圈套，让鬼鬼祟祟的约德尔人暴露无遗。触发后使敌方英雄在地图上显形并将其束缚1.5秒，并为凯特琳提供一次强化版的爆头。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CaitlynEntrapment.png",
          name: "90口径绳网",
          description:
            "凯特琳朝目标放出一张网，对其减速，并对凯特琳造成一定的反冲效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CaitlynAceintheHole.png",
          name: "让子弹飞",
          description:
            "凯特琳精心准备完美一击，拥有超远射程并对单个目标造成巨大伤害。敌方英雄能为友军拦截子弹。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 充分利用约德尔诱捕器，先发制人，确保在战斗过程中随时可以放置新的诱捕器。",
        "- 不要在团战中使用让子弹飞，因为很容易被其他目标误挡。",
        "- 发射90口径绳网来远离敌人、拉近距离或穿墙。"
      ],
      DATAenemytips: [
        "- 如果凯特琳用和平使者骚扰你，记得躲在自己的小兵后面（这样受到的伤害会更少）。",
        "- 如果你站在让子弹飞的发射路径上，你可以帮助友军拦截子弹。"
      ],
      infotitle:
        "凯特琳被誉为皮尔特沃夫最顶尖的和平卫士，同时也是让这座城市真正摆脱地下隐秘犯罪的最有希望的人选。她经常和蔚联手执行任务，以冷静和沉着弥补自己搭档的鲁莽天性。虽然她的海克斯科技步枪独一无二，但凯特琳最强大的武器其实是她过人的智谋，总是能设下天罗地网，迎接任何傻到敢在进步之城作案的不法之徒。"
    },
    {
      name: "蒸汽机器人",
      title: "布里茨",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big53000.jpg",
      scores: { difficult: 4, skills: 5, attack: 4, survive: 8 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Blitzcrank_ManaBarrier.png",
          name: "",
          description:
            "布里茨生命值低于20%时，将激活法力屏障，产生相当于布里茨30%最大法力值的法力护盾，持续10秒。法力屏障每90秒仅能触发一次。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RocketGrab.png",
          name: "机械飞爪",
          description:
            "布里茨发射他的右手，来抓取碰到的第一个敌人，在对敌人造成伤害的同时，还会将这名敌人拉到他的面前。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Overdrive.png",
          name: "过载运转",
          description:
            "布里茨对自己进行了超级充电，他的攻击速度和移动速度得到了显著提升。他会在效果结束后暂时减速。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PowerFist.png",
          name: "能量铁拳",
          description: "布里茨为机械手臂充能，下次攻击造成双倍伤害并击飞目标。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/StaticField.png",
          name: "静电力场",
          description:
            "被布里茨攻击过的敌人会被标记并在1秒后受到闪电伤害。此外，布里茨可以主动激活这个技能来移除附近敌人们的护盾、对他们造成伤害并暂时沉默他们。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 机械飞爪、能量铁拳和静电力场的1",
        "-2",
        "-3组合可以摧毁一名落单的对手。",
        "- 使用布里茨的抓取将一名敌人拉入你们的防御塔射程内，继而一记能量铁拳可以让防御塔对他们进行多发射击。"
      ],
      DATAenemytips: [
        "- 布里茨的被动技能【法力屏障】能够在他濒死时提供一个吸收伤害的护盾。",
        "- 躲在小兵后面能够防止被布里茨抓。布里茨的机械飞爪只能够抓住第一个碰到的敌人。"
      ],
      infotitle:
        "布里茨是来自祖安的一个巨大的、几乎坚不可摧的机械体，最初被制造出来的目的是为了处理有毒废料。然而他觉得自己存在的意义太过狭隘，于是就改装了自己的形态，以便更好地效力于地沟区的孱弱人群。布里茨无私地使用自己的力量和钢铁之躯保护其他人，伸出长长的机械援手，或者发出能量脉冲，制服任何带来麻烦的人。"
    },
    {
      name: "熔岩巨兽",
      title: "墨菲特",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big54000.jpg",
      scores: { difficult: 2, skills: 7, attack: 5, survive: 9 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Malphite_GraniteShield.png",
          name: "花岗岩护盾",
          description:
            "墨菲特被岩石护盾保护，最多吸收最大生命值10%的伤害，若10秒内未受到攻击，护盾将重置。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/SeismicShard.png",
          name: "地震碎片",
          description:
            "通过使用他的原初元素魔法，墨菲特发出一块大地碎片穿过他敌人处的地面，在碰撞时造成伤害并且偷取移动速度3秒。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Obduracy.png",
          name: "雷霆拍击",
          description:
            "墨菲特的攻击蕴含着如此惊人的力道以至于它引发了一次音爆。在接下来的数秒里，他的攻击会在他面前引发余波。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Landslide.png",
          name: "大地震颤",
          description:
            "墨菲特锤击地面，放射出冲击波对目标造成基础伤害，并根据墨菲特的护甲值附加额外伤害，同时暂时减低目标攻击速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/UFSlash.png",
          name: "势不可挡",
          description:
            "墨菲特冲击目标区域，将所有敌人抛向空中，造成魔法伤害并晕眩。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 护甲能降低花岗岩护盾在承受敌方攻击时的损耗速度，因此在敌人摧毁护盾前激活野蛮打击，可以加强护盾对物理伤害的承受能力。",
        "- 虽然他的多数技能可通过护甲来提升伤害，但有些对局还是需要墨菲特拥有魔法抗性。当这种情况出现时，可以试试购买军团圣盾，水银之靴以及守护天使等物品。"
      ],
      DATAenemytips: [
        "- 若你是物理伤害英雄，攻击墨菲特时站在友军后方。大地震颤会极大地减少你的伤害。",
        "- 墨菲特是少数具备打野能力的坦克之一。如果看到墨菲特带了惩戒，就要当心了。"
      ],
      infotitle:
        "墨菲特是一个庞大的岩石生物，为了给混乱的世界赐予秩序而不懈奋斗。他诞生之初的身份是一个石仆，侍奉着一块超乎凡人理解的石碑，名为“独石”。他用万钧元素之力维护自己的先祖，但最终遭遇了失败。在随后的毁灭中，墨菲特成为了唯一的幸存者。如今他忍受着符文之地的脆弱凡人和他们流水一般多变的性情，同时想尽办法给自己寻找一个存于世上的新位置，让自己不愧为同胞中的最后一员。"
    },
    {
      name: "不祥之刃",
      title: "卡特琳娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big55000.jpg",
      scores: { difficult: 8, skills: 9, attack: 4, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Katarina_Passive.png",
          name: "贪婪",
          description:
            "每当一名在过去3秒被卡特琳娜所伤害的敌方英雄阵亡时，卡特琳娜的技能的冷却时间就会显著减少。\n\n如果卡特琳娜拾起一把匕首，她会用它来斩击附近的所有敌人以造成魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KatarinaQ.png",
          name: "弹射之刃",
          description:
            "卡特琳娜朝敌人扔出一把匕首，匕首会弹射到附近敌人身上，然后落到地面上。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KatarinaW.png",
          name: "伺机待发",
          description:
            "卡特琳娜获得爆发性的移动速度加成，同时投掷一把匕首到她正上方的空中。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KatarinaE.png",
          name: "瞬步",
          description:
            "卡特琳娜立刻闪烁到目标处，如果目标是敌人，则她会对目标造成伤害，否则会对距她最近的敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KatarinaR.png",
          name: "死亡莲华",
          description:
            "卡特琳娜化身为一道剑刃飓风，以无与伦比的速度对周围最多三个敌方英雄造成巨量魔法伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 拾取匕首会显著降低【E瞬步】的冷却时间。",
        "- 等到敌方正与我方缠斗之际，用【E瞬步】加入战局，并释放一朵毁灭性的【R死亡莲华】。",
        "- 对友军英雄、匕首或小兵使用瞬步是个很好的逃跑手段。"
      ],
      DATAenemytips: [
        "- 卡特琳娜的技能对目标造成魔法伤害，尽管她购买增加攻击的物品，你也可使用魔抗应对。",
        "- 推荐为卡特琳娜的死亡莲华保留一个限制技能。"
      ],
      infotitle:
        "果断坚决、心狠手辣，卡特琳娜是诺克萨斯的顶尖刺客。作为传奇将军杜·克卡奥的长女，她凭借出其不意的迅猛刺杀很快声名鹊起。强烈的野心曾经驱使她挑战重兵把守的暗杀目标，甚至不惜冒险让友军暴露在危险中。不过无论是怎样的任务，卡特琳娜都会毫不迟疑地在锯刃匕首的风暴中履行自己的使命。"
    },
    {
      name: "永恒梦魇",
      title: "魔腾",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big56000.jpg",
      scores: { difficult: 4, skills: 2, attack: 9, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Nocturne_UmbraBlades.png",
          name: "暗影之刃",
          description:
            "每过数秒，魔腾的下次攻击就会对附近敌人造成额外物理伤害，并治疗自己。\n\n魔腾的普通攻击会减少该技能的冷却时间。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NocturneDuskbringer.png",
          name: "梦魇之径",
          description:
            "魔腾扔出一把暗影之刃，对敌人造成伤害并留下幽灵影径，并使受到伤害的敌方英雄也留下幽灵影径。在影径上时，魔腾无视任何碰撞体积，并且他的移动速度和攻击力也会得到提高。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NocturneShroudofDarkness.png",
          name: "黑暗庇护",
          description:
            "魔腾强化他的刀刃，被动地提升他的攻击速度。主动激活此技能，将使魔腾融入黑影中，同时产生一个能够抵挡掉敌方单个技能的魔法护盾。若抵挡成功，则被动的攻速加成效果将提升至两倍。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NocturneUnspeakableHorror.png",
          name: "无言恐惧",
          description:
            "魔腾将梦魇植入目标的大脑之中，持续对目标造成伤害。并且如果在该技能持续时间结束后，目标仍未脱离该技能的范围，那么目标会被恐惧。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NocturneParanoia.png",
          name: "鬼影重重",
          description:
            "魔腾减少所有敌方英雄的视野范围，并在此过程中移除敌方英雄的友军的视野。魔腾能够借机突进到附近的敌方英雄身边。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在千钧一发之际施放终极技能是非常划算的，即使你不能用它来突进。",
        "- 梦魇之径不仅是攻击技能，还可以让你远离战斗或者从必死的境地之中逃脱。",
        "- 在终极技能突进时使用黑暗庇护，也许会让恐慌的敌人在你的护盾上浪费一次限制技能。"
      ],
      DATAenemytips: [
        "- 当魔腾施放终极技能时，和友军站近一点儿，这样才能一起以众敌寡！",
        "- 魔腾的无言恐惧有范围限制，所以预留好你的移动技能，好在魔腾施放此技能时逃开。"
      ],
      infotitle:
        "将一切有知觉的脑海中萦绕的噩梦提取出来，进而融合成一个恶魔般的实体，这就是被人称为魔腾的存在，它已成为一种纯粹邪恶的原始力量。它的外形捉摸不定，一团无面的黑影中睁着一双冰冷的眼睛，身体两侧是一对形状恐怖的刀刃。魔腾摆脱了精神领域的束缚，进入了梦醒后的凡尘世界，寻觅那些在真正的黑暗中疯长的恐惧，作为自己的食粮。"
    },
    {
      name: "扭曲树精",
      title: "茂凯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big57000.jpg",
      scores: { difficult: 3, skills: 6, attack: 3, survive: 8 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Maokai_Passive.png",
          name: "吸元秘术",
          description:
            "每当有单位在茂凯附近施放技能，茂凯都能从中获得能量，并储存吸元秘术。5次充能后，他的下次近战攻击能够回复茂凯一定百分比的最大生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MaokaiQ.png",
          name: "荆棘重击",
          description:
            "茂凯用一记冲击波击退附近的敌人，造成魔法伤害和减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MaokaiW.png",
          name: "扭曲突刺",
          description:
            "茂凯扭曲为一团移动根须，无法被选取并且向目标突进。在抵达后，他会禁锢住目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MaokaiE.png",
          name: "树苗投掷",
          description: "茂凯投出一颗树苗去目标地区戒备。在草丛中更加有效。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MaokaiR.png",
          name: "自然之握",
          description:
            "茂凯召唤一道荆棘和尖刺灌木组成的巨墙缓慢向前行进，对沿途的敌人造成伤害和禁锢效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 树苗可以投进草丛里，来获取强化效果——但同样不会堆叠。",
        "- 尽量不要从正面上，从侧面或其他角度切入，会让自然之握变得无法躲避或给敌人来一次“惊喜”。",
        "- 茂凯的被动会让他在面对技能的集火时尤为持久——前提是他仍然可以进行普攻。"
      ],
      DATAenemytips: [
        "- 树苗会追击第一个距离它过近的敌人，但会在几秒后或与其它敌人碰撞后爆炸。要特别当心草丛里的树苗，因为它们会更加危险。",
        "- 茂凯的自我治疗的冷却时间严重依赖于你用技能命中他的次数。注意不要在他身上浪费多余的技能。",
        "- 茂凯在使用扭曲突刺时不会受到伤害，所以不要在这时浪费你的技能。"
      ],
      infotitle:
        "茂凯是一只内心暴怒外形魁梧的树精，不知疲倦地对抗暗影岛的骇人异象。一场魔法灾变摧毁了他的家园，同时也将他变成一股复仇的力量，使他免遭不死诅咒的，全靠他芯中灌注融合的生命之水。曾经的茂凯是一只平和的自然之灵，而现在的他则一直在暴怒地战斗，只为了将不死的灾祸逐出暗影岛，让他的家园重归往日的秀美。"
    },
    {
      name: "荒漠屠夫",
      title: "雷克顿",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big58000.jpg",
      scores: { difficult: 3, skills: 2, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Renekton_Passive.png",
          name: "怒之领域",
          description:
            "雷克顿每次主动攻击都能获得怒气。这些怒气能强化他的技能。此外，雷克顿在低生命值时能获得额外怒气。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RenektonCleave.png",
          name: "暴君狂击",
          description:
            "雷克顿挥动他的武器，对周围所有目标造成中等水平物理伤害，并根据造成的伤害来治疗自己。如果他有50点以上怒气，那么此技能的伤害和治疗效果会得到提升。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RenektonPreExecute.png",
          name: "冷酷捕猎",
          description:
            "雷克顿两次挥击目标，对其造成中等水平物理伤害并晕眩其0.75秒。如果雷克顿有50点以上怒气，他会三次挥击目标，摧毁目标身上的伤害护盾，对其造成高额物理伤害，并晕眩其1.5秒。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RenektonSliceAndDice.png",
          name: "横冲直撞",
          description:
            "雷克顿冲向前方，对沿途的敌人造成伤害。如果雷克顿有50点以上怒气，就会造成额外伤害，并减少沿途敌人的护甲值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RenektonReignOfTheTyrant.png",
          name: "终极统治",
          description:
            "雷克顿转换为暴君形态，获得额外生命值，并对周围敌人造成伤害。此形态的雷克顿定时获得怒气。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 横冲直撞非常适合骚扰。先释放技能突入，触发后使用直撞返回安全的位置。",
        "- 狂怒状态下暴君狂击可以汲取额外的生命值，你可以借此让敌人错误的低估你。",
        "- 冷却缩减对雷克顿来说是不错的属性，可以迅速获得并使用怒气。"
      ],
      DATAenemytips: [
        "- 在雷克顿有足够怒气时，要格外小心，因为它通常标志着他准备发起攻击了。",
        "- 通过持续骚扰雷克顿，阻止其进行攻击并获得怒气，能极大降低他的技能效果。"
      ],
      infotitle:
        "雷克顿是一位来自恕瑞玛炙热沙漠中的面目可怖、野蛮狂怒的飞升者。他曾经是帝国最受尊敬的战士，带领恕瑞玛的军队取得过无数次胜利。然而，在帝国陨落以后，雷克顿被困在了沙漠之下，慢慢地，在世界变迁的同时，雷克顿丧失了理智。现在他重获自由，但却被一个执念吞噬：找到并杀死他的哥哥内瑟斯，因为疯狂之中的他坚信内瑟斯是害他经受数百年黑暗束缚的罪魁祸首。"
    },
    {
      name: "德玛西亚皇子",
      title: "嘉文四世",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big59000.jpg",
      scores: { difficult: 5, skills: 3, attack: 6, survive: 8 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/JarvanIV_MartialCadence.png",
          name: "战争律动",
          description:
            "嘉文四世对一名敌人发起的第一次普攻会造成基于目标当前生命值的额外物理伤害。这个效果在数秒内无法重复作用于同一目标。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JarvanIVDragonStrike.png",
          name: "巨龙撞击",
          description:
            "嘉文四世的长矛穿透敌人，对沿途的敌人造成物理伤害和护甲击碎效果。如果嘉文四世该技能指向德邦军旗，那么他将会被导向军旗，并击飞沿途所有敌人。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JarvanIVGoldenAegis.png",
          name: "黄金圣盾",
          description:
            "嘉文四世召唤古德玛西亚国王保护自己，护盾吸收伤害并减速附近敌人。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JarvanIVDemacianStandard.png",
          name: "德邦军旗",
          description:
            "嘉文四世携带着德玛西亚的骄傲，能被动地给予他额外的攻击速度。激活德邦军旗会使嘉文四世放置一面德玛西亚军旗，在军旗的着陆点造成魔法伤害，并强化军旗附近的队友们的攻击速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JarvanIVCataclysm.png",
          name: "天崩地裂",
          description:
            "嘉文四世勇猛地跃向目标敌方英雄，对其造成物理伤害，并在敌人周围形成环形障碍，持续数秒。在嘉文四世着陆时，目标附近的敌人也会受到伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你可以配合使用巨龙撞击和德邦军旗，离开终极技能形成的环形障碍。",
        "- 团战前期攻击各个英雄而不是攻击一个英雄，可以将战争律动的伤害最大化。",
        "- 可以把德邦军旗当作侦察工具。"
      ],
      DATAenemytips: [
        "- 远离嘉文四世和他的军旗之间的路径，以免被击飞。",
        "- 虽然天崩地裂的环形障碍令人恐惧，但移动技能可以帮助你穿过。"
      ],
      infotitle:
        "皇子嘉文四世是皇家的血脉，意味着他便是德玛西亚的下一任国王。他自小被寄予厚望，有朝一日能够成为德玛西亚的楷模，而如此沉重的负担令他的心中充满了挣扎。在战场上，他英勇无畏的气势和一往无前的决心鼓舞着全军上下，显现出身为人主的真实才干。"
    },
    {
      name: "蜘蛛女皇",
      title: "伊莉丝",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big60000.jpg",
      scores: { difficult: 9, skills: 7, attack: 6, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/ElisePassive.png",
          name: "蜘蛛女皇",
          description:
            "人类形态：每当伊莉丝的技能命中一名敌人时，就会有一只小蜘蛛准备就绪。\n\n蜘蛛形态：普攻造成额外魔法伤害并回复自身生命值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/EliseHumanQ.png",
          name: "神经毒素 / 剧毒之蜇",
          description:
            "人类形态：根据目标的当前生命值来造成额外伤害。\n\n蜘蛛形态：戳刺目标，并根据目标已损失的生命值来造成额外伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/EliseHumanW.png",
          name: "自爆蜘蛛 / 掠行狂暴",
          description:
            "人类形态：召唤一个注满毒液的小蜘蛛来追击她的目标，并在靠近目标时爆炸。\n\n蜘蛛形态：伊莉丝和她的小蜘蛛们获得攻击速度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/EliseHumanE.png",
          name: "结茧 / 盘丝",
          description:
            "人类形态：将命中的第一个敌人晕眩并其暴露在己方视野中。\n\n蜘蛛形态：伊莉丝和她的小蜘蛛们拉升至半空中，随后降落到目标敌人身上。在降落到目标敌方处时，伊莉丝的来自蜘蛛形态的额外伤害和治疗效果都会提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EliseR.png",
          name: "蜘蛛形态",
          description:
            "变成一只凶恶的蜘蛛，减少攻击距离，但获得移动速度加成、一套全新技能并且会有一群小蜘蛛来攻击她的敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 蜘蛛形态在收割残血敌人时非常有效；人类形态的神经毒素能对生命充沛的敌人造成更多伤害。",
        "- 蜘蛛形态下，小蜘蛛将会攻击被伊莉丝施放了剧毒之蜇的目标。",
        "- 伊莉丝的蜘蛛形态和蛛形技能不消耗法力，可以在你想要保存法力时优先施放。"
      ],
      DATAenemytips: [
        "- 在你的生命值很低时，伊莉丝的蜘蛛形态会更加危险，并且在你生命值很高时，她的人类形态会更有威胁。",
        "- 盘丝将只会使伊莉丝垂直地上下移动，除非她降落到一名敌方单位身上。",
        "- 盘丝的冷却时间很长。在用完这招后，伊莉丝将极易被攻击。"
      ],
      infotitle:
        "诺克萨斯帝国最古老城市的地下深处，有一处不见天日的禁地，这是夺命的掠食者伊莉丝的宫殿。当她还是一个凡人的时候，她是曾经显赫一时的家族女主人，但是自从被一个卑鄙的半神咬伤之后，她就化身成了美丽的不死异类，一个形似蜘蛛的生物，用蛛网诱捕毫无防备的猎物。为了永葆青春，伊莉丝现在喜欢捕食那些无戒心、无信仰的人，而这世上也鲜少有人能够抗拒她的诱惑。"
    },
    {
      name: "发条魔灵",
      title: "奥莉安娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big61000.jpg",
      scores: { difficult: 7, skills: 9, attack: 4, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/OriannaPassive.png",
          name: "发条协奏",
          description:
            "奥莉安娜的普通攻击造成额外魔法伤害。若重复攻击同个目标，伤害加强。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OrianaIzunaCommand.png",
          name: "指令：攻击",
          description:
            "奥莉安娜指挥她的魔偶，朝目标区域发射，对沿途目标造成魔法伤害（对后续目标伤害递减）。指令结束后魔偶会停在目标区域。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OrianaDissonanceCommand.png",
          name: "指令：杂音",
          description:
            "奥莉安娜指挥她的魔偶，释放能量脉冲，造成魔法伤害，并产生一个加速友军、减速敌军的能量场。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OrianaRedactCommand.png",
          name: "指令：防卫",
          description:
            "奥莉安娜指挥她的魔偶，依附于友军英雄身上，保护他们并对经过的敌人造成魔法伤害。此外，魔偶还会对依附的友军增加额外护甲和魔法抗性。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/OrianaDetonateCommand.png",
          name: "指令：冲击波",
          description:
            "奥莉安娜指挥她的魔偶，释放一股冲击波，对周围敌军造成魔法伤害并在短暂延迟后将他们拉向魔偶。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【E指令：防卫】可用于自身，让魔偶更快回到你身边。配合使用【E指令：防卫】和【Q指令：攻击】能对敌人进行快速骚扰。",
        "- 如果魔偶在奥莉安娜手上，那么【W指令：杂音】是很强劲的逃生技能。在加速的同时又能让敌人减速，效果很强大。",
        "- 如果你正确掌控魔偶的位置，【R指令：冲击波】能让你拉近敌人或者远离敌人。"
      ],
      DATAenemytips: [
        "- 奥莉安娜只能对魔偶所在的区域附近产生影响。利用这点来创造优势。",
        "- 小心正返回奥莉安娜身边的魔偶，可能会有让你意想不到的事情发生。"
      ],
      infotitle:
        "奥莉安娜曾是一个拥有血肉之躯的好奇女孩，而现在则是全身上下部由发条和齿轮构成的科技奇观。祖安下层地区的一次事故间接导致了她身染重病，日渐衰竭的身体必须替换为精密的人造器官，一个接一个，直到全身上下再也没有人类的肉体。她给自己制作了一枚奇妙的黄铜球体，既是伙伴，也是保镖。如今她已经可以自由地探索壮观的皮尔特沃夫，以及更遥远的地方。"
    },
    {
      name: "齐天大圣",
      title: "孙悟空",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big62000.jpg",
      scores: { difficult: 3, skills: 2, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/MonkeyKingStoneSkin.png",
          name: "金刚不坏",
          description: "孙悟空的护甲和魔法抗性会根据周围的敌方英雄数量而增加。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MonkeyKingDoubleAttack.png",
          name: "粉碎打击",
          description:
            "孙悟空的下次攻击造成额外物理伤害，获得距离加成，并暂时减少敌人的护甲。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MonkeyKingDecoy.png",
          name: "真假猴王",
          description:
            "孙悟空进入隐形状态片刻，并留下一个替身，替身在片刻后会对其周围的敌人造成魔法伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MonkeyKingNimbus.png",
          name: "腾云突击",
          description:
            "孙悟空突进至目标敌人处，并变出最多2个分身，攻击附近目标。对每个击中的目标造成物理伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MonkeyKingSpinToWin.png",
          name: "大闹天宫",
          description:
            "孙悟空展开金箍棒，不停地旋转，对敌人造成伤害并将其击飞。在此期间，孙悟空速度持续增加。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 配合使用腾云突击和真假猴王能够快速攻击敌人并在他们报复之前撤退。",
        "- 尝试在草丛附近使用真假猴王，忽悠敌人。"
      ],
      DATAenemytips: [
        "- 孙悟空通常会在使用腾云突击后使用真假猴王。保留技能，确保你击打的是孙悟空真身。",
        "- 孙悟空在被敌人包围时会变得更加难杀。尽量先孤立他，从而获得优势。"
      ],
      infotitle:
        "悟空是一个瓦斯塔亚族的机灵鬼，用自己的力量、灵敏和机智迷惑对手并抢得先机。机缘巧合让他结识了一位剑客并与之成为一生的挚友，这位剑客被人称作易大师。后来，悟空就成为了古老武术门派“无极”的最后一位弟子。如今，附魔长棍傍身的悟空，目标是让艾欧尼亚免遭崩溃的命运。"
    },
    {
      name: "复仇焰魂",
      title: "布兰德",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big63000.jpg",
      scores: { difficult: 4, skills: 9, attack: 2, survive: 2 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/BrandP.png",
          name: "炽热之焰",
          description:
            "布兰德的技能会对他的目标施加【烈焰焚身】效果，在4秒里持续造成伤害，最多可叠加3次。如果布兰德击杀了身上带有【烈焰焚身】的敌人，那么他会回复法力值。当【炽热之焰】在一名英雄或大型野怪身上叠至满层时，它会变得不稳定。它会在2秒内爆炸，在目标附近的区域施加法术特效并造成大量伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BrandQ.png",
          name: "火焰烙印",
          description:
            "布兰德向前方放出一团可造成魔法伤害的火球。如果目标带有【烈焰焚身】效果，那么【Q火焰烙印】将使目标晕眩1.5秒。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BrandW.png",
          name: "烈焰之柱",
          description:
            "在短暂的延迟后，布兰德会在目标区域创造一根烈焰之柱，来对范围内的敌方单位造成魔法伤害。带有【烈焰焚身】效果的单位会额外受到25%伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BrandE.png",
          name: "烈火燃烧",
          description:
            "布兰德在目标身上引发一阵强力的爆裂，对目标造成魔法伤害。如果目标带有【烈焰焚身】效果，那么【E烈火燃烧】还会扩散至目标附近的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BrandR.png",
          name: "烈焰风暴",
          description:
            "布兰德释放一颗破坏力极强的火焰之种，在每次弹跳时造成魔法伤害，最多可弹跳5次。弹跳会优先以带有即将满层的【炽热之焰】效果的英雄为目标。如果目标带有【烈焰焚身】效果，那么【R烈焰风暴】将使目标短暂减速。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你可以对敌方英雄附近的小兵使用技能点燃他们，再使用烈火燃烧来溅射到敌方英雄。",
        "- 你可以将布兰德的技能自由组合，连招攻击。",
        "- 烈焰风暴随机在周围敌人间反弹，如果您想对同一目标进行多次反弹，最好对一小撮敌人施放此技能。"
      ],
      DATAenemytips: [
        "- 布兰德连招前一定要施放一个技能。躲避火焰烙印或烈焰之柱能打乱他的节奏。",
        "- 当你看见布兰德施放烈焰风暴时，远离友军。该技能初始飞行速度较慢，您的团队有一定反应时间。",
        "- 布兰德的被动技能让他特别擅长对付聚在一起的敌人。在对付他时请确保阵形已经分散开。"
      ],
      infotitle:
        "基根·诺和曾经是一名普通弗雷尔卓德部族居民，现在则变成了另一种生物，布兰德。他的身世警醒着后人，被更强大的力量所诱惑会带来什么后果。基根为了追寻传说中的世界符文，背叛了自己的同伴并将符文据为己有，就在那一瞬间，这个人彻底消失了。他的灵魂被彻底燃尽，他的身躯成为了活体烈焰的容器，如今，布兰德游荡在瓦洛兰，寻觅着其他的符文。他曾遭受的苦难，凡人活上十几辈子也未必能够经历，而他发誓此仇必报。"
    },
    {
      name: "盲僧",
      title: "李青",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big64000.jpg",
      scores: { difficult: 6, skills: 3, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/LeeSinPassive.png",
          name: "疾风骤雨",
          description:
            "在李青使用一次技能后，他的下两次攻击会获得攻速加成，且回复能量。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BlindMonkQOne.png",
          name: "天音波/回音击",
          description:
            "天音波：李青发出刺耳的声波定位敌人，对首个敌人造成物理伤害。如果天音波击中敌人，李青在接下来3秒可施放回音击。\n回音击：李青冲向被天音波击中的敌人，造成基于该目标已损失生命值的物理伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BlindMonkWOne.png",
          name: "金钟罩/铁布衫",
          description:
            "金钟罩：李青冲向友军，提供护盾保护自己。如果目标友军是英雄，那么李青和目标都会获得护盾。施放金钟罩后3秒内，李青可施放铁布衫。\n铁布衫：李青艰苦卓绝的训练让他能在战斗中激发潜能。李青可以在4秒内获得额外生命偷取和法术吸血。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BlindMonkEOne.png",
          name: "天雷破/摧筋断骨",
          description:
            "天雷破：李青撞击地面，施放冲击波，造成魔法伤害并使命中的敌方单位显形。如果天雷破击中敌人，李青可以在接下来的3秒内施放摧筋断骨。\n摧筋断骨：李青致残被天雷破给伤害到的敌人，减少敌人的移动速度，持续4秒。持续期间受影响单位的移动速度会逐渐恢复正常。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BlindMonkRKick.png",
          name: "猛龙摆尾",
          description:
            "李青用强力的回旋踢击退敌方英雄，对目标以及被目标撞到的任何敌人造成物理伤害。 被目标撞到的敌人会被短暂击飞。这项技艺是春哥教他的，不过李青不能将玩家的英雄踢到地图外面去。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 施放猛龙摆尾前先用天音波，这样李青可以用回音击瞬间接近目标。",
        "-你可以在两次施放技能之间使用普攻，来充分利用【疾风骤雨】的优势——这样可以将伤害输出最大化，并可回复能量。",
        "- 在打野时，先对自己释放金钟罩，再激活铁布衫，是一个非常好用的打野技巧。"
      ],
      DATAenemytips: [
        "- 团战时猛龙摆尾有很强的输出。尽量分散站位以减少受到的冲击。",
        "- 李青的铁布衫和摧筋断骨能很好地对付物理输出，但是容易受魔法伤害。",
        "- 李青很依赖连招。你可使用限制技能阻止他连招。"
      ],
      infotitle:
        "李青是艾欧尼亚古老武术的大师，讲原则、重信义的他能将神龙之灵的精粹运用自如，助他面对任何挑战。虽然他多年前便已双目失明，但这位武僧依然献出自己的全部力量，用生命捍卫家园，抵御任何胆敢打破这里神圣均衡的人。所有因他安静冥想的举动而掉以轻心的敌人都将品尝他燃烧的拳头和炽烈的回旋踢。"
    },
    {
      name: "暗夜猎手",
      title: "薇恩",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big67000.jpg",
      scores: { difficult: 8, skills: 1, attack: 10, survive: 1 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Vayne_NightHunter.png",
          name: "暗夜猎手",
          description:
            "薇恩毫不留情的猎杀世间邪恶，向附近敌方英雄移动时增加30点移动速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VayneTumble.png",
          name: "闪避突袭",
          description:
            "薇恩进行翻滚，并小心地填充她的下一发射击。她的下次攻击造成额外伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VayneSilveredBolts.png",
          name: "圣银弩箭",
          description:
            "薇恩用稀有金属制作弩箭，让邪恶敌人中毒。对同一目标的第3次攻击或技能施放会对其造成额外真实伤害，数值相当于目标最大生命值的一定百分比。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VayneCondemn.png",
          name: "恶魔审判",
          description:
            "薇恩从背部展开一张重弩，并且朝她的目标发射一根巨型弩箭，将目标击退并造成伤害。如果目标与地形产生碰撞，那么目标会被贯穿，对其造成额外伤害和晕眩效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VayneInquisition.png",
          name: "终极时刻",
          description:
            "薇恩准备进行史诗般的对决，她的攻击力得到提高，能在闪避突袭期间进入隐形状态，闪避突袭的冷却时间缩短，并且暗夜猎手（被动）提供更多移动速度。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 闪避突袭有很多用法，但不能穿墙。",
        "- 恶魔审判能将敌人晕在墙边，帮助你造成击杀或者逃脱追击。",
        "- 不要冲在团战的最前面，等待耐打的队友先上。"
      ],
      DATAenemytips: [
        "- 薇恩很脆弱——注意压制她，使其不得不谨慎作战。",
        "- 不要让薇恩有机会把你击晕到墙边。"
      ],
      infotitle:
        "肖娜·薇恩是一位无情的德玛西亚怪物猎手。终其一生，她都在寻找杀害她全家的恶魔。她的手臂上装着十字弩，心中燃烧着熊熊的复仇怒火，从暗影中射出圣银弩箭的风暴，薇恩只有在杀死那些为黑暗魔法所控制的人和生物时，才能真正感到愉悦。"
    },
    {
      name: "机械公敌",
      title: "兰博",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big68000.jpg",
      scores: { difficult: 10, skills: 8, attack: 3, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Rumble_JunkyardTitan1.png",
          name: "机械重组",
          description:
            "兰博的技能都能使其获得热量。当兰博的热量达到50%时，他会处于危险温度状态，所有基础技能都会获得额外效果。当热量达到100%时，他会进入过热状态，让他的普通攻击造成额外伤害，但在也会让他在数秒内无法施放技能。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RumbleFlameThrower.png",
          name: "纵火盛宴",
          description:
            "兰博朝敌人放火，每秒对前方锥形范围内的敌人造成伤害，持续3秒。在危险温度时，兰博增加对其造成的伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RumbleShield.png",
          name: "破碎护盾",
          description:
            "兰博制造一个护盾，保护自己免受伤害，并短时间内增加移动速度。在危险温度时，兰博增加护盾强度和速度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RumbleGrenade.png",
          name: "电子鱼叉",
          description:
            "兰博发射一把鱼叉，对敌人造成魔法伤害，并减速。兰博可同时持有2发鱼叉。在危险温度时，兰博增加其伤害和减速百分比。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RumbleCarpetBomb.png",
          name: "恒温灼烧",
          description:
            "兰博朝目标区域发射火箭，形成一堵火焰之墙，对范围内的敌人造成伤害并减速。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 尝试让自己待在危险温度从而将技能效果最大化。如果技能使用过于频繁，很容易过热。",
        "- 尝试让敌人待在纵火盛宴的作用范围内，这样可以持续造成更多伤害。",
        "- 如果你即将获胜，可以使用终极技能阻止敌人逃离。"
      ],
      DATAenemytips: [
        "- 留心兰博的热量条。如果他处于过热状态，那么当他被沉默时，可以趁机击杀他。",
        "- 如果你站在兰博的终极技能范围内，将承受巨额的伤害。当你看见导弹降落时，就赶紧撤离吧。",
        "- 兰博主要输出魔法伤害。出些魔抗来减少他对你的伤害。"
      ],
      infotitle:
        "兰博是一个有脾气的约德尔青年发明家。他仅用自己的双手和一堆废铁，就造出了一架巨大的机甲，上面还搭载了电击鱼叉和燃烧火箭弹等超常规武器。虽然其他人可能对他的垃圾场发明嗤之以鼻，但兰博根本不在乎——毕竟，喷出铄金之火的枪口，在他自己手里。"
    },
    {
      name: "魔蛇之拥",
      title: "卡西奥佩娅",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big69000.jpg",
      scores: { difficult: 10, skills: 9, attack: 2, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Cassiopeia_Passive.png",
          name: "优雅蛇行",
          description: "卡西奥佩娅随等级获得移动速度，但她无法购买鞋子类装备。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CassiopeiaQ.png",
          name: "瘟毒爆炸",
          description:
            "在短暂的延迟后，卡西奥佩娅用毒素引爆一片区域，并且如果命中了一名敌方英雄，就会获得移动速度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CassiopeiaW.png",
          name: "剧毒迷雾",
          description:
            "卡西奥佩娅释放出若干团毒云，对经过毒云的敌人造成减速效果、缚地效果和轻量伤害。被缚地的敌人无法使用位移技能。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CassiopeiaE.png",
          name: "双生毒牙",
          description:
            "卡西奥佩娅释放一次攻击，可对中毒的目标造成额外伤害并且基于实际伤害值为她提供治疗效果。如果目标死于这次攻击，卡西奥佩娅会回复法力值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/CassiopeiaR.png",
          name: "石化凝视",
          description:
            "卡西奥佩娅从眼中放出一团魔法能量，对她前方的任何面对她的敌人造成晕眩效果并对其它背对她的敌人造成减速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 对被石化凝视眩晕的野怪和单位施放双生毒牙，可以达到最大伤害效果。",
        "- 在施放瘟毒爆炸时要注意预测敌人的走位，这样才不会放空。"
      ],
      DATAenemytips: [
        "- 当你已经中了卡西奥佩娅的毒时，要小心她的双生毒牙。",
        "- 当她施放石化凝视时，你要背对她，这样只会被减速而不会被晕眩。"
      ],
      infotitle:
        "卡西奥佩娅是个夺命的生物，决心要操纵其他人屈服于自己的阴险意志之下。身为诺克萨斯贵族杜·克卡奥家族的最年轻、最漂亮的女儿，她冒险深入恕瑞玛古代墓穴找寻远古的力量。在墓穴中，她被恐怖的墓穴守卫咬中，在毒液的作用下变成了毒蛇外形的掠食者。狡猾而敏捷的卡西奥佩娅如今在夜幕的掩护下蜿蜒滑行，用阴森的凝视让敌人石化。"
    },
    {
      name: "水晶先锋",
      title: "斯卡纳",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big72000.jpg",
      scores: { difficult: 5, skills: 5, attack: 7, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/Skarner_Passive.png",
          name: "水晶尖塔",
          description:
            "斯卡纳的出场会导致数座水晶尖塔出现在遍布地图的若干特定地点上。在己方队伍控制的水晶尖塔附近时，斯卡纳会获得巨额的移动速度、攻击速度和法力回复。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/SkarnerVirulentSlash.png",
          name: "水晶横扫",
          description:
            "斯卡纳用他的爪子猛击周围敌军，对周围所有敌人造成物理伤害。如果斯卡纳击中了一个目标，他的身上就会暂时充盈水晶能量。在充盈着水晶能量的期间，斯卡纳的【Q水晶横扫】将造成额外魔法伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/SkarnerExoskeleton.png",
          name: "水晶蝎甲",
          description:
            "斯卡纳获得一个护盾，当护盾存在时，他的移动速度得到提升。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/SkarnerFracture.png",
          name: "晶体破碎",
          description:
            "斯卡纳召唤一股水晶能量，对命中的敌人造成伤害和减速效果。短时间内，对这些敌人进行的普攻会造成晕眩效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/SkarnerImpale.png",
          name: "晶状毒刺",
          description:
            "斯卡纳压制一个敌方英雄并对其造成伤害。在此期间，斯卡纳能自由移动并拖拽敌人。此效果结束后，目标将会受到额外伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你的普通攻击会减少【Q水晶横扫】的冷却时间，因此可以在两次【Q水晶横扫】之间填充普通攻击，来最大化伤害输出。",
        "- 先占据水晶尖塔，然后再尝试夺取尖塔附近的野区战略点或进行团战，就会让斯卡纳的表现足以亮翻全场。",
        "- 【R晶状毒刺】在改变敌方英雄的位置时非常给力，尽量把目标拉到友军中间，让队友们都能打个爽吧。"
      ],
      DATAenemytips: [
        "- 当你离斯卡纳较远时，斯卡纳就无法对你造成大量伤害，因此尽可能远离他！",
        "- 只要斯卡纳的【W水晶蝎甲】释放的护盾存在，他的移动速度和就会得到提升。打破他的蝎甲，就能减缓他的移动速度。",
        "- 斯卡纳在水晶尖塔的区域里时会特别致命。如果准备在水晶尖塔附近开战，最好尽量先把水晶尖塔给占据了。"
      ],
      infotitle:
        "斯卡纳是一只身形庞大的水晶蝎，来自于恕瑞玛的一处隐秘的山谷。作为古老的壳人族，斯卡纳和他的同胞因卓然的智慧和与大地深切的联系而闻名。他们的灵魂都得到过生命水晶的加持，所以祖先的记忆与现世的思绪都被完好地保存了下来。在久远的过去，壳人族为了躲避神秘的魔法灾难而进入了长眠，然而现在，新的威胁唤醒了斯卡纳。作为整个部族中唯一醒来的人，他将拼尽全力保护其余的同胞，免遭任何人的迫害。"
    },
    {
      name: "大发明家",
      title: "黑默丁格",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big74000.jpg",
      scores: { difficult: 8, skills: 8, attack: 2, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Heimerdinger_Passive.png",
          name: "海克斯科技亲和",
          description:
            "在友方防御塔和由黑默丁格部署的炮台附近时，获得移动速度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HeimerdingerQ.png",
          name: "H-28 G 进化炮台",
          description:
            "黑默丁格放置一座快速开火的加农炮台，它还配有一个次级穿透光束发射器（炮台对防御塔造成一半伤害）。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HeimerdingerW.png",
          name: "海克斯科技微型导弹",
          description: "黑默丁格以鼠标悬停处为焦点，发射数枚长程导弹。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HeimerdingerE.png",
          name: "CH-2电子风暴手雷",
          description:
            "黑默丁格朝一个位置掷出一颗手雷，来对敌方单位造成伤害，并对被它直接命中的敌人造成晕眩效果，且对附近单位造成减速效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HeimerdingerR.png",
          name: "升级！！！",
          description: ""
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 炮塔的布局是战斗中一个决定性因素。对于大多数敌人，扎堆放置炮塔来攻击敌人是最佳方法，但如果敌人有很多群伤技能，那么你的防御塔可能很快就会被摧毁。此外，将炮塔放置在草丛中，可以进行有利于己方的突袭。",
        "- 对于黑默丁格的生存而言，【E电子风暴手雷】的成功命中是非常重要的。减速和晕眩效果都能让敌人乖乖呆在远处被你痛揍，但它也是对付敌方奇袭的第一道防线。"
      ],
      DATAenemytips: [
        "- 黑默丁格召唤炮塔后，尽快伙同你的队友摧毁炮塔。炮塔聚集在一起后会变得很强力。",
        "- 要当心黑默丁格的终极技能，因为他能用终极技能来化解当前他所遇到的大部分麻烦。一旦他交出终极技能，就可以准备击杀他了！"
      ],
      infotitle:
        "塞西尔·B·黑默丁格教授是一个才华横溢但古怪反常的约德尔科学家。他被称赞为皮尔特沃夫前所未见的最具革新意识和受人尊敬的发明家之一。他不间断地工作，孜孜不倦地尝试解答宇宙中最费解的难题，达到了神经痴迷的程度。尽管他的理论经常会看起来晦涩难懂，但他也曾制造出许多发明，堪称皮尔特沃夫最为惊奇，当然也同样危险的机械，他也在不断改进自己的发明，让它们更加高效。"
    },
    {
      name: "沙漠死神",
      title: "内瑟斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big75000.jpg",
      scores: { difficult: 6, skills: 6, attack: 7, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Nasus_Passive.png",
          name: "吞噬灵魂",
          description: "内瑟斯吸取敌人的生命能量，从而获得生命偷取加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NasusQ.png",
          name: "汲魂痛击",
          description:
            "内瑟斯对敌人施放汲魂痛击造成伤害，如果敌人死于汲魂痛击，则永久增加下次汲魂痛击的伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NasusW.png",
          name: "枯萎",
          description:
            "内瑟斯使一名敌方英雄衰老，持续减少其移动速度和攻击速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NasusE.png",
          name: "灵魂烈焰",
          description: "内瑟斯在目标区域施放灵魂烈焰，伤害并削弱敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NasusR.png",
          name: "死神降临",
          description:
            "内瑟斯释放一个具有强大魔力的沙漠风暴来侵袭身边的敌人。当风暴肆虐期间，他会获得额外生命值、额外攻击距离，伤害附近的敌人，汲魂痛击会拥有较短冷却时间，并获得额外的护甲和魔法抗性。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 如果时刻注意用【Q汲魂痛击】来补刀的话，就能在游戏的后期拥有强大的冲击力。",
        "- 如果你1个人单走一路，那么【E灵魂烈焰】会是一个很好的刷兵手段。如果你在一条有2个英雄的兵线上，并且推进太远的话，【E灵魂烈焰】就不那么好用了。在【Q汲魂痛击】的单体补刀与【E灵魂烈焰】范围伤害技能的刷兵之间找到正确的平衡点。",
        "- 如果你防御力低下，人们就会集中攻击你，就算是你在终极技能的持续时间中。即使你要走物攻路线，也要尽量购买一些提高生存能力的装备。"
      ],
      DATAenemytips: [
        "- 在使用终极技能变形时，内瑟斯要比联盟中的大部分英雄更加强大。除非你有明显优势，否则不要和他交战。",
        "- 最高级的枯萎能有效地反击物理输出型英雄，若你是一个物理输出英雄，最好避免和他单挑。",
        "- 内瑟斯容易被放风筝（远程英雄保持距离让对手不能攻击到自己，但自己能攻击到对手）。尽量不要与满状态的内瑟斯交战。"
      ],
      infotitle:
        "内瑟斯是一位庄严威武的犬首人身飞升者，在古代恕瑞玛帝国时期，是被沙漠子民敬仰为半神的英雄人物。作为知识的守护者和无双的战术家，他用高绝的智慧引导着古代恕瑞玛帝国在数百年间走向了繁荣伟大。帝国陨落以后，他开始了自我放逐，成为了人们口中缥缈的传说。现在，恕瑞玛古城已经再一次崛起，他也随之回归，并决心绝不让它再度陨落。"
    },
    {
      name: "狂野女猎手",
      title: "奈德丽",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big76000.jpg",
      scores: { difficult: 8, skills: 7, attack: 5, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Nidalee_Passive.png",
          name: "寻觅",
          description:
            "在穿越草丛进行移动时，奈德丽的移动速度会提升10%，持续2秒，并在朝着1400码内的出现在己方视野内的敌方英雄进行移动时，移动速度加成会提升至30%。\n\n在【Q标枪投掷】或【W丛林伏击】对敌方英雄或野怪造成伤害后，奈德丽会开始捕猎目标英雄，提供其真实视野，持续4秒。在此期间，奈德丽获得10%移动速度加成（在她朝着被捕猎的目标移动时，这个加成会提升至30%）并且她的【Q推倒】和【W猛扑】会对这些目标造成强化伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JavelinToss.png",
          name: "标枪投掷 / 推倒",
          description:
            "人类形态下，奈德丽向她的目标投掷标枪，飞行中击中目标造成伤害。美洲狮形态下，她的下一次攻击会试图对目标造成致命伤害，目标的生命值越低，造成的伤害越大。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Bushwhack.png",
          name: "丛林伏击 / 猛扑",
          description:
            "人类形态下， 奈德丽会对指定位置放置一个陷阱，踩中陷阱的单位的视野将会被暴露给奈德丽，并持续受到伤害。美洲狮形态下，她会猛扑向目标，落地时造成伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/PrimalSurge.png",
          name: "野性奔腾 / 挥击",
          description:
            "人类形态下，奈德丽引导美洲狮的灵魂以治疗友方单位，并且短暂提升他们的攻击速度。美洲狮形态下，她迅速的挥爪攻击她面前的敌人。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AspectOfTheCougar.png",
          name: "美洲狮",
          description: "奈德丽转变成美洲狮形态，获得全新技能。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 好好利用草丛！进出草丛可以大大影响你在战斗中的效果。",
        "- 在团战开始时，用你的【Q标枪投掷】压制敌人，然后切换到美洲狮形态去追击被捕猎的目标。",
        "- 【W丛林伏击】的陷阱会根据猎物的当前生命值来造成伤害。把它们放在己方队伍的后排，就可以在对面冲锋时帮助你的队伍对敌方的前排英雄造成伤害。"
      ],
      DATAenemytips: [
        "- 奈德丽的【捕猎】减益效果只能通过【Q标枪投掷】和【W丛林伏击】来施加。注意躲闪这些技能，就能降低她追加伤害的能力。",
        "- 奈德丽的【Q标枪投掷】的飞行距离越远，造成的伤害就越高。如果她从远处投掷标枪，那么就一定要躲避她的标枪了。",
        "- 奈德丽的【Q推倒】会对被捕猎的目标造成额外伤害，但她需要先近身才能使用这个技能。把你的控制技能或防御技能留到她过来拿人头的时候再用吧。"
      ],
      infotitle:
        "在密林深处长大的奈德丽是一位追猎大师，她可以变换形态，成为一只凶猛的美洲狮。她既不是真正的人类，也不是真正的野兽，但她会用精心布置的陷阱和灵活自如的标枪，凶狠地捍卫自己的领地不被任何人侵犯。她会先打击猎物的行动能力，然后再以大猫的形态上前扑杀。只有很少数人曾侥幸逃脱并活下来讲述一个狂野女猎手的故事，讲述她锐利的猎手本能，以及更加锐利的爪子。"
    },
    {
      name: "兽灵行者",
      title: "乌迪尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big77000.jpg",
      scores: { difficult: 7, skills: 4, attack: 8, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Udyr_MonkeysAgility.png",
          name: "灵猴敏捷",
          description:
            "转换姿态时，乌迪尔提升攻击速度和移动速度，持续5秒。该效果可以叠加多次。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/UdyrTigerStance.png",
          name: "猛虎姿态",
          description:
            "猛虎姿态：激活效果—乌迪尔暂时提升攻击速度。持续效果—乌迪尔的第一次攻击和之后的每第三次攻击，将会在2秒里持续造成高额伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/UdyrTurtleStance.png",
          name: "灵龟姿态",
          description:
            "灵龟姿态：激活效果—乌迪尔获得短暂的护盾以吸收伤害。持续效果—乌迪尔的第一次攻击和之后的每第三次攻击会治疗他，治疗量相当于他2.5%的最大生命值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/UdyrBearStance.png",
          name: "巨熊姿态",
          description:
            "巨熊姿态：激活效果—乌迪尔短暂的大幅提升移动速度。持续效果—乌迪尔的攻击晕眩目标1秒。该效果不能短时间内作用于同一个目标。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/UdyrPhoenixStance.png",
          name: "火凤姿态",
          description:
            "火凤姿态：激活效果—乌迪尔喷射烈焰给附近的敌人造成伤害。持续效果—乌迪尔的第一次攻击和之后的每第三次攻击，将会喷射出火焰来吞没他面前的敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 切换龟灵状态后，护盾吸收的伤害是计算过魔抗和护甲之后的。因此，购买防御道具可以大大地增加你的存活力。",
        "- 乌迪尔是游戏中最好的打野英雄之一。利用这点可以让你的队伍有很大的经验优势，并能很好地控制地图。"
      ],
      DATAenemytips: [
        "- 乌迪尔通常从野区出现，偷袭兵线上的玩家。在重要位置放置侦查守卫来掌握他的动向。",
        "- 一旦初始的护盾消逝，灵龟姿态在对抗其他英雄时就会很无力。猛烈攻击，迫使他转换姿态，阻止他回复生命。",
        "- 有些乌迪尔玩家购买坦克物品来增强生存能力，你可以转而攻击他相对比较弱的队友。"
      ],
      infotitle:
        "乌迪尔不只是一个人而已；他体内承载着四个原始兽灵的不羁能量。在与这些兽灵的野性进行心灵感应时，乌迪尔可以驾驭它们独特的力量：猛虎让他矫健凶猛，灵龟为他提供韧劲，巨熊是蛮力的源头，而凤凰为他带来永恒的烈焰。结合它们的能量，乌迪尔就能击退那些妄图危害自然秩序的人。"
    },
    {
      name: "圣锤之毅",
      title: "波比",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big78000.jpg",
      scores: { difficult: 6, skills: 2, attack: 6, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Poppy_Passive.png",
          name: "钢铁大使",
          description:
            "波比扔出她的圆盾，圆盾会在命中目标后弹起。波比可以捡起圆盾来获得一个短暂的护盾效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PoppyQ.png",
          name: "圣锤猛击",
          description:
            "波比挥舞她的铁锤，造成伤害并创造一个区域，这个区域会减速敌人并在一段时间后爆炸。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PoppyW.png",
          name: "坚定风采",
          description:
            "波比被动获得护甲和魔法抗性。这个加成会在她生命值较低时得到提升。波比可以主动施放此技能来获得移动速度加成并中断附近敌人的突进。如果中断了一次突进，那么该敌人还会被减速和缚地。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PoppyE.png",
          name: "英勇冲锋",
          description:
            "波比冲向目标并把目标推后。如果目标被推到墙上，就会受到晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PoppyR.png",
          name: "持卫的裁决",
          description: "波比引导一次能够把敌人击飞到远方的锤击。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 被动技能【钢铁大使】的圆盾会倾向于落在墙体附近，尽量利用这点来让【E英勇冲锋】发挥作用。",
        "- 可以立刻施放【R持卫的裁决】来击退敌人，你可以在单挑中利用这个特点来赚取优势。"
      ],
      DATAenemytips: [
        "- 波比可以用她的【W坚定风采】来阻挡敌人的突进。",
        "- 当波比开始旋转她的铁锤时，就说明她在给她的终极技能【R持卫的裁决】蓄力。",
        "- 你可以踩在波比的盾上，来阻止它为她提供护盾。"
      ],
      infotitle:
        "符文之地从来都不缺勇敢的英雄，但很少有谁能像波比一样坚毅。她一直带着奥伦的传奇圣锤，哪怕锤柄立起来有两个她那么高。这位意志坚决的约德尔人在无数个岁月中一直都在秘密地寻找“德玛西亚的英雄”，也就是传说中这把战锤的最合适的主人。在找到他之前，波比肩负起战斗的使命，用旋风般的攻击打退王国的敌人。"
    },
    {
      name: "酒桶",
      title: "古拉加斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big79000.jpg",
      scores: { difficult: 5, skills: 6, attack: 4, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/GragasPassiveHeal.png",
          name: "欢乐时光",
          description:
            "古拉加斯每次使用技能后都会喝一小杯，立即恢复6%的最大生命值。这个效果每8秒内只会触发1次。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GragasQ.png",
          name: "滚动酒桶",
          description:
            "古拉加斯将酒桶滚到目标地点，酒桶可以被主动引爆或在到达目标地点4秒后自行爆炸。被酒桶炸到的敌人，移动速度会被降低。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GragasW.png",
          name: "醉酒狂暴",
          description:
            "古拉加斯痛饮酒桶里的佳酿，持续1秒。在喝完之后，他会因醉酒而得到强化，下次普通攻击会对附近的所有目标造成更多伤害，并且自身所受的伤害会降低。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GragasE.png",
          name: "肉弹冲击",
          description:
            "古拉加斯向目标区域冲锋，在撞上第一个敌人后，对附近的所有敌方单位造成伤害和晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GragasR.png",
          name: "爆破酒桶",
          description:
            "古拉加斯向目标区域投掷他的酒桶，对爆炸范围内的所有敌人造成伤害和击退效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 醉酒狂暴的伤害减免效果在开始引导时就会生效，因此尽量在即将受到伤害时使用它。",
        "- 尽量使用爆破酒桶将敌人击退到你的防御塔下。",
        "- 尽量将肉弹冲击与爆破酒桶联合使用，来为你的队伍制造杀机。"
      ],
      DATAenemytips: [
        "- 古拉加斯能够用其终极必杀技击退所有人。注意不要被撞向他，或者更糟——被撞向敌方防御塔。",
        "- 肉弹冲击的冷却时间很短，你很难追赶古拉加斯，不要过分追赶。"
      ],
      infotitle:
        "豪爽而且威严的古拉加斯是一位身宽体胖、吵闹喧哗的酿酒大师，只为找到最完美的那一口麦酒。他从未知的地方前来，在弗雷尔卓德纯洁的荒原上寻找稀有的酿酒原料，尝试着各种不同的酿制配方。他总是酩酊大醉而且冲动鲁莽，他挑起的斗殴事件堪称传奇，经常造成一整夜的狂欢和殃及池鱼的破坏。只要古拉加斯在某地现身，接踵而至的往往是饮酒和闹事——就按这个顺序。"
    },
    {
      name: "不屈之枪",
      title: "潘森",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big80000.jpg",
      scores: { difficult: 4, skills: 3, attack: 9, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/Pantheon_Passive.PantheonVGU.png",
          name: "矢志不退",
          description: "在数次技能或攻击后，潘森的下一个技能会得到强化。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PantheonQ.png",
          name: "贯星长枪",
          description: "潘森朝着选定方向刺出或投掷他的长枪。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PantheonW.png",
          name: "斗盾跃击",
          description: "潘森跃向一个目标，对其造成伤害和晕眩。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PantheonE.png",
          name: "神佑枪阵",
          description:
            "潘森架起他的圣盾，变得免疫来自前方的伤害，并快速地用他的长枪戳刺。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PantheonR.png",
          name: "大荒星陨",
          description:
            "潘森屏气凝神然后跃至空中， 随后如流星一般落到选定的位置上。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-【矢志不退】会在5次技能或普攻后激活——提前做好计划，可使你在战斗中激活一次以上的【矢志不退】。 先用【Q贯星长枪】消耗敌人，然后再跳过去将其处决。 如果一名敌人即将走出你的【E神佑枪阵】的范围，你可以再次施放这个技能来立刻用圣盾进行猛击。"
      ],
      DATAenemytips: [
        "-潘森的【E神佑枪阵】会让他免疫来自前方的伤害。绕到他背后或者耐心等待吧。 如果你的生命值较低，就要当心潘森的靠近了——投掷版的【Q贯星长枪】会处决生命值较低的敌人。 【R大荒星陨】会在潘森抵达前的几秒作出警告。利用这段时间来跑出范围或制订一个计划来处理他。"
      ],
      infotitle:
        "曾经被战争星灵附体的阿特瑞斯，在他体内那股天界力量被弑杀的时候，以凡人的身份活了下来，即便是那裂空摘星的一击，也无法让他屈服。不久以后，他学会了拥抱自己凡性的力量，以及凡性之中顽强的韧劲。如今的阿特瑞斯作为重生的潘森，反抗神性。他坚不可摧的意志在战场上化为火焰，注入那些曾经属于星灵的武具中。"
    },
    {
      name: "探险家",
      title: "伊泽瑞尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big81000.jpg",
      scores: { difficult: 7, skills: 6, attack: 7, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/Ezreal_RisingSpellForce.png",
          name: "咒能高涨",
          description:
            "伊泽瑞尔的任何技能在击中目标后，都会提升他的攻击速度（最多可叠加5次）。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EzrealQ.png",
          name: "秘术射击",
          description:
            "伊泽瑞尔发射一枚能量弹，如果它击中一个敌方单位，那么它将略微减少伊泽瑞尔所有技能的冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EzrealW.png",
          name: "精华跃动",
          description:
            "伊泽瑞尔发射一个法球，法球会附着在命中的第一个敌方英雄或战略点上。如果伊泽瑞尔用技能或攻击命中一个法球时，会将它引爆来造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EzrealE.png",
          name: "奥术跃迁",
          description:
            "伊泽瑞尔传送到附近的目标区域，并向最近的敌人发射一束自动寻敌的魔法箭。优先选择被【精华跃动】击中的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EzrealR.png",
          name: "精准弹幕",
          description:
            "伊泽瑞尔蓄力然后向目标区域释放长程能量波，对穿过的敌人造成高额伤害（对小兵和非史诗级野怪的伤害会减少）。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 使用奥术跃迁来使你的其他技能更容易命中。",
        "- 你可以将伊泽瑞尔作为一个物理系后期或者法系后期来玩，这取决于你如何升级技能和出装备。",
        "- 你可以施放精准弹幕来攻击多波小兵，甚至怪物。"
      ],
      DATAenemytips: [
        "- 伊泽瑞尔很脆弱，你可以优先攻击他。",
        "- 伊泽瑞尔完全凭借技能攻击，你可以躲在小兵旁边，利用小兵来躲避他的技能。",
        "- 秘术射击可以附带攻击特效，包括召唤师峡谷中绯红印记树怪的增益（燃烧+减速）。"
      ],
      infotitle:
        "神采奕奕的冒险家伊泽瑞尔拥有自己不知道的魔法天赋，他搜刮失落已久的古墓，触碰古老的诅咒，还举重若轻地挑战常人不可能完成的极限。他的勇气和壮举无边无际，总是喜欢随机应变地解决任何情况，一定程度上依赖他的小聪明，但更主要是依赖他神秘的恕瑞玛护手，在他的操控下释放出破坏性的奥术爆弹。有一件事可以肯定——只要伊泽瑞尔出现，那么麻烦一定接踵而至。或是还没走远。范围大概是随时随地。"
    },
    {
      name: "铁铠冥魂",
      title: "莫德凯撒",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big82000.jpg",
      scores: { difficult: 4, skills: 7, attack: 4, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MordekaiserPassive.MordeVGU.png",
          name: "幽冥起兮",
          description:
            "莫德凯撒在对英雄打出3次攻击或技能之后获得一个强力的伤害光环和移动速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MordekaiserQ.png",
          name: "破灭之锤",
          description:
            "莫德凯撒用他的权杖猛砸地面，来对被击中的每个敌人造成伤害。在只命中单个敌人时，伤害会提升。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MordekaiserW.png",
          name: "不坏之身",
          description:
            "莫德凯撒将他所造成和承受的伤害储存起来，以创造一个护盾。他可以消耗这个护盾来治疗自身。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MordekaiserE.png",
          name: "断魂一扼",
          description: "莫德凯撒拉拽一个区域内的所有敌人"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/MordekaiserR.png",
          name: "轮回绝境",
          description:
            "莫德凯撒将自身和他的目标拖拽到一个异次元空间，并偷取目标的一部分属性。如果他击杀了目标，那么会将这些属性保持到目标复活。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-你的防守手段就是进攻。保持不停战斗来积攒更厚的【不坏之身】护盾。 用相同技能命中多个英雄，能有助于快速激活【黑暗起兮】。 对低血量的敌人使用【轮回绝境】可以确保击杀并将其属性保持到打完一场团战。"
      ],
      DATAenemytips: [
        "-莫德凯撒在与英雄作战时会积攒一个强力的伤害光环，所以尽量与他保持距离。 他造成的伤害能够转化为一层厚实的护盾，并且消耗它来治疗生命值。 【轮回绝境】将使你与你的队友们彻底隔开。一旦如此，尽量留着机动技能来逃离莫德凯撒的魔掌。"
      ],
      infotitle:
        "两度被杀，三度重生。莫德凯撒是一位来自远古纪元的残酷军阀，他使用死灵巫术将无数灵魂禁锢在永恒的奴役中。现在几乎无人记得他早期的那些征服战争，也无人知道他有多强大的力量，但也有一些古老的灵魂认得他，而他们一直都在担心有一天他会回来，同时统治生者和死者。"
    },
    {
      name: "牧魂人",
      title: "约里克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big83000.jpg",
      scores: { difficult: 6, skills: 4, attack: 6, survive: 6 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Yorick_P.png",
          name: "牧魂人",
          description:
            "受诅咒的部落：约里克可以召唤雾行者来蜂拥并攻击附近的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YorickQ.png",
          name: "临终仪式",
          description:
            "约里克的下次攻击造成额外伤害并治疗自身。如果目标死亡，则会留下一个坟墓。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YorickW.png",
          name: "暗灵缠身",
          description:
            "约里克在目标区域召唤一圈可破坏的暗灵之墙来阻挡敌方移动。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YorickE.png",
          name: "哀伤之雾",
          description:
            "约里克扔出一小团黑雾，对敌人造成伤害、减速效果并标记敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YorickR.png",
          name: "海屿悼词",
          description:
            "约里克召唤迷雾室女，来让约里克的攻击对室女锁定的目标造成额外伤害。室女也会自动从死亡的敌人身上唤起雾行者。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你不需要施放【唤醒】来重新获得施放【临终仪式】的能力。",
        "- 室女将会协助你进行战斗，所以要明智地选择你的目标。",
        "- 你可以让室女去单带一路，但要慎重，因为她是你战斗力的重要组成部分。"
      ],
      DATAenemytips: [
        "- 你可以对雾行者和迷雾室女使用惩戒，来造成伤害或直接击杀。",
        "- 尽量削减约里克的仆从数量，然后再跟他交战。只需要一次普攻或一个单体技能就能解决掉一个雾行者。",
        "- 你可以攻击【暗灵缠身】来将墙体打破。"
      ],
      infotitle:
        "约里克所在的教团早已被世人忘却，而他也成为了最后的幸存者。说不上是诅咒抑或是祝福，他拥有操控死者的能力。与他一同被困在暗影岛上的，只有逐渐腐败的尸体，还有他引到自己身边终日尖啸的死灵。约里克怪异的举止下掩藏着的却是他决绝的憧憬：在破败之咒的阴影下解放他的家园。"
    },
    {
      name: "离群之刺",
      title: "阿卡丽",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big84000.jpg",
      scores: { difficult: 7, skills: 8, attack: 5, survive: 3 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Akali_P.png",
          name: "我流忍法！潜龙印",
          description:
            "对一个英雄造成技能伤害时，会在其周围创造一个能量圆环。穿过该圆环时，会增强阿卡丽的下一个普攻的距离和伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AkaliQ.png",
          name: "我流奥义！寒影",
          description:
            "阿卡丽掷出五枚苦无，基于她的额外攻击力和法术强度来造成伤害，并造成减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AkaliW.png",
          name: "我流奥义！霞阵",
          description:
            "阿卡丽扔下一颗烟幕弹。在烟幕内时，阿卡丽变为隐形状态并且不会被敌方的技能和攻击选为目标，并获得移动速度。攻击或使用技能将暂时使她显形。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AkaliE.png",
          name: "我流奥义！隼舞",
          description:
            "进行后空翻并向前掷出一枚手里剑，造成物理伤害，并标记命中的第一个敌人或【我流奥义！霞阵】。再次施放可突进至被标记的目标处，并造成额外伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AkaliR.png",
          name: "我流秘奥义！表里杀缭乱",
          description:
            "阿卡丽朝着一个方向跃出，伤害被她击中的敌人。再次施放：阿卡丽朝着一个方向突进，处决所有被她击中的敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 阿卡丽善于击杀脆皮英雄。让你的团队发起先手，然后你从敌人后方发起攻击。",
        "- 【W我流奥义！霞阵】即使在最危险的情境下，都可为她提供保护。利用那段持续时间来积蓄能量值然后发起一记快速袭击。"
      ],
      DATAenemytips: [
        "- 阿卡丽在被【W我流奥义！霞阵】所遮蔽时，仍然会被范围伤害技能所击中。这么做的话会暂时显形她的位置。",
        "- 阿卡丽的【Q我流奥义！寒影】非常强大，前提是要在最大距离和最大能量时使用。在她能量值较低时与她交战，即可最大化你的胜算。",
        "- 当你的生命值很低而阿卡丽的终极技能尚未交出时，请尽快撤回基地。"
      ],
      infotitle:
        "无论是均衡教派还是暗影之拳的称号，都已被阿卡丽抛弃，如今的阿卡丽独来独往，随时可以成为她的人民所需要的夺命武器。虽然她牢牢铭记着她从宗师慎身上学来的一切，但她效忠的保护艾欧尼亚并铲除敌人，每次一条命。或许阿卡丽的出击悄然无声，但她传达的信息将响亮无比：不听命于任何人的刺客最为可怕。"
    },
    {
      name: "狂暴之心",
      title: "凯南",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big85000.jpg",
      scores: { difficult: 4, skills: 7, attack: 6, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Kennen_Passive.png",
          name: "忍法！雷缚印",
          description:
            "凯南的技能会对敌人施加一层持续6秒的【忍法！雷缚印】。当一名敌人身上的【忍法！雷缚印】达到3层时，就会被晕眩1.25秒，与此同时，凯南会恢复25能量值。\n\n如果在6秒内再次触发的话，晕眩时长会减少0.5秒。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KennenShurikenHurlMissile1.png",
          name: "奥义！千鸟",
          description:
            "凯南向目标区域投掷手里剑，对第一个目标造成伤害并附加【忍法！雷缚印】。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KennenBringTheLight.png",
          name: "奥义！电刃",
          description:
            "凯南连续攻击附加额外伤害并对目标造成一层【忍法！雷缚印】，主动释放会对所有带有【忍法！雷缚印】的敌人造成闪电伤害，并额外附加一层【忍法！雷缚印】。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KennenLightningRush.png",
          name: "奥义！雷铠",
          description:
            "凯南变身为一个闪电形态，高速移动并可以穿越单位。对碰到的所有敌人造成伤害并施加一层【忍法！雷缚印】。凯南会在进入这个形态时获得移动速度，并在离开时获得攻击速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KennenShurikenStorm.png",
          name: "秘奥义！万雷天牢引",
          description:
            "凯南召唤出一团风暴，会对周围的所有敌方英雄造成魔法伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你可以叠加3枚【忍法！雷缚印】来晕眩你的对手。",
        "- 【E奥义！雷铠】可以用来切入战场，因为击中敌人所带来的能量回复可以使他稍后使用其他技能。",
        "- 你可以用【Q奥义！千鸟】向对手发起第一段的【忍法！雷缚印】效果，然后再释放【W奥义！电刃】。"
      ],
      DATAenemytips: [
        "- 当你有【忍法！雷缚印】减益时，在凯南附近要小心。如果你身上的【忍法！雷缚印】到达3层，就会被晕眩。",
        "- 凯南的小身板很脆弱——如果他轻易地交掉了【E奥义！雷铠】，那么就可以对他发起攻势了。"
      ],
      infotitle:
        "凯南不仅是捍卫艾欧尼亚均衡的迅猛如雷电的执法者，而且还是均衡教派中唯一的一名约德尔人。虽然他身体小巧，浑身绒毛，但他能用手里剑的风暴和无限的热情迎接任何敌人的威胁。他和自己的师父慎一起在精神领域巡逻，使用雷电的能量痛击敌人。"
    },
    {
      name: "德玛西亚之力",
      title: "盖伦",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big86000.jpg",
      scores: { difficult: 5, skills: 1, attack: 7, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Garen_Passive.png",
          name: "坚韧",
          description:
            "如果盖伦近期没有受到伤害或者被敌方技能命中，那么他会每秒回复若干百分比的总生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GarenQ.png",
          name: "致命打击",
          description:
            "盖伦的移动速度获得爆发性提升，同时移除身上的所有减速效果。他的下次攻击将打击敌人的要害部位，造成额外伤害并将目标沉默。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GarenW.png",
          name: "勇气",
          description:
            "盖伦被动地通过击杀敌人来提升护甲和魔法抗性。他也可以激活这个技能来暂时获得一层护盾和韧性，并在接下来的较长持续时间里获得较弱的伤害减免效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GarenE.png",
          name: "审判",
          description: "盖伦快速地旋转身体挥舞大剑，并对邻近敌人造成物理伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GarenR.png",
          name: "德玛西亚正义",
          description: "盖伦召唤德玛西亚之力，试图处决一名敌方英雄。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 如果盖伦能持续几秒不受到攻击，那么他的生命回复将大大增加。",
        "- 如果【审判】的范围只有一个敌人，那么它就能造成最大伤害值。为了有效率地换血，走位时请尽量确保【审判】的范围内只有一个敌方英雄。",
        "- 盖伦只受到冷却时间的限制，【黑色切割者】等物品对他极其有效。"
      ],
      DATAenemytips: [
        "- 堆护甲可以有效减少盖伦大量的物理输出。",
        "- 当你的生命值偏低时，尽可能躲避盖伦，因为他的【德玛西亚正义】能够很快地斩杀你。",
        "- 在攻击草丛中的盖伦时要小心，因为你会受到审判技能造成的全额伤害。",
        "- 【审判】只会在攻击单个目标时造成最大伤害。如果无法走出该技能的范围，就穿过友方小兵来降低所受伤害。"
      ],
      infotitle:
        "作为一名自豪而高贵的勇士，盖伦将自己当做无畏先锋中的普通一员参与战斗。他既受到同袍手足的爱戴，也受到敌人对手的尊敬——尤其作为尊贵的冕卫家族的子嗣，他被委以重任，守卫德玛西亚的疆土和理想。他身披抵御魔法的重甲，手持阔剑，时刻准备着用正义的钢铁风暴在战场上正面迎战一切操纵魔法的狂人。"
    },
    {
      name: "曙光女神",
      title: "蕾欧娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big89000.jpg",
      scores: { difficult: 4, skills: 3, attack: 4, survive: 8 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/LeonaSunlight.png",
          name: "日光",
          description:
            "技能会在敌人身上施加【日光】效果，持续1.5秒。在此期间，蕾欧娜友军对这些目标造成伤害时，会触发【日光】，使目标受到额外的魔法伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LeonaShieldOfDaybreak.png",
          name: "破晓之盾",
          description:
            "蕾欧娜用盾进行下次普通攻击，造成额外魔法伤害并晕眩目标。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LeonaSolarBarrier.png",
          name: "日蚀",
          description:
            "蕾欧娜举起盾牌，提供伤害减免、护甲和魔法抗性。当持续时间首次结束时，如果附近有敌人，那么她会对其造成魔法伤害并延长效果的持续时间。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LeonaZenithBlade.png",
          name: "天顶之刃",
          description:
            "蕾欧娜投掷一束日光，对直线上的所有敌人造成魔法伤害。当效果消失时，蕾欧娜会冲向最后一个被击中的敌人并使其无法移动。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LeonaSolarFlare.png",
          name: "日炎耀斑",
          description:
            "蕾欧娜召唤一道太阳光束，对区域内的敌人造成伤害。区域中心的敌人会被晕眩，并且外围的敌人会被减速。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 带头冲锋，在友军攻击目标前用日光标记目标。",
        "- 破晓之盾和天顶之刃的连招具有强劲的攻击力。",
        "- 日蚀的伤害很大，但你必须在敌人附近才能持续其效果。"
      ],
      DATAenemytips: [
        "- 当蕾欧娜释放日蚀时，你有3秒的时间躲避其造成的伤害。",
        "- 只有位于日炎耀斑效果范围正中的敌人才会被晕眩，如果你跑得快可以避免被晕。"
      ],
      infotitle:
        "蕾欧娜是被灌注了烈阳之火的烈阳教派圣殿武士，用天顶之刃和破晓之盾守护着巨神峰。她的皮肤闪烁着星火，她体内天界星灵的力量透过她的双眼炯炯燃烧。蕾欧娜身披金色铠甲，背负着沉重的上古知识，为一些人带来启示，为另一些人带去死亡。"
    },
    {
      name: "虚空先知",
      title: "玛尔扎哈",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big90000.jpg",
      scores: { difficult: 6, skills: 9, attack: 2, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Malzahar_Passive.png",
          name: "虚空穿越",
          description:
            "如果玛尔扎哈在近期没有受到任何伤害或被控制，他就会获得巨幅伤害减免并免疫控制效果，这个效果在承受了伤害或格挡了一次控制效果后仍然会残留一段很短的时间。\n\n来自线上小兵的伤害不受影响。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MalzaharQ.png",
          name: "虚空召唤",
          description:
            "玛尔扎哈开启两扇通向虚空的传送门。在短暂的延迟后，两扇门之间会有虚空能量对流而过，造成魔法伤害并沉默敌方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MalzaharW.png",
          name: "虚空虫群",
          description: "玛尔扎哈召唤一个虚灵去攻击附近的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MalzaharE.png",
          name: "煞星幻象",
          description:
            "玛尔扎哈将目标的惨死幻象侵入目标的意识中，造成持续伤害。玛尔扎哈对目标使用其它技能时会刷新幻象的持续时间。\n\n如果目标在感染幻象期间死亡，那么幻象会传到附近的一个敌人身上，并且玛尔扎哈会回复法力值。玛尔扎哈的虚灵会优先攻击感染了幻象的单位。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/MalzaharR.png",
          name: "冥府之握",
          description:
            "玛尔扎哈引导虚空的精萃来把一名敌方英雄压制在一个充满负能量的地带上。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 把【W虚空虫群】留到附近有敌人可供虚灵攻击或击杀时使用。",
        "- 使用【Q虚空召唤】和【R冥府之握】来刷新敌人身上的【E煞星幻象】的持续时间。",
        "- 在对线中避免受伤可以最大化【虚空穿越】的覆盖时长，从而显著提升玛尔扎哈的生存能力。"
      ],
      DATAenemytips: [
        "- 当玛尔扎哈用技能命中了一个感染了【E煞星幻象】的敌人时，【E煞星幻象】的持续时间会得到刷新。",
        "- 要离那些中了【E煞星幻象】的小兵们远一点，以免它们身上的幻象传递到你身上。",
        "- 积累【W虚空虫群】时的玛尔扎哈是极其危险的。"
      ],
      infotitle:
        "马尔扎哈是一名狂热的先知，将自己的全部奉献给一切生命的大一统。他坚信，近来新出现的虚空就是符文之地的救赎。在恕瑞玛的沙漠荒原上，他曾一度追随着脑海中的窃窃私语，一路来到古艾卡西亚。在这片废墟中，他窥见了虚空深处的黑暗核心，被赋予了新的力量和目标。马尔扎哈现在视自己为迷途羔羊的牧人，将其他人带进畜栏，或是放出藏身地下的虚灵生物。"
    },
    {
      name: "刀锋之影",
      title: "泰隆",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big91000.jpg",
      scores: { difficult: 7, skills: 1, attack: 9, survive: 3 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/TalonP.png",
          name: "刀锋之末",
          description:
            "泰隆的技能会创伤英雄和史诗级野怪，可叠加3层。当泰隆用普攻攻击一个带有3层创伤效果的目标时，目标会流血，持续受到重度伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TalonQ.png",
          name: "诺克萨斯式外交",
          description:
            "泰隆戳刺目标单位。如果目标在近战距离之内，那么这次攻击会造成致命伤害。如果目标在近战距离之外，那么泰隆将会跃向他的目标然后戳刺目标。如果这个技能击杀了泰隆的目标，那么就会返还给泰隆一些生命值和冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TalonW.png",
          name: "斩草除根",
          description:
            "泰隆放出一排匕首，随后匕首会返回泰隆处，匕首每次穿过敌人时都会造成物理伤害。返程的匕首会造成额外伤害并使被命中的目标减速。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TalonE.png",
          name: "刺客之道",
          description:
            "泰隆翻越任何地形或建筑物，有一个最大距离。这个技能的冷却时间很短，但是需要很长一段时间后才能再次翻越已经翻越过的地形。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TalonR.png",
          name: "暗影突袭",
          description:
            "泰隆散出一圈刀刃并变为隐形状态，同时获得额外移动速度。当泰隆从隐形状态下现身时，刀刃会汇聚向泰隆处。刀刃的每段移动，都会让暗影突袭对被至少一枚刀刃命中的敌人造成物理伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【E刺客之道】可用来抄敌人的后路，来为【Q诺克萨斯式外交】的近战攻击营造施放条件。",
        "- 暗影突袭是很强的逃生技能，但也可以用来对敌方团队发起攻势。",
        "- 作战前先选好目标，将所有技能都集中在一个目标身上效果甚佳，但是如果将技能分散用于多个目标，则会收效甚微。"
      ],
      DATAenemytips: [
        "- 泰隆的攻击都是物理伤害。尽早出护甲装备，来对抗他的爆发伤害。",
        "- 泰隆极其依赖暗影突袭来逃离战斗。当暗影突袭处于冷却状态时，将更易于被集火。",
        "- 泰隆有着无与伦比的游走能力。确保能够时刻追踪到他的位置，或是通过进攻性的推线来迫使他呆在线上。"
      ],
      infotitle:
        "泰隆是黑暗中的匕首，是绝无仁慈的杀手，他出手前不会有任何警告，不会留任何退路，也不会引起任何警觉。泰隆在诺克萨斯的野蛮街巷中深深烙印了自己危险的名号，在这里他被迫为了生存而战斗、杀戮、偷窃。后来恶名昭彰的杜·克卡奥家族收养了他，现在他为帝国的指挥部贡献自己的夺命手段，暗杀敌人的领袖、军官和英雄，当然也包括任何得罪了最高长官们的诺克萨斯蠢货。"
    },
    {
      name: "放逐之刃",
      title: "锐雯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big92000.jpg",
      scores: { difficult: 8, skills: 1, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/RivenRunicBlades.png",
          name: "符文之刃",
          description:
            "锐雯的技能会为她的剑刃充能，并且她的普通攻击会消耗充能来造成额外伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RivenTriCleave.png",
          name: "折翼之舞",
          description:
            "锐雯斩出一套猛烈的剑式。在短时间内，这个技能最多可以重新激活3次，并且第三次会将周围的所有敌人击飞。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RivenMartyr.png",
          name: "震魂怒吼",
          description: "锐雯爆发斗气，对附近敌人造成伤害和晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RivenFeint.png",
          name: "勇往直前",
          description: "锐雯向前冲锋一小段距离，并格挡即将到来的伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/RivenFengShuiEngine.png",
          name: "放逐之锋",
          description:
            "锐雯将能量灌入她那残破不堪的武器中，使攻击力和攻击范围都得到提高。在这段时间里，她还能使用一次疾风斩（一次强大的远程打击）。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 锐雯的折翼之舞会朝着你在施法时的鼠标悬停位置施放。如果你想用这招穿插你的敌人，请确保你的敌人们处在锐雯和你的鼠标悬停位置之间。",
        "- 锐雯血少防低，但作为补偿，她的连招爆发很高。折翼之舞和震魂怒吼可以用来切入战斗，勇往直前可以用来逃跑和反骚扰。"
      ],
      DATAenemytips: [
        "- 锐雯的机动性非常出色，但单个技能不能使她移动得太远。在技能间隙使用束缚/沉默会极大削减她的影响。",
        "- 锐雯的所有伤害都是物理伤害，如果对面的锐雯已经失控了，那么优先堆护甲。",
        "- 锐雯擅长同时对付多个近战，如果要联手对付她，请在她放完她的整套连招前不要都进入肉搏范围。"
      ],
      infotitle:
        "曾担任诺克萨斯军队剑士长的锐雯，如今在那片她曾要征服的土地上流浪。她通过自己信念的力量和野蛮的行事风格在军中不断晋升，因此获得了一把传奇的符文之刃和自己的战团作为奖赏——然而在艾欧尼亚的前线上，锐雯对祖国的信仰遭到了考验，并最终粉碎。她切断了与帝国的一切关联，在分崩离析的世界中找寻自己的归宿，即使纷飞的谣言传说着诺克萨斯已经重铸……"
    },
    {
      name: "深渊巨口",
      title: "克格莫",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big96000.jpg",
      scores: { difficult: 6, skills: 5, attack: 8, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/KogMaw_IcathianSurprise.png",
          name: "来自艾卡西亚的惊喜",
          description:
            "死亡后，克格莫的身体会开启连锁反应，让他移动得更快，并于4秒之后爆炸。对周围敌人造成100+(25x等级)点的真实伤害（不受护甲和魔抗影响）。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KogMawQ.png",
          name: "腐蚀唾液",
          description:
            "克格莫发射一团腐蚀性物质，对目标造成魔法伤害，并暂时腐蚀目标的护甲和魔法抗性。克格莫还会获得额外攻速。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KogMawBioArcaneBarrage.png",
          name: "生化弹幕",
          description:
            "克格莫的攻击距离得到了提升，并且能够对目标造成额外的魔法伤害，伤害值基于目标的最大生命值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KogMawVoidOoze.png",
          name: "虚空淤泥",
          description:
            "克格莫抛射出一团特殊的分泌物，对经过或停留在分泌物上的敌人造成伤害和减速效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KogMawLivingArtillery.png",
          name: "活体大炮",
          description:
            "克格莫发射一枚射程极远的活体炮弹，让被命中的敌人暴露在己方视野中，并对目标造成魔法伤害（对低血量目标的伤害会显著提升）。 在短时间内连续使用活体大炮，将消耗额外的法力值。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 克格莫使用【W生化弹幕】时，其射程比大多数英雄都远。",
        "- 在【E虚空淤泥】的帮助下可以施放一个完美的【R活体大炮】。",
        "- 用【来自艾卡西亚的惊喜】来对尽可能多的敌人造成伤害。"
      ],
      DATAenemytips: [
        "- 克格莫没有好的逃生技能，因此他是一个好的攻击/gank对象。",
        "- 在克格莫死后要远离他！",
        "- 活体大炮的射程随着技能等级增加。",
        "- 克格莫极易用生化秘法弹雾杀死纳什男爵。若克格莫已经购买破败王者之刃，插眼防止其偷杀男爵是很有用的。"
      ],
      infotitle:
        "从艾卡西亚废墟深处的腐败裂口中，克格莫喷着进食后的胀气走入了符文之地，它是一只好奇的生物，然而身上散发着腐烂的恶臭，血盆大口里淌着腐蚀性的粘液。这只特别的虚空生物需要用牙齿和口水去理解周围的事物。虽然克格莫并非本性邪恶，但它的天真无知同样很危险，因为它的无知往往预示着一场疯狂的暴食——并不是为了填饱肚子，而是为了满足它无尽的好奇。"
    },
    {
      name: "暮光之眼",
      title: "慎",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big98000.jpg",
      scores: { difficult: 4, skills: 3, attack: 3, survive: 9 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Shen_Passive.png",
          name: "忍法！气合盾",
          description:
            "在施放一次技能后，慎会获得一层护盾。如果慎的技能对英雄产生作用，那么这个技能的冷却时间就会降低。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ShenQ.png",
          name: "奥义！暮临",
          description:
            "慎召回他的魂刃并用它进行攻击，造成基于目标最大生命值的额外伤害。如果魂刃在召回途中与一个敌方英雄产生了碰撞，那么慎的魂刃攻击会获得极大强化，并且所有被碰撞的敌人在逃离慎的时候都会被减速。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ShenW.png",
          name: "奥义！魂佑",
          description:
            "当慎或友方英雄在魂刃附近时，魂刃会对原本要命中他们的攻击进行格挡。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ShenE.png",
          name: "奥义！影缚",
          description: "慎朝着一个方向冲刺，嘲讽沿途的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ShenR.png",
          name: "秘奥义！慈悲度魂落",
          description:
            "慎为目标友方英雄提供一层吸收伤害的护盾，然后很快传送到目标身旁。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 密切留意队友们，并且准备好用你的终极技能拯救他们。",
        "- 你的能量是可以持续快速恢复的，所以可以利用这点在与使用法力的英雄们对线时逐渐积累优势。"
      ],
      DATAenemytips: [
        "- 准备好躲避慎的嘲讽，并在他失误时予以反击。",
        "- 一旦慎到达了6级，就要留意他用全图传送终极技能快速扭转局部战斗的局势。"
      ],
      infotitle:
        "在隐秘的艾欧尼亚武装力量均衡教派中，慎背负着领袖的职责和暮光之眼的称号。他力求超脱自身的情感、偏执以及自我，行走于灵魂领域和物质世界之间无人通晓的隐秘道路。为了贯彻精神与物质之间的均衡，慎用一把钢刀和一把魂刃对抗任何威胁到均衡的人。"
    },
    {
      name: "光辉女郎",
      title: "拉克丝",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big99000.jpg",
      scores: { difficult: 5, skills: 9, attack: 2, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LuxIlluminatingFraulein.png",
          name: "光芒四射",
          description:
            "拉克丝的伤害类技能会对敌人施加【启明】效果，持续6秒。拉克丝的下一次攻击将会消耗【启明】效果，来对目标造成额外魔法伤害（基于拉克丝等级）。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LuxLightBinding.png",
          name: "光之束缚",
          description: "拉克丝释放一个光球，束缚并伤害最多两个敌方单位。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LuxPrismaticWave.png",
          name: "曲光屏障",
          description:
            "拉克丝掷出她的魔杖，魔杖所触及的友方单位会有光环环绕，保护他们免受敌方伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LuxLightStrikeKugel.png",
          name: "透光奇点",
          description:
            "朝一个区域发射一个不规则的扭曲之光，减速附近敌人。拉克丝可以引爆它，对敌人造成区域性伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/LuxMaliceCannon.png",
          name: "终极闪光",
          description:
            "在积蓄能量之后，拉克丝发射一束光波，对该区域所有目标造成伤害。此外，该技能触发拉克丝的被动技能并刷新光芒四射减益的持续时间。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 拉克丝有强大的区域控制技能，使用透光奇点来阻止敌人的前进或逃跑。",
        "- 如果你不能很好的施放曲光屏障, 要切记它达到最大射程后会返回。 试着利用返回的曲光屏障保护友军。",
        "- 透光奇点是很好的侦查工具，在进入草丛前用它来侦查草丛里的埋伏。"
      ],
      DATAenemytips: [
        "- 拉克丝有多个强大的区域控制技能。试着分散并从不同方向攻击，这样她就无法锁定某个特定区域。",
        "- 当你贫血撤退时，要时刻准备躲避拉克丝的终极闪光。会有一束先于主光束的红色激光，所以看到红光时尽可能地横向躲避。"
      ],
      infotitle:
        "拉克珊娜·冕卫出身自德玛西亚，一个将魔法视为禁忌的封闭国度。只要一提起魔法，人们总是带着恐惧和怀疑。所以拥有折光之力的她，在童年的成长过程中始终担心被人发现进而遭到放逐，一直强迫自己隐瞒力量，以此保住家族的贵族地位。虽然如此，拉克丝的乐观和顽强让她学会拥抱自己独特的天赋，现在的她正在秘密地运用自己的能力为祖国效力。"
    },
    {
      name: "远古巫灵",
      title: "泽拉斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big101000.jpg",
      scores: { difficult: 8, skills: 10, attack: 1, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Xerath_Passive1.png",
          name: "法力澎湃",
          description: "泽拉斯的普通攻击可以周期性地回复法力值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/XerathArcanopulseChargeUp.png",
          name: "奥能脉冲",
          description:
            "泽拉斯聚集能量，随后发射出一道射程很远的能量光束，对所有命中的目标造成魔法伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/XerathArcaneBarrage2.png",
          name: "毁灭之眼",
          description:
            "在目标区域降下奥术能量的弹幕，对一个区域内的所有敌人造成魔法伤害。区域中心的目标会受到额外伤害和一个强大的减速效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/XerathMageSpear.png",
          name: "冲击法球",
          description: "对单个敌人造成魔法伤害和晕眩效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/XerathLocusOfPower2.png",
          name: "奥术仪式",
          description:
            "泽拉斯将自己固定在一处魔力之源上，并获得数次远程施法的机会。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-在敌人奔向或逃离你时施放【Q奥能脉冲】，命中率会比在敌人贴住你时高。",
        "-【W毁灭之眼】能让目标减速，有助于【Q奥能脉冲】的命中。",
        "-一旦你用【E冲击法球】命中了一名敌方英雄，就必定可以用【W毁灭之眼】的中心区域来命中敌人。"
      ],
      DATAenemytips: [
        "- 泽拉斯的施法距离非常惊人，但只要被靠近了拼消耗的话，大部分英雄都可以从他身上占到便宜。",
        "- 泽拉斯启动【R奥术仪式】需要一段很长的时间。留意他的施法动画，然后就愉快地躲技能吧。",
        "- 【女妖面纱】将会使泽拉斯更难用【E冲击法球】对你发动连招。"
      ],
      infotitle:
        "泽拉斯是古代恕瑞玛的巫师，飞升以后的他变成了一种奥术能量体，在魔法石棺的碎片之中涌动。数千年来，他被囚禁在沙漠之下，但最近恕瑞玛的崛起却将他从远古的牢笼中解放出来。对权力的疯狂渴求驱使着他，想要夺回他认为属于自己的东西，并取代世界上这些自命不凡的文明，让自己成为唯一受膜拜的偶像，统一整个世界。"
    },
    {
      name: "龙血武姬",
      title: "希瓦娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big102000.jpg",
      scores: { difficult: 4, skills: 3, attack: 8, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/ShyvanaReinforcedScales.png",
          name: "龙族之怒",
          description:
            "希瓦娜对巨龙们造成额外伤害并获得护甲加成和魔法抗性加成。被希瓦娜或她的友军击败的元素亚龙们会为她提供额外的护甲和魔法抗性加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ShyvanaDoubleAttack.png",
          name: "龙牙突刺",
          description:
            "希瓦娜的下次攻击将进行两次打击。每次普通攻击会减少龙牙突刺 0.5 秒冷却时间。\n\n魔龙形态：龙牙突刺会撕裂希瓦娜面前的所有单位。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ShyvanaImmolationAura.png",
          name: "烈火燎原",
          description:
            "希瓦娜将自己围在火焰之中，每秒对周围的敌人造成伤害，并能移动得更快，持续3秒。在这个技能开启时，希瓦娜的普攻会对敌人造成基于此技能伤害的额外伤害。移动速度加成会随着技能的持续时间而减少。普通攻击会延长烈火燎原的持续时间。\n\n魔龙形态：烈火燎原会随体积增长。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ShyvanaFireball.png",
          name: "烈焰吐息",
          description:
            "希瓦娜放出一枚火球，对沿途的所有目标造成魔法伤害，并在目标身上留下熔化护甲的燃渣，持续5秒。希瓦娜对被标记目标进行的普通攻击，会造成基于目标最大生命值的额外伤害。\n\n魔龙形态：烈焰吐息会在碰撞或在抵达目标位置后爆炸，造成额外伤害并灼烧大地一小段时间。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ShyvanaTransformCast.png",
          name: "魔龙降世",
          description:
            "希瓦娜变成一条巨龙，并且飞向目标区域。沿途的敌人会受到魔法伤害，并被震向她的目标区域。\n\n希瓦娜每秒都会被动获取怒气，并且她的每次普通攻击会提供2点怒气。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 希瓦娜的攻击能够给她的全部技能带来好处。提供攻击速度的装备对于她而言比其他英雄更有价值。",
        "- 【E烈焰吐息】在混线时非常值得投入点数。",
        "- 【W烈火燎原】是打野的理想选择。野怪会受到完整持续时间的打击，并且该技能的移动速度加成能够增强她的抓人能力。",
        "- 购买一个能够减速的装备非常有用：【冰霜之锤】，【亡者的板甲】或者【冰霜战锤】。"
      ],
      DATAenemytips: [
        "- 值得注意的是，希瓦娜的威力通过进攻产生，使她在对抗能够与她保持一定距离的敌人时非常吃力。",
        "- 希瓦娜的所有基础技能在魔龙形态下都能攻击多个敌人。因此，在与她作战时不要聚成一团。",
        "- 在怒气槽蓄满时，希瓦娜就能使用终极技能了。在她的怒气很低时对她进行压制会非常有效。"
      ],
      infotitle:
        "希瓦娜是一只魔法生物，心中有一块燃烧不灭的符文碎片。虽然她时常以人的形象出现，但她真正的形态是一条威猛的巨龙，可以用龙息烈焰吞噬敌人。希瓦娜曾拯救过皇子嘉文四世的性命，如今她心神不安地在皇子的卫队中效力，力图在多疑的德玛西亚人中求得接纳。"
    },
    {
      name: "九尾妖狐",
      title: "阿狸",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big103000.jpg",
      scores: { difficult: 5, skills: 8, attack: 3, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Ahri_SoulEater2.png",
          name: "瓦斯塔亚的优雅",
          description:
            "每当阿狸在短时间内对一个英雄造成了2次技能命中，她就会暂时获得移动速度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AhriOrbofDeception.png",
          name: "欺诈宝珠",
          description:
            "阿狸放出并收回她的宝珠，在放出时会沿途对敌人造成魔法伤害，在收回时则会沿途对敌人造成真实伤害。在宝珠造成若干次命中后，阿狸的下一个宝珠在命中时将回复她的生命值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AhriFoxFire.png",
          name: "妖异狐火",
          description:
            "阿狸放出三团狐火。短暂的延迟后，它们会锁定附近的三名敌人进行攻击。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AhriSeduce.png",
          name: "魅惑妖术",
          description:
            "阿狸献出红唇热吻，对命中的第一个敌人造成伤害并将目标魅惑，并且立刻终止目标的移动技能并使目标无恶意地走向她。目标所受的来自阿狸的伤害会暂时提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AhriTumble.png",
          name: "灵魄突袭",
          description:
            "阿狸向前猛冲，并放出元气弹，对周围的数个敌人造成伤害。灵魄突袭在进入冷却阶段以前最多可被施放三次。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 用【魅惑妖术】来启动你的连招，它将会使【欺诈宝珠】和【妖异狐火】更容易命中敌人。",
        "- 在团战中用魅惑妖术先手，并用【灵魄突袭】追击落单的敌人。",
        "- 【灵魄突袭】能够为阿狸的其它技能创造机会，它可以为【魅惑妖术】清出一条路，有助于让【欺诈宝珠】来回命中敌人两次，并且突进到敌人身边可以让【妖异狐火】更易选中目标。"
      ],
      DATAenemytips: [
        "- 在终极技能【灵魄突袭】进入冷却阶段后，阿狸的生存能力可谓低得令人发指。",
        "- 呆在小兵后面，来让【魅惑妖术】难以命中，能够显著地降低阿狸潜在的爆发伤害。"
      ],
      infotitle:
        "符文之地的潜在力量和她有着与生俱来的共鸣。原始的魔法在她手中凝为魔法宝珠。瓦斯塔亚人阿狸醉心于玩弄猎物的情感，然后吞噬他们的生命精魄。虽然阿狸是天生的掠食者，但她却对猎物始终保存着一份同情，因为每一个被吞噬的灵魂，都伴随着他们生前的记忆。"
    },
    {
      name: "法外狂徒",
      title: "格雷福斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big104000.jpg",
      scores: { difficult: 3, skills: 3, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/GravesTrueGrit.png",
          name: "新命运",
          description:
            "格雷福斯的散弹枪会拥有2发弹药。在发射完弹药后，他就必须重新装弹。每次攻击会呈扇形发射若干颗弹丸。用多个弹丸命中相同敌人会造成额外伤害。这些弹丸无法穿透单位。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/GravesQLineSpell.png",
          name: "穷途末路",
          description:
            "格雷福斯发射一颗爆破性的榴弹，会在2秒后引爆，或是在碰到地形的0.2秒后立刻爆炸。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/GravesSmokeGrenade.png",
          name: "烟幕弹",
          description:
            "格雷福斯朝目标区域掷出一颗烟幕弹。如果敌人处在烟幕之中，则其视野会被降低。被烟幕弹的初始冲击所命中的敌人会受到魔法伤害并且移动速度会被短暂降低。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GravesMove.png",
          name: "快速拔枪",
          description:
            "格雷福斯向前冲刺，获得一层持续数秒的护甲加成。如果格雷福斯朝着一名敌方英雄冲刺，则会获得两层纯爷们效果。格雷福斯的每次未被闪避的普通攻击，都会减少这个技能的冷却时间并刷新防御属性加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/GravesChargeShot.png",
          name: "终极爆弹",
          description:
            "格雷福斯射出一枚爆破弹，对它所命中的第一个敌人造成重度伤害。在命中一名英雄或者达到它的最大射程之后，爆弹会爆炸，并对锥形范围内的敌人造成伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【W烟幕弹】既可以用来逃命，也可以用来杀人。",
        "- 可以用【E快速拔枪】来接近敌人，然后用【Q大号铅弹】来造成巨额的伤害。"
      ],
      DATAenemytips: [
        "- 格雷福斯主要造成物理伤害，所以护甲是一个非常有效的反制手段。",
        "- 离开烟幕弹的作用范围，能使烟幕弹作用于你的有害效果立刻消失。"
      ],
      infotitle:
        "马尔科姆·格雷福斯是有名的佣兵、赌徒和窃贼，凡是他到过的城邦或帝国，都在通缉悬赏他的人头。虽然他脾气暴躁，但却非常讲究黑道的义气，他的双管散弹枪“命运”就经常用来纠正背信弃义之事。几年前他和老搭档崔斯特·菲特冰释前嫌，如今二人一同在比尔吉沃特的地下黑道纷争中再次如鱼得水。"
    },
    {
      name: "潮汐海灵",
      title: "菲兹",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big105000.jpg",
      scores: { difficult: 6, skills: 7, attack: 6, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Fizz_P.png",
          name: "伶俐斗士",
          description:
            "菲兹在移动时可以穿过单位并且从所有来源处受到的伤害都会减少一个固定的数额。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FizzQ.png",
          name: "淘气打击",
          description: "菲兹穿过他的目标，造成魔法伤害，并施加攻击特效。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FizzW.png",
          name: "海石三叉戟",
          description:
            "菲兹的攻击会让他的敌人们流血，同时造成持续数秒的魔法伤害。菲兹可以强化他的下次普攻来造成额外伤害，并在短时间内强化他的后续普攻。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FizzE.png",
          name: "古灵/精怪",
          description:
            "菲兹跳到空中，同时优雅地落在他的长矛上，变得无法被选取。在这个姿态下，菲兹可以选择立原地着陆，也可以选择在着陆之前再跳一段距离。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FizzR.png",
          name: "巨鲨强袭",
          description:
            "菲兹朝一个方向放出一条小鱼，小鱼会附身在第一个与它接触的敌方英雄身上，同时减速目标。在短暂的延迟之后，一条巨鲨就会破土而出，击飞目标并将目标附近的敌人震开。被命中的所有敌人都会受到魔法伤害和减速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 菲兹在移动时能无视单位的碰撞体积，可以跨过小兵直取敌方英雄，并用你的【W海石三叉戟】的被动效果戳他——然后在几秒后开启主动效果继续戳。",
        "- 菲兹的终极技能，【R巨鲨强袭】，能够朝着一名敌人施放，或者朝着敌人即将走过的区域施放。",
        "- 菲兹的技能伤害会受到法术强度的加成——在面对高爆发队伍的威胁时，可以考虑购买【中娅沙漏】或【女妖面纱】——并且如果你有信心不靠生命值加成提供的生存能力的话，可以选择【灭世者的死亡之帽】或【巫妖之祸】。"
      ],
      DATAenemytips: [
        "- 在菲兹使用他的强化攻击后的几秒里，菲兹的攻击会变得非常致命——在他的三叉戟带着闪光时，离他远一点！",
        "- 在技能全齐的菲兹是个难以捉摸的目标——引诱他提前交出技能然后用控制或者高爆发技能好好教训他！"
      ],
      infotitle:
        "菲兹是一名水陆两栖的约德尔人，生活在比尔吉沃特周围的群礁之间。他会经常把迷信的船长们抛进海中的什一税捡起来物归原主。不过即使是最粗鲁的水手也知道不要招惹他，因为这里流传着的各种教训，都是因为低估了这个小鬼。经常有人误会他的行为只是海洋精灵的任性举动，而事实上他可以号令来自深渊的巨型猛兽，而且不管是盟友还是敌人他都喜欢捉弄。"
    },
    {
      name: "雷霆咆哮",
      title: "沃利贝尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big106000.jpg",
      scores: { difficult: 3, skills: 4, attack: 7, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/VolibearPassive.png",
          name: "风暴的抉择",
          description:
            "当沃利贝尔濒临死亡时，他会在数秒内极为迅速地回复生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VolibearQ.png",
          name: "滚滚雷霆",
          description:
            "沃利贝尔四脚着地，极大地提升他追杀时的奔跑速度。他所攻击的第一个敌人将会被击飞，并被摔到沃利贝尔的身后。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VolibearW.png",
          name: "狂野怒意",
          description:
            "沃利贝尔的反复攻击，会使他获得额外的攻速加成。一旦沃利贝尔重复攻击了三次，他就可以在目标身上进行一次狂乱撕咬，目标的生命值越低，则狂乱撕咬造成的伤害值越高。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VolibearE.png",
          name: "至尊咆哮",
          description:
            "沃利贝尔发出一声强大的咆哮，减速并略微击退敌人。被击飞或被投掷的敌人会受到额外伤害。小兵和野怪还会被恐惧。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VolibearR.png",
          name: "雷霆怒爪",
          description:
            "沃利贝尔引导风暴的能量，伤害附近的若干个敌人。风暴的力量会使他的攻击能在目标身上造成连锁闪电，对周围的其他敌人造成弹射伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 用【Q滚滚雷霆】来发起冲锋，然后用【E至尊咆哮】来让敌人减速。",
        "- 沃利贝尔可以从生命值加成和冷却缩减这两个属性中获取不错的收益。",
        "- 在【W狂野怒意】能够被激活之前，你必须先连续攻击三次——具备强大的生存能力，也是达到以上目的一种方式。"
      ],
      DATAenemytips: [
        "- 沃利贝尔在追杀目标时会获得极大的移动速度加成，但他在逃命的时候获得的加成很少。",
        "- 沃利贝尔在濒临死亡的时候会回复巨额的生命值。",
        "- 在沃利贝尔试图冲锋的时候，将他减速或击晕，会显著地降低他的作用。"
      ],
      infotitle:
        "“受过千万刀枪的巨熊”是弗雷尔卓德的雷霆半神，象征着这片土地的战斗精神。数千年从未停止的苦涩战争以及最严酷的寒冬，将沃利贝尔锤炼成了不屈不挠的力量，从最高的山顶投下闪电的弩箭——只要狂风夹着雪花倾泻而下，那就只有一种可能：他即将再次袭来。任何敢于面对他的人最后都会加入他的熊人大军……前提是这个人没有被他的利爪杀死。"
    },
    {
      name: "傲之追猎者",
      title: "雷恩加尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big107000.jpg",
      scores: { difficult: 8, skills: 2, attack: 7, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Rengar_P.png",
          name: "无形掠食者",
          description:
            "在草丛时，雷恩加尔的普通攻击会让他跳跃至目标敌人身边。\n\n雷恩加尔的技能会积攒残暴值。在达到满层残暴值时，他的下一个技能会变成强化版并在施放时为他提供移速加成，但会在他离开战斗状态后立刻失去所有残暴值。\n\n击杀敌方英雄会在雷恩加尔的骨齿项链上新增战利品奖励，永久提升他的攻击力。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RengarQ.png",
          name: "残忍无情",
          description:
            "雷恩加尔的下次普通攻击会蛮横地戳刺他的目标来造成额外伤害。\n\n残暴效果：造成更多伤害，并且他会获得攻击速度加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RengarW.png",
          name: "战争咆哮",
          description:
            "雷恩加尔发出一声战争咆哮，对敌人造成伤害并基于近期受到的伤害回复生命值。\n\n残暴效果：额外移除控制效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RengarE.png",
          name: "套索打击",
          description:
            "雷恩加尔扔出一个套索，套索在命中第一个敌人后，会暂时降低这名敌人的移动速度。\n\n残暴效果：对目标造成禁锢效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RengarR.png",
          name: "狩猎律动",
          description:
            "雷恩加尔激活他的掠食者本能，伪装自身并感知附近极大范围内的距他最近的敌方英雄。在狩猎律动期间，他会获得移动速度加成，他的下次攻击将使他即使不在草丛内也可以进行跳跃，并且会减少目标的护甲。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在团战和遭遇战里，用雷恩加尔的终极技能来找到并刺杀高优先级的敌方英雄。",
        "- 雷恩加尔的大部分威力来自他在恰当时机所使用的强化技能，请明智地作出选择！",
        "- 在追杀对方时，要多穿越草丛，来发挥雷恩加尔被动技能的优势。"
      ],
      DATAenemytips: [
        "- 在雷恩加尔的资源槽全满时，他的技能会获得一次强化。尽量在他的资源槽较低时与他对抗。",
        "- 雷恩加尔的被动技能能让他从草丛跳出，避免在草丛附近与他作战。",
        "- 在终极技能的伪装期间内，雷恩加尔会找出距离他最近的敌方英雄。"
      ],
      infotitle:
        "瓦斯塔亚的雷恩加尔是一名声名远扬又凶残无比的猎手。他的人生充满着追寻猎杀危险的生物的快感。他寻遍整个世界，只为寻找他能找到的最可怕的野兽，特别是寻找任何关于卡兹克的踪迹。这头来自虚空的野兽弄瞎了他的一只眼睛。雷恩加尔追寻着猎物，不为捕食也不为荣耀，只是为了纯粹的猎杀所带来的激烈美感。"
    },
    {
      name: "惩戒之箭",
      title: "韦鲁斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big110000.jpg",
      scores: { difficult: 2, skills: 4, attack: 7, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/VarusPassive.png",
          name: "复仇之欲",
          description:
            "每完成一次击杀或助攻，韦鲁斯就会暂时获得攻击速度加成。如果敌人是个英雄，则这个加成会持续得更久。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VarusQ.png",
          name: "穿刺之箭",
          description:
            "韦鲁斯开始蓄力，随后进行一次远距离的强力射击，蓄力时间越长，伤害越高。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VarusW.png",
          name: "枯萎箭袋",
          description:
            "被动：韦鲁斯的普通攻击会造成额外的伤害，并附加枯萎效果。韦鲁斯的其它技能会引爆枯萎效果，造成基于目标最大生命值的魔法伤害。主动：韦鲁斯增强他的下一个【穿刺之箭】。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VarusE.png",
          name: "恶灵箭雨",
          description:
            "韦鲁斯射出一阵箭雨，造成物理伤害并污染地面。被污染的地面将会减慢敌人的移动速度，并降低他们的自我治疗效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VarusR.png",
          name: "腐败锁链",
          description:
            "韦鲁斯投掷出一个腐败藤蔓，来禁锢命中的第一个敌方英雄，随后向附近没有被感染的英雄蔓延，并在碰到后将他们也禁锢。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 尽早点出枯萎箭袋，有助于压制敌方英雄，以及补刀。",
        "- 在近距离的战斗中，快速地放出穿刺之箭有时会更好一些，而不需要每次都把它蓄满之后再放。",
        "- 试着利用穿刺之箭的超长射程来在开战前获取优势，或者在敌人逃跑时进行狙杀。"
      ],
      DATAenemytips: [
        "- 如果你被施加了枯萎效果，那么韦鲁斯的技能就会对你造成额外伤害。",
        "- 当韦鲁斯获得击杀或助攻时，他的攻击速度就会暂时得到提高，因而变得更加危险。",
        "- 如果你被韦鲁斯的终极技能“腐败锁链”的一条藤蔓所碰到，那么你就会被禁锢在原地。只要保持距离，不让藤蔓碰到你，就能让它自然死亡。"
      ],
      infotitle:
        "维鲁斯是古老暗裔的一员。身为一名冷血的杀手，他最爱的就是用箭矢折磨敌人。先让他们失心发疯，再了结他们的性命。韦鲁斯俊美非常，虽然在大暗裔战争结束后便遭囚禁，但却在几百年后成功逃脱，寄宿于两位艾欧尼亚猎人再造的血肉之躯中。这二人无意之间释放了韦鲁斯，从此便背上了那把蕴含着韦鲁斯精魄的长弓。如今的韦鲁斯开始残酷地报复那些囚禁他的人，但他体内纠缠的两个凡人灵魂却在阻挠他的每一步。"
    },
    {
      name: "深海泰坦",
      title: "诺提勒斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big111000.jpg",
      scores: { difficult: 6, skills: 6, attack: 4, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Nautilus_StaggeringBlow.png",
          name: "排山倒海",
          description:
            "诺提勒斯的普通攻击会对目标造成提升过的物理伤害并短暂禁锢他的目标。这个特效在数秒内只能对相同目标生效一次。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NautilusAnchorDrag.png",
          name: "疏通航道",
          description:
            "诺提勒斯向前猛掷他的船锚。如果它击中了一名英雄，诺提勒斯就会将他自己和目标吸到一起。如果它击中了地形，诺提勒斯则会把自己拉到船锚处，且此技能的冷却时间减半，并返还一半的法力消耗。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NautilusPiercingGaze.png",
          name: "泰坦之怒",
          description:
            "诺提勒斯用黑暗的能量将自身环绕，同时获得一个能够格挡伤害的护盾。当护盾存留时，他的攻击会对目标附近的敌人施加一个持续伤害效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NautilusSplashZone.png",
          name: "暗流涌动",
          description:
            "诺提勒斯猛击地面，使在他附近的土地爆炸三次。每次爆炸都会对敌人造成伤害和减速效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/NautilusGrandLine.png",
          name: "深海冲击",
          description:
            "诺提勒斯将一束冲击波打进土里，来追击敌方目标。这束冲击波会撕裂它上面的地表，将敌人震到半空中。当它命中目标时，冲击波会喷发，将他的目标震到半空中，并使目标晕眩。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在抓人的时候，可以用【Q疏通航道】来瞄准附近的地形，接着使用【E暗流涌动】，以获取更高的命中率。",
        "- 【E暗流涌动】生效比较慢——你可以利用这点在逃命的同时给敌人来个下马威。"
      ],
      DATAenemytips: [
        "- 如果诺提勒斯贴着你放【E暗流涌动】的话，最好先呆在原地一段时间再逃跑。逃得太早的话，会跑到第二阶段的爆炸区域，使你受到额外的伤害以及减速效果。",
        "- 当诺提勒斯套上护盾后，他就可以用普通攻击来输出巨额的范围伤害——如果有时间的话，不妨优先打掉他的护盾。"
      ],
      infotitle:
        "早在比尔吉沃特立起第一座码头的时候，就有一个孤独的传说。身着铁甲的巨人诺提勒斯在蓝焰岛附近的黑暗水域中徘徊。他心里记恨着一桩不可原谅的背叛，毫无预警地出手。他甩动巨大的船锚，拯救落难的可怜虫，或是将贪婪的人拖进末日。据说，没有缴“比尔吉沃特什一税”的人就是他的目标。他会带着他们和自己一起沉入波涛——相当于一个铁板钉钉的提醒，没人能逃脱深海的制裁。"
    },
    {
      name: "机械先驱",
      title: "维克托",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big112000.jpg",
      scores: { difficult: 9, skills: 10, attack: 2, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Viktor_Passive.png",
          name: "光荣进化",
          description:
            "维克托在游戏开始时会带着海克斯核心原型，这个装备可以升级3次，并在升级时增强维克托的技能。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ViktorPowerTransfer.png",
          name: "虹吸能量",
          description:
            "维克托引爆一名敌方单位，造成魔法伤害，同时形成一个护盾，并强化他的下次普通攻击。\n\n增强：虹吸能量的护盾提升60%并且维克托在施放后获得移动速度加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ViktorGravitonField.png",
          name: "重力场",
          description:
            "维克托放出一个重力限制设备，减缓所有敌人的移动速度。如果敌人在设备的半径内呆得过久，就会被晕眩。\n\n增强：被重力场晕眩的敌人会被拉到重力场的中心。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ViktorDeathRay.png",
          name: "死亡射线",
          description:
            "维克托用他的机械臂发射一束混乱光线，笔直地切割战场，沿途对行进路上的敌人造成魔法伤害。\n\n增强：射线照过的地方会产生爆炸，造成魔法伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ViktorChaosStorm.png",
          name: "混乱风暴",
          description:
            "维克托朝目标区域发射一枚奇点，对敌人造成魔法伤害并打断敌人的引导技能。之后奇点会周期性地对所有附近的敌人造成魔法伤害。维克托可以重新定位这枚奇点。\n\n增强：混乱风暴的移动加快25%。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【E死亡射线】是一个给力的磨血技能，以及强大的区域封锁工具。将它与【W重力场】组合使用，来控制敌人的走位。",
        "- 确保你在正确的时刻选择了正确的技能增强。"
      ],
      DATAenemytips: [
        "- 要时刻注意维克托与你的距离。离对手越近，维克托的控场能力就越强。",
        "- 要注意维克托升级了哪些技能，你可以通过他手杖的颜色来识别（紫，黄，蓝，红）。"
      ],
      infotitle:
        "他是崭新科技时代的领路先驱，将自己毕生精力奉献给了人类的进步。他是寻求人性启迪的理想主义者，信奉着唯有光荣进化才能实现人类全部的潜能。在钢铁与科学的加持之下，维克托狂热地追求着自己理想中的光明未来。"
    },
    {
      name: "北地之怒",
      title: "瑟庄妮",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big113000.jpg",
      scores: { difficult: 4, skills: 6, attack: 5, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Sejuani_passive.png",
          name: "北地之怒",
          description:
            "在脱离战斗后，瑟庄妮会获得冰霜护甲，冰川护甲可提供护甲、魔法抗性和免疫减速。当瑟庄妮受到伤害后，冰霜护甲会存留一小段时间。瑟庄妮可以伤害一名被晕眩的敌人来击碎它，从而造成巨量魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SejuaniQ.png",
          name: "极寒突袭",
          description:
            "瑟庄妮向前冲锋，将敌人击飞至空中。冲锋会在命中一名敌方英雄后停止。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SejuaniW.png",
          name: "凛冬之怒",
          description: "瑟庄妮两次挥舞她的链枷，造成伤害并施加霜冻层数。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SejuaniE.png",
          name: "永冻领域",
          description: "瑟庄妮冻结并晕眩一名叠满了霜冻层数的敌方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SejuaniR.png",
          name: "极冰寒狱",
          description:
            "瑟庄妮投出她的套索来冻结并击晕命中的第一名敌方英雄，并创造一次冰风暴来减速其它敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【Q极寒突袭】可用来逃离恶劣处境，打断引导技能或追杀逃亡者。",
        "- 近战友军可以帮你的【E永冻领域】堆叠霜冻层数，要留意他们都在攻击谁。",
        "- 在小型团战时，最好把【R极冰寒狱】留到附近有队友一起创造优势时再施放。"
      ],
      DATAenemytips: [
        "- 躲掉【Q极寒突袭】和【R极冰寒狱】可以带给你巨大的优势。",
        "- 注意躲掉【W凛冬之怒】的第二次挥击，因为这次挥击会造成爆发性的伤害。",
        "- 近战敌人也可以为瑟庄妮堆叠霜冻效果，要小心地与它们周旋。"
      ],
      infotitle:
        "瑟庄妮是凛冬之爪部族的战母。继承了寒冰血脉的她残忍无情，带领的部族也是弗雷尔卓德土地上最令人闻风丧胆的。她的部族的生存，是一场旷日持久的、毫无希望的对抗元素之力的战斗，迫使他们劫掠诺克萨斯人、德玛西亚人，还有阿瓦罗萨部族等等，以便渡过残酷的凛冬。瑟庄妮在最危险的战斗中身先士卒，骑着居瓦斯克野猪“钢鬃”冲在最前方，用她臻冰打造的链枷让敌人粉身碎骨。"
    },
    {
      name: "无双剑姬",
      title: "菲奥娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big114000.jpg",
      scores: { difficult: 3, skills: 2, attack: 10, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Fiora_P.png",
          name: "决斗之舞",
          description:
            "菲奥娜对附近一名敌方英雄发起挑战，并发现其身上的一处破绽。如果她成功击中该破绽，她会得到额外奖励，并会发现下一处破绽。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FioraQ.png",
          name: "破空斩",
          description:
            "菲奥娜向一个方向冲刺，并刺击一个附近的敌人，造成物理伤害并施加攻击特效。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FioraW.png",
          name: "劳伦特心眼刀",
          description:
            "菲奥娜在短时间内对所有即将到来的伤害和限制效果进行招架，然后朝着一个方向进行刺击。这个刺击会减速命中的第一个敌方英雄，如果菲奥娜用这个技能格挡掉一个禁锢类效果，那么刺击会造成晕眩效果而非减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FioraE.png",
          name: "夺命连刺",
          description:
            "菲奥娜的下两次攻击将获得攻击速度加成。第一次攻击会使目标减速，而第二次攻击必定会产生暴击。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/FioraR.png",
          name: "无双挑战",
          description:
            "菲奥娜显示出一个敌方英雄身上的所有四处破绽，并在目标附近时获得移动速度加成。如果菲奥娜命中了所有4处破绽，或者目标在死前至少被命中了1处破绽，那么菲奥娜和范围内的友军就会在接下来的几秒里持续获得治疗效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在【决斗之舞】的帮助下，菲奥娜特别擅长进行快速换血。攻击破绽后的移动速度加成，既能用来毫发无伤地逃离，又能用来发起下次攻击。",
        "- 菲奥娜的【无双挑战】非常有用，甚至能帮她解决那些最为坚挺的对手，并在成功后提供恢复效果，所以，不要在攻击敌人的前排英雄时犹豫不决。"
      ],
      DATAenemytips: [
        "- 【决斗之舞】会显示出菲奥娜将要尝试对你进行攻击的地方，所以准备好在她尝试时教训她。",
        "- 在对菲奥娜施放禁锢类技能时要特别小心。如果她的【劳伦特心眼刀】还在可用状态，那么她就能将这类技能的效果反过来对付你。"
      ],
      infotitle:
        "菲奥娜是全瓦洛兰最可怕的决斗家。她以雷厉风行、狡黠聪慧闻名于世，同样著名的还有她舞弄自己蓝钢佩剑的矫健。菲奥娜出生在德玛西亚王国的劳伦特家族，她从父亲的手中接管了家业，并在一场丑闻风波中将家族拯救于于灭亡的边缘。虽然劳伦特家威严不再，但菲奥娜却一直在不懈地努力，希望重振家族荣耀，让劳伦特这个名字重回德玛西亚名望贵族之列。"
    },
    {
      name: "爆破鬼才",
      title: "吉格斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big115000.jpg",
      scores: { difficult: 4, skills: 9, attack: 2, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/ZiggsPassiveReady.png",
          name: "一触即发",
          description:
            "每过一段时间，吉格斯的下次普通攻击就会造成额外的魔法伤害。这个冷却时间会在吉格斯每用一次技能时得到减少。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZiggsQ.png",
          name: "弹跳炸弹",
          description: "吉格斯扔出一个会弹来弹去的炸弹，对敌人造成魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZiggsW.png",
          name: "定点爆破",
          description:
            "吉格斯扔出一个炸药包，会在4秒后爆炸，或者在再次施放该技能后爆炸。爆炸会对敌人造成魔法伤害，并将他们击退。吉格斯也会被击退，但不会受到伤害。吉格斯可以用这个技能来爆破敌方摇摇欲坠的防御塔。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZiggsE.png",
          name: "海克斯爆破雷区",
          description:
            "吉格斯布下敌人一踩就炸的感应雷区，对踩中地雷的敌人造成魔法伤害和减速效果。对相同目标的后续爆炸将造成较少伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZiggsR.png",
          name: "科学的地狱火炮",
          description:
            "吉格斯部署他的尖端发明，科学的地狱火炮，将它推送一段极远的距离。在主要爆炸区域里的敌人会比在其它爆炸区域里的敌人受到更多的伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 即使远离团战发生地，你也可以在远处用【R科学的地狱火炮】来帮助队友。",
        "- 用【E海克斯爆破雷区】来减速你的敌人，会使你的其它技能更易命中。",
        "- 用【W定点爆破】来穿墙，可以在追杀或逃命时如虎添翼。"
      ],
      DATAenemytips: [
        "- 别踩到吉格斯的地雷上！它们会使你减速，并且会让吉格斯的其它技能更易命中你。",
        "- 吉格斯的很多技能冷却时间都很长。可以在他刚用过技能时发起攻击。",
        "- 吉格斯的终极技能，科学的地狱火炮，会在爆炸的中心区域造成更多伤害。"
      ],
      infotitle:
        "炸弹越大越好，引线越短越好，带着这种喜好的约德尔人吉格斯就是天生的爆炸狂人。他曾是皮尔特沃夫一位发明家的助手，不过因为自己千篇一律的生活而感到无聊，后来和一个名为金克丝的蓝头发小疯子交上了朋友。疯狂的城中一夜过后，吉格斯接受了她的建议，搬到了祖安，在那里更加自由地探索自己着迷的东西。在他对于爆炸的无尽追寻过程中，一直恐吓着炼金男爵和普通市民之流。"
    },
    {
      name: "仙灵女巫",
      title: "璐璐",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big117000.jpg",
      scores: { difficult: 5, skills: 7, attack: 4, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Lulu_PixFaerieCompanion.png",
          name: "皮克斯，仙灵伙伴",
          description:
            "每当皮克斯正在跟随的英雄进行攻击时，皮克斯就会发射魔法飞弹。这些飞弹会自动寻敌，但也会被其它单位所拦截。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LuluQ.png",
          name: "闪耀长枪",
          description:
            "璐璐和皮克斯各自发射一个穿刺飞弹，对命中的敌人造成重度减速效果。一个敌人只会受到一个飞弹的伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LuluW.png",
          name: "奇思妙想",
          description:
            "如果对友军施放，会暂时增加目标友军的攻击速度和移动速度。如果对敌人施放，会将一名敌方英雄变成可爱的动物，使其无法攻击或施法。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LuluE.png",
          name: "帮忙，皮克斯！",
          description:
            "如果对友军施放，会命令皮克斯跳到一名友军身上进行保护，之后会跟随并协助目标（而不是璐璐）进行攻击。如果对敌人施放，皮克斯会跳到敌人身上造成伤害，之后会跟随并提供目标的视野。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LuluR.png",
          name: "狂野生长",
          description:
            "璐璐让她的友军变大，击飞目标附近的敌人，同时为她的友军提供大量生命值加成。接下来的数秒内，该友军会获得一个减少附近敌人速度的光环。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-【闪耀长枪】可以从古怪的角度发射出去，而这取决于你的指针位置——让你的指针靠近皮克斯和璐璐，会使它的作用范围发生极大改变。",
        "- 可以将【奇思妙想】用在法师身上，以获取法强加成，将【帮忙，皮克斯！】用在射手身上，以使皮克斯的飞弹扔得更频繁，将【狂野生长】用在坦克或战士身上，以强化先手能力。"
      ],
      DATAenemytips: [
        "- 璐璐的仙灵所发出的飞弹可以被拦截——躲在你的小兵后面，来躲避仙灵额外的攻击。",
        "- 璐璐特别擅长抓对手的失误。不要给她任何机会！要不断地压制，并将她和她的搭档一起赶出经验区。"
      ],
      infotitle:
        "璐璐是一位约德尔女巫，最著名的能力是召来梦境般的幻觉和奇异的小动物，小仙灵皮克斯就是她云游符文之地的伙伴。璐璐可以突发奇想地重塑现实，改变世界的本质结构，改造这个平凡的物质领域中任何让她感觉是限制的东西。虽然其他人对她的魔法颇有微词，往好听了说是一种异象，往难听了说是一种危害。但是璐璐始终认为，一点魔力的启发对任何人都没有坏处。"
    },
    {
      name: "荣耀行刑官",
      title: "德莱文",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big119000.jpg",
      scores: { difficult: 8, skills: 1, attack: 9, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Draven_passive.png",
          name: "德莱文联盟",
          description:
            "在接住一把旋转飞斧或者击杀了一个小兵、野怪或防御塔后，德莱文会从他的粉丝那里获得崇拜效果。击杀一名敌方英雄会为德莱文提供额外赏金，赏金的多少取决于他拥有多少层崇拜效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DravenSpinning.png",
          name: "旋转飞斧",
          description:
            "德莱文的下次攻击会造成额外物理伤害。这个斧头将会从目标身上弹到高空。如果德莱文接住了它，那么会立刻准备好下一发旋转飞斧。德莱文可以同时拥有2发旋转飞斧。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/DravenFury.png",
          name: "血性冲刺",
          description:
            "德莱文获得移动速度和攻击速度加成。移动速度加成在持续时间过后会急剧下降。在接到一把旋转飞斧后，血性冲刺会立刻冷却完毕。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DravenDoubleShot.png",
          name: "开道利斧",
          description:
            "德莱文扔出他的斧头，对命中的目标造成物理伤害，并将他们击退至一边。被命中的目标会受到减速效果。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DravenRCast.png",
          name: "冷血追命",
          description:
            "德莱文掷出两柄大斧，对命中的每个单位造成物理伤害。在命中一名敌方英雄后，大斧会缓慢地调转方向，并回到德莱文身边。在斧头正在向外飞的时候，德莱文可以激活该技能来让斧头早点飞回来。每命中一个单位，伤害值就会减少。在斧头调转方向时，伤害值会重置。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 如果德莱文呆在原地不动，旋转飞斧将会掉落在他所在的位置附近。也许会直接落到他身上，也许会在左边或右边。",
        "- 如果德莱文在攻击之后移动，旋转飞斧会朝着他移动的方向进行移动。利用这点来控制旋转飞斧的轨迹。"
      ],
      DATAenemytips: [
        "- 朝着德莱文旋转飞斧即将着陆的位置施放技巧射击。",
        "- 干扰德莱文，让他丢掉他的斧头。如果你做到了，那么他的战斗力会显著降低。"
      ],
      infotitle:
        "在诺克萨斯，有一种战士被称为“清算人”。他们在竞技场里互相厮杀，以鲜血作为赌注进行力量的考验，不过没有任何人能像德莱文那样受人追捧。曾经参过军的他，发现竞技场的观众们尤为喜爱他的耀武扬威和刻意表演，和他使用飞斧的无匹技艺。这种狂傲的完美带来的赞叹令他上瘾，因此德莱文发誓要不惜代价打败任何对手，以此确保自己的名字在帝国之中永世传唱。"
    },
    {
      name: "战争之影",
      title: "赫卡里姆",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big120000.jpg",
      scores: { difficult: 6, skills: 4, attack: 8, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Hecarim_Passive.png",
          name: "征战之路",
          description: "赫卡里姆会获得基于他额外移动速度的攻击力加成。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HecarimRapidSlash.png",
          name: "暴走",
          description: "赫卡里姆猛劈周围的敌人，同时造成物理伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/HecarimW.png",
          name: "恐惧之灵",
          description:
            "赫卡里姆在短时间内对敌人持续造成魔法伤害。赫卡里姆会基于敌人所受的伤害来恢复生命值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/HecarimRamp.png",
          name: "毁灭冲锋",
          description:
            "赫卡里姆获得不断提升的移动速度加成并且移动时可以无视单位的碰撞体积。他的下一次攻击将会击退目标，并且造成额外物理伤害，伤害值基于他在激活该技能后所移动的距离。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/HecarimUlt.png",
          name: "暗影冲击",
          description:
            "赫卡里姆召唤幽魂骑兵向前冲锋，对一条直线上的敌人造成魔法伤害。赫卡里姆会在完成他的冲锋时发出一道冲击波，来使周围的敌人惊慌失措地逃命。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【W恐惧之灵】会在周围敌人受到伤害时恢复赫卡里姆的生命值，即使这些伤害是赫卡里姆的队友造成的。在大型团战中施放这个技能，可以最大化地提升赫卡里姆的生存能力。",
        "- 【E毁灭冲锋】会根据移动的距离来输出更多的伤害。试着使用【R暗影冲击】或者诸如【幽灵疾步】或【闪现】等召唤师技能来最大化此技能的伤害。"
      ],
      DATAenemytips: [
        "- 赫卡里姆可以凭借着恐惧之灵从附近敌人身上吸取生命值，但是不太抗揍，把爆发技能扔给他吧！",
        "- 赫卡里姆的终极技能可以让敌人惊慌失措地逃命。在团战时尽量分散，以削弱他的战斗力。"
      ],
      infotitle:
        "赫卡里姆是人与兽的幽灵混合体，身上的诅咒让他永世都只能不停地蹂躏践踏生者的灵魂。在福光岛被暗影吞噬之际，这位自豪的骑士被破败之咒的毁灭能量彻底湮没，连同他的骑兵团和他们胯下的坐骑。现在，符文之地上只要有黑雾出现的地方，就会有他率军冲锋的鬼影，在屠杀中狂欢，用铁蹄摧残脚下的敌人。"
    },
    {
      name: "虚空掠夺者",
      title: "卡兹克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big121000.jpg",
      scores: { difficult: 6, skills: 3, attack: 9, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Khazix_P.png",
          name: "无形威胁",
          description:
            "附近陷入孤立无援状态的敌人会被标记出来。卡兹克的技能会与孤立无援的目标产生交互作用。\n\n当卡兹克没有被敌方队伍所看见时，他会获得无形威胁，使他的下次对敌方英雄发动的普通攻击造成额外魔法伤害，并使目标减速数秒。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KhazixQ.png",
          name: "品尝恐惧",
          description:
            "对目标造成物理伤害。对孤立无援的目标造成的伤害会提高。如果他选择进化收割利爪的话，这个技能会在对抗孤立无援的目标时返还一部分冷却时间。卡兹克也会提升他的普通攻击和品尝恐惧的距离。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KhazixW.png",
          name: "虚空突刺",
          description:
            "卡兹克发射爆炸性的尖刺，对命中的敌人造成物理伤害。卡兹克如果在爆炸范围内，则会回复生命值。如果他选择进化刺鞘的话，虚空突刺现在会呈锥形发射三个尖刺，减速被命中的敌人并使被命中的敌方英雄显形2秒。孤立无援的目标会被减速额外的幅度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KhazixE.png",
          name: "跃击",
          description:
            "卡兹克跳向一个区域，在着陆时造成物理伤害。如果他选择进化虫翼的话，跃击的距离会提升200并在击杀和助攻时重置冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KhazixR.png",
          name: "虚空来袭",
          description:
            "每升一级此技能都会允许卡兹克进化他的一项技能，给予该技能独特的附加效果。在激活【虚空来袭】时，会使卡兹克变成隐形状态，触发无形威胁并提升移动速度。如果他选择进化动态遮蔽的话，【虚空来袭】获得已提升的隐形持续时间，以及一次额外的使用次数。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在身旁一段距离内没有任何友军的敌人可以被视为孤立无援。【Q品尝恐惧】会显著提升对这些目标的伤害。",
        "- 【无形恐惧】会在卡兹克不被敌方队伍看见时激活。可以利用草丛或者【R虚空来袭】重复激活它。别忘了用普通攻击来给敌方英雄施加【无形恐惧】的效果。",
        "- 卡兹克在选择作战地点和作战时机方面有着极大的自由。谨慎地参加团战，从而获取胜利。"
      ],
      DATAenemytips: [
        "- 【Q品尝恐惧】会对孤立无援的目标造成额外伤害。在友军小兵，英雄或防御塔附近战斗，以获取优势。",
        "- 【E跃击】和【R虚空来袭】的冷却时间很长。在它们尚未冷却完毕时，卡兹克的逃生能力会大减。"
      ],
      infotitle:
        "虚空在成长，虚空在不断适应。在众多虚空生物中，没有哪种比卡兹克更能体现这一特性。进化的动力让这种恐怖不断变异，本能地求生并弑杀强者。只要它遇到了障碍，就会进化出新的、更有效的方法反制并杀掉猎物。卡兹克最初只是个愚钝的野兽，然而它的智力和它的形态一样获得了发展。现在，这只生物会提前计划狩猎行动，甚至懂得在猎物心中制造最真实的恐惧。"
    },
    {
      name: "诺克萨斯之手",
      title: "德莱厄斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big122000.jpg",
      scores: { difficult: 2, skills: 1, attack: 9, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Darius_PassiveBuff.png",
          name: "出血",
          description:
            "德莱厄斯的攻击和伤害技能会导致敌人流血，在5秒里持续造成物理伤害，最多叠加5次。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DariusCleave.png",
          name: "大杀四方",
          description:
            "德莱厄斯积蓄力量，然后狂野地舞动巨斧，形成一个圆环。被斧刃击中的敌人，会比被斧柄击中的敌人受到更多的伤害。德莱厄斯还会获得治疗效果，治疗效果的数额基于被斧刃命中的敌方英雄人数。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DariusNoxianTacticsONH.png",
          name: "致残打击",
          description:
            "德莱厄斯的下一次攻击会打向敌人的大动脉。在目标流血不止的同时，目标的移动速度也会被减缓。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DariusAxeGrabCone.png",
          name: "无情铁手",
          description:
            "德莱厄斯磨利他的巨斧，被动地让他的物理伤害无视目标一部分护甲。在主动施放时，德莱厄斯会用斧头上的钩子横扫他的敌人，并将他们拉到德莱厄斯身边。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DariusExecute.png",
          name: "诺克萨斯断头台",
          description:
            "德莱厄斯跃向目标英雄并进行致命打击，造成真实伤害。目标身上的每层出血效果都会提升这个技能的伤害。如果诺克萨斯断头台完成了一次击杀，那么它的冷却时间会暂时被重置。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【大杀四方】是一个非常强力的压制技能。用它的最大作用距离打击敌人时，效果是最好的 。",
        "- 你对目标施加的【出血】效果越多，【诺克萨斯断头台】的伤害越高。使用【诺克萨斯之力】来造成最大伤害。",
        "- 提高生存能力可以让德莱厄斯获得极大的收益。战斗持续得越久，他就变得越强力。"
      ],
      DATAenemytips: [
        "- 当德莱厄斯的无情铁手处于冷却过程中时，你可以轻易地对他进行压制。",
        "- 德莱厄斯的脱战能力极度有限。如果你在对抗他时占据了优势，就将他拖进你的节奏吧。"
      ],
      infotitle:
        "提到诺克萨斯力量的象征，帝国上下没有人能比德莱厄斯这名久经沙场的指挥官更加适合。他从无名小卒逐渐成长为诺克萨斯之手，劈开了无数敌人的身躯 —— 其中也不乏诺克萨斯自己人。他从不怀疑自己执行的公义，也从不会在举起战斧后迟疑。作为崔法利军团的领导者，德莱厄斯的任何对手都不用指望他手下留情。"
    },
    {
      name: "未来守护者",
      title: "杰斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big126000.jpg",
      scores: { difficult: 7, skills: 3, attack: 8, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Jayce_Passive.png",
          name: "海克斯科技电容",
          description:
            "在施放一次变形后，杰斯会提高40移动速度，持续1.25秒，并且在移动时无视单位的碰撞体积。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JayceToTheSkies.png",
          name: "苍穹之跃 / 电能震荡",
          description:
            "锤形态：跳向一个敌人，对敌人造成物理伤害和减速效果。\n\n炮形态：发射一团电球，在命中一名敌人或者到达最大射程后爆炸，对命中的敌人造成物理伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JayceStaticField.png",
          name: "闪电领域 / 超能电荷",
          description:
            "锤形态：被动：每次攻击回复法力。主动：创造一个闪电领域，在数秒内对附近的敌人造成伤害。\n\n炮形态：杰斯的活力暴涨，将攻击速度提升至最大值，此效果在若干次攻击后消失。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JayceThunderingBlow.png",
          name: "雷霆一击 / 加速之门",
          description:
            "锤形态：对一个敌人造成魔法伤害，并将目标击退一小段距离。\n\n炮形态：展开一个加速之门，所有穿过它的友军英雄都会得到移动速度加成。如果电能震荡穿过这个门发射，那么它的弹道速度和射程都会得到提高，并且伤害会提升。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/JayceStanceHtG.png",
          name: "墨丘利之炮 / 墨丘利之锤",
          description:
            "锤形态：将墨丘利之锤变成墨丘利之炮，获得新的技能和远程攻击能力。切换至这个形态后的第一下攻击将会减少目标的护甲和魔法抗性。\n\n炮形态：将墨丘利之炮变成墨丘利之锤，获得新的技能和护甲与魔法抗性加成，切换至这个形态后的第一下攻击将会造成额外的魔法伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 要记得频繁地切换姿态。这么做会强化你的攻击，并使你的移动速度得到爆发性提高。",
        "- 如果你发现自己正在承受大量伤害，请切换到杰斯的锤形态，它会为你提供防御属性加成。",
        "- 试着让电能震荡穿过加速之门，来获得射程和伤害的提升。"
      ],
      DATAenemytips: [
        "- 杰斯可以在近战攻击与远程攻击之间自由切换。注意观察他的姿态和武器颜色，以获悉他的攻击方式。",
        "- 如果你看到杰斯扔出了他的加速之门，就得小心了，因为他很有可能施放电能震荡。",
        "- 杰斯在前期很强。如果他获得了优势，你们最好打得保守一点。"
      ],
      infotitle:
        "杰斯是一位天才发明家，他为了守护皮尔特沃夫和这座城市对于进步的追求贡献了毕生的心血。杰斯依靠手中的海克斯科技变形锤，还有自己的力量、勇气和出众的智慧守护着他的故乡。虽然整座城市都将他视为英雄，但他却并没有处理好这样的声名。即便如此，杰斯的心之所向依旧纯良，即使是那些嫉妒他天赋的人，也会真心实意地感谢他给进步之城带来的保护。"
    },
    {
      name: "冰霜女巫",
      title: "丽桑卓",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big127000.jpg",
      scores: { difficult: 6, skills: 8, attack: 2, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Lissandra_Passive.png",
          name: "冰脉驱役",
          description:
            "当一名敌方英雄在丽桑卓附近阵亡时，该英雄会变成一个冰封奴仆。冰封奴仆会寻找活着的敌人，使身边敌人的移动速度减少。在一段延迟后，冰封奴仆会从极度冰寒中粉碎，对附近目标造成魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LissandraQ.png",
          name: "寒冰碎片",
          description:
            "掷出一杆冰矛，冰矛会在命中敌人时碎裂，造成魔法伤害和减速效果。碎裂会穿过目标，对被冰矛命中的其他敌人造成等量伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LissandraW.png",
          name: "冰霜之环",
          description: "将周围的敌人冻在原地，造成魔法伤害和束缚效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LissandraE.png",
          name: "冰川之径",
          description:
            "丽桑卓召唤一个寒冰魔爪来造成魔法伤害。再次激活这个技能，可以让丽桑卓传送到寒冰魔爪的当前位置上。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LissandraR.png",
          name: "冰封陵墓",
          description:
            "如果对敌方英雄施放，那么会冻结目标，对目标造成晕眩效果，如果对丽桑卓自己施放，那么她会暂时用暗黑之冰裹住自己，治疗自身并免疫任何伤害且无法被选定，但也无法进行任何动作。暗黑之冰可以从目标处放射寒芒对敌人造成魔法伤害和减速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你可以通过智能自我施法键和终极技能快捷键（默认为alt+R）来立刻将终极技能用在自己身上。",
        "- 施放冰川之径后，朝着相反的方向跑，就能让你的敌人摸不清你到底要走哪边。",
        "- 丽桑卓的技能范围要比大部分法师短。因此，要购买那些法术强度和生存属性兼备的装备，比如中娅沙漏和深渊面具，就能非常好地帮助她输出伤害的同时存活下去。"
      ],
      DATAenemytips: [
        "- 阻止丽桑卓使用冰川之径的最佳方式，就是在她再次激活这招之前将她束缚住。",
        "- 丽桑卓的冰霜之环没有点满之前，冷却时间会较长；所以要尽量在冰霜之环尚未冷却完毕时与她交战。",
        "- 丽桑卓的寒冰碎片只会减速命中的第一个目标。跟在我方小兵后面，就可以在靠近她时避免被减速的风险。"
      ],
      infotitle:
        "丽桑卓的魔法将纯净的冰霜之力扭曲为某种黑暗而可怕的东西。她的黯冰之力不仅能冻结一切，还能将任何反抗之人刺穿并粉碎。在北部终日惊惶的居民中，人们只知道她是“冰霜女巫”。但事实却更为邪恶：丽桑卓是自然世界的腐化者，她的阴谋是要让全世界都进入都彻骨寒冷的冰河世纪。"
    },
    {
      name: "皎月女神",
      title: "黛安娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big131000.jpg",
      scores: { difficult: 4, skills: 8, attack: 7, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Diana_Passive_LunarBlade.png",
          name: "月银之刃",
          description:
            "每第三次攻击回复法力值并且顺劈附近的敌人，造成额外的魔法伤害。在施放一个技能后，黛安娜的下3次攻击获得攻击速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/DianaArc.png",
          name: "新月打击",
          description:
            "释放一道月能光束，对弧形范围内的敌人造成伤害。\n\n会对命中的敌人施加月光效果，如果中了月光效果的敌人不在潜行状态下，就会暴露在己方视野中3秒。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/DianaOrbs.png",
          name: "苍白之瀑",
          description:
            "黛安娜召出三颗护体法球，在命中敌人后爆炸，对一个区域内的敌人造成范围伤害。她也会获得一层吸收伤害的护盾。护盾的生命值会在她的第三颗法球爆炸后得到提升。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DianaVortex.png",
          name: "月之降临",
          description:
            "被动：提升【月银之刃】提供的攻击速度加成。\n\n主动：吸引并显形身边的所有敌人，同时使他们减速2秒。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/DianaTeleport.png",
          name: "月神冲刺",
          description:
            "成为复仇之月的活化身，冲向一名敌人并造成魔法伤害。\n【月神冲刺】在冲达一名被施加了【月光】效果的敌人时，会没有冷却时间。所有其它的敌人都将移除掉身上的【月光】效果，无论他们是否是【月神冲刺】的目标。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 新月打击的命中是至关重要的，但没命中的话也别太担心。它的冷却时间很短，而且法力消耗很低。",
        "- 要想一想，什么时候要施放不带月光效果的月神冲刺，什么时候要等待另一发新月打击。",
        "- 使用月之降临和月神冲刺来贴住目标，并激活月银之刃来获取额外伤害。"
      ],
      DATAenemytips: [
        "- 躲开新月打击，或者在你被施加了月光效果时，移动到安全位置。",
        "- 苍白之瀑的法球只能持续几秒。先无视她，然后在她的护盾消逝后再与她交火。",
        "- 即使黛安娜不将月神冲刺与月光效果结合使用，她也可以打得非常有侵略性，但你可以在她没办法往回走的时候，用减速或者晕眩来教训她。"
      ],
      infotitle:
        "戴安娜永远都佩着她的月刃 ，她是皎月教派的武士，不过她的教派在巨神峰周围地区几乎已经销声匿迹。黛安娜身穿闪烁着冬夜寒雪之光的铠甲，是皎月神力的凡间化身。她在巨神峰之巅与星灵精魄相融，不再是单纯的凡人。现在的她努力抗争着，寻找着神的启示，以及自己的力量和存在对于这个世界的意义。"
    },
    {
      name: "德玛西亚之翼",
      title: "奎因",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big133000.jpg",
      scores: { difficult: 5, skills: 2, attack: 9, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Quinn_Passive.png",
          name: "侵扰",
          description:
            "华洛，奎因的德玛西亚鹰，会周期性地将敌人标记为易损状态。奎因对易损目标的第一次普通攻击将造成额外物理伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QuinnQ.png",
          name: "炫目攻势",
          description:
            "奎因唤出华洛，来标记一名敌人并遮蔽其视野，然后对目标附近区域内的所有敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QuinnW.png",
          name: "敏锐感知",
          description:
            "在奎因攻击了一名易损目标后，被动地为奎因提供攻击速度和移动速度加成。主动激活可以让华洛驱散周围一大片区域的战争迷雾。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QuinnE.png",
          name: "旋翔掠杀",
          description:
            "奎因冲向一名敌人，造成物理伤害，并减少目标的移动速度。在接触到目标的同时，她会向后空翻，暂时打断目标的行动，并在接近她最大攻击距离的地方着陆。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QuinnR.png",
          name: "深入敌后",
          description:
            "奎因和华洛联成一体并以极高的速度进行移动。在结束此技能时会施放【鹰翼天翔】，对附近的敌人造成伤害并对英雄施加易损效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 攻击一个由华洛标记的 易损 目标将让侵扰进入冷却阶段。越快消耗掉侵扰的印记，就能越快获得新的侵扰印记。",
        "- 【E旋翔掠杀】非常厉害，但使用的时候要特别谨慎，因为敌人可以在奎因发起攻势时攻击她。如果你背靠墙壁的话，有时也可以用【E旋翔掠杀】来跨越地形。",
        "- 【R深入敌后】有多种用法：快速进行长距离跑位、满地图打钱、或是追杀受伤的目标。"
      ],
      DATAenemytips: [
        "- 在被标记后，要与奎因保持距离，这样她就不能占到便宜了。",
        "- 密切注意奎因的位置。【R深入敌后】可以招出华洛来急速穿越地图，并且发起让你意想不到的攻击。",
        "- 在奎因使用【R深入敌后】时，对她造成伤害就可以暂时移除她的移动速度加成。"
      ],
      infotitle:
        "奎因是德玛西亚的游骑兵精锐，经常深入敌国腹地执行危险的任务，她和她的传奇巨鹰华洛之间存在着一种牢不可破的纽带。很多时候，他们的对手死到临头也没意识到，自己面对着的这位德玛西亚英雄，并不是在孤军奋战。战斗中的奎因灵巧敏捷，十字弓例无虚发，而华洛则会从空中标记隐蔽的敌人。两者之间默契的配合造就了战场上一对致命凶狠的搭档。"
    },
    {
      name: "暗黑元首",
      title: "辛德拉",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big134000.jpg",
      scores: { difficult: 8, skills: 9, attack: 2, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/SyndraPassive.png",
          name: "卓尔不凡",
          description:
            "技能在升至满级后，会获得特殊效果。\n\n暗黑法球：对英雄多造成25%伤害。\n驱使念力：造成20%额外真实伤害。\n弱者退散：技能的宽度提高50%。\n能量倾泻：施法距离提升75。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SyndraQ.png",
          name: "暗黑法球",
          description:
            "辛德拉幻化出一个造成魔法伤害的暗黑法球。法球会存留，并且被她的其它能力所操纵。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SyndraW.png",
          name: "驱使念力",
          description:
            "辛德拉抓取并投掷一名敌方小兵或者暗黑法球，来对敌人造成魔法伤害，并减少他们的移动速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SyndraE.png",
          name: "弱者退散",
          description:
            "辛德拉将敌人和暗黑法球击退，并造成魔法伤害。被暗黑法球命中的敌人会被晕眩。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SyndraR.png",
          name: "能量倾泻",
          description: "辛德拉用她的所有暗黑法球来轰击一名敌方英雄。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 为了最大化你的终极技能伤害，请在战场上存在许多暗黑法球时使用它。",
        "- 在你用驱使念力命中一名敌方英雄后，接一发暗黑法球，可以让目标英雄被减速，并让目标难受一阵子。",
        "- 尽快将一个小技能升到5级，然后该技能就能获得额外效果了。"
      ],
      DATAenemytips: [
        "- 在与辛德拉对抗时，尽早购买鞋子，能帮你躲避她的大多数技能。",
        "- 在辛德拉交出弱者退散后攻击她，因为弱者退散的冷却时间很长，所以她在这个时候毫无保命能力。",
        "- 辛德拉的技能会在升至满级后获得额外效果，并且外观也会改变。"
      ],
      infotitle:
        "辛德拉是一位令人胆寒的艾欧尼亚魔法师，操纵着难以置信的力量。她在孩童时期就因为狂暴而不受控制的魔法而让村庄的长老们深感不安。长老们把她送到外地接受严密的监管和训练，但她发现所谓的训练其实是对自己能力的限制。辛德拉将自己感受到的背叛与痛楚融入暗黑法球，并发誓消灭所有想要控制她的人。"
    },
    {
      name: "铸星龙王",
      title: "奥瑞利安·索尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big136000.jpg",
      scores: { difficult: 7, skills: 8, attack: 2, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/AurelionSol_Passive.png",
          name: "星原之准",
          description:
            "行星围绕着奥瑞利安·索尔，并对被它们命中的敌人造成魔法伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AurelionSolQ.png",
          name: "星河急涌",
          description:
            "奥瑞利安·索尔朝着一个方向扔出一粒不断延展的星核。再次释放，或是星核越出了奥瑞利安·索尔周身的星轨半径时，星核便会击晕附近的敌人并造成伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AurelionSolW.png",
          name: "星穹暴涨",
          description:
            "奥瑞利安·索尔将护体行星推向外轨，并提升它们的伤害和速度。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AurelionSolE.png",
          name: "星流横溢",
          description: "奥瑞利安·索尔进行一段极远距离的飞行。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/AurelionSolR.png",
          name: "星弦高落",
          description:
            "奥瑞利安·索尔击出一道星火，对路径上的所有敌人造成伤害及减速，并将靠近他的敌人击退至奥瑞利安·索尔的星轨附近。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你可以在使用【E星流横溢】带着【Q星河急涌】的星核一起飞行，从而让星核的爆炸范围得到可观的增长。",
        "- 如果需要的话，可把【R星弦高落】留给敌方的近战英雄——除此之外，你也可以从远处利用它的减速效果来开团。",
        "- 【E星流横溢】可让你在地图上快速地移动；多多利用它来对其它路线施加压力。"
      ],
      DATAenemytips: [
        "- 尽量突破到他的星轨之内，这样他的护体行星就不会伤害到你了。",
        "- 他的护体行星会在被晕眩或被沉默时消失，多多利用这点来捕捉开战的良机。",
        "- 他会在沿直线追击时获得移动速度加成，但只要对他施加了伤害，就会让他的移速加成重置。",
        "- 他的【Q星河急涌】的爆炸范围可以增长到极其可怕的程度——千万不要在一个地方逗留太久！"
      ],
      infotitle:
        "奥瑞利安•索尔曾创造了奇迹般的群星，为无垠的荒芜太空布下他宏伟的恩典。而如今，他的威能却遭人设计，被迫服务于某个潜藏在深空中的帝国。为了重返铸星大道，奥瑞利安•索尔誓要夺回属于自己的自由。哪怕召星降怒，倾覆众生。"
    },
    {
      name: "影流之镰",
      title: "凯隐",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big141000.jpg",
      scores: { difficult: 8, skills: 1, attack: 10, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Kayn_Passive_Primary.png",
          name: "暗裔魔镰",
          description:
            "凯隐使用的是一把上古神兵，并且一直都在与附在武器上的暗裔灵体拉亚斯特为了身体的控制权而战斗着。要么暗裔化身将获胜，要么凯隐将统御拉亚斯特并变为暗影刺客。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaynQ.png",
          name: "巨镰横扫",
          description: "凯隐向前冲刺并打击附近的敌人。冲刺和打击都会造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaynW.png",
          name: "利刃纵贯",
          description: "凯隐伤害并减速一条直线上的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaynE.png",
          name: "掠影步",
          description: "凯隐可以穿越地形。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaynR.png",
          name: "裂舍影",
          description: "凯隐隐藏在敌方身体内，在他破膛而出时造成巨量伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-在选择你的形态之前，要看好己方队伍和敌方队伍的阵容构成。 记住，附近的敌人可以看到你在哪个墙体内。"
      ],
      DATAenemytips: [
        "- 【裂舍影】需要凯隐先对目标造成伤害。尽量躲过【利刃纵贯】来防止他从远处施放【裂舍影】。",
        "- 当凯隐在你附近的地形中时，你可以在他所在的地形边缘收到一个视觉警告。 在凯隐处于【掠影步】状态下对他造成伤害，可缩短该状态的持续时间，或对他施加硬控效果（晕眩，魅惑，击飞等）来立刻终结【掠影步】状态。"
      ],
      infotitle:
        "悉达·凯隐是修行暗影魔法的精英，他战斗的意义，是为了实现自己真正的命运——为了有朝一日能够率领影流教派，开创艾欧尼亚霸业的新世代。凯隐挥舞着活体暗裔武器拉亚斯特，毫不在意它给自己身体和思想带来的腐化。这样后果只可能有两种：要么，凯隐让这把武器屈服于自己的意志；要么，这副恶毒的刀刃将他彻底吞噬，为符文之地的毁灭奏响序曲。"
    },
    {
      name: "暮光星灵",
      title: "佐伊",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big142000.jpg",
      scores: { difficult: 5, skills: 8, attack: 1, survive: 7 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Zoe_P.png",
          name: "烟火四射！",
          description: "佐伊在施放一次技能后的下次普攻会造成额外魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZoeQ.png",
          name: "飞星乱入！",
          description:
            "佐伊发射一个可在飞行途中由她重新导向的飞弹。飞弹在直线上飞行的路程越远，造成的伤害就会越高。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZoeW.png",
          name: "窃法巧手",
          description:
            "佐伊可以拾取敌方在施放召唤师技能和主动型装备时产生的法术碎片，从而让她自己能够施放一次性的相应技能或效果。在她施放一次召唤师技能的同时，她会获得3颗飞弹来射向距她最近的目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZoeE.png",
          name: "催眠气泡",
          description:
            "使目标进入困倦状态，然后陷入昏睡。打醒目标的第一个伤害来源会造成双倍伤害，但有封顶值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZoeR.png",
          name: "折返跃迁",
          description: "闪烁到附近的一个位置1秒。然后闪烁回去。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-佐伊的【Q飞星乱入】能基于小星星已飞过的路程而造成更多伤害。朝你背后施放然后使它重新导向，就能造成成吨的伤害。 要用你最强的伤害来源来打醒目标，因为昏睡中的敌人会受到双倍伤害。 【E催眠气泡】可以越过墙体。找个地方藏起来，以便让你能从远处发起夺命攻势。"
      ],
      DATAenemytips: [
        "-佐伊的【Q飞星乱入】能基于小星星已飞过的路程而造成更多伤害。 佐伊在施放【R折返跃迁】后必须回到她的初始地点，而这个特性让她容易遭到反制。 【E催眠气泡】可以越过墙体。阻止佐伊隐藏在战争迷雾中，以防止她从暗中发起攻势。"
      ],
      infotitle:
        "调皮捣蛋、异想天开而且变化莫测，佐伊就是这一切的现实化身。作为巨神族的宇宙信使，她的出现就是惊天巨变的先兆。她甚至无需任何行为，只是单纯地出现在某个地方，就足以扭曲周围的奥术数学法则，从而扰乱现实的物理定律。有的时候还会带来浩劫与灾难，虽然她本身并无半点恶意。或许这就是为什么她对待自己的职责总是那么地漫不经心，给了她充足的时间用来玩游戏、捉弄凡人，或者自娱自乐。与佐伊的邂逅可能会给人带来欢乐与激励……"
    },
    {
      name: "荆棘之兴",
      title: "婕拉",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big143000.jpg",
      scores: { difficult: 7, skills: 8, attack: 4, survive: 3 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/ZyraP.png",
          name: "荆棘花园",
          description:
            "种子会周期性地在婕拉身边生成，生成速度随等级提升，并且种子持续30秒。种子被敌方英雄踩中就会死亡。\n\n婕拉可通过在种子附近施放技能来让种子长成植物。额外的植物在攻击相同目标时只会造成较少伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZyraQ.png",
          name: "致命棘刺",
          description:
            "粗壮的藤蔓在地面蔓延，并爆炸成棘刺，对范围内的敌人造成魔法伤害。如果在一颗种子附近施放，那么【Q致命棘刺】就会让种子长成一株荆棘喷射者，可对远处的敌人进行攻击。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZyraW.png",
          name: "狂野生长",
          description:
            "婕拉播下一颗种子，最多持续60秒。【Q致命棘刺】和【E缠绕之根】在种子附近施放【Q致命棘刺】或【E缠绕之根】会让种子长成植物。婕拉可以同时存有多个种子，并且击杀敌人会减少【W狂野生长】的充能时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZyraE.png",
          name: "缠绕之根",
          description:
            "婕拉朝前方放出贯穿地面的藤蔓来诱捕她的目标，藤蔓经过的敌人会受到伤害和束缚效果。如果在一颗种子附近施放，那么【E缠绕之根】就会让种子长成一株藤蔓鞭击者，可进行短程攻击并降低敌人的移动速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZyraR.png",
          name: "绞杀之藤",
          description:
            "婕拉在目标区域召唤一个扭曲的密林，在蔓延时对区域内的所有敌人造成伤害，并在收缩时击飞区域内的所有敌人。密林内的植物会进入激怒状态。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在你的技能施放之后，再往你的技能路径上播下种子，可以确保你的种子能够百分百变成植物。",
        "- 种子可以为你的队伍提供视野，请好好利用。",
        "- 婕拉是一个出色的伏击手——寻找时机，然后在草丛里布下陷阱，再诱引敌人进来。"
      ],
      DATAenemytips: [
        "- 你可以通过踩掉婕拉的种子来摧毁它们。如果她想在你要这么做时把种子长成植物，那么就在最后关头撤退。",
        "- 如果婕拉把植物放在过于远离她自己的地方，贴到她身边将是个明智的举动。",
        "- 植物会从攻击和效果中受到固定伤害，类似守卫。它们本身也会快速消亡。",
        "- 把战斗转移到一个不同的地方，就能让婕拉无法有效利用她积累的种子。",
        "- 婕拉的【W狂野生长】所播下的种子更大一些，颜色也有所不同，并且会为她的团队提供小幅视野。"
      ],
      infotitle:
        "婕拉诞生于一次远古的巫术灾难，她是获得了实体形态的自然之怒，是拥有诱人外观的植物与人类的混合体。她的每一个脚步都在点燃新的生命。在她眼里，瓦洛兰的众多凡人都只不过供她播种的猎物，用夺命的尖刺杀死他们也是一件不值一提的小事。虽然她的真正目的还是个谜，但婕拉一直在世界上流浪，肆意放纵自己占领土地的欲望，同时扼杀自己领地上的所有其他生命。"
    },
    {
      name: "虚空之女",
      title: "卡莎",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big145000.jpg",
      scores: { difficult: 6, skills: 3, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Kaisa_Passive.png",
          name: "体表活肤",
          description:
            "卡莎的普通攻击会叠加电浆，造成不断提升的额外魔法伤害。友军的定身效果也可以帮忙叠加电浆。此外，卡莎可通过购买装备来升级她的基础技能，让它们拥有更多强大的属性。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaisaQ.png",
          name: "艾卡西亚暴雨",
          description:
            "卡莎发射一大堆弹体来搜寻附近的目标。\n\n活体武器：这个技能得到升级，可发射更多弹体。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaisaW.png",
          name: "虚空索敌",
          description:
            "卡莎发射一束长程弹体，并用她的被动来标记敌人。\n\n活体武器：这个技能得到升级，可施加更多被动标记并在命中英雄时减少冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaisaE.png",
          name: "极限超载",
          description:
            "卡莎暂时提升移动速度，随后提升攻击速度。\n\n活体武器：这个技能得到升级，可短暂提供隐形效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KaisaR.png",
          name: "猎手本能",
          description: "卡莎突进到一个敌方英雄身边。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-尝试抓住对方落单的输出，并用艾卡西亚暴雨来将其轰杀。 与你的队友一起发动你的终极技能，并利用你的被动来充分输出伤害。 确保购买那些能够至少进化你1到2个技能的装备。"
      ],
      DATAenemytips: [
        "-卡莎非常善于带走落单的敌人。要对付她就得保持抱团。 卡莎很容易就会在对抗法师和超远程输出时陷入射程劣势。 请时刻保证自己已在盲区布置了守卫，这样一来就能看到卡莎的到来了。"
      ],
      infotitle:
        "在孩童时期就被虚空夺走的卡莎，凭着纯粹的固执和意志力活了下来。她的历练让她成为了一位夺命的猎手，或者也有人会称她为黑暗未来的使者。她与一副有生命的虚空生物甲壳形成了一种不得安宁的共生状态，而很快她就将面临一个重大的抉择，究竟是原谅那些称她为怪物的凡人并协力抵御压境的黑暗……还是干脆忘记，放任虚空吞噬这个已将她抛弃的世界。"
    },
    {
      name: "迷失之牙",
      title: "纳尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big150000.jpg",
      scores: { difficult: 8, skills: 5, attack: 6, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Gnar_Passive.png",
          name: "狂怒基因",
          description:
            "在战斗时，纳尔会产生怒气。在怒气到达最大值时，他的下一个技能将使他变形成巨型纳尔，获得强化的生存能力并能使用新的技能。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GnarQ.png",
          name: "投掷回力标 / 投掷顽石",
          description:
            "纳尔扔出一个回力标，对敌人造成伤害和减速效果，直到开始折返为止。如果纳尔接住了折返的回力标，那么这个技能的冷却时间就会减少。\n\n巨型纳尔扔出一颗石头，石头会在命中第一个敌人后停下，对这个敌人附近的所有敌方单位造成伤害和减速效果。巨型纳尔可以通过拾取这颗石头来减少这个技能的冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GnarW.png",
          name: "亢奋 / 痛殴",
          description:
            "纳尔的攻击和施法会让他亢奋起来，造成额外伤害并为他提供移动速度加成。\n\n巨型纳尔已经过于暴怒，所以用不着亢奋了，因此他会用后脚暴跳，并猛击他面前的区域，使区域内的所有敌人晕眩。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GnarE.png",
          name: "轻跳 / 猛踏",
          description:
            "纳尔跳到一个区域，并在落到任何单位上后，弹跳到更远的区域。\n\n巨型纳尔体积太大，无法弹跳，但落地后会使地面震颤，对区域内的敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/GnarR.png",
          name: "呐啊！",
          description:
            "巨型纳尔将身边的所有东西都朝着一个选定的方向投掷，对他们造成伤害和减速效果。被投到墙上的敌人会被晕眩，并承受额外的伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 掌握好你的怒气，是非常重要的。尽量掌握好你的变形时机，来让你能从两个形态中获得最大的收益。",
        "- 靠着墙边走位，来引诱你的敌人靠近，然后用终极技能把他们震晕在墙上。",
        "- 要了解你的强项！小型纳尔快速但脆弱，能够输出高额持续伤害。巨型纳尔迟缓但结实，并能输出高额爆发伤害。"
      ],
      DATAenemytips: [
        "- 纳尔在从大变小后的15秒里，不能获得怒气。利用这个机会来和对面开战吧。",
        "- 纳尔的动画和资源槽会在他不断接近可变形状态时跟着改变。",
        "- 如果你被纳尔的终极技能震到墙上，那么就会承受晕眩效果。在墙边跟他作战时，要特别小心。"
      ],
      infotitle:
        "纳尔是一个原始约德尔人，讨人喜爱的小个子突然发起脾气来，就会变成一头巨大的野兽，脑海中只剩下破坏的念头。纳尔被臻冰冻结了数千年，如今他重获自由。这个面目全非的世界，在他充满好奇的眼里处处都是新鲜奇妙。因为纳尔在危险中会特别兴奋，所以他会随便抓起任何东西丢向自己的敌人，无论是他的骨齿回力标，还是手边的大房子。"
    },
    {
      name: "生化魔人",
      title: "扎克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big154000.jpg",
      scores: { difficult: 8, skills: 7, attack: 3, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/ZacPassive.png",
          name: "细胞分裂",
          description:
            "扎克每用技能命中一次敌人，自己的一小块粘液就会飞溅出去。扎克可以重新吸收这些粘液，来为自己回复生命值。在承受致命伤害时，扎克会分裂成四块细胞组织，并试图重新结合。如果在短时间后，仍然有细胞组织存活，那么他就会重生，重生时的生命值取决于存活的细胞组织数量。细胞组织会继承一部分扎克的最大生命值、护甲和魔法抗性。这个技能的冷却时间为5分钟。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZacQ.png",
          name: "延伸打击",
          description:
            "扎克延伸他的双臂，捕获一个敌人。攻击一个不同的敌人将使他把两个目标投向彼此。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZacW.png",
          name: "不稳定物质",
          description:
            "扎克朝着附近的敌人进行喷溅，造成相当于目标一部分最大生命值的魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZacE.png",
          name: "橡筋弹弓",
          description: "扎克将手臂附在地上然后收缩，并将自己射向前方。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZacR.png",
          name: "动感弹球",
          description: "扎克弹跳4次，对命中的敌人造成击飞和减速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 如果你想要维持血量的话，要特别注重粘液的拾取。",
        "- 当细胞分裂准备就绪时，尽量死在敌人难以击杀你的细胞组织的地方。",
        "- 尽量在敌人的视野外进行橡筋弹弓的充能，好让敌人更难对它做出反应。"
      ],
      DATAenemytips: [
        "- 从扎克身上分裂出去的那些粘液，可以为扎克提供治疗效果。你走到它们身上就可以踩碎它们了。",
        "- 在扎克分裂之后，要杀掉所有的细胞组织，才能阻止他重组。",
        "- 在扎克为他的橡筋弹弓充能时，你可以用沉默、晕眩、束缚和击飞效果来干扰他。"
      ],
      infotitle:
        "一滩泄漏的毒液，顺着炼金科技设施的裂缝流进了祖安的地沟区，在深处一个与世隔绝的坑洞里积成了一洼。出身虽然如此低微，但扎克却从一团蒙昧的黏液长成了一个有思想的实体，栖息在城里的管道中，偶尔露面，帮助那些无助的人，或是修缮祖安的各种公共设施。"
    },
    {
      name: "疾风剑豪",
      title: "亚索",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big157000.jpg",
      scores: { difficult: 10, skills: 4, attack: 8, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Yasuo_Passive.png",
          name: "浪客之道",
          description:
            "亚索的暴击几率翻倍。此外，亚索会在移动时积攒一层护盾。护盾会在他受到来自英雄或野怪的伤害时触发。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/YasuoQ1Wrapper.png",
          name: "斩钢闪",
          description:
            "向前出剑，呈直线造成伤害。\n\n在命中时，斩钢闪会获得一层旋风烈斩效果，持续数秒。在积攒2层旋风烈斩效果后，斩钢闪会形成一阵能够击飞敌人的旋风。\n\n斩钢闪被视为普通攻击，并且可以从所有作用于普攻的东西上获得收益。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YasuoW.png",
          name: "风之障壁",
          description: "形成一个持续4秒的气流之墙，来阻挡敌方的飞行道具。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YasuoE.png",
          name: "踏前斩",
          description:
            "向目标敌人突进，造成魔法伤害。每次施法都会使你的下一次突进的基础伤害提升，直到抵达上限。\n\n在若干秒内无法对相同敌人重复施放。\n\n如果在突进的过程中施放斩钢闪，那么斩钢闪就会呈环状出剑。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YasuoR.png",
          name: "狂风绝息斩",
          description:
            "闪烁到一个被击飞的敌方英雄身边，造成物理伤害，并使范围内的所有被击飞的敌人滞留在空中。获得满额的剑意值，但会重置旋风烈斩的层数。\n\n在接下来的若干秒里，亚索的暴击会获得显著的额外护甲穿透加成值。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 你可以将敌方小兵作为踏前斩的跳板，来追杀本已逃掉的敌人；你也可以直接突进到对方英雄身上，并将敌方小兵作为撤退时的跳板。",
        "- 在18级时，亚索的斩钢闪只需要从装备中获取 55% 攻击速度，即可到达攻击速度上限。",
        "- 狂风绝息斩可以对着任何被击飞的目标施放，即使这个击飞效果是你的友军造成的。"
      ],
      DATAenemytips: [
        "- 斩钢闪的范围非常狭窄。尽可能靠边，就能躲过这招。",
        "- 当亚索的斩钢闪连续命中两次时，他的下次斩钢闪就会形成一道旋风。要观察他的增益栏，并且留心聆听相关音效，做好躲避这招的准备。",
        "- 亚索在发出旋风之后最为虚弱，可以趁机逼他交战。",
        "- 亚索的百折不屈的护盾只持续2秒。对他造成伤害即可将护盾触发。先等护盾消失，然后再开战。"
      ],
      infotitle:
        "亚索是一个百折不屈的艾欧尼亚人，也是一名身手敏捷的御风剑客。这位生性自负的年轻人，被误认为杀害长老的凶手——由于无法证明自己的清白，他出于自卫而杀死了自己的哥哥。虽然长老死亡的真相已然大白，亚索还是无法原谅自己的所作所为。他在家园的土地上流浪，只有疾风指引着他的剑刃。"
    },
    {
      name: "虚空之眼",
      title: "维克兹",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big161000.jpg",
      scores: { difficult: 8, skills: 10, attack: 2, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/VelKoz_Passive.png",
          name: "有机体解构",
          description:
            "维克兹的技能会对命中的敌人施加有机体解构效果。如果累积到3层效果，敌人就会受到爆发性的真实伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VelkozQ.png",
          name: "等离子裂变",
          description:
            "维克兹发射一束等离子，再次施放此技能或在命中一名敌人后，等离子束会一分为二。等离子束在命中时会造成伤害和减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VelkozW.png",
          name: "虚空裂隙",
          description:
            "维克兹开启一道虚空裂隙，造成初始爆发伤害，并在短暂的延迟后爆炸，造成第二段爆发伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VelkozE.png",
          name: "构造分解",
          description:
            "维克兹让一个区域爆炸，击飞敌人，并将近处的敌人略微击退。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/VelkozR.png",
          name: "生命形态瓦解射线",
          description:
            "维克兹释放一束被引导的光线跟随鼠标指针，可造成魔法伤害，持续2.5秒。【有机体解构】效果会研究敌方英雄，从而使他们受到真实伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在对线时，使用虚空裂隙来击杀小兵，同时在敌方英雄身上叠加有机体解构效果。然后你可以接其它技能。",
        "- 侧身发射等离子裂变，并让它在最大距离处分裂，就能让这个技能命中初始施法距离之外的敌人，这也是一个值得去掌握的技巧。",
        "- 要非常谨慎地挑选终极技能的使用时机。大部分英雄的技能都可以打断这个技能。"
      ],
      DATAenemytips: [
        "- 如果在战斗中对维克兹不管不顾的话，他就会非常致命。尽量趁早将他集火掉。",
        "- 维克兹的机动能力相当低下，因此容易被 GANK。",
        "- 晕眩、沉默和击飞效果都可以打断维克兹的生命形态瓦解射线。"
      ],
      infotitle:
        "人们不太确定维克兹是否是符文之地上出现的第一个虚空生物，但可以确定的是没有第二个虚空生物能超过他的残忍和精明。他的同类通常都会吞噬或者破坏周围的一切，然而维克兹却一直在仔细观察并研究这个物质世界，以及世界上这些奇怪的好战生物，寻找虚空可以利用的弱点。但维克兹绝不是个被动的观察者，他会用致命的电浆射线回击任何威胁，甚至还能扰动世界本身的基础构造。"
    },
    {
      name: "岩雀",
      title: "塔莉垭",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big163000.jpg",
      scores: { difficult: 5, skills: 8, attack: 1, survive: 7 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Taliyah_Passive.png",
          name: "浮石冲",
          description: "塔莉垭在墙体附近时会获得移动速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaliyahQ.png",
          name: "石穿",
          description:
            "塔莉垭朝目标方向扔出一串石弹，同时自身可自由移动。这个技能会将她脚下的地面变为掘石场。如果塔莉垭在掘石场上使用【Q石穿】，则只会扔出一个石弹。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaliyahW.png",
          name: "岩突",
          description: "塔莉垭在目标区域引发岩突，并将扔向她所选的方向"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaliyahE.png",
          name: "撒石阵",
          description:
            "塔莉垭创造一个可减速的雷区，石雷会在敌人使用突进技能时爆炸。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TaliyahR.png",
          name: "墙幔",
          description: "塔莉垭创造出一个非常长的石墙，然后在石墙上冲浪。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 尝试用【W岩突】来把敌人扔到【E撒石阵】上。",
        "- 切记，没有必要总是搭乘【R墙幔】。",
        "- 一旦你做出【瑞莱的冰晶节杖】，朝那些正在追击你的 敌人使用【Q石穿】能够很有效地让他们为此感到后悔。"
      ],
      DATAenemytips: [
        "- 当塔莉垭在线上放下【E撒石阵】时，要注意躲开她的【W岩突】。如果她把你扔到雷区中，就会有各种石头来打断你的骨头。",
        "- 塔莉垭的【Q石穿】会朝一个方向锁定。如果她对你使用这个技能，就要尽快躲到边上去！"
      ],
      infotitle:
        "塔莉垭是一位来自恕瑞玛的游牧民族的法师，孩子的好奇与大人的责任两股力量同时拉扯着她。她曾踏遍瓦洛兰的山山水水，只为寻得控制己身异能的法门，不过最近，她已经回到了故乡，保护生她养她的部族。有些人把她的温柔善意当做是懦弱的表现，最终也为自己的愚鲁付出了代价。塔莉垭青春稚嫩的举止背后，是一颗敢于移山填海的雄心，和一个堪能倾世的灵魂。"
    },
    {
      name: "青钢影",
      title: "卡蜜尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big164000.jpg",
      scores: { difficult: 4, skills: 3, attack: 8, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Camille_Passive.png",
          name: "适应性防御",
          description:
            "对敌方英雄发起的普攻会基于该英雄的伤害类型（物理或魔法）提供一层专门吸收该类型伤害的护盾，护盾的生命值相当于卡蜜尔20%的最大生命值，持续一小段时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/CamilleQ.png",
          name: "精准礼仪",
          description:
            "卡蜜尔的下一次普通攻击会斩击敌人，造成额外物理伤害，并为自身提供短暂的爆发性移动速度加成。这个技能可以在释放后的短时间内再次施放，并且如果两次释放之间存在一定的间隔，那么第二段攻击会造成显著的额外伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/CamilleW.png",
          name: "战术横扫",
          description:
            "卡蜜尔在短暂延迟后引爆一个锥形范围，并造成伤害。外沿的敌人会被减速并且受到额外伤害，同时还会治疗卡蜜尔。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/CamilleE.png",
          name: "钩索",
          description:
            "卡蜜尔将她自己拉向一个墙体，然后跳下并在落地时击飞敌方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/CamilleR.png",
          name: "海克斯最后通牒",
          description:
            "卡蜜尔冲向目标英雄，并将该英雄锚定在区域中。她对目标英雄发起的普攻还会造成额外的魔法伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 尽量先等你的队友吸引敌方队伍的注意力，然后再用【E钩索】接近敌方脆弱的后排英雄们。",
        "- 利用好你技能的控制效果，从而让你的【Q精准礼仪】的两段攻击都能打到敌人身上。"
      ],
      DATAenemytips: [
        "- 卡蜜尔的护盾只能对一种伤害类型生效，所以尽量趁她无法抵挡你的伤害时对她发起攻击。",
        "- 【R海克斯最后通牒】的施放距离很短，所以尽量与她保持距离，并在她接近你之前就闪现逃开。"
      ],
      infotitle:
        "卡蜜尔是菲罗斯家族的首席密探，游走于法律已然失效的边缘地带，小心地维护着皮尔特沃夫这台机器和其下的祖安，保证一切都能顺畅地运转。灵活而精准的她认为，任何浮皮潦草的技术都是必须被禁绝的丑陋行径。她的心智也如同身下的刀刃一般锐利。为了追求极致，她对自己进行了大幅度的海克斯人体增强手术。这也让很多人不禁怀疑，她根本就是一台纯粹的机器，而不是一个女人。"
    },
    {
      name: "弗雷尔卓德之心",
      title: "布隆",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big201000.jpg",
      scores: { difficult: 3, skills: 4, attack: 3, survive: 9 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Braum_Passive.png",
          name: "震荡猛击",
          description:
            "布隆可以通过普攻和【寒冬之咬】来增加【震荡猛击】的叠加层数。他和他的友军可以通过普攻来不断地增加【震荡猛击】的叠加层数，当目标身上的【震荡猛击】层数到达4时，就会被击晕。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BraumQ.png",
          name: "寒冬之咬",
          description:
            "布隆驱动盾牌中的冷冻冰块，对敌人造成魔法伤害和减速效果。\n\n对目标施加一层震荡猛击。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BraumW.png",
          name: "挺身而出",
          description:
            "布隆跃向目标友军英雄或小兵。在抵达时，布隆和友军会暂时获得护甲和魔法抗性加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BraumE.png",
          name: "坚不可摧",
          description:
            "布隆朝一个方向举起盾牌，持续数秒，可以拦截所有敌方飞行道具，并将它们摧毁，但自身要承受这些飞行道具的伤害。在举盾后，布隆将使承受的第一次攻击变得完全无效，并降低来自这个方向的所有后续攻击的伤害。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/BraumRWrapper.png",
          name: "冰川裂隙",
          description:
            "布隆敲击地面，击飞他身边和前方一条直线上的所有敌人。此外，还会在前方的直线上留下一条能让敌方减速的裂隙。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 和你的队友一起叠加【震荡猛击】效果，鼓励他们对被标记的目标进行普攻。",
        "- 你可以用【坚不可摧】跳到脆皮队友的前方，然后为他们阻挡敌方的飞行道具。",
        "- 【冰川裂隙】会生成一块强大的减速区域，你可以利用它来分割敌方阵形，并减缓敌方进入战场的速度。"
      ],
      DATAenemytips: [
        "- 布隆必须用【寒冬之咬】或普攻来施加第一层【震荡猛击】效果。如果你被标记了，那就在承受另外的3次攻击之前退出战斗区域，从而避免被击晕。",
        "- 布隆的终极技能施法时间较长，利用这段时间来躲避。这个技能造成的冻结地面会使你被减速，因此如果你不是那么迫切地需要踩过去，那么你可以用谨慎的走位来应对。",
        "- 【坚不可摧】会为布隆提供超强的定向防御力，所以要么就绕到侧面，要么就先等他把盾牌放下去。"
      ],
      infotitle:
        "拥有大块肌肉和更大颗心脏的布隆，是弗雷尔卓德的一个受人爱戴的英雄。弗雷尔卓德北部的任何一家蜜酒坊里都有人会致敬他传奇般的强壮，据说他曾在一夜之间扫平一整片橡树森林，还曾用拳头把一整座山打成碎石子。一扇附有魔法的秘库大门被他拿在手中当做盾牌，布隆在北方的冻土上漫游，小胡子勾勒出的微笑和他的肌肉块头一样大， 真诚友善地帮助所有危难之中的人。"
    },
    {
      name: "戏命师",
      title: "烬",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big202000.jpg",
      scores: { difficult: 6, skills: 6, attack: 10, survive: 2 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Jhin_P.png",
          name: "低语",
          description:
            "烬的手枪，“低语”，是一台精密的设备，用来造成出色的伤害。它会以一个固定的频率发射子弹，并且只能装四颗子弹。烬会将黑暗魔法注入最后一颗子弹，来让它产生暴击并造成额外斩杀伤害。当“低语”暴击时，它会为烬提供一个爆发性的移动速度加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JhinQ.png",
          name: "曼舞手雷",
          description:
            "烬朝敌人扔出一颗迷人的手雷。它最多可以命中四个目标，并在每次击杀单位后获得伤害提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JhinW.png",
          name: "致命华彩",
          description:
            "烬挥舞他的长枪，进行一次射程极远的射击。它可穿透小兵和野怪，但会在命中第一个敌方英雄后停下。如果目标最近踩到了烬的陷阱、承受过烬的伤害或被烬的队友给命中过，那么还会受到禁锢效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JhinE.png",
          name: "万众倾倒",
          description:
            "烬放置一个隐形的莲花陷阱，陷阱会在敌人经过时绽放。它会减速附近的敌人，然后爆炸为一阵飘零的花瓣并对敌人造成伤害。\n\n绚葬之华 - 当烬击杀掉一名敌方英雄时，一个莲花陷阱将在该英雄的尸体附近爆炸。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JhinR.png",
          name: "完美谢幕",
          description:
            "烬开始引导，将“低语”切换成一个肩扛式重炮。它能够进行四次超级射击，超级射击的射程极远，可穿透小兵和野怪，但会在命中第一个敌方英雄后停下。“低语”会让命中的敌方单位怯场，也就是对它们造成减速效果和斩杀伤害。第四次射击是经过精心调制的，所以威力特别大，并且必定会造成暴击。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【W致命华彩】有着难以置信的超远射程。在加入一场战斗之前，先观察下前方是否有能被你禁锢的敌人。",
        "- 对方的生命值越高，你的终极技能造成的伤害值越低。好好观察局势，找机会送那些残血的敌人上路。",
        "- 你在装弹时仍然可以施放技能。利用技能来撑过装弹时的脆弱期。"
      ],
      DATAenemytips: [
        "- 【W致命华彩】只会禁锢那些在前4秒被烬的普攻、陷阱、或友方英雄给命中的敌人。",
        "- 烬会在地图各处放置陷阱。当心你的脚下！",
        "- 烬的攻击非常强力，但他会在射出第四发子弹后装填子弹。利用这段时间接近他并将他轰趴。"
      ],
      infotitle:
        "作为一名心思缜密的癫狂杀手，烬坚信谋杀是一门艺术。他曾在艾欧尼亚的监狱中服刑，但却因为执政议会里涌动着的暗流而得到释放，成为了权术斗争所利用的刺客。烬将手中的枪当成画笔，尽情地挥洒他所追求的残忍艺术，让受害者肝胆俱裂，令旁观者震悚难平。他在自己制作的阴森剧目里肆意取乐，让“恐怖”二字有了最合适不过的信使。"
    },
    {
      name: "永猎双子",
      title: "千珏",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big203000.jpg",
      scores: { difficult: 4, skills: 2, attack: 8, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Kindred_Passive.png",
          name: "千珏之印",
          description:
            "千珏可以标记敌人进行狩猎。成功完成一次狩猎，将永久强化千珏的基础技能。每完成4次狩猎，还会提升千珏的普攻距离。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KindredQ.png",
          name: "乱箭之舞",
          description: "千珏进行翻滚并朝附近的敌人射出最多三支箭矢。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KindredW.png",
          name: "狼灵狂热",
          description:
            "狼灵狂化并攻击在他附近的敌人。羊灵通过攻击和移动来被动地积攒层数。当层数攒满时，羊灵的下次攻击将治愈生命值。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KindredEWrapper.png",
          name: "横生惧意",
          description:
            "羊灵进行一发谨慎的定位射击，来使目标减速。如果羊灵又进行了两次攻击，那么她的第三次攻击会指挥狼灵扑向目标，对目标造成巨量伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KindredR.png",
          name: "羊灵生息",
          description:
            "羊灵让一块区域内的所有生灵都免受死亡。效果结束之前，谁都不会死去。效果结束时，所有单位都会获得治疗。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-在打野时，利用攻击间隔进行移动，会有助于你避免受伤并从【W狼灵狂热】中获得更多治疗效果。",
        "-要谨慎地挑选你想要追杀的狩猎目标；尽可能多地干掉狩猎目标，是通向胜利的关键。",
        "-在大型团战中，不要冲在第一个。等你的队友开团后再加入战斗。"
      ],
      DATAenemytips: [
        "-千珏是个脆皮英雄——对他们施加压力，他们就会被迫小心翼翼。",
        "-抢掉被狼灵标记的野怪营地，会延缓千珏的伤害输出。",
        "-当千珏使用【R羊灵生息】时，范围内的所有英雄都不会死亡，要注意并利用好这一点。"
      ],
      infotitle:
        "千珏，作为象征死亡的一对精魂，他们互相独立，却从未分离。对于坦然接受命运的人来说，羊灵的长弓可以痛快地送他们离开生者的乐园，而妄图逃脱宿命的人则由狼灵追捕，痛苦地倒在他有力的撕咬下。虽然在符文之地上到处是关于千珏的不同传言，但每个人在临终时都会看到死亡的真正面孔。至于是哪一面，完全出自个人的抉择。"
    },
    {
      name: "暴走萝莉",
      title: "金克丝",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big222000.jpg",
      scores: { difficult: 6, skills: 4, attack: 9, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Jinx_Passive.png",
          name: "罪恶快感",
          description:
            "在金克丝对敌方英雄、防御塔或召唤水晶造成伤害的3秒内，如果敌方英雄或防御塔被击杀或摧毁，那么金克丝的移动速度和攻击速度就会得到显著提升。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JinxQ.png",
          name: "枪炮交响曲！",
          description:
            "金克丝可以通过切换武器来改变普通攻击的方式。在用她的轻机枪“砰砰”攻击时，她的攻击速度会提升。在用她的火箭发射器“鱼骨头”攻击时，她的普通攻击会造成范围伤害，攻击距离提升，并会消耗法力值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JinxW.png",
          name: "震荡电磁波！",
          description:
            "金克丝使用她的震荡手枪“电磁器”来发射震荡波，让被命中的第一个敌人暴露在己方视野中（可使隐形英雄现形），并对其造成伤害和减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JinxE.png",
          name: "嚼火者手雷！",
          description:
            "金克丝扔出一串陷阱手雷。手雷会在5秒后爆炸，让敌人着火。嚼火者手雷将会袭击路过的敌方英雄，并将他们束缚在原地。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/JinxR.png",
          name: "超究极死神飞弹！",
          description:
            "金克丝发射一枚能够跨越整个地图的飞弹，并且飞行的时间越长，伤害值越高。飞弹会在命中一名敌方英雄后爆炸，对目标和目标附近的敌人造成伤害，且目标的生命值越低，所受的伤害值越高。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 火箭并不总是最佳选择！金克丝的轻机枪在预热完毕后，也拥有难以置信的威力。当敌方英雄快要抓到你时，就换成轻机枪射个痛快吧！",
        "- 金克丝的火箭会对爆炸范围内的所有敌人造成完全伤害。在对线时，可以朝小兵发射火箭来溅射附近的敌方英雄，并且还不会吸引小兵的仇恨。",
        "- 当战斗开始时，尽量呆在交战区域的边缘位置，用火箭和震荡电磁波来从远处轰击对手。除非你觉得己方优势很明显，否则不要跑上前去用轻机枪扫射。"
      ],
      DATAenemytips: [
        "- 金克丝的轻机枪需要花费时间来预热，才能发挥全部实力。如果你看到她在远处发射火箭，就要尽量突进过去将她放倒。",
        "- 你离金克丝越近，她的终极技能对你造成的伤害值就越低。",
        "- 金克丝的陷阱手雷的冷却时间很长，并且是她的主要防身武器。如果手雷没扔中敌人，就会在交战时陷入困境。"
      ],
      infotitle:
        "神经狂躁、冲动任性、劣迹斑斑……金克丝出身自祖安，生来就爱不计后果地大搞破坏。她就是一座人形自走军火库，所经之处必定会留下夺目的火光和震耳的爆炸。金克丝最讨厌无聊，所以不管她去到哪里，混乱和骚动就会如期而至，这就是她留下的“到此一游”。"
    },
    {
      name: "河流之王",
      title: "塔姆",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big223000.jpg",
      scores: { difficult: 5, skills: 6, attack: 3, survive: 9 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/TahmKench_P.png",
          name: "培养品味",
          description:
            "塔姆将他那庞大身躯的分量夹杂在他的攻击和技能中，从而使他能造成基于自身额外生命值的额外伤害。对敌方英雄造成伤害时，塔姆可以在目标身上叠加【培养品味】的层数。当敌方英雄身上的层数到达3时，塔姆可以使用【大快朵颐】来吞噬这名敌方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TahmKenchQ.png",
          name: "巨舌鞭笞",
          description:
            "塔姆用他的舌头进行猛击，对命中的第一个单位造成伤害和减速效果。这个技能会对叠了3层【培养品味】的目标造成晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TahmKenchW.png",
          name: "大快朵颐",
          description:
            "塔姆吞噬一个目标，造成基于目标最大生命值的魔法伤害。他可以沿直线喷出被吞噬的小兵和野怪，在产生碰撞后对范围内的敌人造成魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/TahmKenchE.png",
          name: "厚实表皮",
          description:
            "塔姆会将即将受到的伤害转化为灰色生命值。随着灰色生命值的衰减，塔姆会获得相当于一部分灰色生命值的治疗效果。主动激活时，这个技能会把所有灰色生命值转化为一个护盾。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/TahmKenchNewR.png",
          name: "深渊潜航",
          description:
            "塔姆跨越地图进行传送，并且还能带着一名友军与他一起传送。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-在辅助时，你最重要的一个功能就是把脆皮友军带到安全的地方。要注意【大快朵颐】的距离和冷却时间，并进行相应的走位！",
        "-在使用【厚实表皮】时要谨慎考虑。有的时候，提早获得护盾来避免深度伤害是不错的，但有的时候，治疗效果的好处更大。"
      ],
      DATAenemytips: [
        "-当你看到塔姆使用【厚实表皮】获取护盾时，要记住他是以无法获得这个技能的治疗效果为代价的。只有在【厚实表皮】冷却完毕后，他才会积累新的灰色生命值。利用这点来创造优势吧！",
        "-如果塔姆通过喷吐小兵来骚扰你，那么可以在他喷吐后尝试反击。他的【大快朵颐】这时还未冷却完毕，因此你可以趁他无法吞噬你时赚取一些优势。"
      ],
      infotitle:
        "塔姆·肯奇在历史上有许多不同的名字，他游历于符文大陆的各条水道，用大意之人的悲惨喂养自己贪得无厌的食欲。虽然他的外表可能富有古怪的魅力和得意，但他在物质领域的漫游只是为了寻找毫无戒心的猎物。他的舌头像巨大的鞭子，即使是全副武装的重甲士兵也会被他从十几步以外的距离击晕，而如果跌入了他隆隆作响的肚子里，就相当于掉进了九死一生的绝命深渊。"
    },
    {
      name: "圣枪游侠",
      title: "卢锡安",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big236000.jpg",
      scores: { difficult: 6, skills: 3, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Lucian_Passive.png",
          name: "圣光银弹",
          description: "每使用一个技能时，卢锡安的下次普通攻击都会连射2次。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LucianQ.png",
          name: "透体圣光",
          description: "卢锡安射出一束穿透性的圣光穿过他的目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LucianW.png",
          name: "热诚烈弹",
          description:
            "卢锡安发射一个会呈星形爆炸的飞弹，标记并暂时显形敌人。在卢锡安攻击被标记的敌人时，会获得移动速度加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LucianE.png",
          name: "冷酷追击",
          description:
            "卢锡安冲刺一小段距离。【圣光银弹】的攻击会减少【冷酷追击】的冷却时间。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/LucianR.png",
          name: "圣枪洗礼",
          description: "卢锡安的武器释放出大量的子弹。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 最为理想的爆发连招是冷酷追击接透体圣光。",
        "- 热诚烈弹会呈星形爆炸。试着找一个前置目标，然后用爆炸后的流弹命中敌方英雄。",
        "- 一旦你为圣枪洗礼选择了一个角度，你就不能再改了。等时机成熟了再出手！",
        "- 由于被动技能“圣枪银弹”，卢锡安从攻击力中获得的收益要比从攻击速度中获得的收益还多得多。"
      ],
      DATAenemytips: [
        "- 卢锡安的爆发伤害很高，但持续伤害比较低。",
        "- 卢锡安不能改变圣枪洗礼的瞄准方向。躲过子弹的角度就能获得优势。",
        "- 透体圣光不会给卢锡安额外的攻击距离。他仍然需要寻找一个目标来触发圣光。注意预判卢锡安将会选择的角度，就会比较容易躲掉透体圣光。"
      ],
      infotitle:
        "曾担光明哨兵的卢锡安是一位冷酷的死灵猎人。他用一对圣物手枪无情地追猎并灭绝不死亡灵。为亡妻复仇的意念吞噬了他，让他无止无休。除非消灭锤石，那个手握她灵魂的恶鬼。冷酷而且决绝的卢锡安不允许任何东西挡住自己的复仇之路。如果有什么人或者什么东西愚蠢到敢挑衅他的原则，就必将接受压倒性的神圣枪火狂轰滥炸。"
    },
    {
      name: "影流之主",
      title: "劫",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big238000.jpg",
      scores: { difficult: 7, skills: 1, attack: 9, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/shadowninja_P.png",
          name: "影忍法！灭魂劫",
          description:
            "劫的普通攻击会对低生命值的目标造成额外魔法伤害。这个特效在数秒内只能对相同目标生效一次。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZedQ.png",
          name: "影奥义！诸刃",
          description:
            "劫和他的影分身一起将他们的手里剑向前方掷出。\n\n每支手里剑都会对命中的每个敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZedW.png",
          name: "影奥义！分身",
          description:
            "被动：当劫和他的影分身用相同技能击中一名敌方英雄时，劫会回复能量。每次施放技能只会回复一次能量。\n\n主动：劫的影分身向前突进，并在一个地方维持若干秒。再次激活此技能会让劫与这个影分身互换位置。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZedE.png",
          name: "影奥义！鬼斩",
          description: "劫和他的影分身进行斩击，对附近的敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ZedR.png",
          name: "禁奥义！瞬狱影杀阵",
          description:
            "劫变为不可被选取状态并突进至一名敌方英雄，同时为目标施加死亡印记。在3秒后，印记将会爆炸，同时造成额外伤害，劫在印记激活期间造成的伤害越多，则此额外伤害越高。如果该英雄死于此技能期间，那么劫可以获得该英雄的一部分攻击力。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 在你使用终极技能之前，要攒好能量和技能冷却，以最大化【R禁奥义！瞬狱影杀阵】的伤害输出。",
        "- 快速双击【W影奥义！分身】，将会让劫立刻传送到影分身的位置，从而快速逃生。",
        "- 在使用死亡印记前使用一次【W影奥义！分身】，能够让劫安全地从战斗中逃脱。"
      ],
      DATAenemytips: [
        "- 提升攻击力的装备能提升劫的整体输出，因此在对抗劫时，护甲的作用将非常明显。",
        "- 在劫使用了他的【W影奥义！分身】之后，他将陷入最无力的状态，因为他的伤害、减速、和机动性都依靠这个技能。",
        "- 劫的【Q影奥义！诸刃】如果在命中敌方英雄之前，穿过了其它单位的话，那么它的伤害值会降低。",
        "- 只有中了劫的影分身的【E影奥义！鬼斩】才会被减速，而中了劫的【E影奥义！鬼斩】则不会。"
      ],
      infotitle:
        "彻底抛弃了仁慈与怜悯的劫，是影流教派的领袖。他创立影流的目标是将艾欧尼亚的魔法和传统武术用于实战，驱逐诺克萨斯侵略者。在战争中，绝望指引他开启了神秘的暗影形态。这是一种恶灵魔法，虽然强大，但同时非常危险且有腐化之力。劫已经完全掌握了这种禁忌之术，用它摧毁自己眼中的威胁，维护自己的国家，以及自己的教派。"
    },
    {
      name: "暴怒骑士",
      title: "克烈",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big240000.jpg",
      scores: { difficult: 7, skills: 2, attack: 8, survive: 2 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Kled_P.png",
          name: "怯战蜥蜴斯嘎尔",
          description:
            "克烈的可靠坐骑——斯嘎尔——会为他承受伤害。当斯嘎尔的生命值耗尽时，会导致克烈进入非骑乘状态。额外生命值属性只会施加给斯嘎尔。\n\n在非骑乘状态下时，克烈会更换若干技能并对英雄造成较少伤害。克烈可通过与敌人作战来回复斯嘎尔的勇气。在勇气到达满值时，克烈会骑着拥有部分生命值的斯嘎尔重回骑乘状态。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KledQ.png",
          name: "飞索捕熊器",
          description:
            "克烈投掷一个捕熊器，钩住一个敌人并造成伤害。如果短时间内牵引没有被打破，那么目标会受到额外物理伤害并被拽向克烈。\n\n当处于非骑乘状态下时，这个技能会被替换为【随身手枪】——一个远程枪击技能，可将克烈击退并回复勇气值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KledW.png",
          name: "暴烈秉性",
          description:
            "克烈获得持续4次攻击的巨幅攻速加成。第四次攻击会造成更多伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KledE.png",
          name: "比武",
          description:
            "克烈发起突进，造成物理伤害并短暂获得爆发性移速加成。克烈可以再次施放这个技能来回身突进，穿过初始目标，同时造成等额伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KledR.png",
          name: "冲啊——！！",
          description:
            "克烈和斯嘎尔朝着一个位置发起冲锋，同时在身后留下一条提供加速效果的轨迹，并为自己构建一个护盾。斯嘎尔会在遭遇首个敌方英雄时将其锁定并发起撞击。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 克烈可通过击杀小兵来产生一些勇气，但会在与英雄作战时产生更多。",
        "- 【W暴烈秉性】的最后一次命中会造成比前三次命中更多的伤害——一定要打中喔！",
        "- 【R冲啊——！！！】的施放距离非常可观。试着预判敌方队伍的走位，以便你能驾着斯嘎尔狠狠教训他们一番。"
      ],
      DATAenemytips: [
        "- 克烈可通过以下方式产生勇气：1.用他的随身手枪和普攻对敌人造成伤害。2.击杀小兵。3.攻击建筑物或史诗级野怪。",
        "- 在克烈处于非骑乘状态下时，要注意观察他的勇气槽——当勇气槽到达100%时，他就会重回骑乘状态并回复可观的生命值。",
        "- 在克烈的【W暴烈秉性】准备就绪时，他会更有威胁性。"
      ],
      infotitle:
        "无畏而且无赖的约德尔人克烈是诺克萨斯的意志化身、帝国士兵的仰慕偶像、长官眼里的定时炸弹、贵族鄙夷的送死小卒。很多军士都说，克烈参与了有史以来军团所挑起的每一场征战，“获得”了军中的每一份头衔，而且从来没有却步于任何一次战斗。虽然传闻总是不可全信，但至少有一件事毋庸置疑：只要克烈骑着胆小的斯嘎尔冲进战场，他的战斗便是为了保住所拥有的一切……或是抢走他想要的一切。"
    },
    {
      name: "时间刺客",
      title: "艾克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big245000.jpg",
      scores: { difficult: 8, skills: 7, attack: 5, survive: 3 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Ekko_P.png",
          name: "Z型驱动共振",
          description:
            "艾克的Z型驱动会让他的技能和普攻充盈着时光能量。第三次命中将会造成额外伤害，如果目标是一名英雄，那么艾克自己会获得移动加速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EkkoQ.png",
          name: "时间卷曲器",
          description:
            "艾克扔出一个时光手雷，这个手雷会在命中一个敌方英雄后扩展为一个时间扭曲的力场，对场内的所有敌方单位造成伤害和减速效果。然后它会在短暂的延迟后返回到艾克手上，返回途中会对沿途的敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EkkoW.png",
          name: "时光交错",
          description:
            "艾克的普攻对低生命值的敌人造成额外魔法伤害。他可以施放【时光交错】来分离这条时间线，制造一个不稳定的异常时间点，这个时间点会在数秒后对范围内的敌人造成减速效果。如果艾克进入了这个异常时间点，那么他会获得护盾并让范围内的敌人因悬浮在时间中而陷入晕眩状态。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EkkoE.png",
          name: "相位俯冲",
          description:
            "艾克在为Z型驱动充能的同时灵巧地滚动。他的下次攻击将造成魔法伤害并扭曲时间，并让他传送到他的攻击目标旁。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/EkkoR.png",
          name: "时空断裂",
          description:
            "艾克打破他的时间线，变得不可被选取并回溯到一个更加有利的时间点上。他会回到几秒前的位置，并治疗这几秒内所受的伤势。在完成传送后，传送终点区域附近的敌人都会受到巨量伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【R时空断裂】是一个有效的逃生手段，但它在用来进攻时也会非常给力。",
        "- 如果你能够在一名敌方英雄身上触发【Z型驱动共振】，那么即使要承担一定风险也非常值得一试。它所提供的移速加成会让你轻松脱身。",
        "- 【E相位俯冲】的位移是个非常好的起手技能，能让你轻松连上艾克的其它技能。用它来让【Q时间卷曲器】完成双次命中，或者达到【W时光交错】的引爆范围。"
      ],
      DATAenemytips: [
        "- 艾克在终极技能没冷却的时候非常弱。要注意他留在身后的痕迹，来判断他的终极技能是否可用。",
        "- 艾克的晕眩区域需要布置3秒。看好他在施法时创造的幻象，并试着猜一下那个区域放在哪个地方了。",
        "- 时间卷曲器的第二次攻击造成的伤害比第一次更多；尽量避开它。"
      ],
      infotitle:
        "艾克是一名来自祖安不良街区的奇才。他可以操纵时间，从而让任何处境都变得对自己有利。通过使用他自己的发明——Z型驱动——他可以探索其他平行现实的分支并创造最完美的条件。尽管他酷爱这种自由，但只要他的朋友们遇到了威胁，他就会不顾一切地去保护他们。在旁观者眼里，艾克总是能初次尝试就完成不可能之举，屡试不爽。"
    },
    {
      name: "元素女皇",
      title: "奇亚娜",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big246000.jpg",
      scores: { difficult: 8, skills: 4, attack: 0, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/Qiyana_Passive.png",
          name: "凌人贵气",
          description:
            "奇亚娜对每名敌人发起的第一次普攻或技能会造成15(+4)(+0)额外伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QiyanaQ.png",
          name: "元素之怒 / 以绪塔尔之锋",
          description: "奇亚娜挥舞她的武器，造成伤害和基于她元素的额外效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QiyanaW.png",
          name: "方圆塑令",
          description:
            "奇亚娜突进到一个位置并用一种元素为她的武器附魔。当武器有附魔时，她的攻击和技能会造成额外伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QiyanaE.png",
          name: "天纵之勇",
          description: "奇亚娜突进至一名敌人处，并对其造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/QiyanaR.png",
          name: "惊才绝景",
          description:
            "奇亚娜发出一道冲击波来引爆沿途命中的任何元素，对元素附近的敌人造成伤害和晕眩效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: ["-"],
      DATAenemytips: ["-"],
      infotitle:
        "在丛林都市以绪奥肯中，奇亚娜谋划着自己荣登育恩塔尔塔座的无情之路。作为父母的末位继承人，她以前无古人的元素魔法技艺，傲视所有挡在面前的人。这片大地服从着奇亚娜的每一道指令，她认为自己是以绪奥肯历史上最伟大的元素使——就凭这点，她理应执掌的不仅是一座城邦，而是一个帝国。"
    },
    {
      name: "皮城执法官",
      title: "蔚",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big254000.jpg",
      scores: { difficult: 4, skills: 3, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/ViPassive.png",
          name: "爆裂护盾",
          description: "蔚持续为护盾充能。护盾会在蔚的技能命中一名敌人后激活。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ViQ.png",
          name: "强能冲拳",
          description:
            "蔚对她的拳套进行充能，并且释放一记粉碎性的勾拳，同时带着她前冲。被她命中的敌人会被击退，同时会被施加一层爆弹重拳的效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ViW.png",
          name: "爆弹重拳",
          description:
            "蔚的出拳会打破她对手的护甲，造成额外伤害并为她提供额外攻击速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ViE.png",
          name: "透体之劲",
          description:
            "蔚的下次攻击会爆裂，并透过她的目标，对目标身后的敌人造成伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ViR.png",
          name: "天霸横空烈轰",
          description:
            "蔚撞向一名敌人，将途中的人击退到两边。当她接触到目标时，她会将目标击飞到空中，然后跳上去，将目标轰到地面上。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 一记完全充能的【Q强能冲拳】会造成双倍伤害。它在追击并了结溃散的敌人时非常有效。",
        "- 【E透体之劲】会对冲击波里的任何人造成全额伤害。用它来攻击敌方小兵，从而击中躲在小兵身后的敌方英雄。",
        "- 【R天霸横空烈轰】是一个强大的先手手段，只要记得别把剩余的队友远远甩在身后就好。"
      ],
      DATAenemytips: [
        "- 一记完全充能的【Q强能冲拳】会造成双倍伤害，如果你看到蔚开始蓄力了，你应该后撤，或者尝试躲掉它。",
        "- 如果蔚连续击中你三次，她会击碎你的护甲并获得攻击速度加成。尽量不要在大型械斗中和她接战。",
        "- 蔚会在使用终极技能时免疫控制效果。记得把你的位移技能留到她的冲锋完成之后使用。"
      ],
      infotitle:
        "蔚曾经是祖安黑街上的破坏分子。她性格急躁、脾气火爆、凶神恶煞，对权威满心不屑。蔚从小到大都是孤身一人，所以练就了一身生存的本能，也培养了一种恶毒刻薄的幽默感。现在，蔚与皮尔特沃夫守卫一起合作，维护着皮城的安宁。靠着她手上的一副巨型海克斯科技拳套，无论是铜墙铁壁还是心理防线都不在话下。"
    },
    {
      name: "暗裔剑魔",
      title: "亚托克斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big266000.jpg",
      scores: { difficult: 4, skills: 3, attack: 8, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Aatrox_Passive.png",
          name: "赐死剑气",
          description:
            "每过一段时间，亚托克斯的下次普攻会造成额外物理伤害，并治疗亚托克斯，治疗量基于目标的最大生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AatroxQ.png",
          name: "暗裔利刃",
          description:
            "亚托克斯向下猛砸他的巨剑，并造成物理伤害。他可以挥击三次，每次都有一个不同的范围效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AatroxW.png",
          name: "恶火束链",
          description:
            "亚托克斯猛砸地面，对命中的第一个敌人造成伤害。英雄和大型野怪需要快速离开被影响的区域，否则就会被拖拽到中心并再次受到伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AatroxE.png",
          name: "暗影冲决",
          description:
            "被动效果：亚托克斯会在对敌方英雄造成伤害时治疗自身。主动效果：他会朝一个方向突进。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AatroxR.png",
          name: "大灭",
          description:
            "亚托克斯现出他的恶魔形态，恐惧附近的敌方小兵，并获得攻击力、治疗效果提升、以及移动速度。如果他参与了一次击杀，这个效果就会延长。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-在施放【暗裔利刃】时使用【暗影冲决】可提升你命中敌人的几率。 诸如【恶火束链】或你友军的定身效果等控制技能，将有助于你【暗裔利刃】的起手。 在你确保能够逼迫对方一战时施放【大灭】。"
      ],
      DATAenemytips: [
        "-亚托克斯的攻击非常具有波段性，所以要利用好时间来规避他的命中区域。 亚托克斯的【恶火束链】在朝着边界或亚托克斯奔跑时会更容易离开。 在亚托克斯使用他的终极技能时，保持距离以防止他复活。"
      ],
      infotitle:
        "亚托克斯和他的同胞们曾是恕瑞玛对抗虚空之地时满载荣耀的守护者一族，最终却变成了符文之地的一个更大的威胁，并且仅被击败于被诡诈的致命巫术。但在被囚禁了数个世纪后，亚托克斯率先找到重获自由之法，那就是对那些蠢得妄图尝试挥舞那把含有他灵魂精华的神奇武器的愚妄之徒进行腐蚀和转化。现在，凭借偷来的血肉躯体，他以一种近似他之前形态的凶残外表行走于符文之地中，寻求着一次毁天灭地且久未兑现的复仇。"
    },
    {
      name: "唤潮鲛姬",
      title: "娜美",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big267000.jpg",
      scores: { difficult: 5, skills: 7, attack: 4, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/NamiPassive.png",
          name: "踏浪之行",
          description:
            "每当娜美的技能命中友方英雄时，他们都会暂时获得移动速度加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NamiQ.png",
          name: "碧波之牢",
          description:
            "朝着目标区域放出一个泡泡，对命中的所有敌人造成伤害和晕眩效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NamiW.png",
          name: "冲击之潮",
          description:
            "释放一股在友方英雄和敌方英雄之间交替流动的水流，治疗友军并伤害敌军。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NamiE.png",
          name: "唤潮之佑",
          description:
            "短时间里强化一个友军英雄。友军的普通攻击能够对其目标造成额外伤害和减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NamiR.png",
          name: "怒涛之啸",
          description:
            "召唤一阵巨大的怒涛，击飞、减速并伤害沿途的所有敌人。被怒涛命中的友方英雄会获得【踏浪之行】的双倍加速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 【Q碧波之牢】的冷却时间很长，要确保在正确的时机使用它。",
        "- 在交战中对敌方英雄使用【W冲击之潮】，将会让团战走势朝着有利于你的方向倾斜。",
        "- 娜美的终极技能在对远处的敌人发起先手时非常给力。"
      ],
      DATAenemytips: [
        "- 碧波之牢是一个非常强力的技能，但冷却时间很长。如果娜美将这个技能放空，那么就可以趁机获取优势了。",
        "- 怒涛之啸的作用距离非常远，但是行进速度很慢，注意它行进的方向，然后避开它就好。",
        "- 尽量避免与被施加了唤潮之佑的单位作战，它的持续时间很短，所以避其锋芒是最有效的方法。"
      ],
      infotitle:
        "娜美是一名强大年轻的瓦斯塔亚海族。当鲛人族与巨神族之间自古订立的契约被打破，她是第一个离开海洋、踏上陆地的人。她别无选择，只能挺身而出担此重任，完成神圣的仪式从而确保族人的安全。在这崭新时代的混乱浪潮中，娜美用无比的决心和无畏的斗志面对未知的明天，用手中的唤潮者之杖召唤来自海洋的力量。"
    },
    {
      name: "沙漠皇帝",
      title: "阿兹尔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big268000.jpg",
      scores: { difficult: 9, skills: 8, attack: 6, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Azir_Passive.png",
          name: "恕瑞玛的传承",
          description: "阿兹尔可以从友方或敌方防御塔的废墟中召唤太阳圆盘。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AzirQ.png",
          name: "狂沙猛攻",
          description:
            "阿兹尔把所有黄沙士兵派往一个地点。黄沙士兵会对沿途的所有敌人造成魔法伤害，并施加持续1秒的减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AzirW.png",
          name: "沙兵现身",
          description:
            "阿兹尔召唤一个黄沙士兵来为他攻击附近的敌方单位。如果敌方单位在士兵的攻击距离内，那么士兵会代替阿兹尔进行普攻。士兵的攻击会对一条直线上的敌人造成魔法伤害。这个技能还会被动为阿兹尔和他的士兵们提供攻击速度加成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AzirE.png",
          name: "流沙移形",
          description:
            "阿兹尔暂时套上一层护盾并冲向他的一个黄沙士兵，伤害敌人。如果他命中了一位敌方英雄，那么他就会准备好一个新的黄沙士兵并中断他的位移。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/AzirR.png",
          name: "禁军之墙",
          description:
            "阿兹尔召唤一道由禁军组成的人墙向前冲锋，对敌人造成伤害和击退效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 要牢记的是，除非你准备一波拼死敌人，否则不要把【W沙兵现身】的两个黄沙士兵都放出去。最好时刻把一个黄沙士兵留在手中，你可以用它来穿墙逃生，也可以在远离另一个士兵时放出来追加伤害。",
        "- 在对线时，尽量把你的士兵放在敌方小兵和敌方英雄之间。这样一来，你就可以用它们来补刀，并对你的对手施加压力。",
        "- 首先要把【R禁军之墙】看成一个防御型技能。你可以用它来阻止敌人追击你的队友。切记，你的队友可以走过【R禁军之墙】，因此你可以在敌方近战英雄想要开战时用它来创造优势。",
        "- 带你超神带你飞！"
      ],
      DATAenemytips: [
        "- 阿兹尔依靠他的士兵来输出伤害，并且每移动一次士兵就要等待一段时间。尽量在他的士兵无法移动时来赚取优势。",
        "- 阿兹尔的持续输出非常可观，但缺乏其他法师那样的一次性爆发伤害。尽量在他能发起反击之前把他轰杀掉。",
        "- 请试着把黄沙士兵看成火焰。不要站在火焰之中。"
      ],
      infotitle:
        "阿兹尔是上古时期恕瑞玛的一位凡人皇帝，一位站在不朽神话巅峰的自豪之人。但他的狂妄引来了旁人的背叛，在最伟大胜利降临的那一刻将他杀害。而现在，数千年后，他重获新生并成为了力量无边的飞升者。阿兹尔的城市已经从黄沙之下崛起，他要让恕瑞玛恢复曾经的荣光。"
    },
    {
      name: "魔法猫咪",
      title: "悠米",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big350000.jpg",
      scores: { difficult: 2, skills: 8, attack: 5, survive: 1 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YuumiP.png",
          name: "连打带挡",
          description:
            "周期性效果：当悠米攻击一名英雄时，她会获得一层跟随她的护盾，保护她和被她附身的友方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YuumiQ.png",
          name: "摸鱼飞弹",
          description:
            "悠米发射一道飞弹，对命中的首个单位造成伤害。如果它在到达目标之前至少飞行了1秒，那么还会造成额外伤害和减速效果。\n在附身时，飞弹可以通过你的指针来控制。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YuumiW.png",
          name: "悠米出动！",
          description:
            "被动效果：悠米和她附身的友方英雄可以分享彼此的一些适应之力。主动效果：悠米突进到一名目标友方英雄处，变得不可被选取（防御塔除外）。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YuumiE.png",
          name: "旺盛精力",
          description:
            "治疗悠米并提供一个爆发性的移动速度加成。如果她处于附身状态，那么她会将这个效果传给她附身的友方英雄。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/YuumiR.png",
          name: "魔典终章",
          description:
            "悠米引导7道伤害波纹，禁锢任何被3道或以上的波纹命中的敌人。\n\n在引导这个技能期间，悠米可以移动、附身并施放【E旺盛精力】。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: ["-"],
      DATAenemytips: ["-"],
      infotitle:
        "作为一只来自班德尔城的魔法猫咪，悠米曾是一名约德尔魔女的守护灵，她的主人名叫诺拉。而当主人神秘消失以后，悠米就成为了《门扉魔典》的守护者，这是诺拉留下的一本有灵性的书，他们一起穿越书页中的传送门，共同寻找诺拉。渴望被宠爱的悠米在她的旅途中寻找着友善的同伴，为同伴们提供闪光护盾和坚决意志作为保护。虽然魔典竭尽全力让她把注意力留在最初的任务上，但悠米经常会被世俗的安逸所吸引，比如打盹和吃鱼。但安逸过后……"
    },
    {
      name: "魂锁典狱长",
      title: "锤石",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big412000.jpg",
      scores: { difficult: 7, skills: 6, attack: 5, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Thresh_Passive.png",
          name: "地狱诅咒",
          description:
            "锤石可以收割那些死在他身边的敌人们的灵魂，从而为他提供护甲和法术强度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ThreshQ.png",
          name: "死亡判决",
          description:
            "在激活时，锤石会绑住一名敌方目标，并将该目标拉向锤石。再次激活此技能，会将锤石拉向该目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ThreshW.png",
          name: "魂引之灯",
          description:
            "锤石扔出一个灯笼来为周围友军武装一层抵挡伤害的护盾。友军可以通过点击灯笼来冲到锤石身边。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/ThreshE.png",
          name: "厄运钟摆",
          description:
            "锤石会在攻击的间歇期逐渐提升普通攻击的伤害。在激活此技能时，锤石会挥舞他的锁链，将命中的所有敌人带向锁链挥舞的方向。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/ThreshRPenta.png",
          name: "幽冥监牢",
          description:
            "构建一座监牢，其墙壁在被敌方单位打破时对该敌方单位造成伤害和减速效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 沟通，是用好锤石的【W魂引之灯】的关键。让你的队友了解你要怎样用它。",
        "- 【Q死亡判决】和【E厄运钟摆】可以任意组合，从而形成强力连招。",
        "- 锤石不用亲自击杀单位也可以收集灵魂。规划好你的地图走位，来尽可能多地接近死亡，从而让你最有效率地收集灵魂。"
      ],
      DATAenemytips: [
        "- 锤石的【Q死亡判决】施法时间很长。留心他的施法动作，从而进行规避。",
        "- 故意打破【R幽冥监牢】的一面墙壁，可以让一名脆弱的友军安然逃生。",
        "- 锤石依靠收集灵魂来增加他的生存能力和伤害。在他想去收集灵魂时，给他点颜色看看。"
      ],
      infotitle:
        "暴虐又狡猾的锤石是一个来自暗影岛的亡灵，野心勃勃、不知疲倦。他曾经是无数奥秘的看守，寻找着超越生死的力量，而现在他则使用自己独创的钻心痛苦缓慢地折磨并击溃其他人，以此作为自己存在下去的手段。被他迫害的人需要承受远超死亡的痛苦，因为锤石会让他们的灵魂也饱尝剧痛，将他们的灵魂囚禁在自己的灯笼中，经受永世的折磨。"
    },
    {
      name: "海兽祭司",
      title: "俄洛伊",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big420000.jpg",
      scores: { difficult: 4, skills: 3, attack: 8, survive: 6 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Illaoi_P.png",
          name: "古神先知",
          description:
            "俄洛伊和她创造的躯壳会在附近的不可穿越的地形上生成触手。触手会挥向灵魂，躯壳，以及俄洛伊的【严酷训诫】的受害者们。触手会在命中敌人时造成物理伤害，如果命中目标是英雄还会治疗俄洛伊。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IllaoiQ.png",
          name: "触手猛击",
          description:
            "提升触手造成的伤害。在激活时，俄洛伊会挥出一条触手来造成物理伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IllaoiW.png",
          name: "严酷训诫",
          description:
            "俄洛伊跃向她的目标，造成物理伤害并使附近的触手也挥向目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IllaoiE.png",
          name: "灵魂试炼",
          description:
            "俄洛伊把灵魂从一名敌人的肉身中扯出，强迫它站在她面前。 灵魂会将其所受的一部分伤害传递到本体上。如果灵魂被击杀，或者本体离灵魂过远，那么本体就会成为一个躯壳并且开始生成触手。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IllaoiR.png",
          name: "过界信仰",
          description:
            "俄洛伊将她的神像砸在地上，对附近的敌人造成物理伤害。每命中一个敌人就会生成一条触手。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 触手是一种极好的力量来源。没有它们的帮助就不要进行战斗。",
        "- 灵魂会继承目标的当前生命值。如果你的目的是制造一个 躯壳 ，就要尽量削减你的对手的生命值，来让击杀灵魂变得容易些。",
        "- 【越界信仰】 最好用于后手接队友的强力先手技能，或在战斗正在进行时使用。在自己充当团战先手时，千万要慎重。"
      ],
      DATAenemytips: [
        "- 尽可能随时击杀触手将会使你更容易击败俄洛伊。",
        "- 当你的灵魂被抽离时，尽可能予以回击。对俄洛伊造成伤害将减少灵魂的持续时间。",
        "- 避免被【越界信仰】击中己方多人，从而减少俄洛伊生成的触手数量。"
      ],
      infotitle:
        "俄洛伊的体格强横无比，却唯独会在她的坚定信仰面前屈身。作为大海兽的先知，她挥舞着一个巨大的金色神像，将敌人的灵魂抽离体外，完全击毁他们对现实的感知。所有对“娜伽卡波洛丝的真者”发起挑战的人，很快就会发现，俄洛伊从来不单打独斗——蟒行群岛的神明会与她并肩作战。"
    },
    {
      name: "虚空遁地兽",
      title: "雷克塞",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big421000.jpg",
      scores: { difficult: 3, skills: 2, attack: 8, survive: 5 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/RekSai_Passive.png",
          name: "艾克塞之怒",
          description:
            "在地表时，雷克塞会通过普攻和技能来产生怒气。在地底时雷克塞会消耗怒气来回复她自己的生命值。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RekSaiQ.png",
          name: "女王之怒 / 猎物搜寻",
          description:
            "雷克塞的下3次普攻会对身边的敌人造成额外物理伤害。\n\n在地底时，雷克塞发射一道充满虚空能量的冲击波，对命中的敌人造成物理伤害并暴露目标。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RekSaiW.png",
          name: "遁地 / 破土而出",
          description:
            "雷克塞遁入地下，提供新的技能并提升移动速度。她的视野会被降低并且无法进行普攻。\n\n在地底时，雷克塞可以施放破土而出，来击飞并伤害身边的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RekSaiE.png",
          name: "狂野之噬 / 挖掘隧道",
          description:
            "雷克塞噬咬她的目标，可在满怒时造成双倍真实伤害。\n\n在地底时，雷克塞挖掘出一个可重复使用、长期存在的隧道。敌人可以通过踩在任一入口上来摧毁整条隧道。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RekSaiR.png",
          name: "虚空猛冲",
          description:
            "被动部分：雷克塞可通过伤害目标来将其标记。主动部分：雷克塞可激活这个技能来暂时变成不可被选取状态并扑向一个被标记的目标，并基于其已损失生命值来造成重度伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 把隧道布满整张地图，将确保你在想要施放【R虚空猛冲】时拥有足够多的选择。",
        "- 先施放【W遁地】，然后在地图各处移动，就能利用移动速度加成的优势，以及由【地听术】提供的安全性。",
        "-【地听术】可以在敌人接近你时提供警告，在你进入敌方半场时尤其有用。"
      ],
      DATAenemytips: [
        "- 如果你发现了雷克塞的某个隧道入口，那么你只需要踩上去一会儿，就可以摧毁这条隧道。",
        "- 雷克塞的【E狂野之噬】会从她的怒气中获得伤害提升。在雷克塞满怒时最好小心为上。",
        "- 当雷克塞在附近时，她可以看见你和你队友的位置，但只要你们不移动，就不会暴露位置。"
      ],
      infotitle:
        "作为食物链顶端的掠食者，残忍无情的虚空生物，雷克赛能够在地下挖掘隧道，偷袭并吞食毫无防备的猎物。她那永不满足的饥渴让曾经鼎盛一时的恕瑞玛帝国所在的地区满目疮痍。商人、贸易者和武装商队都会绕行百里，来躲开这些广袤的地区。一旦有人在遥远的地平线看到雷克赛，就等于看到自己葬身沙砾之下的命运。"
    },
    {
      name: "翠神",
      title: "艾翁",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big427000.jpg",
      scores: { difficult: 7, skills: 7, attack: 3, survive: 5 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/IvernP.png",
          name: "森林之友",
          description:
            "艾翁无法攻击非史诗野怪，也无法被非史诗野怪攻击。艾翁可以在野怪营地创造神奇的小植被，小植被可以持续成长。当小植被完全成长后，艾翁就可以送走野怪来获得金币和经验。在5级以后，艾翁可以与友军们分享增益效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IvernQ.png",
          name: "根深敌固",
          description:
            "艾翁召唤出一束荆棘，对命中的敌方单位造成伤害和禁锢效果。艾翁的友军可以突进到禁锢目标附近。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IvernW.png",
          name: "揠苗助攻",
          description:
            "在草丛中，艾翁的攻击将造成额外魔法伤害。艾翁可以激活这个技能来创造一块草丛。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IvernE.png",
          name: "种豆得瓜",
          description:
            "艾翁在一个友军身上放置一个护盾，护盾会在短暂延迟后爆炸，减速并伤害敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/IvernR.png",
          name: "小菊！",
          description:
            "艾翁召唤他的护卫好友——小菊——来与他并肩战斗。小菊如果连续攻击相同英雄三次，就会释放出一道冲击波。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 尽量用一记精妙的【Q根深敌固】接【E种豆得瓜】来帮助友军。",
        "- 使用【W揠苗助攻】来埋下伏击的伏笔！",
        "- 小菊可以格挡技巧射击并拖延敌人。使用她来为你的友军阻挡伤害！"
      ],
      DATAenemytips: [
        "- 艾翁非常滑头。在追杀他时千万要当心。",
        "- 艾翁的草丛能持续很长一段时间。要当心其中的埋伏！",
        "- 在与艾翁单独战斗时要小心，因为他可以招出小菊来帮忙！"
      ],
      infotitle:
        "半人半树的艾翁•荆足常在符文之地的丛林中游荡，所经之处无不生机盎然。他知晓自然界的种种秘密，无论是飞禽走兽还是游鱼虫孑，都与他交谊深厚。在逍遥四野的途中，艾翁会向路遇的人传授奇特的智慧，或是培植丰茂的丛林。时不时地，他也会向口风不严的蝴蝶托付自己所知的秘密。"
    },
    {
      name: "复仇之矛",
      title: "卡莉丝塔",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big429000.jpg",
      scores: { difficult: 7, skills: 4, attack: 8, survive: 2 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Kalista_Passive.png",
          name: "武术姿态",
          description:
            "如果卡莉丝塔在进行普攻或穿刺的同时被下达了移动指令，那么她会在发起进攻的同时朝着这个移动指令的方向位移小段距离。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KalistaMysticShot.png",
          name: "穿刺",
          description: "扔出一个快速移动的长矛。长矛在击杀敌人后会继续飞行。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KalistaW.png",
          name: "哨兵",
          description:
            "在卡莉斯塔与誓约者一起攻击相同目标时提供额外伤害。\n\n激活此技能可以派出一个灵魂来侦查道路，将它面前的区域显示在玩家的视野内。"
        },
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/spell/KalistaExpungeWrapper.png",
          name: "撕裂",
          description:
            "攻击时用长矛来刺穿目标。主动激活可以将长矛扯出，造成减速和逐步上升的伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/KalistaRx.png",
          name: "命运的召唤",
          description:
            "卡莉丝塔传送一位友军到自己身边。该友军随后可以冲向一个地点，并击退命中的敌人。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 撕裂是一个有用的补刀手段，因为它会在击杀一个单位后重置冷却时间。",
        "- 进行一个触发了武术姿态的移动指令时，将不会清除掉卡莉丝塔的普攻目标。",
        "- 由于她的被动技能，卡莉丝塔的移动速度会通过攻击速度而得到显著提升。"
      ],
      DATAenemytips: [
        "- 卡莉丝塔的机动能力取决于她的攻击。这意味着她在射程内没有敌人时，机动能力会很低，并且如果她的攻速被减慢了，那么她在一场战斗中的位移距离也会被降低不少。",
        "- 卡莉丝塔无法取消她的普攻动作。虽然她的机动能力很优秀，但是如果你预测到她要开始攻击了，那么这个特点就会为你提供一次对她施放技能的时机。",
        "- 如果你可以脱离卡莉丝塔的视线（例如走进草丛），那么她对你进行的普通攻击就会落空，并掉到地上去。"
      ],
      infotitle:
        "卡莉丝塔是充满复仇怨念的幽灵，是不灭的复仇之魂，是召唤自暗影岛的噩梦，专门猎杀背信弃义之人。因遭人背叛而受害的人会以血泪盼望着复仇，但只有甘愿献上自己灵魂的人，才能获得卡莉丝塔的回应。所有被卡莉丝塔盯上的人都将不可避免地遭遇不幸，因为这位死亡猎手完成誓约的方式只有一种，那就是她灵魂标枪上的冷酷灵火。"
    },
    {
      name: "星界游神",
      title: "巴德",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big432000.jpg",
      scores: { difficult: 9, skills: 5, attack: 4, survive: 4 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/Bard_Passive.png",
          name: "旅者的召唤",
          description:
            "巴德的存在会导致神奇的调和之音出现，这些调和之音会为巴德提供经验值，法力和移动速度加成。此外，小型灵体会跟随巴德并协助他进行攻击——收集调和之音会让这些木灵们随着游戏进程不断地获取能量。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BardQ.png",
          name: "星界束缚",
          description:
            "巴德发射一束能量弹，减速命中的第一个敌人，并继续向前。如果能量弹命中墙体，它还会使首个目标晕眩；如果它命中了另一个敌人，那么它会让这两个敌人都晕眩。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BardW.png",
          name: "游神圣坛",
          description:
            "巴德升起一座治疗圣坛，圣坛会在短时间内持续充能，并在治疗第一个接触它的友军后，或被敌人踩踏后消失。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BardE.png",
          name: "神奇旅程",
          description:
            "巴德在附近的地形上开启一道单向传送门。友军和敌军都可以使用传送门来穿过该地形。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/BardR.png",
          name: "调和命运",
          description:
            "巴德朝目标区域发射能量弧光，使区域内的所有单位、小兵、野怪和防御塔都暂时进入凝滞状态。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 收集调和之音来增强木灵们的攻击，是非常重要的，但不要怠慢了你的对线搭档！可以尝试带着另一个友军用你的【神奇旅程】在某条战线上来一次盛大登场。",
        "- 让你的【游神圣坛】充分充能——它们会在充满能量时治疗更多生命值。",
        "- 别忘了，敌人也可以使用你的【神奇旅程】的传送门，并且你的终极技能也会对你的友军生效！"
      ],
      DATAenemytips: [
        "- 巴德的对手也可以通过他的【神奇旅程】进行传送。你可以尾随他一起进门，如果你认为安全的话。",
        "- 你只需要踩到巴德的治疗圣坛上，就能将它们摧毁。如果巴德的队友想去吃圣坛回血，最好让他们付出点代价。",
        "- 巴德的终极技能，【调和命运】，可以影响友军，敌军，野怪和防御塔等。有时你可以跳进它的范围来获得优势！"
      ],
      infotitle:
        "巴德是星界彼端的旅者，是奇缘巧遇的使者。他艰难地维护着宇宙的平衡，从而让生命能够抵御无情的混乱。符文之地有许多人传唱关于他的歌谣，内容里流露出对他超凡本质的猜想，而所有这些歌谣都会提及同一件事：这位星界游荡者总是会被强大的魔法圣物所吸引。一群木灵欢唱乐团始终围绕在巴德身边充当小帮手，他的行为绝不会被误会带有任何恶意，因为他永远都是在为更大的良善尽职尽责，只不过他的方式不为常人理解。"
    },
    {
      name: "幻翎",
      title: "洛",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big497000.jpg",
      scores: { difficult: 5, skills: 8, attack: 2, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/Rakan_P.png",
          name: "异色羽裳",
          description: "洛会周期性地获得一层护盾。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RakanQ.png",
          name: "微光飞翎",
          description:
            "掷出一片神奇羽毛以造成魔法伤害。用在一名敌方英雄或史诗级野怪上时，会使洛有能力治疗他的友军。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RakanW.png",
          name: "盛大登场",
          description: "冲到一个位置，在到达时击飞附近的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RakanE.png",
          name: "轻舞成双",
          description:
            "飞向一名友方英雄，并提供给该英雄一层护盾。能在短时间内再次施放。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/RakanR.png",
          name: "惊鸿过隙",
          description: "获得移动速度，对触碰到的敌人造成魅惑和魔法伤害。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-洛需要附近有友军才能让他的技能运作起来。 洛的突进速度可通过他的移动速度来提升。使用爆表的速度来让你的敌人大吃一惊！ 当你放任危险到来时，就知道危险有多好玩了。"
      ],
      DATAenemytips: [
        "- 洛的位移技能都会预先显示目的地。",
        "- 只要拥有快速生效的控制技能，就能很好地应对洛。 如果洛的附近没有友军，那么他的机动能力就会被严重抑制。所以尽量在洛落单时抓他。"
      ],
      infotitle:
        "对洛特兰部落而言，瓦斯塔亚的洛是臭名远播的捣蛋鬼，同时也是有史以来最为出色的战舞舞者。他风流潇洒，魅力无穷，同时却令人难以捉摸。在艾欧尼亚高地的居民眼中，“洛”这个名字一旦出现，就一定会带来热闹非凡的节日庆典、热火朝天的狂欢派对和杂乱无章的音乐。很少人知道，这个精力充沛的浪荡子和叛逆的霞是一对儿，而他的一举一动就是为了全力配合她的行动。"
    },
    {
      name: "逆羽",
      title: "霞",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big498000.jpg",
      scores: { difficult: 5, skills: 1, attack: 10, survive: 6 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/XayahPassive.png",
          name: "锐切",
          description:
            "在使用一次技能后，霞的下几次普攻将命中沿途的所有敌人，并落下可供她召回的羽毛。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XayahQ.png",
          name: "双刃",
          description: "霞扔出两把具有伤害的匕首，并掉落可供她召回的羽毛。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XayahW.png",
          name: "致死羽衣",
          description:
            "霞创造一道刀刃风暴，来提升她的攻击速度和伤害，并且如果她的攻击命中了敌人，还会获得移动速度。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XayahE.png",
          name: "倒钩",
          description: "霞唤回她之前掉落的所有羽毛，对敌人造成伤害和禁锢效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/XayahR.png",
          name: "暴风羽刃",
          description:
            "霞跳向空中，变为不可被选取状态，然后扔出一排匕首，同时掉落可供她召回的羽毛。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-霞的攻击和技能会在地上留下羽毛，可供她稍后召回，造成大量范围伤害和控制效果。",
        "-霞可以使用【R暴风羽刃】来躲避几乎所有技能，同时创造成吨的羽毛。尽量把这个技能在攻击和防御两方面的特点都利用好。"
      ],
      DATAenemytips: [
        "- 霞的倒钩只会禁锢那些被3支以上羽毛所命中的目标。",
        "- 在同一片区域与霞进行长时间的作战，会让她扔出大量羽毛。尽量边移动边打！",
        "- 在你有万全准备时再出手杀她。千万要提防，霞的终极技能的不可被选取状态，会让战局很快变为对她更有利。"
      ],
      infotitle:
        "身为瓦斯塔亚的志士，霞要掀起一场革命来拯救她的族群。她身法敏捷又慧心独具，凭借锋芒逼人的羽刃，扫除任何异己。霞与她的灵魂伴侣洛并肩作战，共同守护他们日渐衰落的部族，同时韬光养晦，希望终有一天能率领全族重夺昔日荣光。"
    },
    {
      name: "山隐之焰",
      title: "奥恩",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big516000.jpg",
      scores: { difficult: 5, skills: 3, attack: 5, survive: 9 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/OrnnP.png",
          name: "活体锻炉",
          description:
            "奥恩使所有来源的护甲和魔抗加成额外提升10%。\n\n奥恩可在地图的任意位置上花费金钱来锻造非消耗品的装备。\n\n此外，当奥恩到达12级时，他将能把自己的任何合适的装备升级成杰作装备，最多可升级2件。12级后，每升1级，奥恩就可为一名友方升级一件装备，方法是前往友方英雄附近然后点击友方身上的装备，每位友方最多可升级1件。\n\n奥恩可以直接通过他的锻造菜单或商店菜单来锻造物品。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/OrnnQ.png",
          name: "火山突堑",
          description:
            "奥恩猛砸地面，形成一道裂隙来伤害并减速被击中的敌人们。在一阵短暂的延迟后，一个熔岩之柱会在裂隙的终点处形成。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/OrnnW.png",
          name: "风箱炎息",
          description:
            "奥恩向前进发，喷出炎息。被最后一阵炎息命中的敌人将变为易碎状态。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/OrnnE.png",
          name: "炽烈冲锋",
          description:
            "奥恩冲锋，对他途经的敌人造成伤害。如果奥恩在冲锋状态下与地形产生碰撞，那么这次碰撞就会在他四周生成一道冲击波，来对敌人造成伤害和击飞效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/OrnnR.png",
          name: "熔铸之神的召唤",
          description:
            "奥恩在目标位置召唤一个巨大的岩浆元素，岩浆元素会以逐渐提升的速度跑向奥恩。被岩浆元素途经的敌人会受到伤害、减速效果并被施加易碎效果。奥恩可以再次施放这个技能，以冲向岩浆元素，并在命中岩浆元素时重新导向岩浆元素，使岩浆元素可将途经的任何敌人击飞，造成等额的伤害并再次施加易碎效果。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 掌握装备的合成路线，可以帮你在线上快速选择装备进行升级。",
        "- 【火山突堑】可以用来设置人工地形，从而威慑敌人。",
        "- 你的技能施放顺序非常重要！尽可能将【易碎】的作用发挥至最佳。"
      ],
      DATAenemytips: [
        "- 离墙体远一点。如果奥恩没有晕眩到你，那么他就没那么强大了。",
        "- 攻击奥恩，就可以让他没法在线上制造装备。"
      ],
      infotitle:
        "奥恩是弗雷尔卓德的一位半神，主掌着锻造和工艺。他在名为炉乡的火山下的溶洞中凿出了一座雄伟的工坊，独自一人在里头干活。他摆弄着熔岩沸腾的坩埚，提炼矿石，打造出无与伦比的精良物件。当其他神灵——尤其是沃利贝尔，在大地上行走并且介入了凡间的事务时，奥恩就会出面，将这些鲁莽的家伙劝回各自的位置上。要么是用手里可靠的锤子，要么就是群山的烈火。"
    },
    {
      name: "解脱者",
      title: "塞拉斯",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big517000.jpg",
      scores: { difficult: 5, skills: 8, attack: 3, survive: 4 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/passive/SylasP.png",
          name: "破敌禁法",
          description:
            "在施放一次技能后，塞拉斯会储存一层【破敌禁法】效果。塞拉斯的普攻将消耗一层效果并环绕自身挥舞他的盈能锁链来对命中的敌人造成额外魔法伤害。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SylasQ.png",
          name: "锁链鞭击",
          description:
            "塞拉斯甩出他的锁链，锁链会在目标区域交叉，并对敌人造成伤害和减速效果。\n\n在一段延迟后，魔法能量将从交叉点迸发，造成魔法伤害并提升减速效果。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SylasW.png",
          name: "弑君突刺",
          description:
            "塞拉斯带着魔法之力跃向一名敌人，造成带有处决效果的伤害，并且在对抗敌方英雄时治疗自身。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SylasE.png",
          name: "潜掠/强掳",
          description:
            "塞拉斯突进至一个位置，并获得一层吸收魔法伤害的护盾。塞拉斯可以再次施放来将他的锁链向一个方向挥出，将他自身拉向命中的第一个敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/SylasR.png",
          name: "其人之道",
          description: "塞拉斯窃取一名敌人的终极技能，然后可以免费施放该技能。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 等你或者敌人的血量都较低时再施放【弑君突刺】，会达到最佳效果。",
        "- 在每次技能放出后都追加一次普攻，即可让【破敌禁法】的效果最大化。",
        "- 对敌方终极技能的明智使用，能为己方开创新的开团机会。"
      ],
      DATAenemytips: [
        "- 塞拉斯的血条可是具有欺骗性的，要当心他的【弑君突刺】！",
        "- 尽量在塞拉斯无法获取你的终极技能时与他作战。"
      ],
      infotitle:
        "在小城边沟镇长大的塞拉斯，如今却成了德玛西亚雄都的黑暗面的代表人物。当他还是个男孩的时候，人人避之唯恐不及的搜魔人发现他拥有感知法师的能力，便将他控制起来，利用这种能力来对付塞拉斯的同类。逃出生天之后的塞拉斯现在是一个坚定的抗命者，他要借助法师的力量摧毁自己曾经侍奉过的王国。遭到放逐而前来追随他的法师也与日俱增。"
    },
    {
      name: "万花通灵",
      title: "妮蔻",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big518000.jpg",
      scores: { difficult: 5, skills: 9, attack: 1, survive: 1 },
      skills: [
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/Neeko_P.png",
          name: "天生幻魅",
          description:
            "妮蔻可以假扮成一名友方英雄。承受来自敌方英雄的伤害或是施放伤害型的技能都会打破这个假扮状态。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NeekoQ.png",
          name: "盛开花种",
          description:
            "妮蔻扔出一颗种子以造成伤害。种子在再次命中英雄或击杀单位时会盛开。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NeekoW.png",
          name: "两生花影",
          description:
            "被动效果：妮蔻每第三次攻击造成额外魔法伤害。主动效果：妮蔻能够朝一个方向投射出一个幻像。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NeekoE.png",
          name: "缠结倒刺",
          description:
            "妮蔻投出一团倒刺，对它沿途的所有东西造成伤害和禁锢效果。如果倒刺命中了一名敌人，就会变得更大、更快并且禁锢时间更长。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/NeekoR.png",
          name: "怒放",
          description:
            "在准备阶段后，妮蔻会跃入空中，并获得一层护盾。在着陆时，附近的敌人会受到伤害并晕眩。如果妮蔻处于假扮状态时，那么准备阶段不会被敌人看见。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "-你可以在[选项]菜单中将她的被动设置到热键上。默认键位是[SHIFT]+[F1~F5] 尽量选好你的【天生幻魅】的施放时机，没用好的话，就会引起敌人的警觉。"
      ],
      DATAenemytips: [
        "-在对抗妮蔻时，站在小兵后面是很危险的，因为【缠结倒刺】会变得更强力。 在妮蔻处于假扮状态时，【怒放】的警告视觉效果是不可见的。"
      ],
      infotitle:
        "妮蔻来自一个早已迷失的瓦斯塔亚部落。她可以借用别人的外表来伪装自己，融入人群，甚至通过影响别人的情绪状态，一瞬间就能化敌为友。没人知道妮蔻到底在哪儿——或者到底是谁，但是想要为难她的人会立刻见识到她的本色，感受原始的精神魔法倾泻在自己身上的痛苦。"
    },
    {
      name: "血港鬼影",
      title: "派克",
      banner: "https://game.gtimg.cn/images/lol/act/img/skin/big555000.jpg",
      scores: { difficult: 7, skills: 1, attack: 9, survive: 3 },
      skills: [
        {
          icon:
            "https://game.gtimg.cn/images/lol/act/img/passive/PykePassive.png",
          name: "溺水之幸",
          description:
            "当派克消失在敌人视野外时，他可从所受的来自敌方英雄的伤害中回复显著的生命值。派克无法从任何来源（装备、符文等）中获得额外最大生命值加成，而是会获得攻击力作为替代。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PykeQ.png",
          name: "透骨尖钉",
          description: "派克要么戳刺他前方的一名敌人，要么将一名敌人拽向他。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PykeW.png",
          name: "幽潭潜行",
          description:
            "派克进入伪装状态并获得显著的移动速度加成，此移速加成会逐渐衰减。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PykeE.png",
          name: "魅影浪洄",
          description:
            "派克突进并在身后留下一个幻影。幻影将会返回派克身边，并晕眩沿途的敌人。"
        },
        {
          icon: "https://game.gtimg.cn/images/lol/act/img/spell/PykeR.png",
          name: "涌泉之恨",
          description:
            "派克进行闪烁以处决低血量的敌人，并且如果处决成功还能再次施放此技能并为一名助攻的友军提供额外的金币。"
        }
      ],
      item1: [],
      item2: [],
      DATAallytips: [
        "- 派克非常脆，因此不要害怕暂时撤出战斗。在敌人看不见你时，你可以通过【溺水之幸】来回复显著的生命值。",
        "- 用蓄力版的【透骨尖钉】命中一名敌人，总会将该敌人拖拽一段相同的距离。在近战距离使用它，可将敌人拽到你身后。",
        "- 秒放版的【透骨尖钉】更快且能造成额外伤害 你的很多进攻型技能也是你的逃生工具。务必确保你总有一套方案来撤离战斗。"
      ],
      DATAenemytips: [
        "- 派克可从所受的来自敌方英雄的伤害中回复显著的生命值，但前提是你看不见他！",
        "- 当派克隐藏在附近的【幽潭潜行】中时，会有鲨鱼在你脚下绕圈。",
        "- 尽量不要站在低血量友军的附近。如果派克用【涌泉之恨】处决了你的低血量友军，那么你就会是名单上的下一个。"
      ],
      infotitle:
        "在比尔吉沃特的屠宰码头，颇有名气的鱼叉手派克葬身在一条巨大的琢珥鱼腹内……然而，他却回来了。他在家乡的阴街陋巷中徘徊着，用超自然的手段干脆残忍地解决那些鱼肉他人的恶棍——一座因捕猎怪物而自豪的城市如今发觉自己却成了狩猎的目标。"
    }
  ]
};

module.exports = { qunbu3 };
