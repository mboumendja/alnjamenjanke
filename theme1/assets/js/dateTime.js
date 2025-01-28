
    const now = new Date();

    const optionsDate = { year: 'numeric', month: 'long', day: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };

    // Format the date and time
    const formattedDate = now.toLocaleDateString('en-US', optionsDate);
    const formattedTime = now.toLocaleTimeString('en-US', optionsTime); 

    document.getElementById('current-year').innerHTML = `${formattedDate},  +${formattedTime}`;
