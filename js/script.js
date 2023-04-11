//Accordion List
function accordionList(){
    const accordionItem = document.querySelectorAll('.js-accordion dt');
    const activeClass = 'ativo';

    if(accordionItem.length){
        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }
    }
    accordionItem.forEach((item)=>{
        item.addEventListener('click', activeAccordion)
    })
}
accordionList();

//Animação ao Scroll
function animacaoInit(){
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length){
    const windowMetade = window.innerHeight * 0.9; 
    function animaScroll(){
        sections.forEach((section)=>{
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible){
                section.classList.add('ativo')  
            }
        })
    }
    animaScroll();
    window.addEventListener('scroll',animaScroll);
    };
    };
    animacaoInit();