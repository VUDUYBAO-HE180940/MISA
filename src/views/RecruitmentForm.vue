<template>
	<MsPopup :visible="visible" :title="dialogTitle" size="md" class="form__add__candidate__center form__popup" @close="$emit('close')">
		<div class="form__popup__content">
			<div class="form__content__import__cv">
				<div class="import__cv__infor">
					<p>Kéo thả hoặc bấm vào đây để tải fie lên</p>
					<p>Chấp nhận file: .pdf, .doc, .docx, .txt, .rtf (Dung lượng tối đa 15MB)</p>
				</div>
				<input type="file" class="import__cv__input" />
			</div>

			<div class="form__content__candidate__infor">
				<div class="candidate__infor__image">
					<span>Ảnh</span>
					<input type="file" class="candidate__infor__image__file" />
				</div>

				<div class="candidate__infor__main">
					<div class="candidate__infor__row">
						<div class="candidate__infor__fullname">
							<div class="label__input">Họ và tên <span class="required">*</span></div>
							<div class="candidate__infor__input__fullname">
								<MsInput id="candidate__fullname" :modelValue="draft.fullName" placeholder="Nhập họ và tên..." class="candidate__input" :class="{ 'candidate__input--error': errors.fullName }" :title="errors.fullName" @update:modelValue="updateField('fullName', $event)" @blur="validateField('fullName')" />
							</div>
							<div id="candidate__fullname__error" class="candidate__input__error" :class="{ show: !!errors.fullName }">{{ errors.fullName || ' ' }}</div>
						</div>
					</div>

					<div class="candidate__infor__dup__row">
						<div class="dup__row">
							<div class="candidate__infor__dateOfBirth">
								<div class="label__input">Ngày sinh</div>
								<div class="candidate__infor__input__dateOfBirth">
									<MsInput :modelValue="draft.dateOfBirth" type="date" class="candidate__input" @update:modelValue="updateField('dateOfBirth', $event)" />
								</div>
							</div>
						</div>
						<div class="dup__row">
							<div class="candidate__infor__gender">
								<div class="label__input">Giới tính</div>
								<div class="candidate__infor__input__gender">
									<MsSelect :modelValue="draft.gender" class="candidate__select" @update:modelValue="updateField('gender', $event)">
										<option value="" disabled hidden>Chọn giới tính</option>
										<option value="Nam">Nam</option>
										<option value="Nữ">Nữ</option>
										<option value="Khác">Khác</option>
									</MsSelect>
								</div>
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="candidate__infor__region">
							<div class="label__input">Khu vực</div>
							<div class="candidate__infor__input__region">
								<MsSelect :modelValue="draft.region" class="candidate__select" @update:modelValue="updateField('region', $event)">
									<option value="" disabled hidden>Chọn khu vực</option>
									<option value="Hà Nội">Hà Nội</option>
									<option value="Hồ Chí Minh">Hồ Chí Minh</option>
									<option value="Khác">Khác</option>
								</MsSelect>
							</div>
						</div>
					</div>

					<div class="candidate__infor__dup__row">
						<div class="dup__row">
							<div class="candidate__infor__phoneNumber">
								<div class="label__input">Số điện thoại</div>
								<div class="candidate__infor__input__phoneNumber">
									<MsInput :modelValue="draft.phoneNumber" placeholder="Nhập số điện thoại..." class="candidate__input" @update:modelValue="updateField('phoneNumber', $event)" @blur="validateField('phoneNumber')" />
								</div>
								<div id="candidate__phoneNumber__error" class="candidate__input__error" :class="{ show: !!errors.phoneNumber }">{{ errors.phoneNumber || ' ' }}</div>
							</div>
						</div>
						<div class="dup__row">
							<div class="candidate__infor__email">
								<div class="label__input">Email</div>
								<div class="candidate__infor__input__email">
									<MsInput :modelValue="draft.email" placeholder="Nhập email..." class="candidate__input" @update:modelValue="updateField('email', $event)" @blur="validateField('email')" />
								</div>
								<div id="candidate__email__error" class="candidate__input__error" :class="{ show: !!errors.email }">{{ errors.email || ' ' }}</div>
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="candidate__infor__nationality">
							<div class="label__input">Quốc gia</div>
							<div class="candidate__infor__input__nationality">
								<MsSelect :modelValue="draft.nationality" class="candidate__select" @update:modelValue="updateField('nationality', $event)">
									<option value="" disabled hidden>Chọn quốc gia</option>
									<option value="Việt Nam">Việt Nam</option>
									<option value="Trung Quốc">Trung Quốc</option>
									<option value="Hàn Quốc">Hàn Quốc</option>
								</MsSelect>
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="candidate__infor__province">
							<div class="label__input">Tỉnh/Thành phố</div>
							<div class="candidate__infor__input__province">
								<MsSelect :modelValue="draft.province" class="candidate__select" @update:modelValue="updateField('province', $event)">
									<option value="" disabled hidden>Chọn tỉnh/thành phố</option>
									<option value="Nam Định">Nam Định</option>
									<option value="Hà Nội">Hà Nội</option>
									<option value="Hải Phòng">Hải Phòng</option>
								</MsSelect>
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="candidate__infor__ward">
							<div class="label__input">Phường/xã</div>
							<div class="candidate__infor__input__ward">
								<MsSelect :modelValue="draft.ward" class="candidate__select" @update:modelValue="updateField('ward', $event)">
									<option value="" disabled hidden>Chọn phường/xã</option>
									<option value="Hà Đông">Hà Đông</option>
									<option value="Cầu Giấy">Cầu Giấy</option>
									<option value="Ba Đình">Ba Đình</option>
								</MsSelect>
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="label__input">Địa chỉ</div>
						<MsInput :modelValue="draft.address" placeholder="Nhập địa chỉ..." class="candidate__input" @update:modelValue="updateField('address', $event)" />
					</div>

					<div class="candidate__infor__row">
						<div class="candidate__infor__education">
							<div class="label__input">HỌC VẤN</div>
							<div class="education__infor">
								<div class="education__infor__row">
									<div class="education__infor__label"><div class="mi__icon__education__infor__label"></div><div>Trình độ đào tạo</div></div>
									<div class="education__infor__input">
										<div class="education__infor__input__container">
											<MsInput :modelValue="draft.educationLevel" placeholder="Nhập trình độ đào tạo..." class="education__input candidate__input" @update:modelValue="updateField('educationLevel', $event)" />
											<div class="mi__icon__add__education"></div>
										</div>
										<div id="education__level__error" class="candidate__input__error" :class="{ show: !!errors.educationLevel }">{{ errors.educationLevel || ' ' }}</div>
									</div>
								</div>
								<div class="education__infor__row">
									<div class="education__infor__label"><div class="mi__icon__education__infor__label"></div><div>Nơi đào tạo</div></div>
									<div class="education__infor__input">
										<div class="education__infor__input__container">
											<MsInput :modelValue="draft.educationSchool" placeholder="Nhập nơi đào tạo..." class="education__input candidate__input" @update:modelValue="updateField('educationSchool', $event)" />
											<div class="mi__icon__add__education"></div>
										</div>
										<div id="education__school__error" class="candidate__input__error" :class="{ show: !!errors.educationSchool }">{{ errors.educationSchool || ' ' }}</div>
									</div>
								</div>
								<div class="education__infor__row">
									<div class="education__infor__label"><div class="mi__icon__education__infor__label"></div><div>Chuyên ngành</div></div>
									<div class="education__infor__input">
										<div class="education__infor__input__container">
											<MsInput :modelValue="draft.educationMajor" placeholder="Nhập chuyên ngành..." class="education__input candidate__input" @update:modelValue="updateField('educationMajor', $event)" />
											<div class="mi__icon__add__education"></div>
										</div>
										<div id="education__major__error" class="candidate__input__error" :class="{ show: !!errors.educationMajor }">{{ errors.educationMajor || ' ' }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div class="candidate__infor__dup__row">
						<div class="dup__row">
							<div class="candidate__infor__dateRecruitment">
								<div class="label__input">Ngày ứng tuyển</div>
								<div class="candidate__infor__input__dateRecruitment">
									<MsInput :modelValue="draft.dateRecruitment" type="date" class="candidate__input" @update:modelValue="updateField('dateRecruitment', $event)" />
								</div>
							</div>
						</div>
						<div class="dup__row">
							<div class="candidate__infor__sourceRecuiment">
								<div class="label__input">Nguồn ứng tuyển</div>
								<div class="candidate__infor__input__sourceRecuiment">
									<MsInput :modelValue="draft.sourceRecruitment" placeholder="Nhập nguồn ứng tuyển..." class="candidate__input" @update:modelValue="updateField('sourceRecruitment', $event)" />
								</div>
							</div>
						</div>
					</div>

					<div class="candidate__infor__dup__row">
						<div class="dup__row">
							<div class="candidate__infor__employeeRecruitment">
								<div class="label__input">Nhân sự khai thác</div>
								<div class="candidate__infor__input__employeeRecruitment">
									<MsSelect :modelValue="draft.employeeRecruitment" class="candidate__select" @update:modelValue="updateField('employeeRecruitment', $event)">
										<option value="" disabled hidden>Chọn nhân sự khai thác</option>
										<option value="Đặng Thanh Nhàn">Đặng Thanh Nhàn</option>
									</MsSelect>
								</div>
							</div>
						</div>
						<div class="dup__row">
							<div class="candidate__infor__collaborator">
								<div class="label__input">Cộng tác viên</div>
								<div class="candidate__infor__input__collaborator">
									<MsSelect :modelValue="draft.collaborator" class="candidate__select" @update:modelValue="updateField('collaborator', $event)">
										<option value="" disabled hidden>Chọn cộng tác viên</option>
										<option value="Đặng Thanh Nhàn">Đặng Thanh Nhàn</option>
									</MsSelect>
								</div>
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="quick__add__reference">
							<div style="margin: 0;" class="mi__icon__checkbox"></div>
							<div>Thêm nhanh người tham chiếu vào kho ứng viên</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="add__infor">
							<div class="mi__icon__add__education"></div>
							<label class="add__infor__label">Thêm người giới thiệu</label>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div>
							<div class="label__input">Nhập nơi làm việc gần đây</div>
							<div>
								<MsInput :modelValue="draft.recentWorkplace" placeholder="Nhập nơi làm việc gần đây..." class="candidate__input" @update:modelValue="updateField('recentWorkplace', $event)" />
							</div>
						</div>
					</div>

					<div class="work__experience__line__break"></div>

					<div class="candidate__infor__row">
						<div class="add__infor">
							<div class="add__icon"></div>
							<label class="add__infor__label">Thêm kinh nghiệm làm việc</label>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div>
							<div class="label__input">Nhập nơi làm việc</div>
							<div>
								<MsInput :modelValue="draft.workPlace" placeholder="Nhập nơi làm việc..." class="candidate__input" @update:modelValue="updateField('workPlace', $event)" />
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div class="label__input">Thời gian</div>
						<div class="candidate__work__experience__date">
							<div class="experience__date__wrap">
								<MsInput :modelValue="draft.experienceStart" type="date" class="candidate__input" @update:modelValue="updateField('experienceStart', $event)" />
							</div>
							<div> - </div>
							<div class="experience__date__wrap">
								<MsInput :modelValue="draft.experienceEnd" type="date" class="candidate__input" @update:modelValue="updateField('experienceEnd', $event)" />
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div>
							<div class="label__input">Vị trí công việc</div>
							<div>
								<MsInput :modelValue="draft.workPosition" placeholder="Nhập vị trí công việc..." class="candidate__input" @update:modelValue="updateField('workPosition', $event)" />
							</div>
						</div>
					</div>

					<div class="candidate__infor__row">
						<div>
							<div class="label__input">Mô tả công việc</div>
							<div>
								<textarea v-model="draft.workDescription" class="candidate__input candidate__textarea" placeholder="Nhập mô tả công việc..."></textarea>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<template #footer>
			<div class="form__footer__wrap">
				<MsButton variant="secondary" class="form__footer__btn__cancel" type="button" @click="$emit('close')">Hủy</MsButton>
				<MsButton variant="primary" class="form__footer__btn__save" type="button" @click="handleSubmit">Lưu</MsButton>
			</div>
		</template>
	</MsPopup>
</template>

<script>
export default {
	name: 'RecruitmentForm',
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
		candidate: {
			type: Object,
			default: null,
		},
		mode: {
			type: String,
			default: 'create',
			validator: (value) => ['create', 'edit'].includes(value),
		},
	},
	emits: ['close', 'save'],
	data() {
		return {
			draft: this.createEmptyForm(),
			errors: {},
		};
	},
	computed: {
		dialogTitle() {
			return this.mode === 'edit' ? 'Sửa Ứng Viên' : 'Thêm Ứng Viên';
		},
	},
	watch: {
		visible: {
			immediate: true,
			handler(value) {
				if (value) {
					this.syncDraft();
				} else {
					this.errors = {};
				}
			},
		},
		candidate: {
			deep: true,
			handler() {
				if (this.visible) {
					this.syncDraft();
				}
			},
		},
	},
	methods: {
		createEmptyForm() {
			return {
				id: null,
				fullName: '',
				dateOfBirth: '',
				gender: '',
				phoneNumber: '',
				email: '',
				address: '',
				region: '',
				nationality: '',
				province: '',
				ward: '',
				educationLevel: '',
				educationSchool: '',
				educationMajor: '',
				dateRecruitment: '',
				sourceRecruitment: '',
				employeeRecruitment: '',
				collaborator: '',
				recentWorkplace: '',
				workPosition: '',
				workPlace: '',
				experienceStart: '',
				experienceEnd: '',
				campaign: 'Tuyển dụng SA',
				job: 'Tuyển dụng SA',
				unit: '',
				rating: 0,
				status: 'Ứng viên',
				workDescription: '',
			};
		},
		syncDraft() {
			this.draft = {
				...this.createEmptyForm(),
				...(this.candidate ? JSON.parse(JSON.stringify(this.candidate)) : {}),
				id: this.candidate?.id ?? null,
				fullName: this.candidate?.fullName || '',
				dateOfBirth: this.candidate?.dateOfBirth || '',
				gender: this.candidate?.gender || '',
				phoneNumber: this.candidate?.phoneNumber || this.candidate?.phone || '',
				email: this.candidate?.email || '',
				address: this.candidate?.address || '',
				region: this.candidate?.region || '',
				nationality: this.candidate?.nationality || '',
				province: this.candidate?.province || '',
				ward: this.candidate?.ward || '',
				educationLevel: this.candidate?.educationLevel || '',
				educationSchool: this.candidate?.educationSchool || this.candidate?.school || '',
				educationMajor: this.candidate?.educationMajor || this.candidate?.major || '',
				dateRecruitment: this.candidate?.dateRecruitment || this.candidate?.appliedDate || '',
				sourceRecruitment: this.candidate?.sourceRecruitment || this.candidate?.source || '',
				employeeRecruitment: this.candidate?.employeeRecruitment || this.candidate?.recruiter || '',
				collaborator: this.candidate?.collaborator || '',
				recentWorkplace: this.candidate?.recentWorkplace || '',
				workPosition: this.candidate?.workPosition || this.candidate?.position || '',
				workPlace: this.candidate?.workPlace || '',
				experienceStart: this.candidate?.experienceStart || '',
				experienceEnd: this.candidate?.experienceEnd || '',
				campaign: this.candidate?.campaign || 'Tuyển dụng SA',
				job: this.candidate?.job || 'Tuyển dụng SA',
				unit: this.candidate?.unit || '',
				rating: Number(this.candidate?.rating || 0),
				status: this.candidate?.status || 'Ứng viên',
				workDescription: this.candidate?.workDescription || '',
			};
			this.errors = {};
		},
		updateField(field, value) {
			this.draft = {
				...this.draft,
				[field]: value,
			};
			if (this.errors[field]) {
				this.validateField(field);
			}
		},
		validateField(field) {
			const value = String(this.draft[field] ?? '').trim();
			let message = '';

			const requiredFields = {
				fullName: 'Vui lòng nhập họ và tên',
				dateOfBirth: 'Vui lòng nhập ngày sinh',
				gender: 'Vui lòng chọn giới tính',
				phoneNumber: 'Vui lòng nhập số điện thoại',
				email: 'Vui lòng nhập email',
				address: 'Vui lòng nhập địa chỉ',
				dateRecruitment: 'Vui lòng nhập ngày ứng tuyển',
				sourceRecruitment: 'Vui lòng nhập nguồn ứng tuyển',
				employeeRecruitment: 'Vui lòng chọn nhân sự khai thác',
				recentWorkplace: 'Vui lòng nhập nơi làm việc gần đây',
				workPosition: 'Vui lòng nhập vị trí công việc',
			};

			if (requiredFields[field] && !value) {
				message = requiredFields[field];
			} else if (field === 'phoneNumber') {
				const normalized = value.replace(/[.\s-]/g, '');
				const normalized84 = normalized.replace(/^\+84/, '84');
				if (!/^(?:84|0)(3|5|7|8|9)\d{8}$/.test(normalized84)) {
					message = 'Số điện thoại Việt Nam không hợp lệ';
				}
			} else if (field === 'email') {
				if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
					message = 'Email không hợp lệ';
				}
			}

			if (message) {
				this.errors = {
					...this.errors,
					[field]: message,
				};
				return false;
			}

			if (this.errors[field]) {
				const nextErrors = { ...this.errors };
				delete nextErrors[field];
				this.errors = nextErrors;
			}

			return true;
		},
		validateAll() {
			const fields = [
				'fullName',
				'dateOfBirth',
				'gender',
				'phoneNumber',
				'email',
				'address',
				'dateRecruitment',
				'sourceRecruitment',
				'employeeRecruitment',
				'recentWorkplace',
				'workPosition',
			];

			let isValid = true;
			fields.forEach((field) => {
				const valid = this.validateField(field);
				if (!valid) {
					isValid = false;
				}
			});
			return isValid;
		},
		handleSubmit() {
			if (!this.validateAll()) {
				return;
			}

			this.$emit('save', {
				...this.draft,
				id: this.draft.id,
				phone: this.draft.phoneNumber,
				source: this.draft.sourceRecruitment,
				school: this.draft.educationSchool,
				major: this.draft.educationMajor,
				appliedDate: this.draft.dateRecruitment,
				recruiter: this.draft.employeeRecruitment,
				position: this.draft.workPosition,
			});
			this.$emit('close');
			this.draft = this.createEmptyForm();
			this.errors = {};
		},
	},
};
</script>

