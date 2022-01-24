function clock(){
             
    let hrs  = document.getElementById("hours");
    let mins = document.getElementById("mins");
    let secs = document.getElementById("secs");
    let ampm = document.getElementById("ampm");
    
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    var em = 'AM';
    
    if(h > 12){
        h = h-12;
        var em = 'PM'; 
    }
    
    if( h < 10){
        h = '0' + h;
    }
    if( m < 10){
        m = '0' + m;
    }
    if( s < 10){
        s = '0' + s;
    }
    
    
    hours.innerHTML = h;
    mins.innerHTML = m;
    secs.innerHTML = s;
    ampm.innerHTML = em;
      }
      
      
      var interval = setInterval(clock, 1000);