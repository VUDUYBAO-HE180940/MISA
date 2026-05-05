<template>
	<div v-if="label || error" class="ms-input__wrapper">
		<label v-if="label" :for="id" class="ms-input__label">
			{{ label }}
			<span v-if="required" class="ms-input__required">*</span>
		</label>
		<input
			:id="id"
			:value="modelValue"
			:type="type"
			:placeholder="placeholder"
			:disabled="disabled"
			:readonly="readonly"
			:required="required"
			:class="['ms-input', { 'ms-input--error': error }, $attrs.class]"
			@input="$emit('update:modelValue', $event.target.value)"
			@change="$emit('change', $event.target.value)"
			@blur="$emit('blur', $event.target.value)"
			@focus="$emit('focus')"
			v-bind="filteredAttrs"
		/>
		<div v-if="error" class="ms-input__error">{{ error }}</div>
	</div>
	<input
		v-else
		:id="id"
		:value="modelValue"
		:type="type"
		:placeholder="placeholder"
		:disabled="disabled"
		:readonly="readonly"
		:required="required"
		:class="['ms-input', { 'ms-input--error': error }, $attrs.class]"
		@input="$emit('update:modelValue', $event.target.value)"
		@change="$emit('change', $event.target.value)"
		@blur="$emit('blur', $event.target.value)"
		@focus="$emit('focus')"
		v-bind="filteredAttrs"
	/>
</template>

<script>
export default {
	name: 'MsInput',
	inheritAttrs: false,
	props: {
		modelValue: {
			type: [String, Number],
			default: '',
		},
		type: {
			type: String,
			default: 'text',
		},
		label: {
			type: String,
			default: '',
		},
		placeholder: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		readonly: {
			type: Boolean,
			default: false,
		},
		required: {
			type: Boolean,
			default: false,
		},
		error: {
			type: String,
			default: '',
		},
		id: {
			type: String,
			default: () => `input-${Math.random().toString(36).substr(2, 9)}`,
		},
	},
	emits: ['update:modelValue', 'change', 'blur', 'focus'],
	computed: {
		filteredAttrs() {
			const { class: className, ...rest } = this.$attrs;
			return rest;
		},
	},
};
</script>

<style scoped>
.ms-input__wrapper {
	display: flex;
	flex-direction: column;
	gap: 6px;
	width: 100%;
}

.ms-input__label {
	font-size: 14px;
	font-weight: 500;
	color: #333;
}

.ms-input__required {
	color: #dc3545;
	margin-left: 4px;
}

.ms-input {
	padding: 10px 12px;
	border: 1px solid #d0d0d0;
	border-radius: 4px;
	font-size: 14px;
	font-family: inherit;
	transition: all 0.3s ease;
	width: 100%;
	box-sizing: border-box;
}

.ms-input:focus {
	outline: none;
	border-color: #007bff;
	box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.ms-input:disabled {
	background-color: #f5f5f5;
	cursor: not-allowed;
	opacity: 0.7;
}

.ms-input--error {
	border-color: #dc3545;
}

.ms-input--error:focus {
	box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.ms-input__error {
	font-size: 12px;
	color: #dc3545;
	margin-top: 4px;
}
</style>
