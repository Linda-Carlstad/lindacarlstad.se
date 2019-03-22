Dropzone.autoDiscover = false;
jQuery(document).ready(function() {
  var myDropzone = new Dropzone("#my-awesome-dropzone", { 
    url: 'someurl',
    autoProcessQueue:false
  });
    
    
        myDropzone.on("addedfile", function(file) { 
    var namn= file.name;
    var stringArr = namn.split('-');
    
    var kurs=stringArr[0]; 
    var fakultet=stringArr[0].substring(0,3);
    var datum =stringArr[1]+stringArr[2]+stringArr[3];
    datum=datum.substring(0,8);
    alert(fakultet);
    alert(kurs);
    alert(datum);
    alert(file.type);
    return false;
    
    
    
    
    
    
    
    
    
    });
    
});