/****************************************************************************/
/*                                                                          */
/*                        DIGIT RECOGNITION CONVNET                         */
/*                               Version 1.0                                */
/*                          Written by: Leon Chen                           */
/*                Modified by: Fahd Siddiqui and Aqsa Qureshi               */
/*            https://github.com/DrFahdSiddiqui/DigitCNNKeras-JS            */
/*                         Last updated: 8/18/2018                          */
/*                                                                          */
/* ------------------------------------------------------------------------ */
/* LICENSE: MOZILLA 2.0                                                     */
/*   This Source Code Form is subject to the terms of the Mozilla Public    */
/*   License, v. 2.0. If a copy of the MPL was not distributed with this    */
/*   file, You can obtain one at http://mozilla.org/MPL/2.0/.               */
/****************************************************************************/

/****************************************************************************/
/* DOCUMENTATION                                                            */
/*   Style variables for CSS                                                */
/****************************************************************************/


/****************************************************************************/


import '@babel/polyfill'
import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
        primary: '#ffffff',
        secondary: '#dbdbdb',
        accent: '#f5d76e',
        error: '#d24d57'
    }

})

const app = new Vue(Object.assign({router}, App))

app.$mount('#root')


/****************************************************************************/
