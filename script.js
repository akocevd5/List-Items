var items = {
    item1: {
      name: "Item 1",
      category: "Category A",
      price: 10.99
    },
    item2: {
      name: "Item 2",
      category: "Category B",
      price: 19.99
    },
    item3: {
      name: "Item 3",
      category: "Category A",
      price: 14.99
    }
  };
  
  function listItems(obj) {
    var container = document.querySelector("#itemContainer");
    
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          var item = obj[key];
          var listItem = document.createElement("li");
          var itemText = "Name: " + item.name + ", Category: " + item.category + ", Price: " + item.price;
          listItem.textContent = itemText;
          container.appendChild(listItem);
        }
    }
  }
  listItems(items);