<template>
  <div class="new-world">
    <h2>{{ student.name }}</h2>
    <p>sex:{{ student.sex }}</p>
    <p>age:{{ student.age }}</p>
    <p>born at:{{ date }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

// 在这里对数据进行类型约束
export interface Student {
  name: string;
  sex: string;
  age: number;
  datePosted: Date;
}

@Component
export default class HelloWorld extends Vue {
  @Prop() private student!: Student;

  get date() {
    return `${this.student.datePosted.getDate()}/${this.student.datePosted.getMonth()}/${this.student.datePosted.getFullYear()}`;
  }
}
</script>

<style scoped>
h2 {
  text-decoration: underline;
}
p.meta {
  font-style: italic;
}
</style>