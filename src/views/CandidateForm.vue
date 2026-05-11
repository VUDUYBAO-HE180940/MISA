<template>
	<div v-if="isOpen" class="form__add__candidate__center form__popup">
		<div class="form__popup__wrap">
			<div class="form__popup__title">
				<div class="form__header__title">Thêm Ứng Viên</div>
				<div class="mi__icon__header__close__icon" @click="$emit('close')"></div>
			</div>
			<div class="form__popup__content">
				<!-- Import CV Section -->
				<div class="form__content__import__cv">
					<div class="import__cv__infor">
						<p>Kéo thả hoặc bấm vào đây để tải file lên</p>
						<p>Chấp nhận file: .pdf, .doc, .docx, .txt, .rtf (Dung lượng tối đa 15MB)</p>
					</div>
					<input type="file" class="import__cv__input" />
				</div>

				<!-- Candidate Info Section -->
				<div class="form__content__candidate__infor">
					<div class="candidate__infor__image">
						<span>Ảnh</span>
						<input type="file" class="candidate__infor__image__file" />
					</div>
					<div class="candidate__infor__main">
						<!-- Họ và tên -->
						<div class="candidate__infor__row">
							<div class="label__input">
								Họ và tên <span style="color: red; font-size: 14px;">*</span>
							</div>
							<input
								type="text"
								v-model="form.fullname"
								placeholder="Nhập họ và tên..."
								class="candidate__input"
							/>
						</div>

						<!-- Ngày sinh + Giới tính -->
						<div class="candidate__infor__dup__row">
							<div class="dup__row">
								<div class="label__input">Ngày sinh</div>
								<input
									type="date"
									v-model="form.dateOfBirth"
									class="candidate__input"
								/>
							</div>
							<div class="dup__row">
								<div class="label__input">Giới tính</div>
								<select v-model="form.gender" class="candidate__select">
									<option value="" selected hidden>Chọn giới tính</option>
									<option value="Nam">Nam</option>
									<option value="Nữ">Nữ</option>
									<option value="Khác">Khác</option>
								</select>
							</div>
						</div>

						<!-- Khu vực -->
						<div class="candidate__infor__row">
							<div class="label__input">Khu vực</div>
							<select v-model="form.region" class="candidate__select">
								<option value="" selected hidden>Chọn khu vực</option>
								<option value="Hà Nội">Hà Nội</option>
								<option value="Hồ Chí Minh">Hồ Chí Minh</option>
								<option value="Khác">Khác</option>
							</select>
						</div>

						<!-- Số điện thoại + Email -->
						<div class="candidate__infor__dup__row">
							<div class="dup__row">
								<div class="label__input">Số điện thoại</div>
								<input
									type="text"
									v-model="form.phoneNumber"
									placeholder="Nhập số điện thoại..."
									class="candidate__input"
								/>
							</div>
							<div class="dup__row">
								<div class="label__input">Email</div>
								<input
									type="text"
									v-model="form.email"
									placeholder="Nhập email..."
									class="candidate__input"
								/>
							</div>
						</div>

						<!-- Quốc gia -->
						<div class="candidate__infor__row">
							<div class="label__input">Quốc gia</div>
							<select v-model="form.nationality" class="candidate__select">
								<option value="" selected hidden>Chọn quốc gia</option>
								<option value="Việt Nam">Việt Nam</option>
								<option value="Trung Quốc">Trung Quốc</option>
								<option value="Hàn Quốc">Hàn Quốc</option>
							</select>
						</div>

						<!-- Tỉnh/Thành phố -->
						<div class="candidate__infor__row">
							<div class="label__input">Tỉnh/Thành phố</div>
							<select v-model="form.province" class="candidate__select">
								<option value="" selected hidden>Chọn tỉnh/thành phố</option>
								<option value="Nam Định">Nam Định</option>
								<option value="Hà Nội">Hà Nội</option>
								<option value="Hải Phòng">Hải Phòng</option>
							</select>
						</div>

						<!-- Phường/Xã -->
						<div class="candidate__infor__row">
							<div class="label__input">Phường/Xã</div>
							<select v-model="form.ward" class="candidate__select">
								<option value="" selected hidden>Chọn phường/xã</option>
								<option value="Hà Đông">Hà Đông</option>
								<option value="Cầu Giấy">Cầu Giấy</option>
								<option value="Ba Đình">Ba Đình</option>
							</select>
						</div>

						<!-- Địa chỉ -->
						<div class="candidate__infor__row">
							<div class="label__input">Địa chỉ</div>
							<input
								type="text"
								v-model="form.address"
								placeholder="Nhập địa chỉ..."
								class="candidate__input"
							/>
						</div>

						<!-- HỌC VẤN -->
						<div class="candidate__infor__row">
							<div class="candidate__infor__education">
								<div class="label__input">HỌC VẤN</div>
								<div class="education__infor">
									<div class="education__infor__row">
										<div class="education__infor__label">
											<div class="mi__icon__education__infor__label"></div>
											<div>Trình độ đào tạo</div>
										</div>
										<input
											type="text"
											v-model="form.educationLevel"
											placeholder="Nhập trình độ đào tạo..."
											class="candidate__input"
										/>
									</div>
									<div class="education__infor__row">
										<div class="education__infor__label">
											<div class="mi__icon__education__infor__label"></div>
											<div>Nơi đào tạo</div>
										</div>
										<input
											type="text"
											v-model="form.educationSchool"
											placeholder="Nhập nơi đào tạo..."
											class="candidate__input"
										/>
									</div>
									<div class="education__infor__row">
										<div class="education__infor__label">
											<div class="mi__icon__education__infor__label"></div>
											<div>Chuyên ngành</div>
										</div>
										<input
											type="text"
											v-model="form.educationMajor"
											placeholder="Nhập chuyên ngành..."
											class="candidate__input"
										/>
									</div>
								</div>
							</div>
						</div>

						<!-- Ngày ứng tuyển + Nguồn ứng tuyển -->
						<div class="candidate__infor__dup__row">
							<div class="dup__row">
								<div class="label__input">Ngày ứng tuyển</div>
								<input
									type="date"
									v-model="form.dateRecruitment"
									class="candidate__input"
								/>
							</div>
							<div class="dup__row">
								<div class="label__input">Nguồn ứng tuyển</div>
								<input
									type="text"
									v-model="form.sourceRecruitment"
									placeholder="Nhập nguồn ứng tuyển..."
									class="candidate__input"
								/>
							</div>
						</div>

						<!-- Nhân sự khai thác + Cộng tác viên -->
						<div class="candidate__infor__dup__row">
							<div class="dup__row">
								<div class="label__input">Nhân sự khai thác</div>
								<select v-model="form.employeeRecruitment" class="candidate__select">
									<option value="" selected hidden>Chọn nhân sự khai thác</option>
									<option value="Đặng Thanh Nhàn">Đặng Thanh Nhàn</option>
								</select>
							</div>
							<div class="dup__row">
								<div class="label__input">Cộng tác viên</div>
								<select v-model="form.collaborator" class="candidate__select">
									<option value="" selected hidden>Chọn cộng tác viên</option>
									<option value="Đặng Thanh Nhàn">Đặng Thanh Nhàn</option>
								</select>
							</div>
						</div>

						<!-- Nơi làm việc gần đây -->
						<div class="candidate__infor__row">
							<div class="label__input">Nơi làm việc gần đây</div>
							<input
								type="text"
								v-model="form.recentWorkplace"
								placeholder="Nhập nơi làm việc gần đây..."
								class="candidate__input"
							/>
						</div>

						<!-- Kinh nghiệm làm việc -->
						<div class="work__experience__line__break"></div>
						<div class="candidate__infor__row">
							<div class="label__input">Nơi làm việc</div>
							<input
								type="text"
								v-model="form.workPlace"
								placeholder="Nhập nơi làm việc..."
								class="candidate__input"
							/>
						</div>

						<div class="candidate__infor__row">
							<div class="label__input">Thời gian</div>
							<div class="candidate__work__experience__date">
								<input
									type="date"
									v-model="form.experienceDateStart"
									class="candidate__input"
								/>
								<div> - </div>
								<input
									type="date"
									v-model="form.experienceDateEnd"
									class="candidate__input"
								/>
							</div>
						</div>

						<div class="candidate__infor__row">
							<div class="label__input">Vị trí công việc</div>
							<input
								type="text"
								v-model="form.workPosition"
								placeholder="Nhập vị trí công việc..."
								class="candidate__input"
							/>
						</div>

						<div class="candidate__infor__row">
							<div class="label__input">Mô tả công việc</div>
							<textarea
								v-model="form.workDescription"
								placeholder="Nhập mô tả công việc..."
								class="candidate__input"
							></textarea>
						</div>
					</div>
				</div>
			</div>
			<div class="form__popup__footer">
				<div class="form__footer__wrap">
					<button class="form__footer__btn__cancel" @click="$emit('close')">Hủy</button>
					<button class="form__footer__btn__save" @click="handleSubmit">Lưu</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'CandidateForm',
	props: {
		isOpen: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			form: {
				fullname: '',
				dateOfBirth: '',
				gender: '',
				region: '',
				phoneNumber: '',
				email: '',
				nationality: '',
				province: '',
				ward: '',
				address: '',
				educationLevel: '',
				educationSchool: '',
				educationMajor: '',
				dateRecruitment: '',
				sourceRecruitment: '',
				employeeRecruitment: '',
				collaborator: '',
				recentWorkplace: '',
				workPlace: '',
				experienceDateStart: '',
				experienceDateEnd: '',
				workPosition: '',
				workDescription: '',
			},
		};
	},
	emits: ['close', 'submit'],
	methods: {
		handleSubmit() {
			this.$emit('submit', this.form);
			this.resetForm();
		},
		resetForm() {
			this.form = {
				fullname: '',
				dateOfBirth: '',
				gender: '',
				region: '',
				phoneNumber: '',
				email: '',
				nationality: '',
				province: '',
				ward: '',
				address: '',
				educationLevel: '',
				educationSchool: '',
				educationMajor: '',
				dateRecruitment: '',
				sourceRecruitment: '',
				employeeRecruitment: '',
				collaborator: '',
				recentWorkplace: '',
				workPlace: '',
				experienceDateStart: '',
				experienceDateEnd: '',
				workPosition: '',
				workDescription: '',
			};
		},
	},
};
</script>

