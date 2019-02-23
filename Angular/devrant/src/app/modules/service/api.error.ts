import { 
    Injectable 
 } from '@angular/core'; 
import { AppConstants } from './constants';
 
 @Injectable () 
 export class ErrorService {  
        getErrorMessage(errorCode: String): String {

            switch
            (errorCode) {
    
                case "INVALID_CREDENTIALS":
                    return AppConstants.INVALID_CREDENTIALS;
                    break;
    
                    case "INVALID_TOKEN":
                    return AppConstants.INVALID_TOKEN;
                    break;
    
                    case "SERVER_ERROR":
                    return AppConstants.SERVER_ERROR;
                    break;
    
                    case "ACCESS_DENIED":
                    return AppConstants.ACCESS_DENIED;
                    break;
    
                    case "MISSING_CONTENT":
                    return AppConstants.MISSING_CONTENT;
                    break;
    
                    case "INVALID_POST_ID":
                    return AppConstants.INVALID_POST_ID;
                    break;
    
                    case "MISSING_DIRECTION":
                    return AppConstants.MISSING_DIRECTION;
                    break;
    
                    case "AUTHOR_CANNOT_VOTE":
                    return AppConstants.AUTHOR_CANNOT_VOTE;
                    break;
    
                    case "MISSING_COMMENT":
                    return AppConstants.MISSING_COMMENT;
                    break;
    
                    case "MISSING_COMMENT_ID":
                    return AppConstants.MISSING_COMMENT_ID;
                    break;
    
                    case "MISSING_POST_ID":
                    return AppConstants.MISSING_POST_ID;
                    break;
    
                default:
                    return "Somthing went wrong please try again later."
                    break;
            }
    } 
 }