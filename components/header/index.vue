<template>
  <header class="mt-7">
    <nav>
      <div class="main-items flex justify-between items-center" id="menu">
        <a href="#natex" data-menuanchor="natex">
          <img
            src="@/assets/images/logo/main_white_logo.svg"
            class="mr-3"
            alt="NATEX Logo"
          />
        </a>
        <img
          class="cursor-pointer w-[40px] h-[40px]"
          data-nav="_3dScaleRotate"
          src="@/assets/images/main/menu.svg"
          alt="menu"
        />
      </div>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  z-index: 120 !important;
}
</style>
