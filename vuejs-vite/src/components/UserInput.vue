<template>
    <div :class="{UserInput : true, 'UserInput--valid' : valid, 'UserInput--error' : (!valid && dirty)}">
        <input v-model="input" />
        <button @click="onValidate">Validate</button>
    </div>
</template>

<script>
export default {
    data () {
        return {
            valid: false,
            dirty: false,
            input: '',
        }
    },

    mounted() {
        console.log("mounted");
    },

    methods: {
        check() {
            const arrobaseIndex = this.input.indexOf('@');
            const hasArobase = arrobaseIndex > -1;
            const hasPoint = this.input.indexOf('.', arrobaseIndex + 2) > -1;
            const lastPointIndex = this.input.lastIndexOf('.') < this.input.length - 2;
            this.valid = hasArobase && hasPoint && lastPointIndex;
            // this.valid = this.input.indexOf('@') > -1;
        },

        onValidate() {
            this.dirty = true;
            this.check();

            if (this.valid) {
                this.$emit('email', this.input);
            }
        }
    },

    watch: {
        input () {
            if (this.dirty) {
                this.check();
            }
        }
    },

    computed: {
    },
}
</script>

<style lang="scss">
.UserInput {
    &--valid {
        input {
            color: green;
        }
    }

    &--error {
        input {
            color: red;
        }
    }
}
</style>