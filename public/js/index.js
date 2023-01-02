const btns = document.querySelectorAll('.over');
const conts = document.querySelectorAll('.cont');
let notover = document.getElementById('notover');

let h_wrap = document.getElementById('h_wrap');
let gnb = document.getElementById('gnb');
let overON = document.querySelectorAll('.overON');

// gnb.addEventListener('mouseover', event => {
//   for (j = 0; j < overON.length; j++) {
//     h_wrap.style.backgroundColor = '#fff';
//   }
// });
// gnb.addEventListener('mouseleave', event => {
//   for (j = 0; j < overON.length; j++) {
//     h_wrap.style.backgroundColor = 'transparent';
//   }
// });

gnb.addEventListener('mouseover', event => {
  h_wrap.style.height = '160px';
  for (i = 0; i < conts.length; i++) {
    conts[i].style.height = '60px';
  }
});

gnb.addEventListener('mouseleave', event => {
  h_wrap.style.height = '100px';
  for (i = 0; i < conts.length; i++) {
    conts[i].style.height = '60px';
  }
});

gnb.addEventListener('mouseover', e => {
  //dataset.id 는  data-id="" 를 의미한다.
  const id = e.target.dataset.id;
  if (id) {
    //각각의 btn한테 active라는 클래스를 제거하기
    btns.forEach(btn => {
      btn.classList.remove('active');
    });
    //클릭한 애 한테만 active 클래스를 추가
    e.target.classList.add('active');
    conts.forEach(cont => {
      cont.classList.remove('active');
    });
    const contID = document.getElementById(id);
    //getElementById(id); 에 id와 if문에 id 값을 맞춰줘야한다.
    contID.classList.add('active');
  }
});
gnb.addEventListener('mouseleave', e => {
  btns.forEach(btn => {
    btn.classList.remove('active');
  });
  //클릭한 애 한테만 active 클래스를 추가
  conts.forEach(cont => {
    cont.classList.remove('active');
  });
});

window.addEventListener('resize', () => {
  const ww = window.innerWidth;
  if (ww <= 1200) {
    h_wrap.style.height = '60px';
  } else {
    h_wrap.style.height = '100px';
  }
});

const icons = document.querySelectorAll('.icon');
let mySidenav = document.getElementById('mySidenav');
icons.forEach(icon => {
  icon.addEventListener('click', event => {
    icon.classList.toggle('open');
    mySidenav.classList.toggle('SlideNav');
    h_wrap.classList.toggle('hamberger');
  });
});
// AOS.init(); // AOS initiation
h_wrap.addEventListener('mouseover', event => {
  h_wrap.classList.add('active1');
});
h_wrap.addEventListener('mouseleave', event => {
  h_wrap.classList.remove('active1');
});

// 드롭다운
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function filter() {
  var value, name, item, i;

  value = document.getElementById('value').value.toUpperCase();
  item = document.getElementsByClassName('list');

  for (i = 0; i < item.length; i++) {
    name = item[i].getElementsByClassName('title');
    if (name[0].innerHTML.toUpperCase().indexOf(value) > -1) {
      item[i].style.display = 'block';
    } else {
      item[i].style.display = 'none';
    }
  }
}