<style scoped>
.form__add__candidate__center.form__popup {
	position: fixed;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	background-color: rgba(21, 26, 36, 0.5);
	z-index: 9999;
	animation: fadeIn 0.2s ease-in-out;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.form__popup__wrap {
	width: 600px;
	max-width: 100%;
	max-height: calc(100vh - 48px);
	background: #ffffff;
	border-radius: 12px;
	box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1);
	overflow: hidden;
	display: flex;
	flex-direction: column;
	animation: slideUp 0.3s ease-out;
}

@keyframes slideUp {
	from {
		transform: translateY(24px);
		opacity: 0.8;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}

.form__popup__title {
	min-height: 78px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 28px;
	border-bottom: 1px solid #f3f4f6;
	background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
}

.form__header__title {
	font-size: 24px;
	line-height: 1.3;
	font-weight: 700;
	color: #1f2937;
	margin: 0;
}

.mi__icon__header__close__icon {
	position: relative;
	width: 32px;
	height: 32px;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 6px;
	transition: all 0.2s ease;
}

.mi__icon__header__close__icon:hover {
	background-color: #f3f4f6;
}

.mi__icon__header__close__icon::before,
.mi__icon__header__close__icon::after {
	content: '';
	position: absolute;
	width: 18px;
	height: 2px;
	background: #6b7280;
	border-radius: 2px;
	transition: background-color 0.2s ease;
}

.mi__icon__header__close__icon:hover::before,
.mi__icon__header__close__icon:hover::after {
	background: #374151;
}

.mi__icon__header__close__icon::before {
	transform: rotate(45deg);
}

.mi__icon__header__close__icon::after {
	transform: rotate(-45deg);
}

.form__popup__content {
	padding: 20px 28px;
	font-size: 14px;
	flex: 1;
	min-height: 0;
	overflow-y: auto;
	overflow-x: hidden;
}

.form__popup__content::-webkit-scrollbar {
	width: 8px;
}

.form__popup__content::-webkit-scrollbar-track {
	background: transparent;
}

.form__popup__content::-webkit-scrollbar-thumb {
	background: #d1d5db;
	border-radius: 4px;
}

.form__popup__content::-webkit-scrollbar-thumb:hover {
	background: #9ca3af;
}

.form__content__import__cv {
	position: relative;
	text-align: center;
	width: 100%;
	border: 1px dashed #d8dde6;
	border-radius: 4px;
	padding: 16px 24px;
	margin-bottom: 16px;
}

.import__cv__infor p {
	margin: 0;
	color: #111827;
	line-height: 1.4;
}

.import__cv__infor > p:first-child {
	color: #2a7efc;
}

.import__cv__input {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	cursor: pointer;
}

.form__content__candidate__infor {
	margin-top: 18px;
	display: flex;
	gap: 16px;
}

.candidate__infor__image {
	width: 82px;
	height: 82px;
	flex-shrink: 0;
	border-radius: 50%;
	margin-top: 4px;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px dashed #d8dde6;
	color: #1f2937;
	font-weight: 500;
}

.candidate__infor__image__file {
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	opacity: 0;
	cursor: pointer;
}

.candidate__infor__main {
	flex: 1;
	min-width: 0;
}

.candidate__infor__row {
	margin: 10px 0;
	width: 100%;
}

.candidate__infor__dup__row {
	display: flex;
	align-items: flex-start;
	gap: 16px;
	margin: 10px 0;
}

.dup__row {
	width: 50%;
}

.label__input {
	margin-bottom: 6px;
	font-size: 14px;
	line-height: 1.35;
	font-weight: 700;
	color: #111827;
}

.candidate__input,
.candidate__select {
	width: 100%;
	height: 38px;
	border: 1px solid #d1d5db;
	border-radius: 6px;
	padding: 0 12px;
	font-size: 14px;
	color: #111827;
	background: #ffffff;
	outline: none;
	transition: all 0.2s ease;
}

.candidate__input::placeholder {
	color: #9ca3af;
}

textarea.candidate__input {
	height: 122px;
	padding: 10px 12px;
	resize: vertical;
}

.candidate__input:focus,
.candidate__select:focus {
	border-color: #2563eb;
	box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);
	background-color: #fafbfc;
}

