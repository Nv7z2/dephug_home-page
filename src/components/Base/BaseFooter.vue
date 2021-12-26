<template>
  <footer class="footer">Copyright &copy; Dephug 2021/2022.</footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  padding: 1rem;
  font-size: 0.75rem;
  color: $text-light;
  margin: 2rem -2rem -1rem;
  background-color: #1c0f00;

  @include mq {
    margin: 2rem -1rem -0.5rem -1rem;
  }
}
</style>
