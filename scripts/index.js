
const hdr = document.querySelector('header')
const intro = document.querySelector('.intro_page')
const about = document.querySelector('.about_page')
const work = document.querySelector('.work_page')

const closeBtn=document.querySelectorAll('.close_btn')
const whAllinfo=document.querySelectorAll('.pj_info')
const whAllimg=document.querySelectorAll('.pj_whole_img')


const pjWrap = document.querySelectorAll('.pj_wrap')


const whAll = document.querySelectorAll('.pj_whole')
const aboutBtn = document.querySelector('.about_btn')
const workBtn = document.querySelector('.work_btn')

const hdrPjName = document.querySelectorAll('.project_name')



/*  -------------------- 초기값 (헤더와 인트로만 있는 상태)  */

/* 각각 전체 포폴 페이지 없앰  */

whAll.forEach(item => {
    item.classList.add('active');
});

/* 어바웃이랑 워크 섹션 없앰 */

about.classList.add('active')
work.classList.add('active')

/*  -------------------- 초기값 (헤더와 인트로만 있는 상태)  */



/* ---------about 글자 눌렀을 때--------- */

aboutBtn.addEventListener('click', () => {
    about.classList.remove('active')
    intro.classList.add('active')
    work.classList.add('active')
    whAll.forEach(item => {
        item.classList.add('active');
    });
})

/* ---------work 글자 눌렀을 때--------- */

workBtn.addEventListener('click',()=>{
    work.classList.remove('active')
    intro.classList.add('active')
    about.classList.add('active')
    whAll.forEach(item => {
        item.classList.add('active');
    });
})

/* ----------헤더에 있는 mealB 눌렀을때 */

hdrPjName[0].addEventListener('click',()=>{
    hdr.classList.add('active')
    whAll[0].classList.remove('active')

    whAll[1].classList.add('active')
    whAll[2].classList.add('active')

    intro.classList.add('active')
    about.classList.add('active')
})

/* ----------헤더에 있는 동구밭 눌렀을때 */

hdrPjName[1].addEventListener('click',()=>{
    hdr.classList.add('active')
    whAll[1].classList.remove('active')

    whAll[0].classList.add('active')
    whAll[2].classList.add('active')

    intro.classList.add('active')
    about.classList.add('active')
})


/* ----------헤더에 있는 스파이더 눌렀을때 */

hdrPjName[2].addEventListener('click',()=>{
    hdr.classList.add('active')
    whAll[2].classList.remove('active')

    whAll[0].classList.add('active')
    whAll[1].classList.add('active')

    intro.classList.add('active')
    about.classList.add('active')
    
})


/* ---------------------목록에 있는 밀비 눌렀을때 */

pjWrap[0].addEventListener('click',()=>{
    hdr.classList.add('active')
    whAll[0].classList.remove('active')

    whAll[1].classList.add('active')
    whAll[2].classList.add('active')

    intro.classList.add('active')
    about.classList.add('active')
    work.classList.add('active')

})


/* ---------------------목록에 있는 동구밭을 눌렀을때 */

pjWrap[1].addEventListener('click',()=>{
    hdr.classList.add('active')
    whAll[1].classList.remove('active')

    whAll[0].classList.add('active')
    whAll[2].classList.add('active')

    intro.classList.add('active')
    about.classList.add('active')
    work.classList.add('active')

})


/* ---------------------목록에 있는 스파이더를 눌렀을때 */

pjWrap[2].addEventListener('click',()=>{
    hdr.classList.add('active')
    whAll[2].classList.remove('active')

    whAll[0].classList.add('active')
    whAll[1].classList.add('active')

    intro.classList.add('active')
    about.classList.add('active')
    work.classList.add('active')

})




/* --------- 닫기 버튼을 누르면 포폴 페이지 창이 커짐 */

/* closeBtn.addEventListener('click',()=>{
    whAllinfo.classList.add('active')
    whAllimg.classList.add('active')
})

closeBtn.addEventListener('click', () => {
    whAllinfo.forEach(item => item.classList.add('active'));
    whAllimg.forEach(item => item.classList.add('active'));
});

closeBtn.addEventListener('click', () => {
    console.log('click');
    whAllinfo.forEach(item => {
        console.log(item);
        item.classList.add('active');
    });
}); 
 */
closeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        whAllinfo.forEach(item => item.classList.add('active'));
        whAllimg.forEach(item => item.classList.add('active'));
    });
});


