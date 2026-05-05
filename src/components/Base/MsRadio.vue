<template>
	<label class="ms-radio">
		<input
			:checked="modelValue === value"
			:value="value"
			type="radio"
			:disabled="disabled"
			class="ms-radio__input"
			@change="$emit('update:modelValue', value)"
		/>
		<span class="ms-radio__box"></span>
		<span v-if="label" class="ms-radio__label">{{ label }}</span>
	</label>
</template>

<script>
export default {
	name: 'MsRadio',
	props: {
		modelValue: {
			type: [String, Number, Boolean],
			default: null,
		},
		value: {
			type: [String, Number, Boolean],
			required: true,
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
.ms-radio {
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
	user-select: none;
	font-size: 14px;
}

.ms-radio__input {
	display: none;
}

.ms-radio__box {
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 18px;
	height: 18px;
	border: 2px solid #d0d0d0;
	border-radius: 50%;
	transition: all 0.3s ease;
}

.ms-radio__input:checked + .ms-radio__box {
	border-color: #007bff;
}

.ms-radio__input:checked + .ms-radio__box::after {
	content: '';
	display: inline-block;
	width: 8px;
	height: 8px;
	background-color: #007bff;
	border-radius: 50%;
}

.ms-radio__input:focus + .ms-radio__box {
	box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);
}

.ms-radio__input:disabled + .ms-radio__box {
	opacity: 0.6;
	cursor: not-allowed;
}

.ms-radio__label {
	color: #333;
}

.ms-radio:has(.ms-radio__input:disabled) {
	opacity: 0.6;
	cursor: not-allowed;
}
</style>
