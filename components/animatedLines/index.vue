<!-- <template>
  <div v-if="from == 'about_us'" class="about_us images-wrapper dynamic_start">
    <img src="@/assets/images/lines/main.svg" alt="line" />
  </div>
  <div
    v-else-if="from == 'features'"
    class="features images-wrapper dynamic_start"
  >
    <img src="@/assets/images/lines/main.svg" alt="line" />
  </div>
  <div v-else-if="from == 'team'" class="team images-wrapper dynamic_start">
    <img src="@/assets/images/lines/main.svg" alt="line" />
  </div>
  <div
    v-else-if="from == 'services'"
    class="services images-wrapper dynamic_start"
  >
    <img src="@/assets/images/lines/main.svg" alt="line" />
  </div>
  <div
    v-else-if="from == 'drivers'"
    class="drivers images-wrapper dynamic_start"
  >
    <img src="@/assets/images/lines/main.svg" alt="line" />
  </div>
  <div
    v-else-if="from == 'contacts'"
    class="contacts images-wrapper dynamic_start"
  >
    <img src="@/assets/images/lines/main.svg" alt="line" />
  </div>
  <div
    v-else-if="from == 'pricing'"
    class="pricing images-wrapper dynamic_start"
  >
    <img src="@/assets/images/lines/main.svg" alt="line" />
  </div>
</template>

<script>
export default {
  props: ["from"],
};
</script>

<style scoped>
.images-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 1000px;
  animation-duration: 1s;
  animation-fill-mode: forwards;
}

.about_us {
  transform: translate(54%, 200%) rotate(-112deg) scale(2);
}

.about_us.dynamic_start {
  transform: translate(54%, 200%) rotate(-112deg) scale(2);
  animation-name: about_us_animation_start;
}

.features {
  transform: translate(54%, 67%) rotate(-112deg) scale(2);
}

.features.dynamic_start {
  transform: translate(54%, 67%) rotate(-112deg) scale(2);
  animation-name: features_animation_start;
}

.team {
  transform: translate(34%, 67%) rotate(-130deg) scale(1.5);
}

.team.dynamic_start {
  transform: translate(34%, 67%) rotate(-130deg) scale(1.5);
  animation-name: team_animation_start;
}

.services {
  transform: translate(45%, 65%) rotate(-90deg) scale(1.5);
}

.drivers {
  transform: translate(30%, 55%) rotate(-10deg) scale(1.4);
}

.drivers.dynamic_start {
  transform: translate(30%, 55%) rotate(-10deg) scale(1.4);
  animation-name: drivers_animation_start;
}

.drivers.drivers_animation_end {
  animation-name: drivers_animation_start;
}

.contacts {
  transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
}

.contacts.dynamic_start {
  transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
  animation-name: contacts_animation_start;
}

.contacts.dynamic_end {
  animation-name: contacts_animation_end;
}

.services.dynamic_start {
  transform: translate(45%, 65%) rotate(-90deg) scale(1.5);
  animation-name: services_animation_start;
}

.about_us.dynamic_end {
  transform: translate(54%, 200%) rotate(-112deg) scale(2);
  animation-name: about_us_animation_end;
}

.features.dynamic_end {
  transform: translate(54%, 67%) rotate(-112deg) scale(2);
  animation-name: features_animation_end;
}
.team.dynamic_end {
  transform: translate(34%, 67%) rotate(-130deg) scale(1.5);
  animation-name: team_animation_end;
}
.services.dynamic_end {
  transform: translate(-10%, 55%) rotate(-320deg) scale(1.2);
  animation-name: services_animation_end;
}

.pricing {
  transform: translate(-100%, 195%) rotate(45deg) scale(2.5);
  animation-name: pricing_animation;
}

@keyframes pricing_animation {
  from {
    transform: translate(-100%, 195%) rotate(45deg) scale(2.5);
  }
  to {
    transform: translate(-100%, 95%) rotate(45deg) scale(2.5);
  }
}

@keyframes about_us_animation_start {
  from {
    transform: translate(54%, 200%) rotate(-112deg) scale(2);
  }
  to {
    transform: translate(54%, 67%) rotate(-112deg) scale(2);
  }
}

@keyframes about_us_animation_end {
  from {
    transform: translate(54%, 67%) rotate(-112deg) scale(2);
  }
  to {
    transform: translate(54%, 200%) rotate(-112deg) scale(2);
  }
}

@keyframes features_animation_start {
  from {
    transform: translate(54%, 67%) rotate(-112deg) scale(2);
  }
  to {
    transform: translate(34%, 67%) rotate(-130deg) scale(1.5);
  }
}

@keyframes features_animation_end {
  from {
    transform: translate(34%, 67%) rotate(-130deg) scale(1.5);
  }
  to {
    transform: translate(54%, 67%) rotate(-112deg) scale(2);
  }
}

@keyframes team_animation_start {
  from {
    transform: translate(34%, 67%) rotate(-130deg) scale(1.5);
  }
  to {
    transform: translate(45%, 65%) rotate(-90deg) scale(1.5);
  }
}

