pragma circom 2.0.0

// Simple age >= 18 circuit
// Input: date of birth (as days since 1970)
// Public Input: today's date (as days since 1970)
// Output: 1 if (today - dob >= 18*365), else 0

template AgeCheck() {
    // Private input (kept hidden)
    signal input dob;

    // Public input (verifier knows today)
    signal input today;

    // Output: isOver18
    signal output isOver18;

    // Compute difference in days
    signal diff;
    diff <== today - dob;

    // Minimum days = 18 years (ignoring leap years here: 18*365)
    var minDays = 6570;

    // If diff >= minDays, output 1 else 0
    isOver18 <== (diff >= minDays);
}

component main = AgeCheck();
