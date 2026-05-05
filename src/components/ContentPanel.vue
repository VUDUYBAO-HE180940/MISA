<template>
	<div class="content__panel">
		<slot>
			<ContentToolbar />
			<CandidateTable />
		</slot>
	</div>
</template>

<script>
import ContentToolbar from './ContentToolbar.vue';
import CandidateTable from './CandidateTable.vue';

export default {
	name: 'ContentPanel',
	components: {
		ContentToolbar,
		CandidateTable,
	},
};
</script>

