
function exploreZoo() {
    const animalSection = document.getElementById('animals');
    animalSection.scrollIntoView({ behavior: 'smooth' });
}

function showFact(animalName) {
    const facts = {
        'Lion': "Lions are the only cats that live in groups, called prides!",
        'Elephant': "Elephants can recognize themselves in a mirror — a sign of high intelligence.",
        'Giraffe': "A giraffe's heart is 2 feet long and weighs about 25 pounds!",
        'Crocodile': "Crocodiles have the strongest bite in the animal kingdom.",
        'Tiger': "Tigers have striped skin, not just striped fur!",
        'Panda': "Pandas have an extra 'thumb' specifically for holding bamboo."
    };

    const fact = facts[animalName] || "This is one of our most amazing residents!";
    
    alert(`Zoo Fact: ${fact}`);
}

function bookNow() {
    const userConfirm = confirm("Would you like to proceed to the secure booking page?");
    
    if (userConfirm) {
        alert("Thank you! Redirecting you to our ticket partner...");
    } else {
        alert("No problem! Feel free to explore more of our animals.");
    }
}

window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = "#143326"; 
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";
    } else {
        header.style.background = "#1b4332"; 
        header.style.boxShadow = "none";
    }
});