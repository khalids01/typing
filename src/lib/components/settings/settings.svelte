<script lang="ts">
  import { settings as settingsStore } from "$lib/store/settings";
  import { RadioGroup, RadioItem, SlideToggle } from "@skeletonlabs/skeleton";
  import { fade, slide } from "svelte/transition";
  import { hideModal, showSettings } from "$lib/store/modalStore";

  $: modalToShow = $showSettings;

  let settings: Settings | {} = {};

  settingsStore.subscribe((s) => (settings = s));

  let modalContent: HTMLDivElement | null = null;

  function handleToggle(setting: any, value: boolean) {
    settingsStore.update((s) => {
      s["keyboard"] = value;
      return s;
    });
  }

  const handleClick = (
    e: MouseEvent & {
      currentTarget: EventTarget & HTMLDivElement;
    }
  ) => {
    if (modalContent?.contains(e?.target as any)) return;

    hideModal();
  };
  let value: number = 0;

  const font_sizes = ["sm", "md", "lg", "xl"];
  const text_types = ["practice", "quotes"];
  const text_length = ["sm", "md", "lg"];
</script>

<svelte:body class="relative z-0" />

<!-- svelte-ignore a11y-click-events-have-key-events -->
{#if modalToShow}
  <div
    transition:fade={{ duration: 200 }}
    on:click={handleClick}
    class="modal grid place-items-center"
  >
    <div class="content" bind:this={modalContent}>
      <div
        transition:slide
        class="mx-auto bg-slate-950/20 max-w-42 border border-slate-300/20 p-6 rounded-xl flex gap-4 lg:gap-8"
      >
        <ul class="settings-list pt-2">
          <li>
            <span>Font Size</span>
            <RadioGroup class="scale-90">
              {#each font_sizes as size, index}
                <RadioItem
                  bind:group={$settingsStore.font_size}
                  name="justify"
                  value={size === "md" ? "base" : size}
                  class="capitalize"
                >
                  {size}
                </RadioItem>
              {/each}
            </RadioGroup>
          </li>

          <li>
            <span>Text Length</span>
            <RadioGroup class="scale-90">
              {#each text_length as length, index}
                <RadioItem
                  bind:group={$settingsStore.text_length}
                  name="justify"
                  value={length}
                  class="capitalize"
                >
                  {length}
                </RadioItem>
              {/each}
            </RadioGroup>
          </li>

          <li>
            <span>Text Type</span>
            <RadioGroup class="scale-90">
              {#each text_types as text_type, index}
                <RadioItem
                  bind:group={$settingsStore.text_type}
                  name="justify"
                  value={text_type}
                  class="capitalize"
                >
                  {text_type}
                </RadioItem>
              {/each}
            </RadioGroup>
          </li>
        </ul>

        <div>
          {#each Object.entries(settings) as setting, index}
            <div class="flex gap-4 justify-between items-center p-3 rounded-sm">
              {#if typeof setting[1] === "boolean"}
                <span class="text-white/70">
                  {setting[0].charAt(0).toUpperCase() +
                    setting[0].slice(1).replaceAll("_", " ")}
                </span>
                <SlideToggle
                  size="sm"
                  style={`transform: scale(0.8)`}
                  name={setting[0]}
                  class="brightness-90"
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
  </div>
{/if}

<style lang="scss">
  .modal {
    @apply h-screen w-screen z-40 fixed bg-slate-900/40 backdrop-blur;
    .content {
      @apply m-auto h-max w-max;
      .settings-list li {
        @apply flex items-center justify-between gap-6 text-white/70 mb-3;
      }
    }
  }
</style>
