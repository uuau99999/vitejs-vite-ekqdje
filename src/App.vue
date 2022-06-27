<script setup lang="ts">
import type { TestCase } from './TestCase';
let testArray = [] as any;

function doTest(arr: TestCase[]) {
  console.log(arr);
  return 'success';
}
</script>

<template>
  Hello World
  {{ doTest(testArray as TestCase[]) }}
</template>
