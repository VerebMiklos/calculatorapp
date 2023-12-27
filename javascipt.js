var toggleButtons = document.getElementsByClassName("three-state-toggle-button");
var arr = [...toggleButtons];

var style = document.getElementById("stylesheet");



arr.forEach((element, index) => {
    element.addEventListener("click", () => {
        element.style.zindex = "1";
        if (index == 0) {
            style.href = "style1.css"
        } else if (index == 1) {
            style.href = "style2.css"
        } else {
            style.href = "style3.css"
        }
        arr
            .filter(function (item) {
                return item != element;
        })
        .forEach((item) => {
            item.style.zindex = "0";
        });
    });
});








const key = document.querySelectorAll('button')


key.forEach((node) => {
    node.addEventListener('click', e =>{
        e.preventDefault()
        const value = node.value.trim();
        const result = document.getElementById('result')
        const resultText = result.innerText
        


        if(value.toLocaleLowerCase() === 'del') {
            result.innerText = resultText.slice(0, -1)
            return true
        }


        if(value === '=') {
            let solution = eval(resultText)
            result.innerText = solution
            return true
        }
        
        if (result.innerText === '.') {
            result.innerText = '0.'
        }

        if(value.toLowerCase() === 'reset') {
            result.innerText = ''
            return true
        }

        if( resultText === '0' || resultText === 'undefined' || resultText === 'Infinity' ){
            result.innerText = '';
            return true;
        }
        

        const lastChar = resultText.slice(-1);
        if (lastChar === '+' && value === '+'  || lastChar === '-' && value === '-' || lastChar === '*' && value === '*' || lastChar === '/' && value === '/' || lastChar === '.' && value === '.') {
            
        } else {
            result.append(value)
        }


    })

    
})




/*
key.forEach((node) => {
    node.addEventListener('click', function(e) {
        e.preventDefault()
        const value = node.value.trim()
        const result = document.getElementById("result")
        let resultText = result.value.trim()
        


        if(value.toLocaleLowerCase() === 'del') {
            result.value = resultText.slice(0, -1)
            return true
        }


        if(value === '=') {
            let solution = eval(resultText)
            result.value = solution
            return true
        }
        
        if (result.value === '.') {
            result.value = '0.'
        }

        if(value.toLowerCase() === 'reset') {
            result.value = ''
            return true
        }

        if( resultText === '0' || resultText === 'undefined' || resultText === 'Infinity' ){
            result.value = '';
            return true;
        }
        

        const lastChar = resultText.slice(-1);
        if (lastChar === '+' && value === '+'  || lastChar === '-' && value === '-' || lastChar === '*' && value === '*' || lastChar === '/' && value === '/' || lastChar === '.' && value === '.') {
            
        } else {
            result.value = resultText + value;
        }

        
    })
})
*/

