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
/*   Gets the routes for forwarding to appropriate places                   */
/****************************************************************************/


/****************************************************************************/


import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home'


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {path: '/', component: Home},
    ]
})

export default router


/****************************************************************************/
