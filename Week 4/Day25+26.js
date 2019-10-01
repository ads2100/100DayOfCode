// Write for loop inside it two while loop, the first one use label with break and the second one use label with counting.
firstLabel: for (let i = 0; i < 10; i++) {
    while (i == 8) {
        break firstLabel;
    }

    while (i == 5) {
        continue firstLabel;
    }
    document.write(i + "<br>");
}