.candidate__input:hover,
.candidate__select:hover {
	border-color: #9ca3af;
}

.candidate__infor__education {
	padding-bottom: 14px;
	margin-bottom: 10px;
	border-bottom: 1px solid #dee3eb;
	width: 100%;
}

.education__infor {
	display: flex;
	flex-direction: column;
	gap: 12px;
}

.education__infor__row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 16px;
}

.education__infor__label {
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: 700;
	min-width: 180px;
	flex-shrink: 0;
}

.mi__icon__education__infor__label {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: #9aa1ac;
}

.work__experience__line__break {
	height: 1px;
	background: #dee3eb;
	margin: 14px 0;
}

.candidate__work__experience__date {
	display: flex;
	align-items: center;
	gap: 10px;
}

.candidate__work__experience__date .candidate__input {
	flex: 1;
}

.form__popup__footer {
	padding: 16px 28px;
	border-top: 1px solid #f3f4f6;
	background: #f9fafb;
}

.form__footer__wrap {
	display: flex;
	justify-content: flex-end;
	gap: 12px;
}

.form__footer__btn__cancel,
.form__footer__btn__save {
	height: 38px;
	padding: 0 24px;
	border: none;
	border-radius: 6px;
	font-size: 14px;
	font-weight: 600;
	cursor: pointer;
	transition: all 0.2s ease;
}

.form__footer__btn__cancel {
	border: 1px solid #d1d5db;
	background: #ffffff;
	color: #374151;
}

.form__footer__btn__cancel:hover {
	background: #f3f4f6;
	border-color: #9ca3af;
}

.form__footer__btn__save {
	background: #2563eb;
	color: #ffffff;
}

.form__footer__btn__save:hover {
	background: #1d4ed8;
}
</style>


