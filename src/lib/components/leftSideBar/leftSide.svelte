<script>
  import { SlideToggle, ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
  import Flex from "../ui/Flex.svelte";

  const settings = {
    story: {
      value: true,
      label: "Story",
    },
    capitalLetter: {
      value: true,
      label: "Capital Letter",
    },
    punctuation: {
      value: true,
      label: "Punctuation",
    },
    keyboard: {
      value: true,
      label: "Keyboard",
    },
  };
</script>

<div class="px-3 py-4 min-w-[200px] flex flex-col items-stretch gap-4">
  {#each Object.entries(settings) as [key, option]}
    <div class="flex justify-between items-center gap-3 ">
      <label class="font-medium text-sm" for={key}>{option.label}</label>
      <div class="toggler inline-flex justify-end items-center">
        <SlideToggle
          style={`transform: scale(0.8);`}
          name={option.label}
          bind:checked={option.value}
          active="bg-secondary-500"
          size="sm"
          id={key}
        />
      </div>
    </div>
  {/each}
</div>

<style>
  .toggler {
    transform: scale(0.8) !important;
  }
</style>
