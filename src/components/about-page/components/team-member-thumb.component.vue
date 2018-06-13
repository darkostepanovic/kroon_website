<template lang="html">
  <div class="team-member-thumb-wrapper">
    <img :src="member.imgUrl" alt="">
    <div class="info">
      <div class="name">{{ member.name }}</div>
      <div class="position">{{ member.position }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'team-member-thumb',
  props: ['member']
}
</script>
