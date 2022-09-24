window.JS_afterProductAdded = (productAdded) => {
  drawer.updateDrawer(productAdded);

  const itemNotifs = document.querySelector('.drawer-container');
  itemNotifs.classList.remove('hidden');
  setTimeout(() => {
      itemNotifs.classList.add('hidden')
  }, 2500);
  
  drawer.getProductAdded()

}

