$(window).on("load", ()=>{
    window.scrollTo(0, 0);
    $("html, body").scrollTop(0);
    var nextStepVideo;
    var $video = $('video');

    // Define o tempo inicial do vídeo para 22 segundos
    /*$video[0].currentTime = 22;

    $video.on('timeupdate', function() {
        // Quando o vídeo atinge 24 segundos, volta para 22 segundos
        if (this.currentTime >= 24 && !nextStepVideo) {
            this.currentTime = 23;
        }
        if(this.currentTime >24 && this.currentTime<28){
            $("#root center").fadeOut();
        }
        if(nextStepVideo ==1 && this.currentTime>=29){
            $("#root center").fadeIn();
            this.currentTime = 28;
            $("#root center h1:nth-child(1)").text("Transform Your Digital")
            $("#root center h1:nth-child(2)").text("Experience with AxioAi")
            $("#root center p").text("Reimagine what’s possible with AxioAi’s suite of AI tools. Whether it’s through generating dynamic visual content or offering personalized user engagements, our technology is designed to enhance your digital presence and captivate your audience.")
            $("#root center p").css("text-align","right")
            $('#root center a[href="http://docs.axioai.io/"]').text("AxioGPT")
            $('#root center a[href="http://docs.axioai.io/"]').attr("href","./app.html#gpt")
            $("#root center a").css("display","flex")
            $("#root center").css({
                'flex': '1',
                'display': 'flex',
                'flex-direction': 'column',
                'flex-wrap': 'nowrap',
                'align-content': 'flex-end',
                'justify-content': 'center',
                'align-items': 'flex-end',
                'color': 'white'
            });
        }
        if(this.currentTime >29 && this.currentTime<32){
            $("#root center").fadeOut();
            
        }
        if(nextStepVideo ==2 && this.currentTime>=36){
            $("#root center").fadeIn();
            this.currentTime = 33;
            $("#root center h1:nth-child(1)").text("Transform Your Digital")
            $("#root center h1:nth-child(2)").text("Experience with AxioAi")
            $("#root center p").text("Reimagine what’s possible with AxioAi’s suite of AI tools. Whether it’s through generating dynamic visual content or offering personalized user engagements, our technology is designed to enhance your digital presence and captivate your audience.")
            $("#root center p").css("text-align","right")
            $('#root center a[href="./app.html#gpt"]').text("Telegram Bot Ai")
            $('#root center a[href="./app.html#gpt"]').attr("href","https://t.me/AxioAI_bot")
            $('#root center a[href="./app.html#draw"]').css("display","none")
            $("#root center h1").css({
                'width':'100%',
                'text-align': 'left'
            })
            $("#root center").css({
                'flex': '1',
                'display': 'flex',
                'flex-direction': 'column',
                'flex-wrap': 'nowrap',
                'align-content': 'flex-end',
                'justify-content': 'center',
                'align-items': 'flex-end',
                'color': 'white'
            });
        }
        if(this.currentTime >36 && this.currentTime<39){
            $("#root center").fadeOut();
            
        }
        if(nextStepVideo==3 && this.currentTime>=41.5){
            $("#root center").fadeIn();
            this.currentTime=40;

            $("#root center h1:nth-child(1)").text("Transform Your Digital")
            $("#root center h1:nth-child(2)").text("Experience with AxioAi")
            $("#root center p").text("Reimagine what’s possible with AxioAi’s suite of AI tools. Whether it’s through generating dynamic visual content or offering personalized user engagements, our technology is designed to enhance your digital presence and captivate your audience.")
            $("#root center p").css("text-align","right")
            $('#root center a[href="./app.html#gpt"]').text("Telegram Bot Ai")
            $('#root center a[href="./app.html#gpt"]').attr("href","https://t.me/AxioAI_bot")
            $('#root center a[href="./app.html#draw"]').css("display","none")
            $("#root center h1").css({
                'width':'100%',
                'text-align': 'left'
            })
            $("#root center").css({
                'flex': '1',
                'display': 'flex',
                'flex-direction': 'column',
                'flex-wrap': 'nowrap',
                'align-content': 'flex-end',
                'justify-content': 'center',
                'align-items': 'flex-end',
                'color': 'white'
            });
        }
        if(this.currentTime >41.5 && this.currentTime<43){
            $("#root center").fadeOut(); 
        }
        if(nextStepVideo==4 && this.currentTime>=46){
            $("#root center").fadeIn();
            this.currentTime=44;

            $("#root center h1:nth-child(1)").text("Transform Your Digital")
            $("#root center h1:nth-child(2)").text("Experience with AxioAi")
            $("#root center p").text("Reimagine what’s possible with AxioAi’s suite of AI tools. Whether it’s through generating dynamic visual content or offering personalized user engagements, our technology is designed to enhance your digital presence and captivate your audience.")
            $("#root center p").css("text-align","right")
            $('#root center a[href="./app.html#gpt"]').text("Telegram Bot Ai")
            $('#root center a[href="./app.html#gpt"]').attr("href","https://t.me/AxioAI_bot")
            $('#root center a[href="./app.html#draw"]').css("display","none")
            $("#root center h1").css({
                'width':'100%',
                'text-align': 'left'
            })
            $("#root center").css({
                'flex': '1',
                'display': 'flex',
                'flex-direction': 'column',
                'flex-wrap': 'nowrap',
                'align-content': 'flex-end',
                'justify-content': 'center',
                'align-items': 'flex-end',
                'color': 'white'
            });
        }
        if(this.currentTime >46&& this.currentTime<47){
            $("#root center").fadeOut(); 
        }
        if(nextStepVideo==5 && this.currentTime>=51){
            $("#root center").fadeIn();
            this.currentTime=48

            $("#root center h1:nth-child(1)").text("Transform Your Digital")
            $("#root center h1:nth-child(2)").text("Experience with AxioAi")
            $("#root center p").text("Reimagine what’s possible with AxioAi’s suite of AI tools. Whether it’s through generating dynamic visual content or offering personalized user engagements, our technology is designed to enhance your digital presence and captivate your audience.")
            $("#root center p").css("text-align","right")
            $('#root center a[href="./app.html#gpt"]').text("Telegram Bot Ai")
            $('#root center a[href="./app.html#gpt"]').attr("href","https://t.me/AxioAI_bot")
            $('#root center a[href="./app.html#draw"]').css("display","none")
            $("#root center h1").css({
                'width':'100%',
                'text-align': 'left'
            })
            $("#root center").css({
                'flex': '1',
                'display': 'flex',
                'flex-direction': 'column',
                'flex-wrap': 'nowrap',
                'align-content': 'flex-end',
                'justify-content': 'center',
                'align-items': 'flex-end',
                'color': 'white'
            });
        }
        if(this.currentTime >51&& this.currentTime<57){
            $("#root center").fadeOut(); 
        }
        if(nextStepVideo==6 && this.currentTime>=59){
            $("#root center").fadeIn();
            this.currentTime=58

            $("#root center h1:nth-child(1)").text("Transform Your Digital")
            $("#root center h1:nth-child(2)").text("Experience with AxioAi")
            $("#root center p").text("Reimagine what’s possible with AxioAi’s suite of AI tools. Whether it’s through generating dynamic visual content or offering personalized user engagements, our technology is designed to enhance your digital presence and captivate your audience.")
            $("#root center p").css("text-align","right")
            $('#root center a[href="./app.html#gpt"]').text("Telegram Bot Ai")
            $('#root center a[href="./app.html#gpt"]').attr("href","https://t.me/AxioAI_bot")
            $('#root center a[href="./app.html#draw"]').css("display","none")
            $("#root center h1").css({
                'width':'100%',
                'text-align': 'left'
            })
            $("#root center").css({
                'flex': '1',
                'display': 'flex',
                'flex-direction': 'column',
                'flex-wrap': 'nowrap',
                'align-content': 'flex-end',
                'justify-content': 'center',
                'align-items': 'flex-end',
                'color': 'white'
            });
        }
    });*/

    var totalStrokeDashOffSet = 360
    var startRotate = 0;
    var d = setInterval(() => {
        if(totalStrokeDashOffSet <=90){
            clearInterval(d)
        }
        $("#svgenter").css("stroke-dashoffset", totalStrokeDashOffSet+"px");
        totalStrokeDashOffSet-=30
    }, 200);
    setInterval(()=>{
        $(".svg-container").css("transform", "rotate("+startRotate+"deg)")
        startRotate+=10;
    },100)

    setInterval(()=>{
        var scrollY = window.scrollY
        // obter o scrollbar

        if(scrollY>0&&scrollY<399){
            nextStepVideo=1;
        }
        if(scrollY>400&&scrollY<799){
            nextStepVideo=2;
        }
        if(scrollY>800&&scrollY<1099){
            nextStepVideo=3;
        }
        if(scrollY>1200&&scrollY<1599){
            nextStepVideo=4;
        }
        if(scrollY>1600&&scrollY<1999){
            nextStepVideo=5;
        }
        if(scrollY>2000){
            nextStepVideo=6;
        }
    },200)
})

function nextStart(){
    console.log("nextClicked");
    var h=1;
    var d = setInterval(()=>{
        if(h<=0){
            $(".preloader,.preloader[data-v-464974f8]").css("z-index", "-999")
            clearInterval(d)
        }
        $(".preloader").css("opacity", h)
        h-=0.3;
    },200)
    $(".scrollToUnder").css("display","flex")
}

function scrollToNextSection() {
    // Obtém a posição de rolagem atual
    const currentScrollY = window.scrollY;
  
    // Calcula a próxima seção
    const nextSectionY = Math.floor((currentScrollY + 400) / 400) * 400;
  
    // Rola suavemente para a próxima seção
    window.scrollTo({
      top: nextSectionY,
      behavior: "smooth",
    });
  }