document.getElementById('start-bot').addEventListener('click', function() {
    const token = document.getElementById('token-input').value;
    if (token) {
        // Start the bot using the provided token
        document.getElementById('output').innerText = `Bot started with token: ${token}`;
    } else {
        alert('Please enter a token!');
    }
});

document.getElementById('stop-bot').addEventListener('click', function() {
    // Stop the bot logic
    document.getElementById('output').innerText = 'Bot stopped';
});

document.getElementById('add-command').addEventListener('click', function() {
    const command = document.getElementById('command-input').value;
    const codeType = document.getElementById('code-type').value;
    if (command) {
        // Here you can dynamically add the command in NodeJS or Python
        document.getElementById('output').innerText = `Command "${command}" added to bot using ${codeType}`;
    } else {
        alert('Please enter a command!');
    }
});
