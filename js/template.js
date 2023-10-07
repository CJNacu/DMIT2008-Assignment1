function productTemplate({name, brand, price, description, image, rating,...product}){
    const template = `
    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 float-left ml-4 mb-4">
    <a href="#">
        <img class="p-8 rounded-t-lg" src="${image}" alt="${name}" />
    </a>
    <div class="px-5 pb-5">
        <a href="#">
            <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${name}</h5>
            <h3 class="text-medium tracking-tight text-gray-900 dark:text-white">Brand: ${brand}</h4>
        </a>
        <div class="flex items-center mt-2.5 mb-5">
            <span class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">Rating: ${rating}/5</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-3xl font-bold text-gray-900 dark:text-white">$${price}</span>
        </div>
        <div class="flex items-center justify-between">
            <span class="text-1xl text-gray-900 dark:text-white">${description}</span>
        </div>
    </div>
    </div>

    `
    const elm = document.createRange().createContextualFragment(template).children[0]
    return elm
}

export{productTemplate}