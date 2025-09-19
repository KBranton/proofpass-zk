pragma circom 2.0.0;

// Simple age >= 18 circuit
// Input: date of birth (as days since 1970)
// Public Input: today's date (as days since 1970)
// Output: 1 if (today - dob >= 18*365), else 0

template AgeCheck() {
    // Private input (hidden from verifier)
    signal input dob;

    // Public input (verifier knows today's date)
    signal input today;

    // Output: isOver18
    signal output isOver18;

    // Compute difference in days
    signal diff;
    diff <== today - dob;

    // Minimum days for 18 years
    var minDays = 6570;

    // Comparator: diff >= minDays
    component isGE = GreaterEqThan(32);
    isGE.in[0] <== diff;
    isGE.in[1] <== minDays;

    isOver18 <== isGE.out;
}

component main = AgeCheck();
