<template>
	<div class="table__wrapper">
		<table :class="['ms-table', $attrs.class]" v-bind="filteredAttrs">
			<slot />
		</table>
	</div>
</template>

<script>
export default {
	name: 'MsTable',
	inheritAttrs: false,
	computed: {
		filteredAttrs() {
			const { class: className, ...rest } = this.$attrs;
			return rest;
		},
	},
};
</script>
