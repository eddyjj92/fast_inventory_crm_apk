import {alertController} from "@ionic/vue";

export const presentAlert = async (header:string, subHeader: string, message: string): Promise<void> => {
	const alert = await alertController.create({
		header: header,
		subHeader: subHeader,
		message: message,
		buttons: [{
			text: '\u2705 Aceptar',
			cssClass: 'alert-button-confirm', // Aplica la clase CSS personalizada
			htmlAttributes: {
				'aria-label': 'Aceptar',
			},
		},],
		mode: "ios",
		animated: true,
		cssClass: 'custom-alert', // Aplica la clase CSS personalizada
	});

	await alert.present();
};