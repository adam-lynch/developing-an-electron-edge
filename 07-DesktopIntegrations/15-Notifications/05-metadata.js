var notification = new Notification('Title of notification', {
  body: 'Body of notification'
});

notificaton.itemId = 123;
notification.hello = 'world';

notification.onclick = function() {
  console.log(this.itemId); // 123
  console.log(this.hello); // world
};