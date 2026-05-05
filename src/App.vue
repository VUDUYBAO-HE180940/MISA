<template>
	<div class="app">
		<Navbar />
		<Sidebar />
		<div class="content">
			<ContentHeader @openForm="isFormOpen = true" />
			<ContentPanel>
				<CandidateTable />
			</ContentPanel>
		</div>
		<CandidateForm :isOpen="isFormOpen" @close="isFormOpen = false" @submit="handleFormSubmit" />
	</div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
import ContentHeader from './components/ContentHeader.vue';
import ContentPanel from './components/ContentPanel.vue';
import CandidateTable from './components/CandidateTable.vue';
import CandidateForm from './components/CandidateForm.vue';

export default {
	name: 'App',
	components: {
		Navbar,
		Sidebar,
		ContentHeader,
		ContentPanel,
		CandidateTable,
		CandidateForm,
	},
	data() {
		return {
			isFormOpen: false,
		};
	},
	methods: {
		handleFormSubmit(formData) {
			console.log('New candidate:', formData);
			this.isFormOpen = false;
		},
	},
};
</script>
