<template>
	<div class="sidebar">
		<div class="sidebar__bg">
			<div class="sidebar__menu">
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'employees' }]"
					@click="activeMenu = 'employees'"
				>
					<div class="sidebar__menu__item__icon__recruite"></div>
					<div>Tin tuyển dụng</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'candidates' }]"
					@click="activeMenu = 'candidates'"
				>
					<div class="sidebar__menu__item__icon__candidate"></div>
					<div>Ứng viên</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'calendar' }]"
					@click="activeMenu = 'calendar'"
				>
					<div class="sidebar__menu__item__icon__calendar"></div>
					<div>Lịch</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'potential' }]"
					@click="activeMenu = 'potential'"
				>
					<div class="sidebar__menu__item__icon__potential"></div>
					<div>Kho tiềm năng</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'campaign' }]"
					@click="activeMenu = 'campaign'"
				>
					<div class="sidebar__menu__item__icon__campaign"></div>
					<div>Chiến dịch tuyển dụng</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'job' }]"
					@click="activeMenu = 'job'"
				>
					<div class="sidebar__menu__item__icon__job"></div>
					<div>Công việc</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'aimarketing' }]"
					@click="activeMenu = 'aimarketing'"
				>
					<div class="sidebar__menu__item__icon__aimarketing"></div>
					<div>aiMarketing</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'report' }]"
					@click="activeMenu = 'report'"
				>
					<div class="sidebar__menu__item__icon__report"></div>
					<div>Báo cáo</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'setting' }]"
					@click="activeMenu = 'setting'"
				>
					<div class="sidebar__menu__item__icon__setting"></div>
					<div>Thiết lập</div>
				</div>
				<div
					:class="['sidebar__menu__item', { 'sidebar__menu__item--active': activeMenu === 'knowledge' }]"
					@click="activeMenu = 'knowledge'"
				>
					<div class="sidebar__menu__item__icon__knowledge"></div>
					<div>Kiến thức hữu ích</div>
				</div>
			</div>

			<div class="sidebar__footer">
				<div class="sidebar__toggle" @click="$emit('toggle-sidebar')">
					<div class="toggle__border">
						<div class="sidebar__toggle__icon"></div>
						<div class="sidebar__toggle__text">{{ collapsed ? 'Mở rộng' : 'Thu gọn' }}</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Sidebar',
	props: {
		collapsed: {
			type: Boolean,
			default: false,
		},
	},
	data() {
		return {
			activeMenu: 'candidates',
		};
	},
};
</script>