import $  from  'jquery';
import BASEURL from './config';
import {Link, hashHistory} from 'react-router';

export function _callAPI(url,method,data,target,cType){	
	$.ajax({
		url: BASEURL+url+"ashutosh",
		method: method,
		data: data,				        
        success: (data,textStatus,jqXHR) => {	
        	console.log("did it reach here?");        	
        	target('success',data);        	
        },
        error: (jqXhr,textStatus,error) => {
        	target('error',jqXhr,textStatus,error);
        }
	});
}
