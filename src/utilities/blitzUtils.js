import React from 'react';
import {hashHistory} from 'react-router';
import dispatcher from "../common/dispatcher";
import URL from "../common/urls";
import * as Api from "../common/api";
import BlitzStore from "../stores/blitzStore";

export function _getSampleData(query, status){    
   Api._callAPI(URL.gitUser,'GET',query,(type,dt)=> {
        if(type=="success"){
            BlitzStore._updateStore(dt, 'SAMPLE_DATA');
        } else {
            BlitzStore._updateStore({}, 'SAMPLE_DATA');
        }
    });
}