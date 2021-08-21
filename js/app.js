document.getElementById("memory-8bg").addEventListener('click', function(){
    const extraMemoryCost = document.getElementById('memory-cost');
    const mCost = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 0;
    getTotal()
});

document.getElementById("memory-16gb").addEventListener("click", function(){
    const extraMemoryCost = document.getElementById('memory-cost');
    const mCost = extraMemoryCost.innerText;
    const extraMemoryCostNumber = parseInt(mCost);
    extraMemoryCost.innerText = 180;
    getTotal()

});

// storage part................

document.getElementById("memory-256gb").addEventListener("click", function(){
    const extraMemoryCost = document.getElementById("storage-cost");
    const mCost = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 0;
    getTotal()
})

document.getElementById("memory-512gb").addEventListener("click", function(){
    const extraMemoryCost = document.getElementById('storage-cost');
    const mCost = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 100;
    getTotal()
})

document.getElementById("memory-1tb").addEventListener("click", function(){
    const extraMemoryCost = document.getElementById('storage-cost');
    const mCost = extraMemoryCost.innerText;
     const extraMemoryCostM = parseInt(mCost);
     extraMemoryCost.innerText = 180;
    getTotal()
})
 

// Delivery cost part........

document.getElementById('free-delivery').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById("delivery-total");
    const mCost = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 0;
    getTotal()
});

document.getElementById('Charge-delivery').addEventListener('click', function(){
    const extraMemoryCost = document.getElementById("delivery-total");
    const mCost = extraMemoryCost.innerText;
    extraMemoryCost.innerText = 20;
    getTotal()
});


// Total cost part.........

function getTotal(){
    const bestPrice = document.getElementById("best-price");
    const extraMemory = document.getElementById("memory-cost")
    const extraStorage = document.getElementById("storage-cost")
    const extraDelivery = document.getElementById("delivery-cost")
    

    const bestPriceNumber = parseFloat(bestPrice.innerText);
    const extraMemoryNumber = parseFloat(extraMemory.innerText);
    const extraStorageNumber = parseFloat(extraStorage.innerText);
    const extraDeliveryNumber = parseFloat(extraDelivery.innerText);

    const totalCost = document.getElementById("delivery-total")
    const sum = bestPriceNumber + extraMemoryNumber + extraStorageNumber + extraDeliveryNumber;

    totalCost.innerText = sum;

}




