<template>
  <div class="row" id="shared-bottom-navigation">
    <div class="col-12">
      <div class="next-project-label">Next project</div>
    </div>
    <div class="col-12 controls-wrapper" @click="goToProject">
      <div class="next-project-text">{{ projectInfo.text }}</div>
      <div class="circle-arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shared-bottom-navigation',
  props: ['project-info'],
  methods: {
    goToProject () {
      this.$router.push(this.projectInfo.link)
    }
  }
}
</script>