@keyframes team_animation_end {
  from {
    transform: translate(45%, 65%) rotate(-90deg) scale(1.5);
  }
  to {
    transform: translate(34%, 67%) rotate(-130deg) scale(1.5);
  }
}

@keyframes services_animation_start {
  0% {
    transform: translate(45%, 65%) rotate(-90deg) scale(1.5);
  }
  60% {
    transform: translate(50%, 45%) rotate(-90deg) scale(0);
  }
  100% {
    transform: translate(30%, 55%) rotate(-10deg) scale(1.4);
  }
}

@keyframes services_animation_end {
  from {
    transform: translate(30%, 55%) rotate(-10deg) scale(1.4);
  }
  to {
    transform: translate(45%, 65%) rotate(-90deg) scale(1.5);
  }
}

@keyframes drivers_animation_start {
  from {
    transform: translate(30%, 55%) rotate(-10deg) scale(1.4);
  }
  to {
    transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
  }
}

@keyframes drivers_animation_end {
  from {
    transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
  }
  to {
    transform: translate(30%, 55%) rotate(-10deg) scale(1.4);
  }
}

@keyframes contacts_animation_start {
  0% {
    transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
  }
  50% {
    transform: translate(30%, 150%) rotate(-10deg) scale(1.4);
  }
  100% {
    transform: translate(-30%, 80%) rotate(45deg) scale(1.7);
  }
}

@keyframes contacts_animation_end {
  from {
    transform: translate(-30%, 80%) rotate(45deg) scale(1.7);
  }
  to {
    transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
  }
}

@media (max-width: 1068px) {
  @keyframes features_animation_start {
    from {
      transform: translate(54%, 67%) rotate(-112deg) scale(2);
    }
    to {
      transform: translate(34%, 67%) rotate(-100deg) scale(1.5);
    }
  }

  @keyframes features_animation_end {
    from {
      transform: translate(34%, 67%) rotate(-100deg) scale(1.5);
    }
    to {
      transform: translate(54%, 67%) rotate(-112deg) scale(2);
    }
  }

  @keyframes services_animation_start {
    from {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
    to {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
  }

  @keyframes drivers_animation_start {
    0% {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
    100% {
      transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
    }
  }

  @keyframes drivers_animation_end {
    from {
      transform: translate(30%, 80%) rotate(-10deg) scale(1.4);
    }
    to {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
  }

  @keyframes services_animation_end {
    from {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
    to {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
  }

  @keyframes team_animation_start {
    from {
      transform: translate(54%, 67%) rotate(-112deg) scale(2);
    }
    to {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
  }

  @keyframes team_animation_end {
    from {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
    to {
      transform: translate(54%, 67%) rotate(-112deg) scale(2);
    }
  }
}

@media (max-width: 768px) {
  @keyframes team_animation_start {
    from {
      transform: translate(0%, 100%) rotate(-320deg) scale(0);
    }
    to {
      transform: translate(0%, 70%) rotate(-320deg) scale(1.4);
    }
  }
  @keyframes team_animation_end {
    from {
      transform: translate(0%, 70%) rotate(-320deg) scale(1.4);
    }
    to {
      transform: translate(0%, 100%) rotate(-320deg) scale(0);
    }
  }
}

@media (max-width: 450px) {
  @keyframes about_us_animation_start {
    from {
      transform: translate(54%, 200%) rotate(-112deg) scale(1);
    }
    to {
      transform: translate(54%, 67%) rotate(-112deg) scale(1.2);
    }
  }

  @keyframes about_us_animation_end {
    from {
      transform: translate(54%, 67%) rotate(-112deg) scale(1.2);
    }
    to {
      transform: translate(54%, 200%) rotate(-112deg) scale(1);
    }
  }

  @keyframes features_animation_start {
    from {
      transform: translate(54%, 67%) rotate(-112deg) scale(1);
    }
    to {
      transform: translate(34%, 67%) rotate(-100deg) scale(1.2);
    }
  }

  @keyframes features_animation_end {
    from {
      transform: translate(34%, 67%) rotate(-100deg) scale(1.2);
    }
    to {
      transform: translate(54%, 67%) rotate(-112deg) scale(1);
    }
  }

  @keyframes team_animation_start {
    from {
      transform: translate(54%, 67%) rotate(-112deg) scale(1);
    }
    to {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
  }

  @keyframes team_animation_end {
    from {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
    to {
      transform: translate(54%, 67%) rotate(-112deg) scale(1);
    }
  }

  @keyframes services_animation_start {
    from {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
    to {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
  }

  @keyframes drivers_animation_start {
    0% {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
    100% {
      transform: translate(30%, 80%) rotate(-10deg) scale(1);
    }
  }

  @keyframes drivers_animation_end {
    from {
      transform: translate(30%, 80%) rotate(-10deg) scale(1);
    }
    to {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
  }

  @keyframes services_animation_end {
    from {
      transform: translate(25%, 65%) rotate(-90deg) scale(1);
    }
    to {
      transform: translate(45%, 65%) rotate(-90deg) scale(1);
    }
  }
}
</style> -->
