<template>
  <div>
    <div class="my-20 md:my-48 m-6 md:m-12 md:pr-12">
      <div class="text-2xl md:text-3xl lg:text-5xl font-medium mb-8">
        {{ heroSection.customerGoal }}
      </div>
      <div class="max-w-screen-sm text-xl text-gray-800">
        {{ heroSection.solutionStatement }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heroSection:{
        customerGoal: "Find product-market fit and create product-led growth",
        problemStatement: "Fed up with having little to no product-led growth?",
        solutionStatement: "Identify the roadblocks standing in your way with deep customer research, user interviews and testing."
      }
    }
  }
}
</script>
