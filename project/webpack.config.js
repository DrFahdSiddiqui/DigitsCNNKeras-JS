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
/*   Webpack for generating bundle.min.js file containing all JS, vue,      */
/*   and CSS files. (Regenerate after any changes in those files by         */
/*   running the npm run build:project script from Webstorm                 */
/****************************************************************************/


/****************************************************************************/


const path = require('path')
const webpack = require('webpack')
require("@babel/core").transform("code", {
    plugins: ["@babel/plugin-proposal-object-rest-spread"]
});

const config = {
    entry: path.resolve(__dirname, 'src/index'),
    resolve: {extensions: ['.js', '.vue']},
    output: {path: path.resolve(__dirname, 'dist'), filename: 'bundle.min.js'},
    module: {
        rules: [
            {enforce: 'pre', test: /\.vue$/, loader: 'eslint-loader', exclude: /node_modules/},
            {enforce: 'pre', test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/},
            {test: /\.vue$/, loader: 'vue-loader', exclude: /node_modules/},
            {test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/},
            {test: /\.css$/, loader: ['style-loader', 'css-loader']}
        ]
    }
}

if (process.env.NODE_ENV === 'production') {
    config.plugins = [
        new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('production')}),
        // scope hoisting
        new webpack.optimize.ModuleConcatenationPlugin(),
        // uglify: unused needs to be set to false or else library will not work properly
        new webpack.optimize.UglifyJsPlugin({
            compress: {warnings: false, unused: false},
            output: {comments: false}
        })
    ]
} else {
    config.devtool = 'eval'
    config.plugins = [new webpack.DefinePlugin({'process.env.NODE_ENV': JSON.stringify('development')})]
}

module.exports = config


/****************************************************************************/
