<script setup lang="ts">
import {
  IonHeader, IonIcon,
  IonPage, IonTitle, IonToolbar, loadingController,
} from '@ionic/vue';
import {reactive, ref} from "vue";
import {logInOutline, } from "ionicons/icons";
import {presentAlert} from "@/helpers";
import router from "@/router";

const form = reactive({
  user: null,
  password: null
});

const progress = ref(false);

const login = async (): Promise<void> => {
  progress.value = true;
  const loading = await loadingController.create({
    message: 'Iniciando Sesión...',
    spinner: "circles",
    showBackdrop: true,
  });
  await loading.present();

  if (form.user === 'eddy' && form.password === 'qwerty'){
    setTimeout(() => {
      loading.dismiss()
      progress.value = false;
    }, 1500);
    await router.push('/tabs/tab1')
  }else{
    setTimeout(() => {
      loading.dismiss()
      progress.value = false;
      presentAlert("Error de Autenticacion", "Acceso Denegado", "Las credenciales ingresadas son incorrectas")
    }, 1500);
  }

};


</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Inicio de Session</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="false" class="ion-padding">
      <div class="card-wrapper">

        <ion-card class="responsive-card">
          <ion-progress-bar v-if="progress" type="indeterminate"></ion-progress-bar>

          <ion-card-header>
            <ion-card-title class="ion-text-center">Inicio de Session</ion-card-title>
            <ion-card-subtitle class="ion-text-center">Usuario y Contraseña</ion-card-subtitle>
          </ion-card-header>

          <ion-card-content>
            <ion-input class="ion-margin-top ion-margin-bottom" :value="form.user" @ionInput="form.user = $event.target.value" label="Usuario" label-placement="floating" fill="outline" placeholder="Ingresar Usuario"></ion-input>

            <ion-input class="ion-margin-top ion-margin-bottom" :value="form.password" @ionInput="form.password = $event.target.value" type="password" label="Contraseña" label-placement="floating" fill="outline" placeholder="Ingresar Contarseña">
              <ion-input-password-toggle slot="end"></ion-input-password-toggle>
            </ion-input>

            <ion-button @click="login" class="ion-margin-top ion-margin-bottom" expand="block" style="width: 100%;height: 50px">
              <ion-icon slot="icon-only" :ios="logInOutline" :md="logInOutline"></ion-icon>
              Ingresar
            </ion-button>

          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.card-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.responsive-card {
  width: 100%;
  max-width: 400px; /* Ajusta este valor según el tamaño máximo deseado */
  margin: 0 auto;
}

</style>