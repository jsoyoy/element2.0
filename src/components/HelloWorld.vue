<template>
  <div class="hello">
    <el-row>
      <el-col :push="4"><h1>Element2.0新特性</h1></el-col>
    </el-row>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>综合</h2>
      <p slot="t"></p>
      <div slot="c">
        1.新增 theme-chalk 主题 <br>
        2.新增 TypeScript 类型声明 <br>
        3.重绘了全部图标，并新增了部分图标 <br>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>可访问性</h2>
      <p slot="t"></p>
      <div slot="c">
        增强以下组件的可访问性：Alert、AutoComplete、Breadcrumb、Button、Checkbox、Collapse、Input、InputNumber、Menu、Progress、Radio、Rate、Slider、Switch 和 Upload   <br>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i> 全局设置组件大小size</h2>
      <p slot="t">支持了尺寸的全局设置，用一行代码就可以改变所有组件的默认尺寸</p>
      <div slot="c">
        <p class="code"><span>// medium / small / mini</span><br>Vue.use(Element, { size: 'small' })</p>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-star-on"></i>新增布局组件 </h2>
      <p slot="t"></p>
      <div slot="c">
        <p class="code">
          el-container：外层容器。 <br>
          el-header：顶栏容器。<br>
          el-aside：侧边栏容器。<br>
          el-main：主要区域容器。<br>
          el-footer：底栏容器。<br> <br>
          <span>// el-container当子元素中包含el-header 或 el-footer 时，全部子元素会垂直上下排列，否则会水平左右排列。</span>
        </p>
        <el-alert type="warning" show-icon>
          <slot>组件采用了 flex 布局,使用前请确定目标浏览器是否兼容 <br> 【el-container】 的子元素只能是后四者，后四者的父元素也只能是 【el-container】</slot>
        </el-alert>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Layout布局(基于断点的隐藏类)</h2>
      <p slot="t"></p>
      <div slot="c">
        <p class="code hidden-md-and-down">
          <span>// 首先，引入</span> <br>
          import 'element-ui/lib/theme-chalk/display.css';<br><br>
          <span>// 在DOM 元素或自定义组件上添加以下类名</span><br>
          hidden-xs-only -     当视口在 xs 尺寸时隐藏 </br>
          hidden-sm-only -     当视口在 sm 尺寸时隐藏 </br>
          hidden-sm-and-down - 当视口在 sm 及以下尺寸时隐藏 </br>
          hidden-sm-and-up -   当视口在 sm 及以上尺寸时隐藏 </br>
          hidden-md-only -     当视口在 md 尺寸时隐藏 </br>
          hidden-md-and-down - 当视口在 md 及以下尺寸时隐藏 </br>
          hidden-md-and-up -   当视口在 md 及以上尺寸时隐藏 </br>
          hidden-lg-only -     当视口在 lg 尺寸时隐藏 </br>
          hidden-lg-and-down - 当视口在 lg 及以下尺寸时隐藏 </br>
          hidden-lg-and-up -   当视口在 lg 及以上尺寸时隐藏 </br>
          hidden-xl-only -     当视口在 xl 尺寸时隐藏 </br>
        </p>
        <el-alert type="warning" show-icon>
          <slot>
            2.x：xs、sm、md、lg 、xl(≥1920px) <br>
            1.x：xs、sm、md、lg</slot>
        </el-alert>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>color色彩和icon</h2>
      <p slot="t">色彩和icon有所变化</p>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i> Button:</h2>
      <p slot="t">新增 round 属性，用于圆角按钮 #6643</p>
      <div slot="c">
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="danger" round>round</el-button>
        <p class="code">el-button type="danger" round</p>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Radio/Checkbox</h2>
      <p slot="t">增加 border 属性和 size</p>
      <div slot="c">
        <div>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </div>
        <div style="margin: 20px 0">
          <el-radio label="1" border size="medium">备选项1</el-radio>
          <el-radio label="2" border size="medium">备选项2</el-radio>
        </div>
        <el-alert type="warning" show-icon>
          <slot>size仅在 border 为真时有效</slot>
        </el-alert>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>input</h2>
      <!--<p slot="t">新增 suffix、prefix 的 slot，以及 prefix-icon、prefix-icon 属性，用于给输入框内部增加前置和后置内容</p>-->
      <ul slot="t">
        <li>1. 移除 on-icon-click 属性和 click 事件</li>
        <li>2. change 事件现在仅在输入框失去焦点或用户按下回车时触发，与原生 input 元素一致。如果需要实时响应用户的输入，可以使用 input 事件</li>
        <li>3. icon 属性 => suffix、prefix的slot或者 prefix-icon、prefix-icon属性</li>
      </ul>
      <div slot="c">
        <el-form>
          <el-input placeholder="请输入内容" v-model="input1" @change="showInputChange">
            <template slot="prepend"><span @click="showInputClick">click me</span></template>
          </el-input>
          <el-input placeholder="请输入内容" v-model="input2" @input="showInputIn">
            <template slot="prepend"><span @click="showInputClick">click me</span></template>
          </el-input>
        </el-form>
      </div>
      <el-alert type="warning" show-icon>
        <slot>size仅在 border 为真时有效</slot>
      </el-alert>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>InputNumber </h2>
      <p slot="t">在 InputNumber 的加减按钮上单击鼠标右键不再触发值的改变 <span class="version">(2.0.2)</span></p>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Select</h2>
      <p slot="t">新增 reserve-keyword 属性，用于在选择某个选项后保留当前的搜索关键词</p>
      <div slot="c">
        <!--<p class="code"><span></span></p>-->
        <img width="60%" src="../assets/reserve-keyword.png" alt="">
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Switch 开关</h2>
      <p slot="t"></p>
      <div slot="c">
        由于 on-* 属性在 JSX 中会被识别为事件，导致 Switch 所有 on-* 属性在 JSX 中无法正常工作，所以 on-* 属性更名为 active-*，对应地，off-* 属性更名为 inactive-*。
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>TimePicker</h2>
      <p slot="t"></p>
      <div slot="c">
        <ul>
          <li>1. 可以用方向键导航，用 Enter 选中时间</li>
          <li>2. 新增 start-placeholder 和 end-placeholder，用于设置范围选择时两个输入框的占位符(Datepicker)</li>
          <li>3. 新增 arrow-control 属性，提供另一种交互形式(DateTimePicker)</li>
        </ul>
        <p class="code">
          is-range <br>
          range-separator="至" <br>
          arrow-control <br>
          start-placeholder="start-placeholder"<br>
          end-placeholder="end-placeholder" <br>
        </p>
        <el-time-picker
          is-range
          range-separator="至"
          arrow-control
          start-placeholder="start-placeholder"
          end-placeholder="end-placeholder"
          placeholder="选择时间范围">
        </el-time-picker>
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Datepicker</h2>
      <p slot="t"></p>
      <div slot="c">
        <ul>
          <li>1. type 为 datetimerange 时可以使用 timeFormat 格式化时间选择器 #6052<br></li>
          <li>2. 新增 start-placeholder 和 end-placeholder，用于设置范围选择时两个输入框的占位符 #7169<br></li>
          <li>3. 新增 value-format 属性，支持对绑定值的格式进行自定义，#7367<br></li>
          <li>4. 新增 unlink-panels 属性，用于在选择日期范围时取消两个日期面板之间的联动<br></li>
        </ul>
        <p>{{datepicker1}}</p>
        <el-date-picker
          v-model="datepicker1"
          type="datetimerange"
          align="right"
          range-separator="至"
          unlink-panels
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          format="yyyy 年 MM 月 dd 日"
          value-format="yyyy-MM-dd: HH小时：mm分：ss秒"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Upload 上传</h2>
      <p slot="t">
        新增 limit 和 on-exceed 属性，支持对上传文件的个数进行限制
      </p>
      <div slot="c">
        1. limit	最大允许上传个数 <br>
        2. on-exceed	文件超出个数限制时的钩子 <br>
        <p class="code">
          :on-exceed="handleExceed" <br><br>
          handleExceed(files, fileList) {  <br>
            this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          }
        </p>
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Rate</h2>
      <p slot="t">text-template 属性更名为 score-template</p>
      <div slot="c">
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Form</h2>
      <p slot="t"></p>
      <div slot="c">
        <ul>
          <li>1. 新增 inline-message 属性，设置后校验信息会以行内样式显示<br></li>
          <li>2. 新增 status-icon 属性，用于在输入框中显示校验结果反馈图标 <br></li>
          <li>3. Form 和 FormItem 新增 size 属性，用于控制表单内组件的尺寸<br></li>
          <li>4. validate 方法在不传入 callback 的情况下返回 promise，<br></li>
          <li>5. 新增 clearValidate 方法，用于清空所有表单项的验证信息<br></li>
        </ul>
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Table</h2>
      <p slot="t"></p>
      <div slot="c">
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i></h2>
      <p slot="t"></p>
      <div slot="c">
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
  </div>
</template>

<script>
  import com from './common.vue'
  export default {
    data () {
      return {
        input1: '',
        input2: '',
        pickerOptions2: {},
        datepicker1: ''
      }
    },
    methods: {
      showInputClick () {
        alert('show input slot=prepend  click')
      },
      showInputChange () {
        alert(this.input1)
      },
      showInputIn () {
        alert(this.input2)
      }
    },
    components: {
      com
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
    line-height: 30px;
  }
  p{
    line-height: 30px;
  }
  a {
    color: #42b983;
  }
  .code{
    background: rgba(0,0,0,.7);
    padding: 10px 30px;
    color: deeppink;
  }
  .code span{
    color: cornsilk;
  }
  .version{
    color: crimson;
  }
</style>
