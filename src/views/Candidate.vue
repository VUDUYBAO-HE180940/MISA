<template>
	<div class="content candidate-page">
		<RecruitmentHeader @open-form="openCreateForm" />
		<ContentPanel>
			<RecruitmentToolbar v-model="searchText" />
			<RecruitmentTable
				:candidates="pagedCandidates"
				:total-count="filteredCandidates.length"
				:current-page="currentPage"
				:page-size="pageSize"
				:page-count="pageCount"
				:page-start="pageStart"
				:page-end="pageEnd"
				@edit="openEditForm"
				@delete="requestDelete"
				@change-page="changePage"
				@change-page-size="changePageSize"
			/>
		</ContentPanel>

		<RecruitmentForm
			:visible="isFormOpen"
			:mode="formMode"
			:candidate="editingCandidate"
			@close="closeForm"
			@save="saveCandidate"
		/>

		<MsPopup :visible="isDeleteOpen" title="Xác nhận xóa" size="sm" @close="cancelDelete">
			<p class="delete__message">
				Bạn có chắc chắn muốn xóa ứng viên
				<strong>{{ deletingCandidate?.fullName || 'này' }}</strong>
				không?
			</p>
			<template #footer>
				<div class="delete__actions">
					<MsButton variant="secondary" type="button" @click="cancelDelete">Hủy</MsButton>
					<MsButton variant="danger" type="button" @click="confirmDelete">Xóa</MsButton>
				</div>
			</template>
		</MsPopup>

		<MsToast v-if="toast.visible" :message="toast.message" :type="toast.type" />
	</div>
</template>

<script>
import ContentPanel from './ContentPanel.vue';
import RecruitmentHeader from './RecruitmentHeader.vue';
import RecruitmentToolbar from './RecruitmentToolbar.vue';
import RecruitmentTable from './RecruitmentTable.vue';
import RecruitmentForm from './RecruitmentForm.vue';

const STORAGE_KEY = 'candidate-management-records';

export default {
	name: 'Candidate',
	components: {
		ContentPanel,
		RecruitmentHeader,
		RecruitmentToolbar,
		RecruitmentTable,
		RecruitmentForm,
	},
	data() {
		return {
			candidates: [],
			searchText: '',
			searchKeyword: '',
			searchTimer: null,
			pageSize: 10,
			currentPage: 1,
			isFormOpen: false,
			formMode: 'create',
			editingCandidate: null,
			isDeleteOpen: false,
			deletingCandidate: null,
			toast: {
				visible: false,
				message: '',
				type: 'success',
			},
		};
	},
	computed: {
		filteredCandidates() {
			const keyword = this.searchKeyword.trim().toLowerCase();
			if (!keyword) {
				return this.candidates;
			}

			return this.candidates.filter((candidate) => {
				const searchable = [
					candidate.fullName,
					candidate.phone,
					candidate.email,
					candidate.campaign,
					candidate.position,
					candidate.job,
					candidate.recruitmentRound,
					candidate.source,
					candidate.educationLevel,
					candidate.school,
					candidate.major,
					candidate.recentWorkplace,
					candidate.recruiter,
					candidate.unit,
				].join(' ').toLowerCase();

				return searchable.includes(keyword);
			});
		},
		pageCount() {
			return Math.max(1, Math.ceil(this.filteredCandidates.length / this.pageSize));
		},
		pagedCandidates() {
			const start = (this.currentPage - 1) * this.pageSize;
			return this.filteredCandidates.slice(start, start + this.pageSize);
		},
		pageStart() {
			if (!this.filteredCandidates.length) {
				return 0;
			}
			return (this.currentPage - 1) * this.pageSize + 1;
		},
		pageEnd() {
			if (!this.filteredCandidates.length) {
				return 0;
			}
			return Math.min(this.currentPage * this.pageSize, this.filteredCandidates.length);
		},
	},
	watch: {
		searchText(value) {
			window.clearTimeout(this.searchTimer);
			this.searchTimer = window.setTimeout(() => {
				this.searchKeyword = value;
				this.currentPage = 1;
			}, 300);
		},
		filteredCandidates() {
			this.currentPage = Math.min(this.currentPage, this.pageCount);
		},
	},
	mounted() {
		this.loadCandidates();
	},
	beforeUnmount() {
		window.clearTimeout(this.searchTimer);
	},
	methods: {
		async loadCandidates() {
			try {
					const response = await fetch('/data/employees.json');
					const data = await response.json();
					const fetched = Array.isArray(data) ? data.map(this.normalizeCandidate) : [];

					const stored = this.readStorage();

					// If user has saved data in localStorage, prefer it (preserve user edits).
					// Otherwise initialize from fetched JSON and persist it.
					if (stored.length) {
						this.candidates = stored;
					} else {
						this.candidates = fetched;
						this.persistCandidates();
					}
			} catch (error) {
				console.error('Failed to load employee data', error);
				const stored = this.readStorage();
				this.candidates = stored.length ? stored : [];
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
				rating: Number(item.rating || 0),
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
			this.formMode = 'create';
			this.editingCandidate = null;
			this.isFormOpen = true;
		},
		openEditForm(candidate) {
			this.formMode = 'edit';
			this.editingCandidate = this.normalizeCandidate(candidate);
			this.isFormOpen = true;
		},
		closeForm() {
			this.isFormOpen = false;
			this.editingCandidate = null;
		},
		saveCandidate(payload) {
			const normalized = this.normalizeCandidate(payload);
			if (this.formMode === 'edit' && normalized.id) {
				this.candidates = this.candidates.map((candidate) =>
					candidate.id === normalized.id ? normalized : candidate,
				);
				this.showToast('Sửa thành công');
			} else {
				normalized.id = Date.now();
				this.candidates = [normalized, ...this.candidates];
				this.showToast('Thêm thành công');
			}

			this.persistCandidates();
			this.currentPage = 1;
			this.closeForm();
		},
		requestDelete(candidate) {
			this.deletingCandidate = candidate;
			this.isDeleteOpen = true;
		},
		cancelDelete() {
			this.isDeleteOpen = false;
			this.deletingCandidate = null;
		},
		confirmDelete() {
			if (!this.deletingCandidate) {
				return;
			}

			this.candidates = this.candidates.filter((candidate) => candidate.id !== this.deletingCandidate.id);
			this.persistCandidates();
			this.showToast('Xóa thành công');
			this.cancelDelete();
			this.currentPage = Math.min(this.currentPage, this.pageCount);
		},
		changePage(page) {
			const nextPage = Math.min(Math.max(1, Number(page) || 1), this.pageCount);
			this.currentPage = nextPage;
		},
		changePageSize(size) {
			this.pageSize = Number(size) || 10;
			this.currentPage = 1;
		},
		showToast(message, type = 'success') {
			this.toast = {
				visible: true,
				message,
				type,
			};

			window.clearTimeout(this.toastTimer);
			this.toastTimer = window.setTimeout(() => {
				this.toast.visible = false;
			}, 2200);
		},
	},
};
</script>

<style scoped>
.delete__message {
	margin: 0 0 20px;
	font-size: 14px;
	color: #374151;
	line-height: 1.6;
}

.delete__actions {
	display: flex;
	justify-content: flex-end;
	gap: 12px;
}
</style>