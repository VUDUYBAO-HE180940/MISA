<template>
	<div
		v-if="visible"
		:class="['ms-popup__overlay', overlayClass, sizeClass, $attrs.class]"
		@click.self="close"
	>
		<div class="ms-popup__panel" role="dialog" aria-modal="true">
			<div class="ms-popup__header">
				<div class="ms-popup__title">
					<slot name="title">
						{{ title }}
					</slot>
				</div>
				<button v-if="closable" type="button" class="ms-popup__close" @click="close">
					×
				</button>
			</div>
			<div class="ms-popup__body">
				<slot />
			</div>
			<div v-if="$slots.footer" class="ms-popup__footer">
				<slot name="footer" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'MsPopup',
	inheritAttrs: false,
	props: {
		visible: {
			type: Boolean,
			default: false,
		},
		title: {
			type: String,
			default: '',
		},
		size: {
			type: String,
			default: 'md',
			validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value),
		},
		closable: {
			type: Boolean,
			default: true,
		},
		overlayClass: {
			type: String,
			default: '',
		},
	},
	emits: ['close'],
	computed: {
		sizeClass() {
			return `ms-popup--${this.size}`;
		},
	},
	methods: {
		close() {
			this.$emit('close');
		},
	},
};
</script>

<style scoped>
.ms-popup__overlay {
	position: fixed;
	inset: 0;
	z-index: 9999;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 12px;
	background: rgba(21, 26, 36, 0.5);
	animation: fadeIn 0.2s ease-in-out;
}

.ms-popup__panel {
	width: min(100%, 600px);
	max-height: calc(100vh - 48px);
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background: #ffffff;
	border-radius: 12px;
	box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 0 1px rgba(0, 0, 0, 0.1);
	animation: slideUp 0.3s ease-out;
}

.ms-popup--sm .ms-popup__panel {
	width: min(100%, 420px);
}

.ms-popup--lg .ms-popup__panel {
	width: min(100%, 760px);
}

.ms-popup--xl .ms-popup__panel {
	width: min(100%, 920px);
}

.ms-popup__header {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 78px;
	padding: 20px 28px;
	border-bottom: 1px solid #f3f4f6;
	background: linear-gradient(135deg, #ffffff 0%, #fafbfc 100%);
}

.ms-popup__title {
	font-size: 24px;
	line-height: 1.3;
	font-weight: 700;
	color: #1f2937;
}

.ms-popup__close {
	width: 32px;
	height: 32px;
	border: none;
	border-radius: 6px;
	background: transparent;
	color: #6b7280;
	font-size: 24px;
	line-height: 1;
	cursor: pointer;
}

.ms-popup__close:hover {
	background: #f3f4f6;
	color: #374151;
}

.ms-popup__body {
	flex: 1;
	min-height: 0;
	overflow: auto;
	padding: 20px 28px;
}

.ms-popup__footer {
	padding: 16px 28px;
	border-top: 1px solid #f3f4f6;
	background: #f9fafb;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

@keyframes slideUp {
	from {
		transform: translateY(24px);
		opacity: 0.85;
	}
	to {
		transform: translateY(0);
		opacity: 1;
	}
}
</style>