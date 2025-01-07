<template>
  <ion-page>
    <ion-tabs class="tabs-icon-top tabs-positive fade-in-not-out">
      <ion-router-outlet/>
      <ion-tab-bar slot="bottom" class="ion-color-primary">
        <ion-tab-button ref="tab1" tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="person" />
          <ion-label>Mi Perfil</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="bag" />
          <ion-label>Inventario</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="settings" />
          <ion-label>Configuracion</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from '@ionic/vue';
import {bag, person, settings, } from 'ionicons/icons';

</script>
