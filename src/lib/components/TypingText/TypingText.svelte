<script>
  import { onMount } from "svelte";
  import { Container, Flex } from "$lib/components/ui";
  import {
    getItem,
    letters,
    updateStatus,
    typingDone,
    startTimer,
    resetLetters,
    endTimer,
  } from "../../../typing";

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

  // TODO
  // use effect
  //if(["right", "wrong"].includes(sLetters.get(sLetters.size - 1).status)

  // @ts-ignore
  const handleWindowKeyPress = (e) => {
    pressedKey = e.key;
    if (!textFocused) return;
    if (activeIndex === sLetters.size) {
      activeIndex = 0;
      endTimer();
      typingDone();
      timerStart = true;
      return;
    }
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
</script>

<svelte:window on:keypress={handleWindowKeyPress} />

<Container size="xl" py="pt-4">
  <Flex justify="center" wrap="wrap">
    <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
    <div
      tabindex="0"
      bind:this={divRef}
      on:focus={handleFocus}
      on:blur={handleBlur}
      class={`text-white border border-white/80 px-6 py-8 rounded-xl letters ${
        textFocused ? "opacity-100" : "opacity-50"
      }`}
      style={`--active: ${activeIndex}`}
    >
      {#if sLetters.size > 0}
        {#each Array.from(sLetters.keys()) as key, index}
          <span
            id={index.toString()}
            class={textFocused ? sLetters.get(key).status : ""}
          >
            {sLetters.get(key).element === " "
              ? "__"
              : sLetters.get(key).element}</span
          >
        {/each}
      {/if}
    </div>
  </Flex>
</Container>

<style lang="scss">
  .letters {
    font-size: 1.5rem;
    font-weight: 600;
    line-height: 1.6;
    span {
      border-bottom: 4px solid transparent;
      display: inline-flex;
      justify-content: center;
      padding-inline: 0.1ch;
      align-items: center;
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
