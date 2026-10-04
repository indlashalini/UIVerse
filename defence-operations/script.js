// DefenceHQ dashboard interactions

document.addEventListener("DOMContentLoaded", function () {
    const clearButton = document.getElementById("clear-alerts");
    const alertList = document.getElementById("alert-list");
    const alertCount = document.getElementById("alert-count");

    // Clear all alerts
    clearButton.addEventListener("click", function () {
        alertList.innerHTML = `
            <div class="empty-alerts">
                <span class="success-icon">✓</span>
                <h3>All caught up!</h3>
                <p>There are no pending alerts.</p>
            </div>
        `;

        alertCount.textContent = "0";
        clearButton.disabled = true;
        clearButton.textContent = "All Alerts Cleared";
    });

    // Highlight the active navigation link
    const navLinks = document.querySelectorAll(".sidebar nav a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");
        });
    });
});