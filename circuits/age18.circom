include "circomlib/circuits/comparators.circom";

template AgeCheck() {
    // Private input (kept hidden)
    signal input dob;

    // Public input (verifier knows today)
    signal input today;

    // Output: 1 if age >= 18, else 0
    signal output isOver18;

    // Compute day difference
    signal diff;
    diff <== today - dob;

    // 18 years ≈ 6570 days (ignoring leap years for now)
    var minDays = 6570;

    // isOver18 = 1 - (minDays < diff ? 1 : 0)
    // i.e., isOver18 = 1 when diff >= minDays
    component lt = LessThan(32);
    lt.in[0] <== minDays;  // a
    lt.in[1] <== diff;     // b

    isOver18 <== 1 - lt.out;
}

component main = AgeCheck();
