// Basic Algorithm

function basicAlgo(lectures) {
    let ans = []
    lectures = lectures.sort(function(a, b){return a.startTime - b.startTime});
    for (const lecture of lectures) {
        lecture.lectureId = parseInt(lecture.lectureId);
        if (ans.length == 0) {
            ans.push([lecture]);
        } else {
            ans = checkHallAvailability(ans, lecture);
        }
    }
    return {"result": ans};
}

function checkHallAvailability(ans, lecture) {
    // For all current halls
    for (let i=0; i<ans.length; i++) {
        if (!checkOverlap(lecture, ans[i])) {
            ans[i].push(lecture)
            return ans;
        }
    }
    ans.push([lecture]);
    return ans;
}

function checkOverlap(lecture, hall) {
    let currentStart = lecture.startTime;
    let currentEnd = lecture.endTime;
    // For each lecture in the current hall
    for (const indvLect of hall) {
        if (!(currentEnd < indvLect.startTime || currentStart > indvLect.endTime)) {
            return true;
        }
    }
}

// Advanced Algorithm
function advancedAlgo(lectures, technicians) {
    let sortedAllTimes = sortAllTimes(lectures, technicians);
    let result = {"result": []}
    for (let i=0; i < sortedAllTimes.length - 1; i++) {
        let intvStart = sortedAllTimes[i];
        let intvEnd = sortedAllTimes[i+1];

        let score = 0;
        // check lectures
        for (const lecture of lectures) {
            if (intvStart >= lecture.startTime && intvEnd <= lecture.endTime) {
                score--;
            }
        }
        // check technicians
        for (const technician of technicians) {
            if (intvStart >= technician.startTime && intvEnd <= technician.endTime) {
                score++;
            }
        }
        result.result.push({"surplus": score, "startTime": intvStart, "endTime": intvEnd});
    }
    return result;
}

function sortAllTimes(lectures, technicians) {
    let allTimes = []
    for (const lecture of lectures) {
        allTimes.push(lecture.startTime);
        allTimes.push(lecture.endTime);
    }
    for (const technician of technicians) {
        allTimes.push(technician.startTime);
        allTimes.push(technician.endTime);
    }
    // Sort and remove duplicates
    allTimes = allTimes.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    });
    return allTimes;
}

module.exports = {basicAlgo, advancedAlgo}
