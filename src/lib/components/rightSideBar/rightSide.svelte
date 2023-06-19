<script>
  import { Avatar, ListBox, ListBoxItem } from "@skeletonlabs/skeleton";
  let valueSingle = "books";
</script>

<div class="px-3 py-4 min-w-[200px]">
  <Avatar
    src="https://images.unsplash.com/photo-1583429741726-10d5a01b8efb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    width="w-32"
    rounded="rounded-full"
  />
  <button type="button" class="btn variant-soft-tertiary">Sign in</button>

  <ListBox>
    <ListBoxItem bind:group={valueSingle} name="medium" value="books"
      >Books</ListBoxItem
    >
    <ListBoxItem bind:group={valueSingle} name="medium" value="movies"
      >Movies</ListBoxItem
    >
    <ListBoxItem bind:group={valueSingle} name="medium" value="tv"
      >TV</ListBoxItem
    >
  </ListBox>
</div>
