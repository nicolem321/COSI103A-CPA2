'use strict';
const mongoose = require( 'mongoose' );
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Mixed = Schema.Types.Mixed;

var stationSchema = Schema( {
    stationId: String,
    name: String,
    nameEng: String,
    geoLat: String,
    geoLng: String,
    lineName:String,
    lineNameEng: String,
    lineColorHex: String,
    lineServiceName: String
} );

module.exports = mongoose.model( 'Station', stationSchema );
