<script>
  export let justify = "flex-start";
  export let align = "flex-start";
  export let wrap = "no-wrap";
  export let dir = "row";
  export let h = "max-content";
  export let w = "max-content";
  export let cls = "flex-element ";
  export let gap = "0px";
</script>

<div
  class={cls}
  style={`
--justify: ${justify};
--align: ${align};
--wrap: ${wrap};
--dir: ${dir};
--h: ${h},
--w: ${w},
--gap: ${gap}
`}
>
  <slot />
</div>

<style>
  div {
    display: flex !important;
    justify-content: var(--justify);
    align-items: var(--align);
    flex-wrap: var(--wrap);
    flex-direction: var(--dir);
    height: var(--h);
    width: var(--w);
    gap: var(--gap);
  }
</style>
