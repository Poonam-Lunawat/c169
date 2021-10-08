AFRAME.registerComponent("markerhandler",{
    init: async function(){
        this.el.addEventListener("markerFound",()=>{
            this.handleMarkerFound();
        })
        this.el.addEventListener("markerLost",()=>{
            this.handleMarkerLost();
        })
    },
    handleMarkerFound: function(){
        let buttonDiv =document.getElementById("button-div")
        buttonDiv.style.display="flex"
        var orderButton = document.getElementById("order-button")
        var rateButton = document.getElementById("rating-button")
        rateButton.addEventListener("click",function(){
            swal({
                icon:"warning",
                title:"Rate  the dish",
                text:" work in progress"
            })
        })
        orderButton.addEventListener("click",function(){
            swal({
                icon:"http://i.imgur.com/4NZ6uLY.jpg",
                title:"Thanks for order",
                text:" Your order will be served soon"
            })
        })
        

    },
    handleMarkerLost: function(){
        let buttonDiv =document.getElementById("button-div")
        buttonDiv.style.display="none"
    },

})