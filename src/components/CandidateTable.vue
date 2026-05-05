<template>
	<div class="content__body">
		<div class="content__body__container">
			<div class="table__wrapper">
				<table class="content__table">
					<thead>
						<tr>
							<th class="col__checkbox"><MsCheckbox /></th>
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
						<tr>
							<td><MsCheckbox /></td>
							<td>
								<div class="candidate__info">
									<span class="candidate__avatar">DB</span>
									<div>
										<div class="candidate__name">Vũ Duy Bảo</div>
										<div class="candidate__status">&#10003; Nhân viên</div>
									</div>
								</div>
							</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
						<td>Lập Trình Viên</td>
						<td>Tuyển dụng SA</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td>--</td>
							<td class="col__action__cell">
								<div class="action__btns">
								<MsButton variant="secondary" class="row__edit__btn" aria-label="Sửa ứng viên"></MsButton>
								<MsButton variant="secondary" class="row__del__btn" aria-label="Xóa ứng viên"></MsButton>
								</div>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>

		<div class="content__footer">
			<div class="content__footer__left">
				<span class="content__total">Tổng: <strong>0</strong> bản ghi</span>
			</div>
			<div class="content__footer__right">
				<div class="content__pagination">
					<span class="pagination__text">Số bản ghi/trang</span>
					<MsSelect class="pagination__select">
						<option selected>10</option>
						<option>25</option>
						<option>50</option>
					</MsSelect>
				</div>
				<div class="content__pagination">
					<span class="pagination__text">Bản ghi thứ</span>
					<span class="pagination__current">1</span>
					<span class="pagination__text">-</span>
					<span class="pagination__total">10</span>
				</div>
				<div class="pagination__controls">
					<MsButton variant="secondary" class="pagination__btn pagination__btn--prev">&lt;</MsButton>
					<MsInput class="pagination__input" type="number" :modelValue="1" />
					<MsButton variant="secondary" class="pagination__btn pagination__btn--next">&gt;</MsButton>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CandidateTable',
	props: {
		candidates: {
			type: Array,
			default: () => [],
		},
	},
	methods: {
		avatarText(name) {
			if (!name) return '';
			const parts = name.split(' ').filter(Boolean);
			return parts.length === 1 ? parts[0].slice(0,2).toUpperCase() : (parts[0][0] + parts[parts.length-1][0]).toUpperCase();
		},
	},
};
</script>

