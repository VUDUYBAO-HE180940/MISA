import { createRouter, createWebHistory } from 'vue-router';

import Candidate from '../views/Candidate.vue';

const routes = [
	{
		path: '/',
		redirect: '/candidate',
	},
	{
		path: '/candidate',
		name: 'candidate',
		component: Candidate,
		meta: { title: 'Ứng viên' },
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		redirect: '/candidate',
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title || 'Ứng viên'} | AMIS TUYỂN DỤNG`;
	next();
});

export default router;
