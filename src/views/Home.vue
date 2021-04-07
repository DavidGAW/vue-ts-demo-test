<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld v-for="item in Students" :student="item" :key="item.name" />
  </div>
</template>

<script lang="ts">
// @ is an alias to /src
import { Component, Vue } from "vue-property-decorator";
import HelloWorld, { Student } from "@/components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private Students: Student[] = [
    {
      name: "zhan san",
      sex: "male",
      age: 18,
      datePosted: new Date(2002, 6, 18)
    },
    {
      name: "li si",
      sex: "female",
      age: 19,
      datePosted: new Date(2001, 12, 12)
    },
    {
      name: "wang wu",
      sex: "male",
      age: 24,
      datePosted: new Date(1996, 2, 28)
    }
  ];
}
</script>