<style scoped>
.form__popup__content {
	padding: 16px 20px 12px;
	font-size: 14px;
}

.form__content__import__cv {
	position: relative;
	text-align: center;
	width: 100%;
	border: 1px dashed #d8dde6;
	border-radius: 8px;
	padding: 12px 20px;
	margin-bottom: 12px;
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
	inset: 0;
	opacity: 0;
	cursor: pointer;
}

.form__content__candidate__infor {
	margin-top: 12px;
	display: flex;
	gap: 12px;
}

.candidate__infor__image {
	width: 82px;
	height: 82px;
	flex-shrink: 0;
	border-radius: 50%;
	margin-top: 2px;
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
	inset: 0;
	opacity: 0;
	cursor: pointer;
}

.candidate__infor__main {
	flex: 1;
	min-width: 0;
}

.candidate__infor__row {
	margin: 8px 0;
	width: 100%;
}

.candidate__infor__dup__row {
	display: flex;
	align-items: flex-start;
	gap: 12px;
	margin: 8px 0;
}

.dup__row {
	width: 50%;
}

.label__input {
	margin-bottom: 4px;
	font-size: 14px;
	line-height: 1.35;
	font-weight: 700;
	color: #111827;
}

.required {
	color: #dc2626;
}

.candidate__input,
.candidate__select {
	width: 100%;
	height: 36px;
	border: 1px solid #d1d5db;
	border-radius: 8px;
	padding: 0 12px;
	font-size: 14px;
	color: #111827;
	background: #ffffff;
	outline: none;
	transition: all 0.2s ease;
}

