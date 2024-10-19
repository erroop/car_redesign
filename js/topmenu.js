$(document).ready(function(){
    const hd =  $("#hd_wrap")
    $(".nav_list li").mouseover(function(){
        hd.css({backgroundColor : "#fff"})
        hd.find(".logo a img").attr("src", "img/common/logo_m.png")
        hd.find(".nav_wrap ul li a").css({color : "#111"})
        hd.find(".cs").css({color: "#fff", backgroundColor:"#111"})
    });
    $(".nav_list li").mouseleave(function(){
        hd.css({backgroundColor : "transparent"})
        hd.find(".logo a img").attr("src", "img/common/logo.png")
        hd.find(".nav_wrap ul li a").css({color : "#fff"})
        hd.find(".cs").css({color: "#111", backgroundColor:"#fff"})
    })



    /* 반응형 [s] */
    $("#m_navBtn").click(function(){
        m++;
        if(m%2 == 1){
            $("#m_navBtn").addClass("on");
            $("#navWrap").fadeIn(300).addClass("on");
        }else{
            m_navClose(); 
        }; 
    });	
;	
    m = 0;  	
    function m_navClose() { 
        $("#m_navBtn").removeClass("on");
        $("#navWrap").fadeOut(300).removeClass("on");	
    }	
    /* 반응형 [e] */
}
)
