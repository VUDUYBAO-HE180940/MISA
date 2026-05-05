<template>
	<select
		:value="modelValue"
		:disabled="disabled"
		:required="required"
		:class="['ms-select', $attrs.class]"
		@change="$emit('update:modelValue', $event.target.value)"
		v-bind="filteredAttrs"
	>
		<slot></slot>
	</select>
</template>

<script>
export default {
	name: 'MsSelect',
	inheritAttrs: false,
	props: {
		modelValue: {
			type: [String, Number],
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		required: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
	computed: {
		filteredAttrs() {
			const { class: className, ...rest } = this.$attrs;
			return rest;
		},
	},
};
</script>

<style scoped>
.ms-select {
	padding: 10px 12px;
	border: 1px solid #d0d0d0;
	border-radius: 4px;
	font-size: 14px;
	font-family: inherit;
	width: 100%;
	box-sizing: border-box;
	background-color: white;
	cursor: pointer;
}

.ms-select:focus {
	outline: none;
	border-color: #2563eb;
}

.ms-select:disabled {
	background-color: #f5f5f5;
	cursor: not-allowed;
	opacity: 0.7;
}
</style>
