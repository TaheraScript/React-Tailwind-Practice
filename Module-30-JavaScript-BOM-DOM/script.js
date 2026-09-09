        const byId = document.querySelector('#bd')
        console.log(byId)
        console.log(typeof byId)
        const byTagName = document.querySelectorAll('h2')
        console.log(byTagName)
        const byClassName = document.querySelector('.ph')
        console.log(byClassName)
        const image =document.querySelector('.image')
        console.log(image)

        //modify content or text content
        console.log(byId.textContent)
        console.log(byId.innerHTML)
        console.log(byId.innerText)
       // byId.textContent='Hi,Dhaka'
        byId.innerHTML ='<h6>Hi,Cumilla</h6>'
        // byId.innerText ='Hi,Barishal'
        

        //modify attribute
        console.log(byId.getAttribute('class'))
        console.log(image.getAttribute('src'))
        image.setAttribute('src','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IHwMzND7z8Ztasmil8U0hFJxlrnKenEcJECDzcLrTvm6EWXTWKwxAA&s=10')
        image.removeAttribute('src')
        console.log(image.hasAttribute('alt'))
        image.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IHwMzND7z8Ztasmil8U0hFJxlrnKenEcJECDzcLrTvm6EWXTWKwxAA&s=10'
        
        //modify style
        //image.style.height =' 600px'
        image.classList.add('imageStyle')
        image.classList.remove('imageStyle')
        image.classList.toggle('imageStyle')

        //event listener
        const clickBtn = document.getElementById('click-on-btn');
        clickBtn.addEventListener('mouseenter',()=>{
            //alert('btn clicked')
            image.src='https://cdn.pixabay.com/photo/2015/04/19/08/32/flower-729510_1280.jpg'
        })
        const myInp =document.getElementById('my-input');
        myInp.addEventListener('keypress',(e)=>{
            console.log('input triggered');
            console.log(myInp.value)
            console.log(e.target)
            console.log(e.type)
            e.target.style.color ='red'
        })