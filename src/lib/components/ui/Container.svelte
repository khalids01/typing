<script>
	export const size = 'xl';
	export let py = 'py-0';
	export let classNames = ''
</script>

<div class={`container ${py} w-full max-w-screen-${size} px-4 lg:px-6 2xl:px-8 relative  mx-auto ${classNames}`}>
	<slot />
</div>
