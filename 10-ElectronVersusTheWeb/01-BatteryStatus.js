navigator.getBattery().then((battery) => {
  battery.addEventListener('levelchange', () => {
    console.log("Battery level: " + battery.level * 100 + "%");
  });
});