<template>
  <div class="page candidate-page">
    <ContentHeader @openForm="isFormOpen = true" />
    <ContentPanel>
      <CandidateTable :candidates="candidates" />
    </ContentPanel>

    <CandidateForm :isOpen="isFormOpen" @close="isFormOpen = false" @submit="handleFormSubmit" />
  </div>
</template>

<script>
import ContentHeader from '../components/ContentHeader.vue';
import ContentPanel from '../components/ContentPanel.vue';
import CandidateTable from '../components/CandidateTable.vue';
import CandidateForm from '../components/CandidateForm.vue';

export default {
  name: 'Candidate',
  components: {
    ContentHeader,
    ContentPanel,
    CandidateTable,
    CandidateForm,
  },
  data() {
    return {
      isFormOpen: false,
      candidates: [],
    };
  },
  mounted() {
    fetch('/data/employees.json')
      .then((res) => res.json())
      .then((data) => {
        this.candidates = data;
      })
      .catch((err) => {
        console.error('Failed to load employees.json', err);
      });
  },
  methods: {
    handleFormSubmit(formData) {
      console.log('Candidate.vue received:', formData);
      this.isFormOpen = false;
    },
  },
};
</script>

<style scoped>
.candidate-page {
  padding: 16px;
}
</style>
