<template>
  <div>
    <h1 class="text-center text-3xl font-bold mt-8 md:mt-16 mb-6">
        The Perfecting Product Blog
    </h1>
    <ul class="grid md:grid-cols-2 gap-4 mb-12 md:mb-24">
      <li v-for="article of articles" :key="article.slug" class="bg-white rounded-md shadow hover:shadow-lg transition duration-150 border overflow-hidden">
        <NuxtLink :to="`blog/`+article.slug" class=" cursor-pointer">
          <img :src="article.img" class="max-h-96 pointer-events-none" />
          <div class="p-4">
            <p class="text-xs text-blue-500 uppercase font-bold">{{article.tag}}</p>  
            <h2 class="text-xl font-bold text-gray-800">{{ article.title }}</h2>
            <p class="text-base text-gray-600">{{ article.description }}</p>
          </div>
        </NuxtLink>
      </li>
    </ul>
    <Subscribe />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content("articles")
      .fetch();
    return {
      articles,
    };
  },
  head() {
      return {
          title: this.articles.slug,
      }
  }
};
</script>