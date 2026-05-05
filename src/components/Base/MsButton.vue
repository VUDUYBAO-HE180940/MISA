<template>
	<button
		:class="[
			'ms-button',
			`ms-button--${variant}`,
			`ms-button--${size}`,
			{
				'ms-button--disabled': disabled,
				'ms-button--block': block,
				'ms-button--loading': loading,
			},
			$attrs.class,
		]"
		:disabled="disabled || loading"
		@click="$emit('click')"
		v-bind="filteredAttrs"
	>
		<span v-if="loading" class="ms-button__loader"></span>
		<slot />
	</button>
</template>

<script>
export default {
	name: 'MsButton',
	inheritAttrs: false,
	props: {
		variant: {
			type: String,
			default: 'primary',
			validator: (value) => ['primary', 'secondary', 'danger', 'success', 'warning'].includes(value),
		},
		size: {
			type: String,
			default: 'md',
			validator: (value) => ['sm', 'md', 'lg'].includes(value),
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		block: {
			type: Boolean,
			default: false,
		},
		loading: {
			type: Boolean,
			default: false,
		},
	},
	emits: ['click'],
	computed: {
		filteredAttrs() {
			const { class: className, ...rest } = this.$attrs;
			return rest;
		},
	},
};
</script>

<style scoped>
.ms-button {
	border: none;
	border-radius: 4px;
	cursor: pointer;
	font-weight: 500;
	transition: all 0.3s ease;
	display: inline-flex;
	align-items: center;
	justify-content: center;
	gap: 8px;
	font-family: inherit;
}

.ms-button--primary {
	background-color: #2563eb;
	color: white;
}

.ms-button--primary:hover:not(.ms-button--disabled) {
	background-color: #1d4ed8;
}

.ms-button--secondary {
	background-color: white;
	color: #111827;
	border: 1px solid #d1d5db;
}

.ms-button--secondary:hover:not(.ms-button--disabled) {
	background-color: #f9fafb;
}

.ms-button--danger {
	background-color: #dc3545;
	color: white;
}

.ms-button--danger:hover:not(.ms-button--disabled) {
	background-color: #a71d2a;
}

.ms-button--success {
	background-color: #28a745;
	color: white;
}

.ms-button--success:hover:not(.ms-button--disabled) {
	background-color: #1e7e34;
}

.ms-button--warning {
	background-color: #ffc107;
	color: black;
}

.ms-button--warning:hover:not(.ms-button--disabled) {
	background-color: #e0a800;
}

.ms-button--sm {
	padding: 6px 12px;
	font-size: 14px;
}

.ms-button--md {
	padding: 10px 16px;
	font-size: 16px;
}

.ms-button--lg {
	padding: 12px 20px;
	font-size: 18px;
}

.ms-button--disabled {
	opacity: 0.6;
	cursor: not-allowed;
}

.ms-button--block {
	display: flex;
	width: 100%;
}

.ms-button__loader {
	display: inline-block;
	width: 14px;
	height: 14px;
	border: 2px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top-color: white;
	animation: spin 0.6s linear infinite;
}

@keyframes spin {
	to {
		transform: rotate(360deg);
	}
}
</style>
