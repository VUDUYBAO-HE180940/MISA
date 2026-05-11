<template>
	<div class="content__panel">
		<slot>
			<ContentToolbar />
			<CandidateTable :candidates="candidates" />
		</slot>
	</div>
</template>

<script>
import ContentToolbar from './ContentToolbar.vue';
import CandidateTable from './CandidateTable.vue';

export default {
	name: 'ContentPanel',
	props: {
		candidates: {
			type: Array,
			default: () => [],
		},
	},
	components: {
		ContentToolbar,
		CandidateTable,
	},
};
</script>

