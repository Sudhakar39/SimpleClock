function updateclock()
{
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridian = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; 
    const minutes = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${seconds} ${meridian}`;
    document.getElementById("clockDisplay").textContent = timestring;
}
updateclock();
setInterval(updateclock,1000);