.candidate__textarea {
	min-height: 132px;
	height: 132px;
	padding: 10px 12px;
	resize: vertical;
}

.candidate__input::placeholder {
	color: #9ca3af;
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

.candidate__input--error {
	border-color: #dc2626;
}

.candidate__input__error {
	min-height: 16px;
	margin-top: 4px;
	font-size: 13px;
	font-weight: 500;
	color: #dc2626;
	visibility: hidden;
}

.candidate__input__error.show {
	visibility: visible;
}

.candidate__input__error--inline {
	margin-top: 2px;
}

.candidate__infor__education {
	padding-bottom: 10px;
	margin-bottom: 8px;
	border-bottom: 1px solid #dee3eb;
	width: 100%;
}

.education__infor {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.education__infor__row {
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 12px;
}

.education__infor__label {
	display: flex;
	align-items: center;
	gap: 8px;
	font-weight: 700;
	min-width: 190px;
	flex-shrink: 0;
}

.education__infor__input {
	flex: 1;
	display: flex;
	border: 1px solid #c7ced9;
	border-radius: 8px;
	min-height: 36px;
	overflow: hidden;
}

.education__infor__input__container {
	flex: 1;
	display: flex;
	align-items: center;
	padding-right: 8px;
}

.education__input {
	border: none !important;
	height: 34px;
}

.education__infor__input__dropdown {
	width: 36px;
}

.mi__icon__education__infor__label {
	width: 6px;
	height: 6px;
	border-radius: 50%;
	background: #9aa1ac;
	flex-shrink: 0;
}

.form__footer__wrap {
	display: flex;
	justify-content: flex-end;
	gap: 12px;
	padding: 12px 20px 0;
}

.form__footer__btn__cancel,
.form__footer__btn__save {
	height: 40px;
	padding: 0 24px;
	border-radius: 8px;
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
	border: none;
	background: #2563eb;
	color: #ffffff;
}

.form__footer__btn__save:hover {
	background: #1d4ed8;
}

@media (max-width: 960px) {
	.form__content__candidate__infor,
	.candidate__infor__dup__row,
	.education__infor__row {
		flex-direction: column;
	}

	.candidate__infor__image {
		margin: 0 auto;
	}

	.dup__row {
		width: 100%;
	}

	.education__infor__label {
		min-width: auto;
	}
}
</style>