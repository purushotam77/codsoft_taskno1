burger=document.querySelector('.burger')
    right=document.querySelector('.right')
    ul=document.querySelector('.ul')
    rightnav=document.querySelector('.rightnav')
    

    burger.addEventListner('click',(burger)=>{
        rightnav.classlist.toggle('v-class-resp');
        ul.classlist.toggle('v-class-resp');
        right.classlist.toggle('h-nav-resp');
    });