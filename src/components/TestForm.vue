<template>
  <el-form  :status-icon="true" :model="numberValidateForm" ref="numberValidateForm" class="demo-ruleForm">
    <el-form-item
      label="年龄"
      prop="age"
      :rules="[
        { required: true, message: '年龄不能为空'},
        { type: 'number', message: '年龄必须为数字值'}
      ]"
    >
      <el-input type="age" v-model.number="numberValidateForm.age" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
      <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      <el-button @click="resetTips('numberValidateForm')">清空验证消息</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
  export default {
    data () {
      return {
        numberValidateForm: {
          age: ''
        }
      }
    },
    methods: {
      submitForm (formName) {
        this.$refs[formName].validate().then(() => {
          alert('submit!')
        })
//        this.$refs[formName].validate((valid) => {
//          if (valid) {
//            alert('submit!')
//          } else {
//            console.log('error submit!!')
//            return false
//          }
//        })
      },
      resetForm (formName) {
        this.$refs[formName].resetFields()
      },
      resetTips (formName) {
        this.$refs[formName].clearValidate()
      }
    }
  }
</script>
