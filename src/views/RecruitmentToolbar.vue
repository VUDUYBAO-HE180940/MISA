<template>
	<div class="content__toolbar">
		<div class="content__search">
			<img :src="aiIcon" alt="AI icon" class="content__search__icon" />
			<MsInput
				:modelValue="modelValue"
				placeholder="Tìm kiếm hoặc nhờ AI trợ giúp"
				class="content__search__input"
				@update:modelValue="$emit('update:modelValue', $event)"
			/>
		</div>
		<div class="content__actions">
			<MsButton variant="secondary" class="content__action__btn" type="button" title="Lọc">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M4 5H20L14 12V18L10 20V12L4 5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round" />
				</svg>
			</MsButton>
			<MsButton variant="secondary" class="content__action__btn" type="button" title="Xuất dữ liệu">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M9 8H6V18H18V15" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
					<path d="M14 6H18V10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
					<path d="M10 14L18 6" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
				</svg>
			</MsButton>
			<MsButton variant="secondary" class="content__action__btn" type="button" title="Hoạt động">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M3 13H8L11 6L14 18L17 11H21" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
				</svg>
			</MsButton>
			<MsButton variant="secondary" class="content__action__btn content__action__btn--setting" type="button" title="Cài đặt">
				<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
					<path d="M12 15.2A3.2 3.2 0 1 0 12 8.8A3.2 3.2 0 0 0 12 15.2Z" stroke="currentColor" stroke-width="2" />
					<path d="M19.4 13.5L20.4 12L19.4 10.5L17.6 10.3L16.9 8.6L17.9 7.1L16.5 5.7L15 6.7L13.3 6L13.1 4.2H10.9L10.7 6L9 6.7L7.5 5.7L6.1 7.1L7.1 8.6L6.4 10.3L4.6 10.5L3.6 12L4.6 13.5L6.4 13.7L7.1 15.4L6.1 16.9L7.5 18.3L9 17.3L10.7 18L10.9 19.8H13.1L13.3 18L15 17.3L16.5 18.3L17.9 16.9L16.9 15.4L17.6 13.7L19.4 13.5Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
				</svg>
			</MsButton>
		</div>
	</div>
</template>

<script>
import aiIcon from '../assets/images/AIIcon.png';

export default {
	name: 'RecruitmentToolbar',
	props: {
		modelValue: {
			type: String,
			default: '',
		},
	},
	emits: ['update:modelValue'],
	data() {
		return {
			aiIcon,
		};
	},
};
</script>
