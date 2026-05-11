<template>
	<div class="content__header">
		<div class="content__header__left">
			<h1 class="content__title">Ứng viên</h1>
		</div>
		<div class="content__header__right">
			<MsButton variant="secondary" class="content__btn__secondary">
				<span class="btn__icon btn__icon--remove"></span>
				<span>Xóa dữ liệu ứng viên không trúng tuyển</span>
			</MsButton>
			<MsButton variant="primary" class="content__btn__primary" @click="$emit('open-form')">
				<span class="btn__icon btn__icon--plus">+</span>
				<span>Thêm ứng viên</span>
				<span class="btn__icon btn__icon--caret">&#9662;</span>
			</MsButton>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ContentHeader',
	emits: ['open-form'],
};
</script>
