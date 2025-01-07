<script setup lang="ts">

import {IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar} from "@ionic/vue";
import {add,} from "ionicons/icons";
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Proveedores y Clientes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-header>
      <ion-toolbar>
        <ion-title>Proveedores y Clientes</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-fab horizontal="end" vertical="bottom" slot="fixed">
        <ion-fab-button>
          <ion-icon :ios="add" :md="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<style scoped>

</style>