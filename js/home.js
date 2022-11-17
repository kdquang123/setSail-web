class slide{
    constructor(){
        this.currentIndex=0;
        this.linkImage=['https://luumanhcuong.github.io/travel/assets/img/%E1%BA%A3nh%2012.jpg',"https://images.pexels.com/photos/352093/pexels-photo-352093.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"];
        this.littleTitle=["Let go now","Come with us"];
        this.title=["Explore and travel.","Relax and Enjoy."];
        this.slideShow=document.querySelector('.slide .slideShow');
        this.slideText=document.querySelector('.slide .slide-text');
    }

    handleAnimation(){
        var _this=this;
        setInterval(function(){
            if(_this.currentIndex===0){
                _this.slideShow.style.backgroundImage=`url(${_this.linkImage[1]})`;
                //_this.slideShow.style.backgroundSize="150% 150%";
                //_this.slideShow.style.animation=" slideScale 4000ms 1 linear";
                _this.slideText.querySelector("h4").innerHTML=_this.littleTitle[1];
                _this.slideText.querySelector("h2").innerText=_this.title[1];
                //_this.slideText.style.animation="slideText 1500ms 1 linear";
                _this.currentIndex=1;
            }else if(_this.currentIndex===1){
                _this.slideShow.style.backgroundImage=`url(${_this.linkImage[0]})`;
                //_this.slideShow.style.backgroundSize="150% 150%";
                //_this.slideShow.style.animation=" slideScale 4000ms 1 linear";
                _this.slideText.querySelector("h4").innerHTML=_this.littleTitle[0];
                _this.slideText.querySelector("h2").innerText=_this.title[0];
                //_this.slideText.style.animation="slideText 1500ms 1 linear";
                _this.currentIndex=0;
            }
        },4000)
    }

    run(){
        this.handleAnimation();
    }
}

var s=new slide();
s.run();