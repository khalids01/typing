<script>
  import { afterUpdate } from "svelte";
  import { keyboardRowsData } from "./keyData";

  /**
   * @type {number}
   */
  let activeKeyCode = -1;

  afterUpdate(() => {});
  // @ts-ignore
  const handleWindowKeyDown = (e) => {
    activeKeyCode = e.keyCode;
  };

  const handleWindowKeyUp = () => {
    setTimeout(() => {
      activeKeyCode = -1;
    }, 500);
  };
</script>

<svelte:window on:keydown={handleWindowKeyDown} on:keyup={handleWindowKeyUp} />
<section class=" hidden xl:block" >
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div tabindex="0" id="keyboardBase" class="keyboard-base mx-auto mt-8">
    {#each keyboardRowsData as row}
      {#each row.keys as key}
        <div
          class={`key ${key?.class ? key.class : ""} ${
            activeKeyCode == key.data ? "active" : ""
          }`}
        >
          <span class="relative z-10">
            {key.value}
          </span>
        </div>
      {/each}
    {/each}
  </div>
</section>

<style lang="scss">
  .keyboard-base {
    @apply bg-slate-900/20;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    max-height: max-content;
    max-width: max-content;
    padding: 12px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(30, 24px);
    grid-template-rows: repeat(5, 45px);
    grid-gap: 5px;
    user-select: none;
  }

  .key {
    border-radius: 5px;
    grid-column: span 2;
    font-size: 14px;
    text-align: center;
    padding-top: 10px;
    @apply bg-slate-900/30 border relative border-slate-700/30 hover:bg-slate-800/30 hover:border-slate-400/50;
  }

  .active:before {
    @apply z-0 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-8 w-8 rounded-full;
    content: "";
    animation: activeKey ease-in-out forwards;
    animation-duration: 1s;
  }
  @keyframes activeKey {
    from {
      background-color: #10b981;
      opacity: 1;
    }
    to {
      background-color: rgba(48, 76, 97, 0.3);
      opacity: 0;
    }
  }

  .backSlash {
    grid-column: span 3;
  }

  .fn {
    grid-column: span 2;
  }

  .delete {
    grid-column: span 4;
  }

  .tab {
    grid-column: span 3;
  }

  .backslash {
    grid-column: span 3;
  }

  .capslock {
    grid-column: span 4;
  }

  .return {
    grid-column: span 4;
  }

  .leftshift {
    grid-column: span 5;
  }

  .rightshift {
    grid-column: span 5;
  }

  .leftctrl {
    grid-column: span 3;
  }

  .rightCtrl {
    grid-column: span 3;
  }

  .command {
    grid-column: span 4;
    font-size: 14px;
  }

  .space {
    grid-column: span 10;
  }
</style>
