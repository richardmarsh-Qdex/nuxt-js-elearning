<template>
  <div class="container mx-auto px-4">
    <h1 class="text-4xl font-bold mb-8">E-learning Platform</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CourseCard
        v-for="course in courses"
        :key="course.id"
        :course="course"
      />
    </div>
  </div>
</template>

<script setup>
const { data: courses } = await useFetch('/api/courses')
</script>
