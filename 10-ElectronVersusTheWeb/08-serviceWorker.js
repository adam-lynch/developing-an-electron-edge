self.addEventListener('fetch', (event) => {
  console.log('Handling fetch event for', event.request.url);

  event.respondWith(
    //...
  );
});