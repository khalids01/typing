<script>
	export let text = '';
	export let py = 'py-10';
	export let px = 'px-1';
	export let fs = 16

	let charWidth = String(text).trim() ? `${text.length * (fs / 2.2)}px` : null;
	let hrClasses = `absolute  top-1/2 -translate-y-1/2 z-0 w-full h-px`;
	let maxWidth = `max-width: calc(50% - ${charWidth ?? 0})`;
</script>

<div class={`flex w-full justify-center relative ${py} ${px}`}>
	{#if String(text).trim()}
		<hr class={`${hrClasses} left-0`} style={maxWidth} />
		<span class={`z-10 relative text-slate-400`} style={`font-size: ${fs}px`}>{text}</span>
	{/if}
	<hr class={` ${hrClasses} right-0 `} style={maxWidth} />
</div>
