let app = {
    init:function (){
        // document.addEventListener("deviceready",app.ready);
        app.ready();

        document.getElementById('addpage').addEventListener('click',app.gotoadd);

    },
    ready:function(){
        app.addListeners();
    },

    gotoadd : function(ev){
        ev.preventDefault();
console.log("In add");
            let homepage = document.getElementById("home");

                homepage.classList.remove("active");



               let addpage = document.getElementById("add");

                    addpage.classList.add("active");
    
    }

    // addListeners:function(){
    //     document.querySelector("#add-btn").addEventListener("click",app.addNote);
    //     cordova.plugins.notification.local.on("click",function(notification){
    //         navigator.notification.alert("clicked:"+notification.id);
    //         console.log(notification.data);


    //     });

    //     cordova.plugins.notification.local.on("trigger",function (notification){

    //         navigator.notification.alert("triggered:"+notification.id);
    //     });
    // },

    // addNote: function(ev){

    //     let props = cordova.plugins.notification.local.getDefaults();

    //     let  inOneMin = new Date();
    //     inOneMin.setMinutes(inOneMin.getMinutes()+1);
    //     let id =new Date().getMilliseconds();


    //     let noteOptions = {
    //         id : id,
    //         title:"this is the title",
    //         text : "Dont forgot to do that thing",
    //         at : inOneMin,
    //         bagde : 1,
    //         data : {
    //             prop : "prop  value",
    //             num : 42
    //         }
    //     };

    // }
};


document.addEventListener('deviceready',app.init);