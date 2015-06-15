var check = false;

function readURL(input) {
    var x = document.getElementById("inputFile");
    if ('files' in x) {
        console.log(x.files);
        if (x.files.length != 0) {
            for (var i = 0; i < x.files.length; i++) {
                var txt = "";
                var file;
                check = true;
                txt += "<br><b>File Details</b><br>";
                file = x.files[i];
                console.log(file);
                if ('name' in file) {
                    txt += '<p>' + "Name: " + file.name + "<br>" + '</p>'
                }
                if ('size' in file) {
                    txt += '<p>' + "Size: " + file.size + " bytes <br>" + '</p>'
                }
                if ('type' in file) {
                    txt += '<p>' + "Type: " + file.type + "  <br>" + '</p>'
                }
                document.getElementById("demo").innerHTML = txt;

                if (input.files && input.files[0]) {
                    var reader = new FileReader();
                    reader.onload = function (e) {
                        $('#blah').attr('src', e.target.result).width(100).height(200);
                    };

                    reader.readAsDataURL(input.files[0]);
                }
            }
        } else {
            txt = "Select one file.";
        }
    }
}

function update(ele){

    if(check == true){
      alert("success");
    }else{
        alert("please select image");
    }

}

function back(){
    history.back();
}