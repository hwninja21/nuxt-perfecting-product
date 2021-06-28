<template>
  <div>
    <h1 class="text-center text-4xl text-gray-800 font-semibold mt-24 mb-12">
      {{ article.title }}
    </h1>
    <Nuxt-Content
      :document="article"
      class="prose sm:prose lg:prose-xl max-w-screen-md mx-auto"
    ></Nuxt-Content>
    <GetStarted />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("pages", params.slug).fetch();
    return { article };
  },
};
</script>