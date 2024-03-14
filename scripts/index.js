let bagItems;
onload();


function onload()
{
   bagItemsStr=localStorage.getItem('bagItems');
   bagItems=bagItemsStr ? JSON.parse(bagItemsStr):[];
displayItemOnPage();
displayBagIcon();
}

function addToBag(itemId)
{
   bagItems.push(itemId);
   localStorage.setItem('bagItems',JSON.stringify(bagItems));
   displayBagIcon();
}

function displayBagIcon()
{
   let bagItemCountElememt=document.querySelector('.bag-item-count');
   if(bagItems.length>0)
   {
      bagItemCountElememt.style.visibility ='visible';
   bagItemCountElememt.innerText=bagItems.length;
   }
   else{ 
      bagItemCountElememt.style.visibility ='hidden';
   }
}

function displayItemOnPage(){
let itemContainerElement=document.querySelector('.items-container');
if(!itemContainerElement)
{
   return;
}
// let item={
//     item_image:'images/images/1.jpg',
//     rating:{
//         stars:4.5,
//         noOfReviews: 1400,
//     },
//     company_name: 'Carlton London',
//     item_name: 'Rhodium-Plated CZ Floral Studs',
//     price:{
//         current_price: 606,
//         original_price: 1045,
//         discount_percentage: 42,
//     }
// getting this from items.js file
// }

let innerHTML='';
items.forEach(item => {
   innerHTML +=` 
   <div class="item-container">
   <img class="item-image" src="${item.image}" alt="image">
   <div class="rating">
    ${item.rating.stars} ⭐| ${item.rating.count}
   </div>
   <div class="company-name">${item.company}</div>
   <div class="item-name">${item.item_name}
   </div>
   <div class="price">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount">(${item.discount_percentage}% OFF)</span>
   </div>
   <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
   
   </div>
   `;
});
itemContainerElement.innerHTML=innerHTML;
}