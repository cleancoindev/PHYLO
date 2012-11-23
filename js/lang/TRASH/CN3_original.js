(function() {
    function g() {};
    g.prototype.lang = [{
	"info": {
	    "lang": "中文",
	    "author": "Dominic Zhang (张说）",
	},
	"header": {
	    "field 1": "开始",
	    "field 2": "指导",
	    "field 3": "关于",
	    "field 4": "鸣谢",
	    "field 5": "排名",
	    "field 6": "即时排名",
	    "field 7": "高分",
	    "field 8": "结果",
	    "field 9": "返回",
	    "field 10": "用于比较基因组学的人类计算框架",
	    "field 11": "手机",
	    "field 12": "经典版",
	    "field 13": "想要贡献吗？点击这里",
	    "field 14": "返回经典版",
	},
	"body": {
		"play": {
			"gameselect": {
				"login": {
				    "field 1": "匿名登录",
				    "field 2": "登录",
				    "field 3": "注册",
				    "field 4": "或者快速登录",
				    "field 5": "退出",
				    "field 6": "清登录或注册以便纪录你对科学所作的贡献",
				    "field 7": "用户名",
				    "field 8": "密码",
				    "field 9": "信箱地址（自选）",
				    "field 10": "确认",
				    "field 11": "挑战你的朋友,分享你的校准过程, 更多!",
				    "field 12": "用Facebook链接到Phylo ",
				    "field 13": "未登录. 匿名开始.",
				    "field 14": "欢迎 ***",
				    "field 15": "你已退出",
				    "field 16": "无法登录: 用户名／密码错误.",
				    "field 17": "退出",
				    "field 18": "注册",
				    "field 19": "欢迎回来! 不是 ***?",
				},
			"levelselect": {
			    "header": "选择等级. 按难度选择等级, 关数或者要解决的疾病",
			    "random": {
				"field 1": "选择序列号码.",
				"field 2": "随机",
				"field 3": "简单 - 困难",
			    },
			    "level id": {
				"field 1": "输入你选择的游戏的关数",
				"field 2": "关数",
				"field 3": "输入关数",
				"field 4": "提交",
			    },
			    "disease": { 
				"field 1": "选择疾病以获得需要解决的等级",
				"field 2": "疾病",
				"field 3": "血液和免疫系统",
				"field 4": "骨骼和皮肤",
				"field 5": "大脑和神经系统",
				"field 6": "癌症",
				"field 7": "消化系统",
				"field 8": "心脏和循环系统",
				"field 9": "代谢紊乱",
				"field 10": "鸡肉",
				"field 11": "再生系统",
				"field 12": "呼吸系统",
				"field 13": "感觉系统",
			    },
			},
			"short tutorial": {
			    "field 1": "相左或向右移动空格”. 使相同颜色的空格移动到同一条垂直的直线上，避免出现空隙.双击后将弹出一个选择更多块的对话框.",
			    "field 2": "继续",
			    "field 3": "点击这里查看你工作的进度.红色分数意味着你可以改进那一分支!",
			    "field 4": "看这里的面值数.那是你所需要移动到下一关的最小的数值.当准备完毕时点击这里跳动的星星!",
			    "field 5": "准备完毕!",
			    "field 6": "强烈建议你完成这个教程.麻烦再点击一次.",
			},
			"video tutorial": {
			    "field 1": "学习Phylo的基础知识",
			},
			"game board": {
			    "field 1": "分数",
			    "field 2": "面值",
			    "field 3": "关级",
			    "field 4": "最高分数",
			    "field 5": "等级",
			    "field 6": "难度",
			    "field 7": "开启音乐-关闭音乐-静音",
			    "field 8": "统计",
			    "field 9": "匹配",
			    "field 10": "不匹配",
			    "field 11": "空隙",
			    "field 12": "空隙扩大",
			    "field 13": "现在评分",
			},
			"end of game": {
			    "field 1": "感谢",
			    "field 2": "感谢您对科学做的贡献.你知道吗:",
			    "field 3": "恭喜！您已完成最后一关,我们已将您对这一部分的校准进行了提交.",
			    "field 4": "很遗憾,您未能在规定时间内完成最后一关,所以您对这一部分的校准没有被进行提交.",
			    "field 5": "您玩过了等级***.如果您日后还想再玩一遍这一等级的话请记住这个关数!DNA这一部分的未解之谜已经被记录:",
			    "field 6": "这一等级已经被完成***次.用户未能完成这一关***次.",
			    "field 7": "这一等级的最高分是: ***",
			    "field 8": "这一等级的平均分是: ***",
			    "field 9": "***获得了这一等级的最高分.",
			    "field 10": "目前为止***用户已经提交***校准***不同等级.",
			    "field 11": "新游戏",
			    "field 12": "重新游戏",
			    "field 13": "分享到Facebook",
			    "field 14": "挑战一位朋友",
			    "field 15": "目录",
			    "field 16": "现在再点击一次星星立即提交,或者继续挑战获得更高的分数!",
			},
			},
			"tutorial": {
			    "field 1": "在Phylo里面,你的目标是水平移动一连串的方块从而使纵列上颜色相同的数量达到最大.每配对成功一个颜色就有一个奖励.",
			    "field 2": "然而,这一连串的颜色并不能全部配对成功.所以,颜色错配和间隙的出现使不可避免的所以你会得到相应的处罚.",
			    "field 3": "你的挑战就是在奖励和处罚之间找到一个权衡点.",
			    "field 4": "对于颜色配对成功和错配来说奖励和处罚的力度都是很小的.但是出现间隙的代价将会很大!相比较于出现几个小的间隙来说一个大的间隙使更可取的.尽量使间隙地数量减少.",
			    "field 5": "你注意到左边的那棵树了吗?它在告诉你哪些方块应该先对齐.当你需要从两个颜色选择一个时这将会很有用.对于连串的方块来说使颜色在同一个组中配对成功比使不同组的颜色配对成功更重要.",
			    "field 6": "为了到达最后一关, 你需要通过许多的等级.你需要超过平均分数 (例如电脑的分数).当你的分数打平或超过平均分数时,在右下角将出现一颗闪亮的星星.点击星星到达下一关.",
			    "field 7": "当所有串的方格都出现之后,你要尽可能得到更高的分数然后再点击星星一次来提交！",
			    "field 8": "匹配",
			    "field 9": "不匹配",
			    "field 10": "缝隙",
			    "field 11": "系统树",
			},
			"关于": {
			    "field 1": "Phylo是关于什么的?",
			    "field 2":"尽管它或许只是一个游戏, 但Phylo事实上的确是一个用来处理人类计算能力从而解决一个普遍的问题的一个框架;多重序列的校准.",
			    "field 3": "什么是多重序列的校准呢?",
			    "field 4": "序列校准是排列D.N.A，R.N.A或者蛋白质序列相似性的一种方式.这些相似性可能是功能，结构，或者序列间的进化关系所导致的结果.从这样的一个校准过程中,物理学家或许能推断出共同的进化起源，确定重要的功能遗址,并分析突变结果.更重要的是,生物学家可以某种基因病的起源.",
			    "field 5": "问题",
			    "field 6": "传统上,多重序列校准算法运用复杂计算的启发式教学法来排列序列. Unfortunately不幸运的是,由于想获得一个理想的校准可能过于昂贵所以启发式教学法的运用不能保证全球的优化.这很大一部分原因归结于基因组庞大的尺寸,大概包含了30亿对基础基因,并且在每一次校准中每一个附加序列还会导致更加复杂的计算过程.",
			    "field 7": "我们的方法",
			    "field 8": "人类已经进化成了能高效认识模式和解决视觉问题的状态.通过将多重序列校准进行抽象来操纵由不同颜色的形状所组成的模式,我们现在已经适应了通过人类的能力来获益的这个问题. 借助通过启发式教学方法运算法则校准出来的数据,我们允许用户优化运算法则可能失败的地方.",
			    "field 9": "数据",
			    "field 10": "所有的校准过程通过加州大学圣克鲁兹分校的基因组浏览器而被充分地利用了.事实上,推测所有的校准都包含了已经被推测出与不同的遗传性疾病相关的人类DNA的部分,例如乳腺癌.每一次校准都被接收,分析,并且储存在数据库中,最终它将被作为优化后的状态重新引回到全球的校准当中.",
			    "field 11": "获取更多关于这些主题的信息，点击这里.",
			},
			"credit": {
			    "field 1": "项目经理 (媒介和科学上的接触) ",
			    "field 2": "发展团队",
			    "field 3": "最初设计者",
			    "field 4": "支持",
			    "field 5": "跟上我们",
			    "field 6": "音乐",
			    "field 7": "特别鸣谢",
			},
			"ranking": {
			    "field 1": "2011 Phylo 排名",
			    "field 2": "排名,用户名,分数",
			    "field 3": "总排名",
			    "field 4": "2011 贡献者",
			    "field 5": "首席贡献者",
			    "field 6": "每种疾病领域的排名",
			    "field 7": "血液和免疫系统",
			    "field 8": "骨骼和皮肤",	
			    "field 9": "大脑和神经系统",
			    "field 10": "癌症",
			    "field 11": "消化系统",
			    "field 12": "心脏和循环系统",
			    "field 13": "代谢紊乱",
			    "field 14": "鸡肉",
			    "field 15": "再生系统",
			    "field 16": "呼吸系统",
			    "field 17": "感觉系统",
			    "field 18": "信息",
			    "field 19": "疾病分类",
			    "field 20": "疾病的分类在2011年11月29日的Phylo被引用.",
			    "field 21": "注: 分类如有更改.",
			    "field 22": "评分系统",
			    "field 23": "评分系统的描述",
			    "field 24": "注册用户的分数是基于能提高原始DNA序列校准的拼图数量的.",
			    "field 25": "我们在44种多重序列校准的原始位置重新插入了所有的拼图解决方式.对于使用了任何一种提高了完整的基因组校准分数的解决方式的玩家他们都会得到一分的信誉分数.当然,重复的将会去除.下面公布各种排名:",
			    "field 26": "总排名:所有的拼图都会经过周密考虑过的.玩家将根据他们的总分数进行分类分类.",
			    "field 27": "最突出贡献排名:只有第一找到已经被插入游戏的解决方式的玩家可以获得此图的一分.其他人得0分.",
			    "field 28": "疾病分类排名:只有序列可以与一个与指定类别的疾病相关的基因对应上的拼图才在考虑范围内.种类清单和相关的疾病在疾病分类部分中都有所描述.",
			},
		"live ranking ": {
		    "field 1": "Phylo即时排名",
		    "field 2": "即时排名",
		    "field 3": "月度",
		    "field 4": "周度",
		    "field 5": "等级完成",		
		},
		" results ": {
		    "field 1": "2011结果",
		    "field 2": "包含所有信息的压缩包在这里可以下载",
		},
		" challenge ": {
		    "field 1": "挑战",
		    "field 2": "挑战开始",
		    "field 3": "输入以上一位朋友的名字，或者直接点击现在开始键来挑战一个随机的玩家!",
		    "field 4": "现在开始",
		},
		},
	" footer ": {
	    "field 1": "Phylo是一个具有挑战性的页面游戏，在这个游戏里每个完整的拼图都有助于测绘人类的基因疾病。了解更多。",
	    "field 2": "在Facebook上加入Phylo组织或者给我们竖起你的大拇指吧.",
	},
	},
	}];
    var proto = g.prototype,
	attr = [
		["lang",proto.lang],
		];
    common.exportSingleton("CNscript",g,proto);
})();