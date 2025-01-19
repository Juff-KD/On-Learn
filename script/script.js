 fetch('https://raw.githubusercontent.com/Juff-KD/On-Learn/main/script/hello.md') 
            .then(response => response.text())
            .then(markdown => {
                const html = marked(markdown); 
                document.getElementById('markdown-content').innerHTML = html;
            });