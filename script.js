function main() {

    let img = document.getElementById("svg");

    let url = "https://profile-counter.glitch.me/wararaki718/count.svg";
    fetch(url, {mode: "no-cors"})
        .then((response) => response.text())
        .then((svg) => {
            // const parser = new DOMParser();
            // const svg = parser.parseFromString(data, "image/svg+xml").querySelector("svg");

            console.log(svg);
        });
}

main()
