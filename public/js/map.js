var container = document.getElementById('location-map');
var options = {
  center: new kakao.maps.LatLng(37.55651678787028, 126.89983450047411),
  level: 3,
};

var map = new kakao.maps.Map(container, options);

var markerPosition = new kakao.maps.LatLng(37.55651678787028, 126.89983450047411);
var marker = new kakao.maps.Marker({
  position: map.getCenter(),
});
marker.setMap(map);

var mapTypeControl = new kakao.maps.MapTypeControl();

map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

var iwContent =
    '<div style="padding:5px;">서울탁주제조협회 <br><a href="https://map.kakao.com/link/map/서울탁주제조협회,37.55651678787028,126.89983450047411" style="color:#777777" target="_blank">지도보기</a> <a href="https://map.kakao.com/link/to/서울탁주제조협회,37.55651678787028,126.89983450047411" style="color:#777777" target="_blank">길찾기</a></div>',
  iwPosition = new kakao.maps.LatLng(37.55651678787028, 126.89983450047411);

var infowindow = new kakao.maps.InfoWindow({
  position: iwPosition,
  content: iwContent,
});

infowindow.open(map, marker);
