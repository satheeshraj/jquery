var ONLY_SHOW_MATCH_FOR = "";
var cric = true;
$("#matches").hide();
function getScore(data){
    console.log(data);
    var matches = data.query.results.mchdata.match;
    console.log(matches);
    for(var i=0;i<matches.length;i++){
        //if(matches[i].state.mchState == "inprogress"){
            if(matches[i].mchDesc.indexOf(ONLY_SHOW_MATCH_FOR)>=0){
                document.getElementById("matches").innerHTML+="<div style='  margin-top: 25px'> <b style='color: coral;font-size: x-large;'>"+matches[i].mchDesc+"</b></div>";
                if(isNotUndefined(matches[i].mnum)){
                    document.getElementById("matches").innerHTML+=matches[i].mnum;
                }
                if(isNotUndefined(matches[i].srs)){
                    document.getElementById("matches").innerHTML+=", "+matches[i].srs;
                }
                if(isNotUndefined(matches[i].grnd)){
                    document.getElementById("matches").innerHTML+="<div id='grnd"+i+"'>"+matches[i].grnd+"</div>";
                }
                if(isNotUndefined(matches[i].vcity)){
                    document.getElementById("grnd"+i).innerHTML+=", "+matches[i].vcity;
                }
                if(isNotUndefined(matches[i].mscr) && isNotUndefined(matches[i].mscr.btTm) && isNotUndefined(matches[i].mscr.btTm.Inngs)){
                    document.getElementById("matches").innerHTML+="<div id='btTm"+i+"'><b>"+matches[i].mscr.btTm.sName+": </b></div>";
                    document.getElementById("btTm"+i).innerHTML+= matches[i].mscr.btTm.Inngs.r;
                    document.getElementById("btTm"+i).innerHTML+= "/"+matches[i].mscr.btTm.Inngs.wkts;
                    document.getElementById("btTm"+i).innerHTML+= " ("+matches[i].mscr.btTm.Inngs.ovrs+")";
                }
                if(isNotUndefined(matches[i].mscr) && isNotUndefined(matches[i].mscr.blgTm) && isNotUndefined(matches[i].mscr.blgTm.Inngs)){
                    document.getElementById("matches").innerHTML+="<div id='blgTm"+i+"'><b>"+matches[i].mscr.blgTm.sName+": </b></div>";
                    document.getElementById("blgTm"+i).innerHTML+= matches[i].mscr.blgTm.Inngs.r;
                    document.getElementById("blgTm"+i).innerHTML+= "/"+matches[i].mscr.blgTm.Inngs.wkts;
                    document.getElementById("blgTm"+i).innerHTML+= " ("+matches[i].mscr.blgTm.Inngs.ovrs+")";
                }
                if(isNotUndefined(matches[i].state) && isNotUndefined(matches[i].state.status)){
                    document.getElementById("matches").innerHTML+="<div>"+matches[i].state.status+"</div>";
                }
                document.getElementById("matches").innerHTML+="<a href='http://www.cricbuzz.com/cricket-match/live-scores' target='_blank'>See details</a>";
                //document.getElementById("matches").innerHTML+="<hr/>";

            }
        }

    //}
}
function isNotUndefined(val){
    if(val!=undefined && val!=null)
        return true;
    else
        return false;
}
function cricket(){
    if(cric == true){
        $("#matches").show(1000);
        $('html, body').animate({scrollTop:$(document).height() + $(window).height() }, 1000);
        cric = false;
    }else{
        $("#matches").hide(100);
        cric = true;
    }
}
