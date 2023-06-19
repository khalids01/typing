<script>
  import { Container, Flex } from "$lib/components/ui";
  import { scores, getScores } from "$lib/store/typing";
  let score = getScores;
  scores.subscribe((cScore) => {
    score = cScore;
  });

 
</script>

<Container classNames={"container my-6"}>
  <Flex justify="center">
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
</Container>

<style lang="scss">
  .container {
    p span {
      color: rgba(39, 233, 184, 1);
      font-weight: 700;
    }
  }
</style>
