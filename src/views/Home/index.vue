<template>
  <div class="home">
    <el-button type="primary"
               @Click="checkOut">{{$t('login.title')}}</el-button>
    <el-date-picker v-model="value1"
                    type="date"
                    placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      value1: '',
    }
  },
  components: {

  },
  methods: {
    checkOut () {
      let lang = this.$i18n.locale === 'zh-cn' ? 'en' : 'zh-cn'
      this.$i18n.locale = lang
    }
  }
}
</script>
