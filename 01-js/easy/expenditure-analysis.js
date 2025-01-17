/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  
  let spentByCategory =[];

  for(let i=0;i<transactions.length;++i){
     
     trans = transactions[i];

    // check if category of this txn exists in result list
    // if yes, then just add txn price to category totalSpent
    // if not, then add this category as a new object with its price as totalSpent
     categoryIndex = findCategory(trans);

     if(categoryIndex>=0){
      spentByCategory[categoryIndex]['totalSpent'] += trans['price'];
     }
     else{
      spentByCategory.push  ({
        category:trans['category'],
        totalSpent:trans['price']
      })
     }
     
  }
    // if category for passed txn is found in the list return the index else -1
  function findCategory(trans){
    for(let i=0;i<spentByCategory.length;++i){
      if(spentByCategory[i]['category']===trans['category'])
        return i;
    }
  
    return -1;
  }
  

  return spentByCategory;
}




module.exports = calculateTotalSpentByCategory;