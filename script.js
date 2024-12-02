// Select the input and output elements
const markdownInput = document.getElementById("markdown-input");
const markdownOutput = document.getElementById("markdown-output");

// Update the rendered HTML when the user types
markdownInput.addEventListener("input", () => {
    const markdownText = markdownInput.value;
    const htmlContent = marked.parse(markdownText); // Convert Markdown to HTML
    markdownOutput.innerHTML = htmlContent;
});

// Initialize with a placeholder
markdownInput.value = "# Welcome to Markdown Editor!\n\nStart typing to see the preview.";
markdownOutput.innerHTML = marked.parse(markdownInput.value);