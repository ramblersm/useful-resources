document.addEventListener("DOMContentLoaded", function () {
    const copyButtons = document.querySelectorAll(".copy-button");

    copyButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const textToCopy = this.parentElement.querySelector("pre").textContent;
            copyToClipboard(textToCopy);
        });
    });

    async function copyToClipboard(text) {
        try {
            await navigator.clipboard.writeText(text);
            alert("Text copied to clipboard!");
        } catch (error) {
            console.error("Failed to copy text: ", error);
        }
    }
});
