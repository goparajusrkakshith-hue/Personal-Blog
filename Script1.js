/**
 * Function for the Hero Section Button
 * Scrolls the user down to the Animals gallery
 */
function exploreZoo() {
    const animalSection = document.getElementById('animals');
    animalSection.scrollIntoView({ behavior: 'smooth' });
}

/**
 * Function for Animal Cards
 * Displays a fun fact based on the animal name passed from HTML
 */
function showFact(animalName) {
    // Data object containing facts
    const facts = {
        'Lion': "Lions are the only cats that live in groups, called prides!",
        'Elephant': "Elephants can recognize themselves in a mirror — a sign of high intelligence.",
        'Giraffe': "A giraffe's heart is 2 feet long and weighs about 25 pounds!",
        'Crocodile': "Crocodiles have the strongest bite in the animal kingdom.",
        'Tiger': "Tigers have striped skin, not just striped fur!",
        'Panda': "Pandas have an extra 'thumb' specifically for holding bamboo."
    };

    // Get the specific fact or a default message
    const fact = facts[animalName] || "This is one of our most amazing residents!";
    
    alert(`Zoo Fact: ${fact}`);
}

/**
 * Function for Ticket Booking
 * Simulates a booking process with a simple interaction
 */
function bookNow() {
    const userConfirm = confirm("Would you like to proceed to the secure booking page?");
    
    if (userConfirm) {
        alert("Thank you! Redirecting you to our ticket partner...");
    } else {
        alert("No problem! Feel free to explore more of our animals.");
    }
}

/**
 * Professional Addition: Sticky Header Background Change
 * Changes the opacity of the header when you scroll down
 */
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "#143326"; // Darker shade on scroll
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.background = "#1b4332"; // Original color
        header.style.boxShadow = "none";
    }
});