<template>
	<div class="navbar">
		<div class="navbar__left">
			<div class="navbar__left__bg">
				<div class="navbar__left__icon__more" @click="$emit('toggle-sidebar')"></div>
				<div class="navbar__left__icon__logo"></div>
				<div class="navbar__left__text">Tuyển dụng</div>
			</div>
			<div class="navbar__left__decoration"></div>
		</div>
		<div class="navbar__right">
			<div class="navbar__right__web">
				<div class="mi__icon__web"></div>
				<div>Website tuyển dụng</div>
			</div>
			<div class="mi__icon__agent"></div>
			<div class="mi__icon__annoucement"></div>
			<div class="navbar__cart">
				<div class="mi__icon__cart"></div>
				<div class="navbar__cart__badge">1</div>
			</div>
			<div class="mi__icon__invite"></div>
			<div class="mi__icon__message"></div>
			<div class="mi__icon__notification"></div>
			<div class="mi__icon__question"></div>
			<div class="mi__icon__information"></div>
			<div class="mi__icon__help"></div>
			<div class="mi__icon__account"></div>
		</div>
	</div>
</template>

