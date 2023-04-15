//gnb 메뉴 
$(function() {
  $('header .menuOpen').on('click', function(){
    $('.gnb').addClass('on');//선택한 요소에 클래스 속성값을 추가
  });
  $('.gnb .close ').on('click', function() { //닫기버튼과 섹션영역 클릭시 제거
    $('.gnb').removeClass('on');//선택한 요소의 클래스 속성에서 지정한 값만 제거
  });
});

//gnb
// $(function(){
//     $('.gnb > li > a ').on('mouseenter focus', function(){
//         var gnbindex = $('.gnb > li > a ').index($(this));
//         //alert(gnbindex); 인덱스값이 제대로 뜨는지 확인하기 위함.

//         $('.gnb .inner').removeClass('on');
//          $('.gnb .inner:eq('+ gnbindex +')').addClass('on');
//     });

//     $('header').on('mouseleave', function(){
//         $('.gnb .inner').removeClass('on');
//     });
// });

//slick 슬라이드
// $(function() {
//     $(".visual .slide").slick({ 
//          arrows: true, //화살표 사용안함
//          dots: true, //닷츠
//          autoplay: true, //자동재생
//          fade: true, //페이드인 효과        
//          autoplaySpeed: 7000, //재생시간
//          pauseOnHover:false, //마우스 오버시 슬라이드 멈춤 해제
//         pauseOnFocus:false //포커스시 슬라이드 멈춤 해제
//      });
//      $('.slick-prev').text("prev");

//      //두번째 슬라이드
//      $(".slide2").slick({ 
//         arrows: false, //화살표 사용안함
//         dots: true, //닷츠
//         autoplay: true, //자동재생
//         Infinity: true, //무한반복   
//         slidesToShow :2,
//         autoplaySpeed: 6000, //재생시간
//         pauseOnHover:true, //마우스 오버시 슬라이드 멈춤 해제
//        pauseOnFocus:true //포커스시 슬라이드 멈춤 해제
//     });
//     $('.slide2 #slick-slide-control10').text("서울 마곡지구 업무용지");
//     $('.slide2 #slick-slide-control11').text("서울 마곡지구 대방디엠시티2차");
//     $('.slide2 #slick-slide-control12').text("서울 동탄 1차 대방디엠시트 더 센텀");
//     $('.slide2 #slick-slide-control13').text("광주 수완 대방노블랜드6차");
//   }); 
