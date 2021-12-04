export const customLog = (message, color='black') => {
    switch (color) {
        case 'success':  
             color = 'Green'
             break
        case 'info':     
                color = 'Blue'  
             break;
        case 'error':   
             color = 'Red'   
             break;
        case 'warning':  
             color = 'Orange' 
             break;
        default: 
             color = color
    }

    console.log(`%c${message}`, `color:${color}`)
}