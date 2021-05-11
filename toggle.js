let isToggled = false;

function toggleArrow() {
    const arrowElement = document.getElementById("toggle-arrow");
    const hideFooter = document.getElementById("hide-footer");
    isToggled ? arrowElement.classList.remove('toggled') : arrowElement.classList.add('toggled');
    isToggled ? hideFooter.classList.remove('hide-footer') : hideFooter.classList.add('hide-footer');
    isToggled = !isToggled;
    
}

function handleSubmit(event) {
    event.preventDefault();
    const inputVal = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const email = document.getElementById("email");
    const text = document.getElementById("text");
   if (inputVal.test(email.value)) {
        createToast();
        return;
    }else {
       text.innerText = 'Your email is invalid.'
       return;
    }
}
function createToast() {
    const toastWrapper = document.createElement("div");
    const toast = document.createElement("div");
    const image = document.createElement("img");
    const toastContainer = document.getElementById("toast-container");
    toastWrapper.classList.add("toast-wrapper");
    toast.classList.add("toast");
    toast.classList.add("slideInRight");
    toastWrapper.setAttribute('id', 'id-toast');
    toast.innerHTML = "Your email is succesfully added";
    image.src = "assets/clear-white-18dp.svg";
    image.setAttribute('id','id-img');
    toastWrapper.appendChild(toast);
    toastContainer.appendChild(toastWrapper);
    toast.appendChild(image);
    const timeout = setTimeout(() => {
        removeToast(toast);
    }, 5000);
    image.addEventListener('click', () => removeToast(toast,timeout));
}
function removeToast(toast, timeout) {
	toast.remove();
  if (timeout) {
  	clearTimeout(timeout);
  }
}





  

    

    
   

