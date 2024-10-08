// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
    let total = 0;
    for (let i = 0; i < birdsPerDay.length; i++) {
        total = birdsPerDay[i] + total;
    }
    return total;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
    const birdsPerWeek = [];
    let weekStart = (week - 1) * 7;
    let weekEnd = weekStart + 6;

    for (let i = weekStart; i <= weekEnd; i++) {
        birdsPerWeek.push(birdsPerDay[i]);
    }

    const totalBirds = birdsPerWeek.reduce((acc, curr) => acc + curr, 0);
    return totalBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
    for (let i = 0; i < birdsPerDay.length; i = i + 2) {
      birdsPerDay[i] = birdsPerDay[i] + 1;
    }
    return birdsPerDay;
}
