<template>
    <div>
        <label :for="id">{{label}}</label>
        <input class="px-4 py-2 outline" :id="id" :type="type" :placeholder="placeholder">
    </div>
</template>
<script>
export default {
    name: "ui-input",
    props: {
        id: {
            type: [String, Number],
            required: true,
        },
        label: {
            type: String,
            required: false,
            default: "",
        },
        type: {
            type: String,
            required: false,
            default: "text",
        },
        placeholder:{
            type: String,
            required: false,
        }
    }
}
</script>