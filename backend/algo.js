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
function advancedAlgo() {

}

module.exports = {basicAlgo, advancedAlgo}
