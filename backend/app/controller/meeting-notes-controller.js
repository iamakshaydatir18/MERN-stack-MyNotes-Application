
import { addNotes, search ,getAll, deleteById , deleteByResource , updateMeeting , filterByKeywords} from "../services/meeting-notes-services.js";

import { setError, setResponse } from "./handle-response.js";


//Add Notes controller with request body Object
export const addNotesController = async(request,response)=>{
 console.log("from addNotes!!");
 console.log("Request body is - ", request.body);
    try{
        const body = {...request.body};
        const responseData = await addNotes(body);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

//Find notes controller using param passed IDs
export const findNotesController = async(request,response)=>{
    console.log("from find!!");
    try{
        const responseData = await search(request.params.id);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

//get all meeting Notes Controller
export const getAllNotesController = async(request,response)=>{
    console.log("from getAllNotes!!");
    try{
        const responseData = await getAll();
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

//Delete by Id Controller 
export const deletByMeetingId = async(request,response)=>{
  
    try{
        console.log("delete by id- ",request.params.meetingId);
        const responseData = await deleteById(request.params.meetingId);
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

//Delete by My Notes resource Controller
export const deleteByresource = async(request,response) =>{

    try{

        const responseData = deleteByResource({...request.body});
        setResponse(responseData,response); 
    }catch(error){
        setError(error,response);
    }
}

//Update meeting by id and parameter Object
export const updateMeetingController = async(request,response) => {

    try{
        console.log("id is ", request.params.meetingId,"And body - ",request.body );
   
        const updatedMeeting = await updateMeeting(request.params.meetingId, {...request.body });
        setResponse(updatedMeeting,response);
    }catch(error){
        setError(error,response);
    }
}

//Find by Keyword with created date and end Date Controller
export const findByKeywordController = async(request,response)=>{
    try{
        console.log("inside findBy!!");
        console.log(request.query);
        const {keyword,startdate,enddate} = request.query;
        const findByKeyword = await filterByKeywords(keyword,startdate,enddate);
        setResponse(findByKeyword,response);
    }catch(error){
        setError(error,response);
    }
}