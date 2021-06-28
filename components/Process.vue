<template>
    <div>
        <Section-Header title="Our Process"></Section-Header> 
        <div v-for="process in process" :key="process.id" class="sm:flex bg-white rounded-md shadow-lg border border-gray-200 overflow-hidden m-4 mb-12 lg:mb-24">
            <div class="p-4 md:p-8 lg:p-12 sm:w-3/5">
            <div class="text-xl sm:text-2xl lg:text-3xl tracking-wide font-semibold mb-2">{{process.stage}}</div>
            <div class="text-base lg:text-lg text-gray-700">{{process.description}}</div>
            </div>
            <div class="sm:w-2/5" :class="process.backgroundColor">
            <img :src="process.image" :alt="process.stage" class="mx-auto h-64 object-contain p-8 lg:p-10 pointer-events-none">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            process: [
                {
                    stage: "Customer Research",
                    description: "We interview your customers and the people on your team who interact with them most to uncover users painpoints, motivations, and how they intersect with your business and product.",
                    pattern: "topography",
                    backgroundColor: "bg-blue-400",
                    image: "interview-group.png",
                  },
                  {
                    stage: "User Testing",
                    description: "We test your product and create full product teardowns with annotations for your product and your competitors, qualify user testing participants, manage user testing for your product & prototypes, and the analyze results.",
                    pattern: "tictactoe",
                    backgroundColor: "bg-red-400",
                    image: "full-product-teardowns.png",
                  },
                  {
                    stage: "Product Strategy",
                    description: "We use customer research to solve problems with product engagement, retention and monetization by identifying key points of user friction, existing and unsolved problems, and compelling new product features.",
                    pattern: "temple",
                    image: "product-market-fit.png",
                    backgroundColor: "bg-green-400",
                },
            ],
        }
    }
}
</script>