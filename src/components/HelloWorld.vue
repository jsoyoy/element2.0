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
        <p class="code hidden-sm-and-down">
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
      <h2 slot="h"><i class="el-icon-edit"></i>Tree</h2>
      <p slot="t"></p>
      <div slot="c">
        <ul>
          <li>1. 子节点在首次被展开之前不进行渲染 <br>(多选父节点，子节点过多，子节点又是异步加载，会触发多次请求，影响页面性能) </li>
          <li>2. 新增 check-descendants 属性，设置 lazy 模式下勾选节点时，是否完全展开整个子树 <br> </li>
        </ul>
        <testtree></testtree>
        <!--<p class="code"><span></span></p>-->
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
        <img width="100%" src="../assets/reserve-keyword.png" alt="">
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
          :unlink-panels="false"
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
          <span> // files当前选择的文件，fileList已选择的文件</span><br>
          handleExceed(files, fileList) {  <br>
            &nbsp&nbsp this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
          }<br>
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
          <li>1. 新增 inline-message 属性，设置后校验信息会以行内样式显示</li><br>
          <li>2. 新增 status-icon 属性，用于在输入框中显示校验结果反馈图标 </li><br>
          <li>3. Form 和 FormItem 新增 size 属性，用于控制表单内组件的尺寸</li><br>
          <li>4. validate 方法在不传入 callback 的情况下返回 promise</li><br>
          <li>5. 新增 clearValidate 方法，用于清空所有表单项的验证信息</li>
        </ul>
        <!--<p class="code"><span></span></p>-->
        <test-form></test-form>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Table</h2>
      <p slot="t"></p>
      <div slot="c">
        <ul>
          <li>1. 新增 span-method 属性，用于合并行或列 <br> (参数 ：当前行row、当前列column、当前行号rowIndex、当前列号columnIndex) </li><br>
          <li>2. 新增 clearSort 方法，用于清空排序状态 </li><br>
          <li>3. 新增 clearFilter 方法，用于清空过滤状态</li><br>
          <li>4. 对于可展开行，当该行展开时会获得一个 .expanded 类名，方便自定义样式</li><br>
          <li>5 .新增 size 属性，用于控制表格尺寸 </li><br>
          <li>6. 新增 toggleRowExpansion 方法，用于手动展开或关闭行</li><br>
          <li>7. 新增 cell-class-name 属性，用于指定单元格的类名</li><br>
          <li>8. 新增 cell-style 属性，用于指定单元格的样式 </li><br>
          <li>9. 新增 header-row-class-name 属性，用于指定表头行的类名</li><br>
          <li>10. 新增 header-row-style 属性，用于指定表头行的样式</li><br>
          <li>11. 新增 header-cell-class-name 属性，用于指定表头单元格的类名</li><br>
          <li>12. 新增 header-cell-style 属性，用于指定表头单元格的样式 </li><br>
          <li>13. TableColumn 的 prop 属性支持 object[key] 格式 </li><br>
          <li>14. TableColumn 新增 index 属性，用于自定义索引值 </li><br>
        </ul>
        <test-table></test-table>
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Dialog</h2>
      <p slot="t">
        1. 新增 width、fullscreen、append-to-body 属性，支持嵌套使用 <br>
        2. 新增 center 属性，提供居中布局 <br>
        3. 新增 focus-after-closed、focus-after-open属性，支持无障碍访问 <br>
      </p>
      <div slot="c">
        <test-dialog></test-dialog>
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>MessageBox</h2>
      <div slot="t">
        1. 新增 closeOnHashChange 属性 <br>
        <router-link to="/TestMessageBox"><p>跳转路由</p></router-link>
        (解决的问题：快速创建的alert是动态插入的，那么route改变的时候不会销毁动态插入的内容。) <br>
        2. 新增 center 属性，提供居中布局  <br>
        3. 新增 roundButton 属性，使得内部按钮为圆角按钮 <br>
        4. 新增 dangerouslyUseHTMLString 属性，使得 message 支持传入 HTML 字符串(Notification) <br>
        5.新增 inputType 属性，用户指定内部输入框的类型，<br>
      </div>
      <div slot="c">
        <test-message-box></test-message-box>
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 slot="h"><i class="el-icon-edit"></i>Notification</h2>
      <p slot="t"></p>
      <div slot="c">
        <ul>
          <li>1. 新增 position 属性，用于配置 Notification 出现的位置 </li>
          <li>2. 新增 dangerouslyUseHTMLString 属性，使得 message 属性支持传入 HTML 字符串</li>
          <li>3. 新增 showClose 属性，用于隐藏关闭按钮</li>
        </ul>
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com>
      <h2 @click="loading = false" slot="h"><i class="el-icon-edit"></i>Menu</h2>
      <p slot="t"></p>
      <div slot="c">
        <ul>
          <li>新增 background-color、text-color 和 active-text-color 属性，分别用于设置菜单的背景色、菜单的文字颜色和当前激活菜单的文字颜色</li>
          <li>新增 open 和 close 方法，支持手动打开和关闭 SubMenu（展开收起时的回调）</li>
        </ul>
        <!--<p class="code"><span></span></p>-->
      </div>
    </com>
    <com
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)">
      <h2 slot="h" @click="loading = true"><i class="el-icon-edit"></i>Loading</h2>
      <p slot="t">配置对象新增 spinner 和 background 字段，支持自定义加载图标和背景色</p>
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
  import Com from './common.vue'
  import TestForm from './TestForm.vue'
  import TestTable from './TestTable.vue'
  import TestDialog from './TestDialog.vue'
  import TestMessageBox from './TestMessageBox.vue'
  import Testtree from './Testtree.vue'
  export default {
    components: {
      Com,
      TestForm,
      TestDialog,
      TestMessageBox,
      Testtree,
      TestTable
    },
    data () {
      return {
        input1: '',
        input2: '',
        pickerOptions2: {},
        datepicker1: '',
        loading: false,
        numberValidateForm: {
          age: ''
        }
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
    display: block;
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
