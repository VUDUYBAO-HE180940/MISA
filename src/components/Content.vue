<template>
	<div class="content">
		<ContentHeader />
		<ContentPanel />
	</div>
</template>

<script>
import ContentHeader from './ContentHeader.vue';
import ContentPanel from './ContentPanel.vue';

export default {
	name: 'Content',
	components: {
		ContentHeader,
		ContentPanel,
	},
};
</script>

