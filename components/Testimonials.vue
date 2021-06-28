<template>
    <div>
        <!-- section header -->
    <div class="text-center text-2xl md:text-3xl font-semibold m-12 mt-36">Testimonials</div>

    <!-- testimonial card -->
    <div v-for="testimonial in testimonials" :key="testimonial.id" class="rounded-md shadow-lg border border-gray-200 sm:grid grid-cols-3 items-center gap-12 p-6 py-8 md:px-12 lg:px-16 m-4 mb-16">
      <div class="col-span-2 text-lg md:text-xl mb-8 sm:mb-0">
        "{{testimonial.content}}"
      </div>
        <div class="rounded-full shadow w-36 overflow-hidden mx-auto mb-2 pointer-events-none">
            <img :src="testimonial.imageSource" alt="testimonial.name">
            <div class="text-center md:text-lg font-medium">
        </div>
        <div>{{testimonial.name}}</div>
        <div>{{testimonial.title}}, {{testimonial.company}}</div>
      </div>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            testimonials: [
                {
                name: "Alex Krupp",
                company: "FWD:Everyone",
                title: "Founder",
                content: "Christian helped us with user testing; he immediately identified a bunch of problems with our product and onboarding flow, and came up with pragmatic and easy-to-implement ways to improve our funnel.",
                imageSource: "Alex-Krupp.jpeg",
                },
                {
                name: "Mark Fershteyn",
                company: "Recapped",
                title: "Founder",
                content: "Christian has a rare ability to quickly identify problems in customer experience and product. He immediately identified problems in our product’s onboarding process that we needed to solve, the next steps to fix them, and exactly how to measure the result of these changes.",
                imageSource: "/mark_squoosh.webp",
                },
            ],
        }
    }
}
</script>