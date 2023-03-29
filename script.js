function main() {

    let url = "https://profile-counter.glitch.me/wararaki718/count.svg";
    fetch(url, {mode: "no-cors"})
        .then((response) => response.text())
        .then((svg) => {
            console.log(svg);
        });
}

main()
