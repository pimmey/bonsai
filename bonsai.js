/* Author: Yegor Borisenco <pimmey@pimmey.com> */

'use strict';

var intervalTime = 1000 * 60; // 1 minute
var morningWatering = 10;
var eveningWatering = 17;
var date;
var hours;
var minutes;

setInterval(function () {
    console.log('Running check');
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    console.log('It\'s ' + hours + ':' + minutes);

    if ((hours === morningWatering || hours === eveningWatering) && minutes === 0) {
        notifier.notify({
            'title': 'Bonsai watering',
            'message': 'Time to water your plant',
            'icon': './public/images/bonsai-icn.png'
        });
    }

}, intervalTime);
