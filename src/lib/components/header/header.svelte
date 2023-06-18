<script>
	import Icon from '@iconify/svelte';
	import { Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import { Divider, Container } from '$lib/components/ui';

	const drawerSettings = {
		id: 'example-3',
		// Provide your property overrides:
		bgDrawer: 'bg-slate-900/60 text-white',
		bgBackdrop:
			'bg-gradient-to-tr from-slate-900/80 via-slate-900/70 to-blue-900/40 backdrop-blur-[2px]',
		width: 'w-full max-w-xs',
		padding: 'p-4',
		rounded: 'rounded-xl'
	};
</script>

<header class="bg-slate-50/5 shadow-sm backdrop-blur-sm">
	<Container>
		<nav class="hidden md:flex max-w-7xl mx-auto w-full justify-between py-3 lg:py-4 gap-4">
			<div class="flex gap-6 links">
				<a href="/" class="text-xl lg:text-3xl logo font-bold"> iconic lab </a>
				<a href="/generate">
					<span> Generate </span>
					<Icon icon="ri:ai-generate" />
				</a>
				<a href="/explore">
					<span> Explore </span>
					<Icon icon="material-symbols:explore-outline-rounded" />
				</a>
			</div>
			<a class="link variant-ghost-surface" href="/login">
				<span> Login </span>
				<Icon icon="solar:login-2-line-duotone" />
			</a>
		</nav>

		<nav class="flex md:hidden justify-between md:px-3 py-4">
			<button class="btn pl-0 text-xl" on:click={() => drawerStore.open(drawerSettings)}>
				<Icon icon="pepicons-pencil:menu" />
			</button>
			<a href="/" class="text-xl logo font-bold pt-1 mx-auto pl-8"> iconic lab </a>
			<a class="link !pr-1" href="/login">
				<span class="text-sm"> Login </span>
				<Icon icon="solar:login-2-line-duotone" />
			</a>
		</nav>
	</Container>
</header>

<Drawer>
	<nav class="h-full w-full max-w-xs px-6 py-4 flex flex-col items-stretch justify-between">
		<div>
			<div class="flex justify-between mb-8 px-1">
				<a href="/" class="text-xl pt-1 logo font-bold"> iconic lab </a>
				<button on:click={() => drawerStore.close()} class="btn pr-1 !text-slate-50/60">
					<Icon icon="nimbus:close" />
				</button>
			</div>
			<div class="flex gap-4 flex-col items-stretch drawer-items">
				<a href="/generate">
					<span> Generate </span>
					<Icon icon="ri:ai-generate" />
				</a>
				<a href="/explore">
					<span> Explore </span>
					<Icon icon="material-symbols:explore-outline-rounded" />
				</a>
			</div>
		</div>

		<div class="flex flex-col items-stretch">
			<Divider py={'py-6'} px="px-2" />
			<button class="drawer-btn">
				<span> Logout </span>

				<Icon icon="solar:logout-2-line-duotone" class="text-lg" />
			</button>
		</div>
	</nav>
</Drawer>

<style lang="scss">
	.links a:not(.logo),
	.link {
		@apply text-base font-semibold text-slate-50/90 px-6 btn btn-sm flex gap-1 transition-all hover:text-primary-400;
		border: none !important;
	}

	.drawer-items a,
	.drawer-btn {
		@apply flex gap-4 items-center bg-slate-600/20 text-slate-100/80 font-medium text-sm rounded-full px-6 py-3 transition-all hover:scale-[1.04] justify-between sm:py-4;
	}

	.logo {
		background: linear-gradient(
			90deg,
			rgba(57, 162, 204, 1) 0%,
			rgba(56, 97, 233, 1) 45%,
			rgba(154, 88, 240, 1) 95%,
			rgba(154, 88, 240, 1) 110%
		);
		color: #292929;
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-stroke: 4px transparent;
		letter-spacing: 4px;
		animation: ani 40s reverse infinite;
	}

	@media (max-width: 768px) {
		.logo {
			font-size: 16px;
		}
	}

	@keyframes ani {
		0% {
			background-position: 0% 10%;
			background-size: 200%;
		}

		50% {
			background-position: 100% 10%;
			background-size: 400%;
		}

		100% {
			background-position: 0% 10%;
			background-size: 200%;
		}
	}
</style>
