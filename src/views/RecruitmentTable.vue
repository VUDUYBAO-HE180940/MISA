<template>
	<div class="content__body">
		<div class="content__body__container">
			<MsTable class="content__table">
				<thead>
					<tr>
						<th class="col__checkbox">
							<MsCheckbox :modelValue="false" />
						</th>
						<th class="col__fullname">Họ và tên</th>
						<th class="col__phone">Số điện thoại</th>
						<th class="col__email">Email</th>
						<th class="col__campaign">Chiến dịch tuyển dụng</th>
						<th class="col__position">Vị trí tuyển dụng</th>
						<th class="col__job">Tin tuyển dụng</th>
						<th class="col__vongtuyendung">Vòng tuyển dụng</th>
						<th class="col__danhgia">Đánh giá</th>
						<th class="col__ngayungtuyen">Ngày ứng tuyển</th>
						<th class="col__nguonungvien">Nguồn ứng viên</th>
						<th class="col__trinhdodaotao">Trình độ đào tạo</th>
						<th class="col__noidaotao">Nơi đào tạo</th>
						<th class="col__chuyennganh">Chuyên ngành</th>
						<th class="col__noilamviecgannhat">Nơi làm việc gần nhất</th>
						<th class="col__nhansukhaithac">Nhân sự khai thác</th>
						<th class="col__donvisd">Đơn vị sử dụng</th>
						<th class="col__action"></th>
					</tr>
				</thead>
				<tbody>
					<tr v-if="!candidates.length">
						<td colspan="18" class="table__empty">Không có dữ liệu ứng viên</td>
					</tr>
					<tr v-for="candidate in candidates" :key="candidate.id">
						<td><MsCheckbox :modelValue="false" /></td>
						<td>
							<div class="candidate__info">
								<span class="candidate__avatar">{{ initials(candidate.fullName) }}</span>
								<div>
									<div class="candidate__name">{{ candidate.fullName || '--' }}</div>
									<div class="candidate__status">{{ statusLabel(candidate.status) }}</div>
								</div>
							</div>
						</td>
						<td>{{ candidate.phone || '--' }}</td>
						<td>{{ candidate.email || '--' }}</td>
						<td>{{ candidate.campaign || '--' }}</td>
						<td>{{ candidate.position || '--' }}</td>
						<td>{{ candidate.job || '--' }}</td>
						<td>{{ candidate.recruitmentRound || '--' }}</td>
						<td>
							<div class="rating-stars" :aria-label="`Đánh giá ${candidate.rating || 0} sao`">
								<span
									v-for="star in 5"
									:key="star"
									:class="['rating-star', { 'is-active': star >= (6 - Number(candidate.rating || 0)) }]"
								>
									★
								</span>
							</div>
						</td>
						<td>{{ formatDate(candidate.appliedDate) }}</td>
						<td>{{ candidate.source || '--' }}</td>
						<td>{{ candidate.educationLevel || '--' }}</td>
						<td>{{ candidate.school || '--' }}</td>
						<td>{{ candidate.major || '--' }}</td>
						<td>{{ candidate.recentWorkplace || '--' }}</td>
						<td>{{ candidate.recruiter || '--' }}</td>
						<td>{{ candidate.unit || '--' }}</td>
						<td class="col__action__cell">
							<div class="action__btns">
								<button type="button" class="row__edit__btn" aria-label="Sửa ứng viên" @click="$emit('edit', candidate)"></button>
								<button type="button" class="row__del__btn" aria-label="Xóa ứng viên" @click="$emit('delete', candidate)"></button>
							</div>
						</td>
					</tr>
				</tbody>
			</MsTable>
		</div>

		<div class="content__footer">
			<div class="content__footer__left">
				<span class="content__total">Tổng: <strong>{{ totalCount }}</strong> bản ghi</span>
			</div>
			<div class="content__footer__right">
				<div class="content__pagination">
					<span class="pagination__text">Số bản ghi/trang</span>
					<MsSelect :modelValue="String(pageSize)" class="pagination__select" @update:modelValue="onPageSizeChange">
						<option value="10">10</option>
						<option value="25">25</option>
						<option value="50">50</option>
					</MsSelect>
				</div>
				<div class="content__pagination">
					<span class="pagination__text">Bản ghi thứ</span>
					<span class="pagination__current">{{ pageStart }}</span>
					<span class="pagination__text">-</span>
					<span class="pagination__total">{{ pageEnd }}</span>
				</div>
				<div class="pagination__controls">
					<MsButton variant="secondary" class="pagination__btn pagination__btn--prev" type="button" :disabled="currentPage <= 1" @click="$emit('change-page', currentPage - 1)">&lt;</MsButton>
					<MsInput :modelValue="String(currentPage)" class="pagination__input" type="number" min="1" :max="pageCount" @change="onPageInputChange" />
					<MsButton variant="secondary" class="pagination__btn pagination__btn--next" type="button" :disabled="currentPage >= pageCount" @click="$emit('change-page', currentPage + 1)">&gt;</MsButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'RecruitmentTable',
	props: {
		candidates: {
			type: Array,
			default: () => [],
		},
		totalCount: {
			type: Number,
			default: 0,
		},
		currentPage: {
			type: Number,
			default: 1,
		},
		pageSize: {
			type: Number,
			default: 10,
		},
		pageCount: {
			type: Number,
			default: 1,
		},
		pageStart: {
			type: Number,
			default: 0,
		},
		pageEnd: {
			type: Number,
			default: 0,
		},
	},
	emits: ['edit', 'delete', 'change-page', 'change-page-size'],
	methods: {
		initials(name) {
			const parts = String(name || '').trim().split(/\s+/).filter(Boolean);
			if (!parts.length) return '--';
			if (parts.length === 1) {
				return parts[0].slice(0, 2).toUpperCase();
			}
			return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
		},
		statusLabel(status) {
			if (!status) return '--';
			return status === 'Nhân viên' ? '✓ Nhân viên' : status;
		},
		formatDate(value) {
			if (!value) return '--';
			const date = new Date(value);
			if (Number.isNaN(date.getTime())) return '--';
			const day = String(date.getDate()).padStart(2, '0');
			const month = String(date.getMonth() + 1).padStart(2, '0');
			const year = date.getFullYear();
			return `${day}/${month}/${year}`;
		},
		onPageSizeChange(value) {
			this.$emit('change-page-size', Number(value));
		},
		onPageInputChange(value) {
			const nextPage = Number(value);
			if (!Number.isNaN(nextPage)) {
				this.$emit('change-page', nextPage);
			}
		},
	},
};
</script>
