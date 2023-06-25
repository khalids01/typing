<script>
  let keys = `ENITRLSAUODYCHGMPBKVWFZXQJ`;
</script>

<div class="flex gap-[2px] justify-center max-w-4xl mx-auto">
  {#each keys as key, index}
    <div class="key">
      {key}
    </div>
  {/each}
</div>

<style lang="scss">
  .key {
    @apply bg-emerald-500/90 hover:scale-110 transition-all duration-300 relative text-slate-800 text-xs uppercase px-2 py-1;
  }
</style>
