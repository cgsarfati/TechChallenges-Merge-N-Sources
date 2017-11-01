'use strict'

module.exports = (logSources, printer) => {
    
}


// CONSIDERATIONS:
    // start w/ 3 log sources and get working sol'n
    // n log sources with n logentries (logentries ALREADY sorted)
    // .pop() to access from oldest to newest entries (chronological)

    // ALGORITHM BRAINSTORM
    // need to find best algorithm that merges k sorted data
        // merge sort? min heap? n-way merge?
    // algorithm dependent on datetime values; figure out how to use 

    // Steps:
    // compare first values of each log entry date.
    // print the min and take it out of future considerations
    // do another .pop to access 2nd logentry from that logsource
    // compare all values again. repeat
    // when all but one logsource entry exhausted, print rest of values
