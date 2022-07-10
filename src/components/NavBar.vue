<template>
<nav id="topbar" class="navbar bg-base-100 fixed top-0 z-50">
  <div class="flex-none">
    <button class="btn btn-square btn-ghost" @click="menuOpen = !menuOpen">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </div>
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div class="flex-none">
    <button class="btn btn-square btn-ghost">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
    </button>
  </div>
</nav>

<div id="global-menu" :class="{'active': menuOpen}">
    <ul class="menu bg-base-100 w-56">
        <li><a>Finn hundepass</a></li>
        <li><a>Søk etter hundepass</a></li>
        <li><a>Min Profil</a></li>
    </ul>
    <div class="empty" @click="menuOpen = false"></div>
</div>
</template>
<script>
export default {
    data () {
        return {
            menuOpen: false
        }
    }
}
</script>
<style lang="scss">
#topbar {

}
#global-menu {
    position: fixed;
    top: 4rem;
    left: 0;
    transform: translateX(-100vw);
    width: 100vw;
    height: calc(100vh - 4rem);
    will-change: transform;
    transition: transform 200ms ease-in-out;
    display: flex;
    &.active {
        transform: translateX(0);
    }
    .menu {
        height: 100%;
        width: 350px;
    }
    .empty {
        height: 100%;
        width: 100%;
    }
}
</style>