<template>
  <div>
    <article class="max-w-screen-md py-8 mx-auto mb-12">
      <p class="text-sm text-blue-500 font-bold uppercase mb-1">
        {{ article.tag }}
      </p>
      <h1 class="text-4xl text-gray-800 font-bold mb-4">{{ article.title }}</h1>
      <p class="text-xl text-gray-500">{{ article.description }}</p>
      <img :src="article.img" :alt="article.alt" />
      <Nuxt-Content
        :document="article"
        class="prose lg:prose-xl"
      ></Nuxt-Content>
    </article>
    <Subscribe />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("articles", params.slug).fetch();

    return { article };
  },
  head() {
    return {
      title: this.article.title + " | Perfecting Product",
      meta: [
        { hid: 'og:title', name: 'og:title', content: this.article.title + ' | Perfecting Product' },
        { hid: 'og:image', property:"og:image", content:"https://www.perfectingproduct.com/" + this.article.img },
      ],
    } 
  }
};
</script>