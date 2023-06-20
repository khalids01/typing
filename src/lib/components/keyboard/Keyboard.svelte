<script>
  import { onMount, afterUpdate } from "svelte";
  import { keyboardRowsData } from "./keyData";
</script>

<div class="keyboardbg">
  <input name="" id="inputbox" class="input-box" />
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div tabindex="0" id="keyboardBase" class="keyboard-base">
    {#each keyboardRowsData as row}
      <div class="key-row">
        {#each row.keys as key}
          <div data={key.data} class="key inkey">{key.value}</div>
        {/each}
      </div>
    {/each}
  </div>
</div>

<style>
  .keyboardbg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  input {
    width: 740px;
    padding: 10px;
    height: 100px;
    border-radius: 15px;
    margin-bottom: 20px;
  }

  .keyboard-base {
    background: rgb(29, 48, 57);
    border-radius: 10px;
    max-height: 225px;
    width: 745px;
    padding: 10px;
    border-radius: 12px;
    display: grid;
    grid-template-columns: repeat(30, 20px);
    grid-template-rows: repeat(5, 38px);
    grid-gap: 5px;
  }

  .key {
    background-color: rgb(1, 3, 29);
    border: 2px solid #00ffc4;
    border-radius: 5px;
    grid-column: span 2;
    font-size: 16px;
    text-align: center;
    padding-top: 10px;
    color: #b6d7f4;
    box-shadow: 1px 1x 10px #57eafd;
  }

  .key:hover {
    border: 1px solid #8900ff;
    box-shadow: 1px 1x 10px #8900ff;
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

  .command {
    grid-column: span 3;
    font-size: 14px;
  }

  .space {
    grid-column: span 13;
  }
</style>
