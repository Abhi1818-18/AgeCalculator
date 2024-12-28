function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();

    // Calculate the initial age in years
    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    // Adjust for negative month difference
    if (ageDays < 0) {
        ageMonths--;
        // Calculate the number of days in the previous month
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate(); // Add the days from the last month
    }

    // Adjust for negative year difference
    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12; // Add 12 months to the current month difference
    }

    return {
        years: ageYears,
        months: ageMonths,
        days: ageDays
    };
}

function showAge() {
    const dobInput = document.getElementById('dob').value;
    const resultElement = document.getElementById('result');
    if (dobInput) {
        const age = calculateAge(dobInput);
        resultElement.innerText = `You are ${age.years} years, ${age.months} months, and ${age.days} days old.`;
        resultElement.style.opacity = 0; // Reset opacity for animation
        resultElement.offsetHeight; // Trigger reflow
        resultElement.style.opacity = 1; // Fade in
    } else {
        resultElement.innerText = 'Please enter a valid date of birth.';
        resultElement.style.opacity = 0; // Reset opacity for animation
        resultElement.offsetHeight; // Trigger reflow
        resultElement.style.opacity = 1; // Fade in
    }
}