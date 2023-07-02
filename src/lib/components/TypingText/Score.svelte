<script lang="ts">
  import { settings as settingsStore } from "$lib/store/settings";
  import { Container, Flex } from "$lib/components/ui";
  import { scores, getScores } from "$lib/store/typing";
  import Icon from "@iconify/svelte";
  import { SlideToggle } from "@skeletonlabs/skeleton";

  let settings: Settings = {};
  settingsStore.subscribe((s) => (settings = s));

  let modalToShow = false;
  let modalContent: HTMLDivElement | null = null;
  let score = getScores;
  scores.subscribe((cScore) => {
    score = cScore;
  });

  function handleToggle(setting: any, value: boolean) {
    settingsStore.update((s)=>{
      s['keyboard'] =  value
      return s
    })
  }

  const showModal = () => {
    modalToShow = true;
  };

  const hideModal = () => {
    modalToShow = false;
  };

  const handleClick = (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) => {
    if (modalContent?.contains(e?.target as any)) return;

    hideModal();
  };
</script>

<svelte:body class="relative z-0" />

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={handleClick}
  class="modal {modalToShow ? 'grid place-items-center ' : 'hidden'}"
>
  <div class="content" bind:this={modalContent}>
    <div class="mx-auto max-w-42 border px-8 py-6 rounded-xl">
      {#each Object.entries(settings) as setting, index}
        <div
          class="flex gap-4 justify-between items-center px-4 py-3 rounded-sm"
        >
          {#if typeof setting[1] == "boolean"}
            <span class="text-slate-50">
              {setting[0].charAt(0).toUpperCase() +
                setting[0].slice(1).replaceAll("_", " ")}
            </span>
            <SlideToggle
              size="sm"
              style={`transform: scale(0.8)`}
              name={setting[0]}
              checked={setting[1]}
              on:change={(e) => {
                // @ts-ignore
                handleToggle(setting, e?.target?.checked);
              }}
            />
          {/if}
        </div>
      {/each}
    </div>
  </div>
</div>

<Container classNames={"container my-6"}>
  <div class="flex justify-center items-center gap-8">
    <Flex justify="center" align="center">
      <p class="text-white py-3 px-4 text-lg font-medium">
        Speed : <span>{score.speed}</span>
      </p>

      <p class="text-white py-3 px-4 text-lg font-medium">
        Accuracy : <span>{score.accuracy}</span>
      </p>

      <p class="text-white py-3 px-4 text-lg font-medium">
        Errors : <span>{score.errors}</span>
      </p>
    </Flex>
    <button
      on:click={() => showModal()}
      type="button"
      class="text-2xl btn-icon btn-icon-sm variant-ghost-surface inline-grid place-items-center"
    >
      <Icon icon="ph:gear-light" />
    </button>
  </div>
</Container>

<style lang="scss">
  .container {
    p span {
      color: rgba(39, 233, 184, 1);
      font-weight: 700;
    }
  }
  .modal {
    @apply h-screen w-screen z-40 fixed bg-slate-900/40 backdrop-blur;
    .content {
      @apply m-auto h-max w-max bg-slate-800/50;
    }
  }
</style>
