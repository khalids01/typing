<script>
  import {
    SlideToggle,
    ListBox,
    Avatar,
    ListBoxItem,
  } from "@skeletonlabs/skeleton";
  import Flex from "../ui/Flex.svelte";
  let valueSingle = "books";
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

<nav class="px-3 py-4">
  <div class="mb-4">
    <!-- <div class="flex justify-center items-center flex-col gap-4">
      <Avatar
        src="https://images.unsplash.com/photo-1583429741726-10d5a01b8efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        width="w-20"
        rounded="rounded-full"
      />
      <button type="button" class="btn variant-soft-tertiary">Sign in</button>
    </div> -->

    <ListBox>
      <ListBoxItem bind:group={valueSingle} name="medium" value="books"
        >Practice</ListBoxItem
      >
      <ListBoxItem bind:group={valueSingle} name="medium" value="movies"
        >Movies</ListBoxItem
      >
      <ListBoxItem bind:group={valueSingle} name="medium" value="tv"
        >TV</ListBoxItem
      >
    </ListBox>
  </div>
  <div class="min-w-[200px] flex flex-col items-stretch gap-2">
    {#each Object.entries(settings) as [key, option]}
      <div
        class="flex justify-between items-center gap-3 bg-slate-900/30 p-2 rounded-lg"
      >
        <label class="font-medium text-sm" for={key}>{option.label}</label>
        <div class="toggler inline-flex justify-end items-center">
          <SlideToggle
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
</nav>

<style>
  .toggler {
    transform: scale(0.9) !important;
  }
</style>
