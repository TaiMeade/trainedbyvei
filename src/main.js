import { createApp } from "vue";
import App from "./App.vue";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import '@mdi/font/css/materialdesignicons.css';
import { aliases, mdi } from 'vuetify/lib/iconsets/mdi';

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "myLightTheme",
    themes: {
        myLightTheme: {
            colors: {
                background: "#FFFFFF",
                secondary: "#49B568",
            }
        },
        myDarkTheme: {
            colors: {
                primary: "#000000ff",
                secondary: "#FFB300",
                accent: "#9C27B0",
                background: "#000000"
            }
        }
    }
  },
  icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
          mdi,
        },
    }
});

createApp(App).use(vuetify).mount("#app");
