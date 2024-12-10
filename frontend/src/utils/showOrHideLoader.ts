const showOrHideLoader = (queryElement: string,showOrHide: boolean) => {
    const loaderElement = document.querySelector(queryElement) as HTMLElement;

    if(showOrHide) {
        loaderElement.classList.remove("hidden")
        loaderElement.classList.add("flex")
    }else{
        loaderElement.classList.add("hidden")
        loaderElement.classList.remove("flex")
    }

}

export default showOrHideLoader;