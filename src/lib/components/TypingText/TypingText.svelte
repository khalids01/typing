<script>
  import { afterUpdate, onMount } from "svelte";
  import { Flex } from "$lib/components/ui";
  import { settings } from "$lib/store/settings";
  import {
    getItem,
    letters,
    updateStatus,
    typingDone,
    startTimer,
    resetLetters,
    endTimer,
  } from "$lib/store/typing";

  let activeIndex = 0;
  let textFocused = false;
  let pressedKey = "";
  let timerStart = true;
  let sLetters = new Map();
  letters.subscribe((newLetters) => {
    sLetters = newLetters;
  });
  /**
   * @type {HTMLDivElement}
   */
  let divRef;

  onMount(() => {
    divRef.focus();
    textFocused = true;
    updateStatus({ index: 0, status: "active" });
  });

  // @ts-ignore
  const handleFocus = (e) => {
    textFocused = true;
  };

  // @ts-ignore
  const handleBlur = (e) => {
    textFocused = false;
    activeIndex = 0;
    resetLetters();
  };

  afterUpdate(() => {
    if (["right", "wrong"].includes(sLetters.get(sLetters.size - 1).status)) {
      activeIndex = 0;
      endTimer();
      typingDone();
      timerStart = true;
      return;
    }
  });

  // @ts-ignore
  const handleWindowKeyPress = (e) => {
    pressedKey = e.key;
    if (!textFocused) return;
    if (timerStart) {
      startTimer();
      timerStart = false;
    }
    if (e.key === getItem(activeIndex)?.element) {
      if (!getItem(activeIndex)?.status.includes("wrong")) {
        updateStatus({ index: activeIndex, status: "right" });
      }
      if (sLetters.size != activeIndex + 1) {
        if (getItem(activeIndex)?.status.includes("wrong")) {
          updateStatus({ index: activeIndex, status: "wrong" });
        }
        updateStatus({ index: activeIndex + 1, status: "active" });
      }
      activeIndex += 1;
    } else {
      updateStatus({ index: activeIndex, status: "wrong active" });
    }
  };
  $: console.log($settings.bar_white_space);
</script>

<svelte:window on:keypress={handleWindowKeyPress} />

<section class="pt-4">
  <Flex justify="center" wrap="wrap">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div
      tabindex="0"
      bind:this={divRef}
      on:focus={handleFocus}
      on:blur={handleBlur}
      class={`text-white border  px-6 py-8 rounded-xl letters relative ${
        textFocused ? "opacity-100 border-white/80" : "border-transparent"
      }`}
      style={`--active: ${activeIndex}; --size: ${
        $settings.font_size === "sm"
          ? "22px"
          : $settings.font_size === "md"
          ? "26px"
          : "30px"
      }`}
    >
      {#if !textFocused}
        <div
          class="h-full w-full rounded-xl z-0 absolute backdrop-blur-md bg-slate-800/30 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-sm"
        />
        <div
          class="cursor-pointer grid z-10 h-full w-full place-items-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-slate-200 text-xl"
        >
          Click here
        </div>
      {/if}
      {#if sLetters.size > 0}
        {#each Array.from(sLetters.keys()) as key, index}
          <span
            id={index.toString()}
            class={`${textFocused ? sLetters.get(key).status : ""} `}
          >
            {#if sLetters.get(key).element === " "}
              {#if $settings.bar_white_space}
                ␣
              {:else}
                <span class="h-[1ch] w-[0.6ch]"/>
              {/if}
            {:else}
              {sLetters.get(key).element}
            {/if}
          </span>
        {/each}
      {/if}
    </div>
  </Flex>
</section>

<style lang="scss">
  section {
    max-width: 920px;
    padding-inline: 1rem;
    margin-inline: auto;
  }
  .letters {
    font-weight: 600;
    line-height: 1.6;
    span {
      border-bottom: 4px solid transparent;
      display: inline-flex;
      justify-content: center;
      padding-inline: 0.1ch;
      align-items: center;
      font-size: var(--size);
      //   border-radius: 4px;
      &.active {
        animation: activeLetter 1.5s infinite;
      }
      &.wrong {
        color: rgb(255, 0, 140) !important;
        filter: brightness(0.8);
      }
      &.right {
        color: white;
        filter: brightness(0.5);
      }
    }

    @keyframes activeLetter {
      0% {
        border-color: transparent;
        color: white;
      }
      50% {
        border-color: rgb(6, 255, 193);
        // color: rgb(6, 255, 193);
      }
      100% {
        border-color: transparent;
        color: white;
      }
    }
  }
</style>
