<template>
  <ion-app>
    <ion-menu ref="menu" content-id="main-content">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Subsistemas</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="menu.close()">
              <ion-icon slot="icon-only" :ios="close" :md="close"></ion-icon>
            </ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-list lines="full"  style="height: calc(100vh - 56px)">
          <ion-item button @click="navigate('/tabs/providers_clients')">
            <ion-icon :icon="peopleCircleOutline" class="ion-margin-end"></ion-icon>
            <ion-label>Proveedores y Clientes</ion-label>
          </ion-item>
          <ion-item button @click="navigate('/tabs/tab2')">
            <ion-icon :icon="cubeOutline" class="ion-margin-end"></ion-icon>
            <ion-label>Productos</ion-label>
          </ion-item>
          <ion-item button @click="navigate('/tabs/tab3')">
            <ion-icon :icon="barChartOutline" class="ion-margin-end"></ion-icon>
            <ion-label>Unidades de Medidas</ion-label>
          </ion-item>
          <ion-item button @click="navigate('/tabs/tab3')">
            <ion-icon :icon="cash" class="ion-margin-end"></ion-icon>
            <ion-label>Monedas</ion-label>
          </ion-item>
          <ion-item button @click="navigate('/tabs/tab3')">
            <ion-icon :icon="documentTextOutline" class="ion-margin-end"></ion-icon>
            <ion-label>Documentos</ion-label>
          </ion-item>
          <ion-item button @click="navigate('/tabs/tab3')">
            <ion-icon :icon="storefrontOutline" class="ion-margin-end"></ion-icon>
            <ion-label>Existencias</ion-label>
          </ion-item>
        </ion-list>
      </ion-content>
    </ion-menu>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Fast Inventory CRM</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="navigate('/')">
            <ion-icon slot="icon-only" :ios="logOutOutline" :md="logOutOutline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-router-outlet id="main-content" />
  </ion-app>
</template>

<script setup lang="ts">
import {
  IonApp,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonRouterOutlet,
  IonTitle,
  IonToolbar,
  IonIcon
} from '@ionic/vue';
import {
  barChartOutline,
  cash,
  close,
  cubeOutline,
  documentTextOutline,
  logOutOutline,
  peopleCircleOutline,
  storefrontOutline,
} from "ionicons/icons";
import {ref} from "vue";
import router from "@/router";

const menu = ref();

const navigate = (route: string): void => {
  router.push(route);
  menu.value.close();
}
</script>
