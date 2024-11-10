// JavaScript to trigger phone vibration
function vibratePhone() {
    if (navigator.vibrate) {
        navigator.vibrate([100, 50, 100]); // Vibrate for 100ms, then pause for 50ms, and vibrate again for 100ms
    } else {
        console.log('Vibration not supported');
    }
}
