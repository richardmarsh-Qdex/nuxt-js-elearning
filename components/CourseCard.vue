<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <h2 class="text-xl font-semibold mb-2">{{ course.title }}</h2>
    <p class="text-gray-600 mb-4">{{ course.description }}</p>
    <div class="flex justify-between items-center">
      <span class="text-sm text-gray-500">{{ course.lessons.length }} lessons</span>
      <NuxtLink
        :to="`/courses/${course.id}`"
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        View Course
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  course: {
    type: Object,
    required: true
  }
})
</script>
