<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 1</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row>
          <ion-col size="12" size-sm="3">
            <ion-card>
              <ion-button id="open-modal" color="dark" fill="clear" size="small" class="ion-float-left" style="position: fixed">
                <ion-icon slot="icon-only" :ios="ellipsisVertical" :md="ellipsisVertical"></ion-icon>
              </ion-button>
              <img alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png" />
              <ion-card-header>
                <ion-card-title>Eddy Javier Jorge Herrera</ion-card-title>
                <ion-card-subtitle>eddyjj92@gmail.com</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Here's a small text description for the card content. Nothing more, nothing less.
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-modal ref="modal" trigger="open-modal" @willDismiss="onWillDismiss">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-button @click="cancel()">Cancelar</ion-button>
            </ion-buttons>
            <ion-title class="ion-text-center">Editar Usuario</ion-title>
            <ion-buttons slot="end">
              <ion-button :strong="true" @click="confirm()">Confirmar</ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
          <ion-item>
            <ion-input
                label="Enter your name"
                label-placement="stacked"
                ref="input"
                type="text"
                placeholder="Your name"
            ></ion-input>
          </ion-item>
        </ion-content>
      </ion-modal>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonIcon} from '@ionic/vue';
import {ellipsisVertical,} from "ionicons/icons";
import {ref} from "vue";
import { OverlayEventDetail } from '@ionic/core/components';


const modal = ref();
const input = ref();
const message = ref('This modal example uses triggers to automatically open a modal when the button is clicked.');

const cancel = () => modal.value.dismiss(null, 'cancel');

const confirm = () => {
  const name = input.value.$el?.value;
  modal.value.dismiss(name, 'confirm');
};

const onWillDismiss = (event: CustomEvent<OverlayEventDetail>) => {
  if (event.detail.role === 'confirm') {
    message.value = `Hello, ${event.detail.data}!`;
  }
};
</script>
