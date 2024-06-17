const githubUrl = 'https://api.github.com/repos/mik9016/PassphraseFillerChrome/releases/latest'
fetch(githubUrl).then(res => res.json()).then(
    data => {
        const latestVersionTag = document.getElementById('latestVersion')
        const chromiumDownloadLink = document.getElementById('chromiumDownloadLink')
        latestVersionTag.innerText = `Latest version: ${data?.tag_name}`
        chromiumDownloadLink.href = data?.zipball_url
    }
)
const copyright = document.getElementById('copyright')
const date = new Date()
copyright.innerText = `© Copyright Mikolaj Gruszecki ${date.getFullYear()}`
