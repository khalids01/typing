<script>
// @ts-nocheck

	import Icon from '@iconify/svelte';
	export let type = 'button'
	export let onclick = () => {};
</script>

<button {type} on:click={onclick} class="btn py-[13px] bg-slate-900">
	<Icon icon="skill-icons:github-light" class="text-2xl flex gap-2" />
	<span class="text-lg font-medium"> Github </span>
</button>
