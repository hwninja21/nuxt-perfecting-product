<template>
  <div>
    <Section-Header title="Who you'll be working with:"></Section-Header> 
    <div class="bg-white rounded-md shadow-lg border border-gray-200 text-base flex flex-col md:flex-row items-center gap-6 md:gap-20 px-12 py-8 m-4">
        <div class="text-center font-medium">
          <img class="rounded-full w-36 shadow-lg mb-2 mx-auto pointer-events-none" src="/headshot_squoosh.jpeg" alt="Christian von Uffel">
          <div class="text-lg">Christian von Uffel</div>
          <div class="text-gray-800">Product Leader, Perfecting Product</div>
        </div>
        <ol class="text-gray-800 text-base lg:text-lg font-medium leading-loose list-disc">
          <li v-for="bullet in bulletPoints" :key="bullet.id">{{bullet}}</li>
        </ol>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            bulletPoints:[
              "launched two 6-figure award-winning products",
              "SaaS product & marketing mentor for 5+ years",
              "performed 250+ user interviews",
              "performed 500+ user tests",
            ],
        }
    }
}
</script>