<template>
    <div class="sticky top-0 z-10">
        <!-- top nav -->
        <header class="md:flex items-center justify-between mx-auto mt-2 px-8 py-4 text-base bg-white border-b shadow">
            <div class="flex items-center justify-between">
            <NuxtLink to="/" class="text-xl font-medium">
                Perfecting Product
            </NuxtLink>
            
            <!-- responsive dropdown button -->
            <button @click="isOpen = !isOpen" type="button" class="md:hidden block text-gray-800 focus:outline-none">
                <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                </svg>
            </button>
            </div>
    
            <!-- nav links -->
            <nav :class="isOpen ? 'block' : 'hidden'" class="md:flex mt-6 md:mt-0 gap-4 items-center">
              <NuxtLink to="/services" class="block rounded-sm py-2 px-3 hover:bg-gray-200">Services</NuxtLink>
              <a href="https://blog.perfectingproduct.com/tag/case-study/" class="block rounded-sm py-2 px-3 hover:bg-gray-200">
                Case Studies
              </a>
              <NuxtLink to="/blog" class="block rounded-sm py-2 px-3 hover:bg-gray-200">Resources</NuxtLink>
              <NuxtLink to="/about" class="block rounded-sm py-2 px-3 hover:bg-gray-200">About</NuxtLink>
              <button class="bg-yellow-400 hover:bg-yellow-300 text-black hover:text-gray-900 py-2 px-4 rounded hover:bg-gray-800 hover:shadow-lg transition duration-150">
                <a href="https://perfectingproduct.typeform.com/to/ccCS2h">
                  Work With Us
                </a>
              </button>
            </nav>
        </header>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            topNav:[
              {
                title: "Services",
                url: "/services"
              },
              {
                title: "Case Studies",
                url: "/case-studies/"
              },
              {
                title: "About",
                url: "/about"
              },
            ],
            blog:
              {
                title: "Resources",
                url: "https://blog.perfectingproduct.com"
              },
        }
    }
}
</script>