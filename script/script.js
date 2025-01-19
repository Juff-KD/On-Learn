 fetch('https://raw.githubusercontent.com/Juff-KD/On-Learn/18c750d878a8b53c542593340a6a56a5be16a93c/script/hello.md') 
            .then(response => response.text())
            .then(markdown => {
                const html = marked(markdown); 
                document.getElementById('markdown-content').innerHTML = html;
            });