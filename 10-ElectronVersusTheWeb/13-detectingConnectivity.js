<script>
var alertOnlineStatus = (event) => {
    window.alert(navigator.onLine ? 'online' : 'offline');
};

window.addEventListener('online',  alertOnlineStatus);
window.addEventListener('offline',  alertOnlineStatus);

alertOnlineStatus();
</script>