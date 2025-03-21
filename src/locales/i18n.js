//Aqui configuramos i18next con reacdt para manejar las traducciones en Habit Tracker

import i18n from 'i18next'; // nucles de la libreria que gestiona las traducciones
import { initReactI18next  } from 'react-i18next'; // es un plugin que conecta i18next con React
import I18nextBrowserLanguageDetector from 'i18next-browser-languagedetector'; // detecta el idioma del navegador automaticamente

// importamos los archibos JSON, si queremos mas podemos importarles otros idiomas ( creando mas archibos JSON )
import en from "./en.json";
import es from "./es.json";

//Configurando i18n
i18n
    .use( initReactI18next ) // conecta i18next con React
    .use( I18nextBrowserLanguageDetector ) // detecta el idioma
    .init( {
        //aqui agregamos los idiomas
        resources: { // aqui definimos los idiomas disponibles en la aplicacion

            //aqui asignamos los JSON de los idiomas
            en: { translation: en },
            es: { translation: es }
        },
        fallbackLng: "es", // idioma por defecto 
        lng: JSON.parse(localStorage.getItem( "userData"))?.language || "es",
        interpolation: { escapeValue : false } // evitamos problemas con caracteres especiales cuando se usan variables dentro de los textos
    } );

export default i18n;