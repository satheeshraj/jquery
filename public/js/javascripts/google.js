var g_user;
/*Google Login*/
var OAUTHURL    =   'https://accounts.google.com/o/oauth2/auth?';
var VALIDURL    =   'https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=';
var SCOPE       =   'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
var CLIENTID    =   '936339956840-h26ssdj5s60kf30bl263sq8b204ibag0.apps.googleusercontent.com';
var REDIRECT    =   'http://localhost:3000/oauth2callback';
var TYPE        =   'token';
var _url        =   OAUTHURL + 'scope=' + SCOPE + '&client_id=' + CLIENTID + '&redirect_uri=' + REDIRECT + '&response_type=' + TYPE;

function loginViaGoogle() {
    var win         =   window.open(_url, "windowname1", 'width=800, height=600');
    var pollTimer   =   window.setInterval(function() {
        try {
            if (win.document.URL.indexOf(REDIRECT) != -1) {
                window.clearInterval(pollTimer);
                var url =   win.document.URL;
                acToken =   gup(url, 'access_token');
                tokenType = gup(url, 'token_type');
                expiresIn = gup(url, 'expires_in');
                win.close();
                validateToken(acToken);
            }
        } catch(e) {
        }
    }, 100);
}
function validateToken(token) {
    $.ajax({
        url: VALIDURL + token,
        data: null,
        dataType: "json",
        success: function(responseText){
            getUserInfo();
            //loggedIn = true;
        }
    });
}

function getUserInfo() {
    $.ajax({
        url: 'https://www.googleapis.com/oauth2/v1/userinfo?access_token=' + acToken,
        data: null,
        dataType: "json",
        success: function(resp) {
            user = resp;
            console.log(user);
            g_user = user;
            login();
        }
    });
}

function gup(url, name) {
    name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
    var regexS = "[\\#&]"+name+"=([^&#]*)";
    var regex = new RegExp( regexS );
    var results = regex.exec( url );
    if( results == null )
        return "";
    else
        return results[1];
}

function login(){
     $.mobile.changePage('template/google_view.html',{transition: "flip"});
}
function showMember(){
    var ShowImg = g_user.picture;
    var t = "";
    t += '<div class="ui-grid-solo">';
    t +=  '<div class="ui-block-a" style="width:100% !important;" >'
        + '<div><img style="width: 80%;  padding-left: 20px;   padding-top: 40px;" src="' + ShowImg + '" /></div>'
        + '</div>';
    t += '<div class="ui-block-a" style=" padding-left: 20px;">'
        + '<div class="google_name">Name : ' + g_user.name + '</div>'
        + '<div class="google_name">Fathers Name : ' + g_user.family_name + '</div>'
        + '<div class="google_name">Gender : ' + g_user.gender + '</div>'
        + '<div class="google_name">ID : ' + g_user.id + '</div>'
        +'</div>'
        + '</div>';

    $('#member').html(t).trigger('create');
}

function submit() {

    //var users = [];
    var userDetails = {};
    userDetails.firstname = document.getElementById('f_name').value;
    userDetails.lastname = document.getElementById('l_name').value;
    userDetails.email = document.getElementById('email').value;
    userDetails.password = document.getElementById('password').value;
    userDetails.conf_password = document.getElementById('conf_password').value;

    console.log(userDetails);
}
