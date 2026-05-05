<template>
	<label class="ms-checkbox">
		<input
			:checked="modelValue"
			type="checkbox"
			:disabled="disabled"
			class="ms-checkbox__input"
			@change="$emit('update:modelValue', $event.target.checked)"
		/>
		<span class="ms-checkbox__box"></span>
		<span v-if="label" class="ms-checkbox__label">{{ label }}</span>
	</label>
</template>

<script>
export default {
	name: 'MsCheckbox',
	props: {
		modelValue: {
			type: Boolean,
			default: false,
		},
		label: {
			type: String,
			default: '',
		},
		disabled: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['update:modelValue'],
};
</script>

<style scoped>
.ms-checkbox {
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	user-select: none;
	font-size: 14px;
}

.ms-checkbox__input {
	display: none;
}

.ms-checkbox__box {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
	border: 2px solid #d0d0d0;
	border-radius: 4px;
	transition: all 0.3s ease;
}

.ms-checkbox__input:checked + .ms-checkbox__box {
	background-color: #007bff;
	border-color: #007bff;
}

.ms-checkbox__input:checked + .ms-checkbox__box::after {
	content: '✓';
	color: white;
	font-weight: bold;
	font-size: 12px;
}

.ms-checkbox__input:focus + .ms-checkbox__box {
	box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.ms-checkbox__input:disabled + .ms-checkbox__box {
	opacity: 0.6;
	cursor: not-allowed;
}

.ms-checkbox__label {
	color: #333;
}

.ms-checkbox:has(.ms-checkbox__input:disabled) {
	opacity: 0.6;
	cursor: not-allowed;
}
</style>
