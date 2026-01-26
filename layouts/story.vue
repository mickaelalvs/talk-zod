<template>
  <div class="slidev-layout story">
    <div class="paper-wrapper">
      <div class="paper">
        <div class="paper-content">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap');

.slidev-layout.story {
  position: absolute;
  inset: 0;
  background-color: var(--oz-kansas-sky);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  overflow: auto;
}

.paper-wrapper {
  filter: drop-shadow(8px 8px 16px rgba(0, 0, 0, 0.4));
  margin: auto;
}

.paper {
  position: relative;
  background-image: url('/fonts/assets/images/paper2.jpg');
  background-size: cover;
  background-position: center;
  width: 800px;
  max-width: 85vw;
  height: fit-content;
  padding: 2rem 3rem;
  clip-path: polygon(0.5% 1.5%,
      2% 0.5%,
      5% 1%,
      10% 0%,
      15% 0.8%,
      25% 0.2%,
      35% 1%,
      45% 0%,
      55% 0.5%,
      65% 0%,
      75% 0.8%,
      85% 0.2%,
      92% 0.8%,
      97% 0%,
      99% 1%,
      100% 3%,
      99.5% 8%,
      100% 15%,
      99% 25%,
      100% 35%,
      99.5% 45%,
      100% 55%,
      99% 65%,
      100% 75%,
      99.5% 85%,
      100% 92%,
      99% 97%,
      98% 99%,
      95% 99.5%,
      90% 99%,
      85% 100%,
      75% 99%,
      65% 99.5%,
      55% 99%,
      45% 100%,
      35% 99.5%,
      25% 99%,
      15% 100%,
      8% 99%,
      3% 99.5%,
      1% 98%,
      0% 95%,
      0.5% 90%,
      0% 80%,
      0.8% 70%,
      0% 60%,
      0.5% 50%,
      0% 40%,
      0.8% 30%,
      0% 20%,
      0.5% 10%,
      0% 5%);
}

.paper-content {
  position: relative;
  z-index: 1;
  font-family: 'Dancing Script', cursive;
  font-size: 2rem;
  line-height: 2;
  color: #3D3229;
  text-align: center;
}

.paper-content p {
  margin-bottom: 1.5rem;
  line-height: 1 !important;
  text-wrap: balance;
}

.paper-content p:first-child::first-letter {
  font-size: 3rem;
  line-height: 1;
  padding-right: 0rem;
  color: #6B5344;
  font-weight: 700;
}

.paper-content strong {
  color: #6B5344;
  font-weight: 700;
}

.paper-content em {
  font-style: italic;
  color: #5D4E3C;
}
</style>
