<template>
    <div :class="inputWrapper" class="border-2 border-primary-3/20 focus:border-primary-2 rounded py-2 px-4 bg-gray-100">
        <input class="focus:outline-none" type="text" placeholder="Searching" />
    </div>
</template>
<script>
export default {
    name: "ui-input",
    props: {
        inputWrapper: {
            type: String,
            required: false,
            default: "",
        }
    }
}
</script>
<style scoped>

</style>