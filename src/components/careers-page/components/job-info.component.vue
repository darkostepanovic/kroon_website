<template functional>
  <div class="col-md-6 col-lg-7 col-sm-8 col-xs-12 career">
    <div>
        <h4>{{ props.jobData.title }}</h4>
        <p>{{ props.jobData.description }}</p>
        <!-- <h3>Minimum requirements</h3> -->
        <h3>Responsibilities</h3>
        <ul>
          <li v-for="(item, index) in props.jobData.inChargeOf" :key="index">{{ item }}</li>
        </ul>
        <!-- <h3>Skills that you possess</h3> -->
        <h3>Requirements</h3>
        <ul>
          <li v-for="(item, index) in props.jobData.skills" :key="index">{{ item }}</li>
        </ul>
        <h3>How to apply</h3>
        <p class="how">{{ props.jobData.apply }}</p>
    </div>
  </div>
</template>
