import { createRouter, createWebHistory } from 'vue-router';

// Views
import Home from '../views/Home.vue';
import Employees from '../views/Employees.vue';
import CandidateList from '../views/CandidateList.vue';
import CandidateDetail from '../views/CandidateDetail.vue';
import Candidate from '../views/Candidate.vue';
import Settings from '../views/Settings.vue';
import Demo from '../views/Demo.vue';
import NotFound from '../views/NotFound.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: Home,
		meta: { title: 'Home' },
	},
	{
		path: '/employees',
		name: 'employees',
		component: Employees,
		meta: { title: 'Employees' },
	},
	{
		path: '/candidates',
		name: 'candidates',
		component: CandidateList,
		meta: { title: 'Candidates' },
	},
	{
		path: '/candidate',
		name: 'candidate',
		component: Candidate,
		meta: { title: 'Candidate' },
	},
	{
		path: '/candidates/:id',
		name: 'candidate-detail',
		component: CandidateDetail,
		meta: { title: 'Candidate Detail' },
	},
	{
		path: '/settings',
		name: 'settings',
		component: Settings,
		meta: { title: 'Settings' },
	},
	{
		path: '/demo',
		name: 'demo',
		component: Demo,
		meta: { title: 'Components Demo' },
	},
	{
		path: '/:pathMatch(.*)*',
		name: 'not-found',
		component: NotFound,
		meta: { title: 'Not Found' },
	},
];

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes,
});

// Update document title on route change
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | Recruitment System`;
	next();
});

export default router;
