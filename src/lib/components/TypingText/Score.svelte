<script lang="ts">
  import { Container, Flex } from "$lib/components/ui";
  import { scores, getScores } from "$lib/store/typing";
  import Icon from "@iconify/svelte";
  import Settings from "../settings/settings.svelte";
  import { showModal } from "$lib/store/modalStore";

  let score = getScores;

  scores.subscribe((cScore) => {
    score = cScore;
  });
</script>

<Settings />

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
</style>
