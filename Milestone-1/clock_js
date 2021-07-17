setInterval(setClock , 1000)

 
 
 const hourHand=document.querySelector('[data-hour-hand]')
 const minuteHand=document.querySelector('[data-minute-hand]')
 const secondHand=document.querySelector('[data-second-hand]')

function setClock()
{
     const currDate=new Date()
     const sec=currDate.getSeconds()/60
     const min=(sec + currDate.getMinutes())/60
     const hour=(min + currDate.getHours())/12
    setRotation(secondHand, sec)
    setRotation(minuteHand, min)
    setRotation(hourHand, hour)
}

function setRotation(element, rot){
    element.style.setProperty('--rotation',rot*360)
}

setClock()
