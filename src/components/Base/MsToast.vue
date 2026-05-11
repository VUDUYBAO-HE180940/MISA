<template>
	<div :class="['toast', `toast--${type}`, 'toast--show']" role="status" aria-live="polite">
		{{ message }}
	</div>
</template>

<script>
export default {
	name: 'MsToast',
	props: {
		message: {
			type: String,
			default: '',
		},
		type: {
			type: String,
			default: 'success',
			validator: (value) => ['success', 'error', 'warning', 'info'].includes(value),
		},
	},
};
</script>