/* Author: Yegor Borisenco <pimmey@pimmey.com> */

'use strict';

var notifier = require('node-notifier');

var intervalTime = 1000 * 60; // 1 minute
var morningWatering = 10;
var eveningWatering = 17;
var date;
var hours;
var minutes;

setInterval(function () {
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    //console.log('It\'s ' + hours + ':' + minutes);

    if ((hours === morningWatering || hours === eveningWatering) && minutes === 0) {
        notifier.notify({
            'title': 'Bonsai watering',
            'message': 'Time to water your plant',
            'icon': './bonsai-icn.png',
            'wait': true
        });
    }

}, intervalTime);
