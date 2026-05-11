<template>
	<div class="content">
		<ContentHeader @open-form="openCreateForm" />
		<ContentPanel :candidates="candidates" />
		<CandidateForm :isOpen="isFormOpen" @close="closeForm" @submit="handleSubmit" />
	</div>
</template>

<script>
import ContentHeader from './ContentHeader.vue';
import ContentPanel from './ContentPanel.vue';
import CandidateForm from './CandidateForm.vue';

const STORAGE_KEY = 'content-candidates-records';

export default {
	name: 'Content',
	components: {
		ContentHeader,
		ContentPanel,
		CandidateForm,
	},
	data() {
		return {
			candidates: [],
			isFormOpen: false,
		};
	},
	mounted() {
		this.loadCandidates();
	},
	methods: {
		async loadCandidates() {
			try {
				const response = await fetch('/data/employees.json');
				const data = await response.json();
				const stored = this.readStorage();

				if (stored.length) {
					this.candidates = stored;
					return;
				}

				this.candidates = Array.isArray(data) ? data.map(this.normalizeCandidate) : [];
				this.persistCandidates();
			} catch (error) {
				console.error('Failed to load content candidates', error);
				this.candidates = this.readStorage();
			}
		},
		readStorage() {
			try {
				const raw = localStorage.getItem(STORAGE_KEY);
				if (!raw) return [];
				const parsed = JSON.parse(raw);
				return Array.isArray(parsed) ? parsed.map(this.normalizeCandidate) : [];
			} catch (error) {
				return [];
			}
		},
		persistCandidates() {
			localStorage.setItem(STORAGE_KEY, JSON.stringify(this.candidates));
		},
		normalizeCandidate(item) {
			return {
				id: item.id ?? Date.now() + Math.floor(Math.random() * 1000),
				fullName: item.fullName || item.fullname || '',
				phone: item.phone || item.phoneNumber || '',
				email: item.email || '',
				campaign: item.campaign || 'Tuyển dụng SA',
				position: item.position || item.workPosition || '',
				job: item.job || item.campaign || 'Tuyển dụng SA',
				recruitmentRound: item.recruitmentRound || item.round || '--',
				rating: item.rating || '--',
				appliedDate: item.appliedDate || item.dateApplied || item.dateRecruitment || '',
				source: item.source || item.sourceRecruitment || '',
				educationLevel: item.educationLevel || '',
				school: item.school || item.educationSchool || '',
				major: item.major || item.educationMajor || '',
				recentWorkplace: item.recentWorkplace || '',
				recruiter: item.recruiter || item.employeeRecruitment || '',
				unit: item.unit || item.department || '',
				status: item.status || (item.isEmployee ? 'Nhân viên' : 'Ứng viên'),
				dateOfBirth: item.dateOfBirth || '',
				gender: item.gender || '',
				address: item.address || '',
				dateRecruitment: item.dateRecruitment || item.appliedDate || '',
				sourceRecruitment: item.sourceRecruitment || item.source || '',
				employeeRecruitment: item.employeeRecruitment || item.recruiter || '',
				workPosition: item.workPosition || item.position || '',
				workDescription: item.workDescription || '',
			};
		},
		openCreateForm() {
			this.isFormOpen = true;
		},
		closeForm() {
			this.isFormOpen = false;
		},
		handleSubmit(payload) {
			const normalized = this.normalizeCandidate(payload);
			normalized.id = Date.now();
			this.candidates = [normalized, ...this.candidates];
			this.persistCandidates();
			this.closeForm();
		},
	},
};
</script>

