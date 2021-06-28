<template>
  <button
    class="bg-yellow-400 hover:bg-yellow-300 text-black hover:text-gray-900 py-2 px-4 rounded hover:bg-gray-800 hover:shadow-lg transition duration-150"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
    props: [
        "text",
    ]
}
</script>