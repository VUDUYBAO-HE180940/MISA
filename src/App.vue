<template>
	<div class="app" :class="{ 'sidebar--collapsed': isSidebarCollapsed }">
		<Navbar :collapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
		<Sidebar :collapsed="isSidebarCollapsed" @toggle-sidebar="toggleSidebar" />
		<router-view />
	</div>
</template>

<script>
import Navbar from './views/Navbar.vue';
import Sidebar from './views/Sidebar.vue';

const STORAGE_KEY = 'misa-sidebar-collapsed';

export default {
	name: 'App',
	components: {
		Navbar,
		Sidebar,
	},
	data() {
		return {
			isSidebarCollapsed: false,
		};
	},
	created() {
		try {
			this.isSidebarCollapsed = localStorage.getItem(STORAGE_KEY) === 'true';
		} catch (e) {
			this.isSidebarCollapsed = false;
		}
	},
	methods: {
		toggleSidebar() {
			this.isSidebarCollapsed = !this.isSidebarCollapsed;
			try {
				localStorage.setItem(STORAGE_KEY, String(this.isSidebarCollapsed));
			} catch (e) {}
		},
	},
};
</script>
